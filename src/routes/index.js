const express = require('express');
const router = express.Router();

const customersRouter = require('./customer.route');

router.use('/customers', customersRouter);

module.exports = router;
