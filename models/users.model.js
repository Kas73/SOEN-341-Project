const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	first_name: String,
	last_name: String,
	password: String,
	email: String,
	user_name: String,
	address: String,
	phone_no: String,
	payment_method: [{card_number: String, cardholder_name: String, expiration: String, billing_address: String}],
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
