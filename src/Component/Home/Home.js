import React from 'react';
import "../img/t shirt.jpg"
import "./Home.css"
const Home = () => {
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
                </div>
            </section>
        </div>
    );
};

export default Home;