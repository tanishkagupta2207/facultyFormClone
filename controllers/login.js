import User from '../models/user.js';

const loginUser = async (req, res) => {
    const {emailId, password } = req.body;
    console.log(emailId,password);
    try {
        const existingUser = await User.findOne({ "emailId":emailId, "password":password, "status":"activated" });
        if (existingUser) {
            return res.json({ message: 'Logged in successfully', userId: existingUser._id });
        }
        else{
            return res.json({ message: 'Incorrect email-id or password' });
        }

    } catch (error) {
        console.error('Error login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { loginUser };
