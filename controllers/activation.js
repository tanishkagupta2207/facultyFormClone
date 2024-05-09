import User from '../models/user.js';
import { ObjectId } from 'mongodb'; 
import form1 from '../models/form1.js';

const activationUser = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const existingUser = await User.findById(id);
        console.log()
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
