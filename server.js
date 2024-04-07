// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection string (replace with your actual MongoDB URL)
const MONGODB_URI = 'mongodb://localhost:27017/facultyForm';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const db = mongoose.connection;

// Check MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware for parsing JSON data
app.use(express.json());

// Routes
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');

// Use routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
