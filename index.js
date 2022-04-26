const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');

const app = express();

const PORT = process.env.PORT || 4000;
require('dotenv').config();

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
