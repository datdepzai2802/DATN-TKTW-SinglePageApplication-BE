import _Product from "../../models/product.model";
import { badreq } from "../../responses/responsesBasic";
const Search = {
  megaSearch: async (req, res) => {
    const data = { name: "", price: "", author: "" };
    data.name = req.body.name;
    data.price = req.body.price;
    data.author = req.body.author;

    if (!data.name || !data.price || !data.author) {
      return badreq((mesage = "Data Can not found!"));
    }
    const res = await _Product();
  },
};

export default Search;
