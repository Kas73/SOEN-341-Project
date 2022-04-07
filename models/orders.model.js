const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Carts = require('./carts.model');

const OrderSchema = new Schema({
	order: [{ product_name: String, price: Number, quantity: Number }],
	user_name: String,
	card_number: String,
	cardholder_name: String,
	expiration: String,
	billing_address: String,
	cvv: String,
});

const Orders = mongoose.model('orders', OrderSchema);

module.exports = Orders;
