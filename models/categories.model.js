const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    category_name: String
})

const Categories = mongoose.model('categories', CategorySchema);

module.exports = Categories;