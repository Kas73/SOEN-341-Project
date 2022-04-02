const express = require('express');
const router = express.Router();
const Users = require('../models/users.model');

router.get('/users', (req, res, next) => {
	Users.find({})
		.then((data) => {
			console.log('RECEIVED DATA: ' + data);
			res.json(data);
		})
		.catch(next);
});

router.get('/users/:user_name', (req, res, next) => {
	console.log(req.params.user_name);
	Users.findOne({ user_name: req.params.user_name })
		.then((data) => {
			console.log('RECEIVED DATA: ' + data);
			res.json(data);
		})
		.catch(next);
});

router.post('/users', (req, res, next) => {
	// console.log(
	// 	`Name: ${req.body.user_name}, price: ${req.body.password}, quantity: ${req.body.email}`
	// );
	if (
		req.body.user_name &&
		req.body.password &&
		req.body.email &&
		req.body.first_name &&
		req.body.last_name &&
		req.body.address &&
		req.body.phone_no
	) {
		Users.create({
			user_name: req.body.user_name,
			password: req.body.password,
			email: req.body.email,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			address: req.body.address,
			phone_no: req.body.phone_no,
			payment_method: req.body.payment_method,
		})
			.then((data) => res.json(data))
			.catch(next);
	} else {
		res.json({
			error: 'Name or price is empty',
		});
	}
});

router.delete('/users/:id', (req, res, next) => {
	Users.findOneAndDelete({ _id: req.params.id })
		.then((data) => res.json(data))
		.catch(next);
});

module.exports = router;
