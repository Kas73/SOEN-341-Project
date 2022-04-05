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

router.get("/products/:id", (req, res, next) => {
  Products.findOne({ _id: req.params.id})
    .then((data) => {
      console.log("RECEIVED DATA: " + data)
      res.json(data)
    })
    .catch(next);
});

router.get("/products-search/:query", (req, res, next) => {
  Products.find({ product_name: req.params.query})
    .then((data) => {
      console.log("RECEIVED DATA: " + data)
      res.json(data)
    })
    .catch(next);
});

router.post("/products", (req, res, next) => {
  if(req.body.product_name && req.body.product_price && req.body.description && req.body.seller_name && req.body.product_img && req.body.categories) {
    Products.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        description: req.body.description,
        seller_name: req.body.seller_name,
        product_img: req.body.product_img,
        categories: req.body.categories})
      .then((data) => res.json(data))
      .catch(next);
  }
  else {
    res.json({
      error: "Name, price, description, img, or category are empty",
    });
  }
});


router.delete("/products/:id", (req, res, next) => {
  Products.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
})

module.exports = router;