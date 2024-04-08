import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import registerRoute from './routes/registerRoute.js';
import loginRoute from './routes/loginRoute.js';
import activateRoute from './routes/activationRoute.js';
import forgetPasswordRoute from './routes/forgetPasswordRoute.js';
import resetPasswordRoute from './routes/resetPasswordRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017';

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

// Register routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/activate', activateRoute);
app.use('/api/forgetPassword', forgetPasswordRoute)
app.use('/api/resetPassword', resetPasswordRoute)
// Connect to MongoDB and start the server
mongoose.connect(MONGODB_URI, { dbName: "facultyForm" })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
