require('dotenv').config();
const { default: Stripe } = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.stripeInstance = stripe;
