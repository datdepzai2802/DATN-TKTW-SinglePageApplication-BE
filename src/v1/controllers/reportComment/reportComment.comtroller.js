import _ReportComment from "../../models/reportComment.model";
import _Comment from "../../models/comment.model";

export const createReport = async (req, res) => {
  try {
    const { commentId, reporterId, product } = req.body;

    const comment = await _Comment.findById(commentId);
    if (!comment) {
      return res.json({ success: false, message: "Comment not found" });
    }

    const existingReport = await _ReportComment.findOne({ comment: commentId });
    if (existingReport) {
      if (existingReport.reporter.includes(reporterId)) {
        return res.json({
          success: false,
          message: "Already reported by this user",
        });
      }

      existingReport.reporter.push(reporterId);
      await existingReport.save();
      return res.json({
        success: true,
        message: "Report created successfully",
      });
    }

    const report = new _ReportComment({
      comment: commentId,
      product: product,
      reporter: [reporterId],
    });

    await report.save();

    return res.json({ success: true, message: "Report created successfully" });
  } catch (error) {
    return res.json({ success: false, message: "Internal server error" });
  }
};

export const isReportComment = async (req, res) => {
  try {
    const { commentId, reporterId } = req.params;
    const report = await _ReportComment.findOne({
      comment: commentId,
      reporter: reporterId,
    });

    if (report) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
  } catch (error) {
    console.log("error", error);
    return res.json({ success: false, message: "Internal server error" });
  }
};
