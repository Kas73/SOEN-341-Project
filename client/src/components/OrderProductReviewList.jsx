import React from 'react';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const OrderProductReviewList = ({ products, review }) => {
    const [cookies, setCookie] = useCookies()
    const [reviews, setReviews] = useState([])

    async function getReviews() {
        const response = await axios.get(`/reviews/${cookies.user_name}`);

        if (!response.data) {
            return;
        }

        if(Array.isArray(response.data)) {
            setReviews(response.data)
        }
        else {
            setReviews([response.data])
        }
    }

    useEffect(() => {
		getReviews();
        return
    }, [reviews.length, cookies.user_name])

    async function upvote(name) {
        const reviewItem = reviews.find((item) => item.product_name === name)
        const task = {
            product_name: name,
            user_name: cookies.user_name,
            vote: true
        }

        //Was a review left for the product?
        if(reviewItem) {
            //If we click upvote on an item we have already upvoted, remove the review
            if(reviewItem.vote) {
                await axios.delete(`/reviews/${reviewItem._id}`)
            }
            else {
                await axios.patch("/reviews", task)
            }
        }
        else {
            await axios.post("/reviews", task)
        }

        await getReviews()
    }

    async function downvote(name) {
        const reviewItem = reviews.find((item) => item.product_name === name)

        const task = {
            product_name: name,
            user_name: cookies.user_name,
            vote: false
        }

        //Was a review left for the product?
        if(reviewItem) {
            //If we click downvote on an item we have already downvoted, remove the review
            if(!reviewItem.vote) {
                await axios.delete(`/reviews/${reviewItem._id}`)
            }
            else {
                await axios.patch("/reviews", task)
            }
        }
        else {
            await axios.post("/reviews", task)
        }

        await getReviews()
    }

	return products.map((product) => {
        
		return (
			<li data-testid="order-product-item">
				<strong>
					<p data-testid="order-product-name">{product.product_name}</p>
				</strong>
                <button
					onClick={(e) => upvote(product.product_name)}
					className={
                        reviews && 
                            reviews.find((item) => item.product_name == product.product_name) &&
                            reviews.find((item) => item.product_name == product.product_name).vote ? "btn btn-dark" : "btn btn-light"
                    }
					data-testid="order-upvote-button">
					👍
				</button>
                <button
					onClick={(e) => downvote(product.product_name)}
					className={
                        reviews && 
                            reviews.find((item) => item.product_name == product.product_name) &&
                            !reviews.find((item) => item.product_name == product.product_name).vote ? "btn btn-dark" : "btn btn-light"
                    }
					data-testid="order-downvote-button">
					👎
				</button>
                
                
			</li>
		);
	});
};

export default OrderProductReviewList;
