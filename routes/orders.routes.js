const express = require("express");
const router = express.Router();
const Products = require("../models/orders.model");

router.get('/orders', (req, res, next) => {
	Carts.find({})
		.then((data) => {
			console.log('Got order: ' + data);
			res.json(data);
		})
		.catch(next);
});

router.get('/orders/:username', (req, res, next) => {
	console.log(`Getting orders for Username: ${req.params.username}`);
	Carts.findOne({ username: req.params.username })
		.then((data) => {
			console.log('Got orders for ' + req.params.username + ': ' + data);
			res.json(data);
		})
		.catch(next);
});

router.post("/orders", (req, res, next) => {
    if(req.body.order_id && req.body.order && req.body.addresses && req.body.order_status && req.body.username && req.body.payment_method) {
      Products.create({
          order_id: req.body.order_id,
          order: req.body.order,
          addresses: req.body.addresses,
          order_status: req.body.order_status,
          username: req.body.username,
          payment_method: req.body.payment_method})
        .then((data) => res.json(data))
        .catch(next);
    }
    else {
      res.json({
        error: "There are empty fields",
      });
    }
  });

        router.delete("/orders/:order_id", (req, res, next) => {
            Products.findOneAndDelete({ order_id: req.params.order_id })
              .then((data) => res.json(data))
              .catch(next);
          })
          
          module.exports = router;