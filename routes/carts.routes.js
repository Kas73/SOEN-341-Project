const express = require('express');
const router = express.Router();
const Carts = require('../models/carts.model');

// get all carts
router.get('/carts', (req, res, next) => {
	Carts.find({})
		.then((data) => {
			console.log('RECEIVED DATA: ' + data);
			res.json(data);
		})
		.catch(next);
});

router.get('/carts/:user_name', (req, res, next) => {
	console.log(`Username: ${req.params.user_name}, Cart: ${req.params.cart}`);
	Carts.findOne({ user_name: req.params.user_name })
		.then((data) => {
			console.log('RECEIVED DATA: ' + data);
			res.json(data);
		})
		.catch(next);
});

// router.update('/cart/:name', (req, res, next) => {
// 	Cart.findOneAndUpdate({ name: req.params.name })
// 		.then((data) => {
// 			console.log('RECEIVED DATA: ' + data);
// 			res.json(data);
// 		})
// 		.catch(next);
// });

router.post('/carts', (req, res, next) => {
	if (req.body.cart && req.body.user_name) {
		Carts.create({
			user_name: req.body.user_name,
			cart: req.body.cart,
		})
			.then((data) => res.json(data))
			.catch(next);
	} else {
		res.json({
			error: 'Name or price is empty',
		});
	}
});

router.delete('/carts/:user_name', (req, res, next) => {
	Carts.findOneAndDelete({ user_name: req.params.user_name })
		.then((data) => res.json(data))
		.catch(next);
});

module.exports = router;
