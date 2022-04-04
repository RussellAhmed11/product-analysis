import React from 'react';
import "../img/t shirt.jpg"
import "./Home.css"
const Home = () => {
    return (
        <div>
            <div className='banner-container'>
                <div className="home-conaiten-left">
                    <h1>hello</h1>
                </div>
                <div className="home-container-right">
                    <img src={require("../img/t-shirt-vert-aventure-col-rond-pey407t1tfct0ne81ogobmigygi0tgib5h3zwzco7c.jpeg")} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Home;