const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "booktitle":String,
        "category":String,
        "pubyear":String,
        "authorname":String,
        "disname":String,
        "pubname":String,
        "price":String,
        "edition":String
        
    }
)

let librarymodel = mongoose.model("libraries",schema);
module.exports = {librarymodel}