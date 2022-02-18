const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: String,
    product_price: Number,
    quantity_in_stock: Number
})

const Products = mongoose.model('products', ProductSchema);

module.exports = Products;