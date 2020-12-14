import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();
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
                    <Link to="/products">
                        <span className="header__product">
                            Product Info
                        </span>
                    </Link>
                    <Link to={!user && '/login'}>
                        <span onClick={handleAuthentication} className="header__signin">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </Link>
                    <Link to='/orders'>
                        <span className="header__orders">
                            Orders
                        </span>
                    </Link>
                    <Link to="/contact">
                        <span className="header__contact">
                            Contact Us
                        </span>
                    </Link>
                    <Link to="/checkout">
                        <span className="checkout__cart">
                            Cart ({basket?.length})
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
