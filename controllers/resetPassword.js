import User from '../models/user.js';
import { ObjectId } from 'mongodb'; 

const resetPassword = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    const {password} = req.body;
    console.log(password);
    try {
        const existingUser = await User.findById(id);
        if (existingUser) {
            existingUser.password = password;
            await existingUser.save();
            return res.json({ message: 'Password Reset Successfully.'});
        }
        else{
            return res.json({ message: 'Link invalid' });
        }

    } catch (error) {
        console.error('Error reseting password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { resetPassword };
