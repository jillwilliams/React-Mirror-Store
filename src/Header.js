import React from 'react';
import './Header.css';
import Left from './images/left.png';
import Right from './images/right.png';
import Home from './Home';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        } 
    }

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__title">
                    <Link to="/">
                        <span className="header__home">
                            Home
                        </span>
                    </Link>
                    <span>Product Info</span>
                    <Link to={!user && '/login'}>
                        <span onClick={handleAuthentication} className="header__signin">
                            {user ? 'Sign In' : 'Sign Out'}
                        </span>
                    </Link>
                    <span>Contact Us</span>
                    <Link to="/checkout">
                        <span className="checkout__cart">
                            Cart ({basket?.length})
                        </span>
                    </Link>
                </div>
            </div>
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

export default Header;
