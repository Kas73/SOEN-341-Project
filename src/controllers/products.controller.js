const db = require("../models")
const Products = db.products;

exports.findAll = (req, res) => {
    console.log("DOING FIND ALL")
    Products.find({})
        .then((data) => {
            console.log("FOUND DATA")
            console.log(data)
            res.send(data);
        })
        .catch(err => {
            console.log("GOT ERROR")
            res.status(500).send({
                message: err.message || "Error occurred while finding Products"
            })
        })
}