const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer.controller.js');

router.post('/', controller.createCustomer);
router.post('/session', controller.createCustomerSession);
router.get('/:customerId/subscription', controller.getSubscription);

module.exports = router;
