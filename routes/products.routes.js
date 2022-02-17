const express = require("express");
const router = express.Router();
const Products = require("../models/products.model");

router.get("/products", (req, res, next) => {
  Products.find({})
    .then((data) => {
      console.log("RECEIVED DATA: " + data)
      res.json(data)
    })
    .catch(next);
});

router.post("/products", (req, res, next) => {
  console.log(`Name: ${req.body.product_name}, price: ${req.body.product_price}, quantity: ${req.body.quantity_in_stock}`)
  if(req.body.product_name && req.body.product_price && req.body.quantity_in_stock) {
    Products.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        quantity_in_stock: req.body.quantity_in_stock})
      .then((data) => res.json(data))
      .catch(next);
  }
  else {
    res.json({
      error: "Name or price is empty",
    });
  }
});

router.delete("/products/:id", (req, res, next) => {
  Products.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
})

module.exports = router;