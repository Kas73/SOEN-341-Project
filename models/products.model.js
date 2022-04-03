const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: String,
    product_price: Number,
    description: String,
    seller_name: String,
    product_img: String,
    categories: [{type: String}]
})

const Products = mongoose.model('products', ProductSchema);

module.exports = Products;