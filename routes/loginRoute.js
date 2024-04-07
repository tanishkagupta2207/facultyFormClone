import express from 'express';
const router = express.Router();

// Register endpoint handler
router.post('/', (req, res) => {
    // Handle registration logic
    res.send('login route works!');
});

export default router; // Exporting the router as the default export