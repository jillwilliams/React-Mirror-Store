import React, { useState } from 'react';
import './Login.css';
import Header from './images/header.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/')
            } 
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img src={Header} className="login__logo" alt="header" />
            </Link>
            <div className="login__container">

                <h2>Sign In</h2>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="login__input" />

                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="login__input" />
                    
                    <button type="submit" onClick={signIn} className="login__signInButton">
                        Sign In
                    </button>
                    <p className="login_message">
                        By signing in you agree to My Mirror Store's terms of use.
                    </p>
                    <button onClick={register} className="login__register">
                        Create Your Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
