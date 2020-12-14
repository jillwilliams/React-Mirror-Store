import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Ad from './images/header.png';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import { auth } from './firebase';

function Checkout() {
    const [{ basket, user }] = useStateValue();
    const handleAuthentication = () => {
        if(user) {
        auth.signOut();
        }
    }
    return (
        <div className="checkout">
            <div className="checkout__left">
                <Link to="/">
                    <img src={Ad} className="checkout__ad" alt="ad" />
                </Link>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id} 
                            title={item.title} 
                            image={item.image} 
                            price={item.price} 
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
