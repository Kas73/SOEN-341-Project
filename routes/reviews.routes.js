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
    Reviews.findOne({user_name:req.params.user_name})
        .then((data) =>{
            console.log('Got orders for '+req.params.user_name +': '+data);
            res.json(data);
        })
        .catch(next);
    });

    router.get('/reviews/:product_name',(req,res,next)=>{
        console.log(`Getting reviews for product_name: ${req.params.product_name}`);
        Reviews.findOne({user_name:req.params.product_name})
            .then((data) =>{
                console.log('Got orders for '+req.params.product_name +': '+data);
                res.json(data);
            })
            .catch(next);
        });

router.post("/reviews", (req,res,next)=>{
    if(req.body.product_name && req.body.user_name && req.body.vote){
        Reviews.create({
            product_name: req.body.product_namem,
            user_name: req.body.user_name,
            vote:req.body.vote})
            .then((data)=>res.json(data))
            .catch(next);
        }
    else{
        res.json({
            error: "There are empty fields",
            });
    }
});

router.patch('/reviews/:id',(req,res,next)=>{
    console.log(`Updating review for ${req.params.id} with following data:`+JSON.stringify(req.body.vote))
    if(req.body.order_id && req.params.vote){
        Reviews.findOneAndUpdate({_id: req.params.id},{
            vote
        })
        .then((data)=>res.json(data))
        .catch(next);
    } else{
        res.json({
            error: '_id or vote is empty',
        });
    }
});

router.delete('/reviews/:id',(req,res,next)=>{
    Reviews.findOneAndDelete({_id:req.params.id})
    .then((data)=>res.json(data))
    .catch(next);
});

        module.exports=router;