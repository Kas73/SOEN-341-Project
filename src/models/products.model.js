import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    price: Number
})

const Products = mongoose.model('Products', productSchema);