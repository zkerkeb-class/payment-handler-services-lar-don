const express = require('express');
const router = express.Router();
const controller = require('../controllers/payment-intent.controller.js');

router.post('/create-payment-intent', controller.createPaymentIntent);
router.post('/confirm-payment-intent', controller.confirmPaymentIntent);

module.exports = router;
