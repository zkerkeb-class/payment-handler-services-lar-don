require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use('/payments-api', router);

app.listen(PORT, () => {
  console.log(`[PAYMENTS HANDLER] Serveur démarré sur le port ${PORT}`);
});
