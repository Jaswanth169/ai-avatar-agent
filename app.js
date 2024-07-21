const express = require('express');
const chatRoute = require('./routes/chatRoute');
const { API_ENDPOINTS } = require('./constants/apiEndpoints');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(API_ENDPOINTS.GET_ASSISTANT_RESPONSE, chatRoute);

module.exports = app;
