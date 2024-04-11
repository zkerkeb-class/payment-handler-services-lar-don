// Create a new customer
exports.createCustomer = async (req, res) => {
  const { email } = req.body;
  const stripe = req.app.get('stripe');

  try {
    const customer = await stripe.customers.create({
      email,
    });
    res.json(customer.id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCustomerSession = async (req, res) => {
  const stripe = req.app.get('stripe');

  try {
    const customerSession = await stripe.customerSessions.create({
      customer: req.body.stripeId,
      components: {
        pricing_table: {
          enabled: true,
        },
      },
    });

    res.json(customerSession.client_secret);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
