const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer.controller.js');

router.post('/', controller.createCustomer);
router.post('/charge', controller.chargeCustomer);

module.exports = router;
