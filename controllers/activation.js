import User from '../models/user.js';

const activationUser = async (req, res) => {
    const id = req.params.userId;
    console.log(id);
    try {
        const existingUser = await User.findById(id);
        if (existingUser) {
            existingUser.status = 'activated';
            await existingUser.save();
            return res.json({ message: 'Account Activated' });
        } else {
            return res.json({ message: 'Invalid link' });
        }

    } catch (error) {
        console.error('Error activating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { activationUser };
