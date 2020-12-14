import React from 'react';
import './Hero.css';
import Left from './images/left.png';
import Right from './images/right.png';

function Hero() {
    return (
        <div className="hero">
            <div className="header__image">
                <div className="header__imageLeft">
                    <img src={Left} alt="left" />
                </div>
                <div className="header__imageMiddle">
                    <h1>My Mirror Store</h1>
                </div>
                <div className="header__imageRight">
                    <img src={Right} alt="right" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
