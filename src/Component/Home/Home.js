import React from 'react';
import UseHook from '../../UseHook/UseHook';
import "../img/t shirt.jpg"
import "./Home.css"
import "../Reviews/Reviews.css"
import { Line } from 'recharts';
import { Link } from 'react-router-dom';
const Home = () => {
    const [reviews, setreviews] = UseHook() 
    return (
        <div>
             <section>
             <div className='banner-container'>
                <div className="home-conaiten-left">
                    <h1>Welcome to T-shirt Zone</h1>
                    <p>We are ready to give best product with best price.Scoldown and purchese your favourte product.Happy shopping!</p>
                    <button>Buy Now</button>
                </div>
                <div className="home-container-right">
                    <img src={require("../img/t-shirt-vert-aventure-col-rond-pey407t1tfct0ne81ogobmigygi0tgib5h3zwzco7c.jpeg")} alt=""/>
                </div>
            </div>
             </section>
            <section>
                <div className="review-container">
                    <h1>Custom Review(3)</h1>
                    <div className='card-container'>
                    {
                      reviews.slice(0,3).map(review=><div className='card'>
                      <div className='card-img'>
                          <img src={review.img} alt="" />
                      </div>
                      <h3>Name:{review.name}</h3>
                      <p>{review.review}</p>
                      <p><small>{review.rating}</small></p>
                  </div>)  
                    }
                    </div>
                </div>
                <button className='See-more-btn'><Link to="/reviews">See More Reviews</Link></button>
            </section>
        </div>
    );
};

export default Home;