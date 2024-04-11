// Create a new payment intent
exports.createPaymentIntent = async (req, res) => {
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
};

// Confirm a payment intent
exports.confirmPaymentIntent = async (req, res) => {
  const { paymentIntentId } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
    res.json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
