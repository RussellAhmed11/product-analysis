import React from 'react';
import UseHook from '../../UseHook/UseHook';
import "./Reviews.css"

const Reviews = () => {
    const [reviews, setreviews] = UseHook()
    console.log(reviews)
    return (
        <div className='card-container'>
            {
                reviews.map(review =>
                    <div className='card'>
                        <div className='card-img'>
                            <img src={review.img} alt="" />
                        </div>
                        <h3>Name:{review.name}</h3>
                        <p>{review.review}</p>
                        <p><small>{review.rating}</small></p>
                    </div>)
            }
        </div>
    );
};

export default Reviews;