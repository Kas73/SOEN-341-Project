const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
	cart: [{ product_name: String, price: Number, quantity: Number }],
	user_name: String,
});

const Cart = mongoose.model('carts', CartSchema);

module.exports = Cart;
