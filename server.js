const express = require('express');
const { API_ENDPOINTS } = require('./constants/apiEndpoints');
require('dotenv').config();

// Initialize the app
const app = express();

// Middleware and routes setup here
// For example, if you are using JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Ensure the app listens on the port defined by Azure (or fallback to 3000 for local development)
const PORT = process.env.PORT || API_ENDPOINTS.BACKEND_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
