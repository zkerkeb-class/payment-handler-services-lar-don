const express = require('express');
const bodyParser = require('body-parser');
const { default: Stripe } = require('stripe');
require('dotenv').config();
const cors = require('cors');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log('Hello World');
  res.send('Hello World');
});

// Create a new customer
app.post('/create-customer', async (req, res) => {
  const { email } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: email,
    });
    console.log('Customer created', email);
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new payment intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
    });
    res.json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Confirm a payment intent
app.post('/confirm-payment-intent', async (req, res) => {
  const { paymentIntentId } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
    res.json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Charge a customer
app.post('/charge-customer', async (req, res) => {
  const { customerId, amount, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: customerId,
    });
    res.json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
