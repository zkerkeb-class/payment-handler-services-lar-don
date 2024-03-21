const { stripeInstance } = require('.');

// Create a new customer
exports.createCustomer = async (req, res) => {
  const { email } = req.body;
  try {
    const customer = await stripeInstance.customers.create({
      email,
    });
    res.json(customer.id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Charge a customer
exports.chargeCustomer = async (req, res) => {
  const { customerId, amount, currency } = req.body;
  try {
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: customerId,
    });
    res.json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
