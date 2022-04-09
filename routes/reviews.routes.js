const express = require("express");
const Reviews = require("../models/reviews.model");
const router = express.Router();

router.get('/reviews',(req,res,next)=>{
Reviews.find({})
    .then((data)=>{
        console.log('Got review: '+data);
        res.json(data);
    })
    .catch(next);
});

router.get('/reviews/:user_name',(req,res,next)=>{
    console.log(`Getting reviews for User_name: ${req.params.user_name}`);
    Reviews.find({user_name:req.params.user_name})
        .then((data) =>{
            res.json(data);
        })
        .catch(next);
    });

router.get('/reviews-by-product/:product_name',(req,res,next)=>{
    console.log(`Getting reviews for product_name: ${req.params.product_name}`);
    Reviews.find({product_name:req.params.product_name})
        .then((data) =>{
            console.log('Got reviews for '+req.params.product_name +': '+data);
            res.json(data);
        })
        .catch(next);
    });

router.post("/reviews", (req,res,next)=>{
    //console.log(req.body)
    if(req.body.product_name && req.body.user_name && req.body.vote){
        Reviews.create({
            product_name: req.body.product_name,
            user_name: req.body.user_name,
            vote:req.body.vote})
            .then((data)=>res.json(data))
            .catch(next);
        }
    else {
        res.json({
            error: "There are empty fields",
            });
    }
});

router.patch('/reviews',(req,res,next)=>{
    console.log(`Updating review for ${req.body.product_name}, for user ${req.body.user_name} with following data: ${req.body.vote}`)
    if(req.body.user_name && req.body.product_name){
        Reviews.findOneAndUpdate({product_name: req.body.product_name, user_name: req.body.user_name}, {
            vote: req.body.vote
        })
        .then((data)=>{
            res.json(data)
        })
        .catch(next);
    }
    else {
        res.json({
            error: '_id or vote is empty',
        });
    }
});

router.delete('/reviews/:id',(req,res,next)=>{
    console.log(`Deleting review for ${req.params.id}`)
    Reviews.findOneAndDelete({
        _id: req.params.id
    })
    .then((data)=>res.json(data))
    .catch(next);
});

module.exports=router;