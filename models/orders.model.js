const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Carts = require('./carts.model');

const OrderSchema = new Schema({
    order: [{ product_name: String, price: Number, quantity: Number }], 
    addresses: [{address: String}],
    order_status:Number, //1: open 2:closed 3:Cancelled
    username: String,
    payment_method: {card_number: String, cardholder_name: String, expiration: String, billing_address: String}
});

const Orders = mongoose.model('orders',OrderSchema);

module.exports = Orders;