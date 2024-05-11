import form4 from '../models/form4.js';
import user from '../models/user.js';
import { ObjectId } from 'mongodb';

export const fetchSubmit = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    console
    try {
        const existingUser = await form4.findOne({userId: id});
        const data = {
            fname: existingUser.firstName,
            lname: existingUser.lastName
        };
        if(existingUser){
            return res.status(200).json({
                status : 200,
                data
            });}        
        else {
            return res.json({ message: 'Invalid User' });
        }
        }
        catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateSubmit = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try{
            const existingUser = await user.findById(id);
            existingUser.formStatus = "Submitted";
                await existingUser.save();
                return res.json({message: 'Successful'});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};