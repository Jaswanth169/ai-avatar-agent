const express = require('express');
const cors = require('cors');
require('dotenv').config();
const appRoutes = require('./app');  // Ensure app.js is imported here

const app = express();

app.use(cors());  // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use the routes defined in app.js
app.use(appRoutes);

// Ensure the app listens on the port defined by Azure (or fallback to 3000 for local development)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
