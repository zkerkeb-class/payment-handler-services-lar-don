require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const app = express();
const PORT = process.env.PORT;
const { default: Stripe } = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(cors());
app.use('/payments-api', router);
app.set('stripe', stripe);

app.listen(PORT, () => {
  console.info(`[PAYMENTS HANDLER] Serveur démarré sur le port ${PORT}`);
});
