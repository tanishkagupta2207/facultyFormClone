const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/register');

// Register endpoint
router.post('/', registerUser);

module.exports = router;
