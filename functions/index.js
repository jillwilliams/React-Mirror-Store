const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HrznGKw6ktmAtppm4TYhGviN54f80bcWoUxdPP3ZtBSXRkV5dKjyjwLhYuS1CmacxawVCTpOaCngYjWBX9n7Izd00A5lyllwW')
// API
// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get('/', (request, response) => response.status(200).send("Hello World!"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// listen command 
exports.api = functions.https.onRequest(app);

//  http://localhost:5001/clone-ccc0d/us-central1/api


