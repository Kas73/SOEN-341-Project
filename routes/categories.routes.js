const express = require("express");
const router = express.Router();
const Categories = require("../models/categories.model");

router.get("/categories", (req, res, next) => {
    Categories.find({})
      .then((data) => {
        console.log("RECEIVED DATA: " + data)
        res.json(data)
      })
      .catch(next);
  });


  router.post('/categories', (req, res, next) => {
	if (req.body.category_name) {
		Categories.create({
			category_name: req.body.category_name
		})
			.then((data) => res.json(data))
			.catch(next);
	} else {
		res.json({
			error: 'Category is empty',
		});
	}
});

module.exports = router;