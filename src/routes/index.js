const express = require('express');
const router = express.Router();

const customersRouter = require('./customer.route');
const paymentIntentRouter = require('./payment-intent.route');

router.use('/customers', customersRouter);
router.use('/payment-intents', paymentIntentRouter);

module.exports = router;
