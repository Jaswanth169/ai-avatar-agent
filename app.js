const express = require('express');
const cors = require('cors');
const { API_ENDPOINTS } = require('./constants/apiEndpoints');
const chatRoute = require('./routes/chatRoute');  // Import the routes from chatRoute.js

const app = express();

app.use(cors());  // Enable CORS
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies

// Use the routes defined in chatRoute.js
app.use(API_ENDPOINTS.GET_ASSISTANT_RESPONSE, chatRoute);

module.exports = app;
