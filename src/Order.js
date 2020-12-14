import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';


function Order({ order }) {
    return (
        <div className="order">
            <h3>Order Summary</h3>
            <p>
                {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
            </p>
            <p className="order__id">
                <small>Order ID: {order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct 
                    id={item.id} 
                    title={item.title} 
                    image={item.image} 
                    price={item.price} 
                    hideButton
                />
            ))}
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <h3 className="order__total">
                            Order Total: {value}
                        </h3>
                        <span>Please Print this page for your records.
                        </span>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} 
            />
        </div>
    );
}

export default Order;
