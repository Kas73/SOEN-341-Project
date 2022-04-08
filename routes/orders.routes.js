const express = require('express');
const Orders = require('../models/orders.model');
const router = express.Router();

router.get('/orders', (req, res, next) => {
	Orders.find({})
		.then((data) => {
			console.log('Got order: ' + data);
			res.json(data);
		})
		.catch(next);
});

router.get('/orders/:user_name', (req, res, next) => {
	console.log(`Getting orders for User_name: ${req.params.user_name}`);
	Orders.find({ user_name: req.params.user_name })
		.then((data) => {
			console.log('Got orders for ' + req.params.user_name + ': ' + data);
			res.json(data);
		})
		.catch(next);
});

router.post('/orders', (req, res, next) => {
	if (
		req.body.order &&
		req.body.user_name &&
		req.body.card_number &&
		req.body.cardholder_name &&
		req.body.expiration &&
		req.body.billing_address &&
		req.body.cvv &&
		req.body.total
	) {
		Orders.create({
			order: req.body.order,
			user_name: req.body.user_name,
			card_number: req.body.card_number,
			cardholder_name: req.body.cardholder_name,
			expiration: req.body.expiration,
			billing_address: req.body.billing_address,
			cvv: req.body.cvv,
			total: req.body.total,
		})
			.then((data) => res.json(data))
			.catch(next);
	} else {
		res.json({
			error: 'There are empty fields',
		});
	}
});

router.patch('/orders/:id', (req, res, next) => {
	console.log(
		`Updating order status for ${req.params.id} with following data: ` +
			JSON.stringify(req.body.cart)
	);
	if (req.body.order_id && req.params.order_status) {
		Orders.findOneAndUpdate(
			{ _id: req.params.id },
			{
				order_status,
			}
		)
			.then((data) => res.json(data))
			.catch(next);
	} else {
		res.json({
			error: 'order_id or order_status is empty',
		});
	}
});

router.delete('/orders/:id', (req, res, next) => {
	Orders.findOneAndDelete({ _id: req.params.id })
		.then((data) => res.json(data))
		.catch(next);
});

module.exports = router;
