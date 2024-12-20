const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/dbconfig');
const authRoutes = require('./routes/authroute');

dotenv.config();

// Initialize express app
const app = express();
app.use(express.json()); // For parsing application/json

// Connect to database
connectDB();

// Use auth routes
app.use('/api/auth', authRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
