module.exports = app => {
    const products = require("../controllers/products.controller.js");
    var router = require("express").Router();
    
    // router.post("/new-product", products.create);
    // Retrieve all Products
    router.get("/all-products", products.findAll);
    // Retrieve a single Product with id
    // router.get("/:id", products.findOne);
    // // Update a Product with id
    // router.put("/:id", products.update);
    // // Delete a Product with id
    // router.delete("/:id", products.delete);
    app.use('/product', router);
  };