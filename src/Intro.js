import React from 'react';
import Home from './Home';
import './Intro.css';

function Intro() {
    return (
        <div className="intro">
            <div className="header__text">
                <div className="header__introText">
                    <p>Welcome to My Mirror Store! We make hand-crafted custom mirrors. Each mirror is tailor-made to each person's request. Below you will see mirrors available for purchase, but we can also make almost any design you want!</p>
                </div>
            </div>
            <div className="header__products">
                <span>Products</span>
            </div>
            <div>
                <Home />
            </div>
        </div>
    );
}

export default Intro;
