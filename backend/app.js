const express = require('express');
const userRoutes = require('./src/routes/userRoutes'); // Updated path
const weatherRoutes = require('./src/routes/weatherRoutes'); // Updated path
const errorHandler = require('./src/utils/errorHandler'); // Updated path

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', weatherRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;