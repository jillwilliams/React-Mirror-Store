import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Intro from './Intro';
import Hero from './Hero';
import Products from './Products';
import Contact from './Contact';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

function App() {
    const promise = loadStripe('');
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log("the user is", authUser);
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/contact">
                        <Header />
                        <Contact />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Hero />
                        <Intro />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
