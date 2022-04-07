const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    product_name: String,
    user_name:String,
    vote: Boolean, //true=upvote false=downvote
});

const Reviews= mongoose.model('reviews',ReviewSchema);

module.exports = Reviews;