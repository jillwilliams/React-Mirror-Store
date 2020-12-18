const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('')
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


