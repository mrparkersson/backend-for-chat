const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');

const app = express();

const PORT = process.env.PORT || 4000;
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = require('twilio')(accountSid, authToken);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
