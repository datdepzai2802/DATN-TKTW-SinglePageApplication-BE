import _Product from "../../models/product.model";

const Search = {
  megaSearch: (req, res) => {
    const data = req.body;
    if (!data) {
      return res.status(400).json({
        mesage: "Can't find data",
      });
    }
  },
};

export default Search;
