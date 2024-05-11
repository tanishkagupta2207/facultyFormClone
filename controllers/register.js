import User from '../models/user.js';
import nodemailer from 'nodemailer';
import validator from 'validator';

const registerUser = async (req, res) => {
    const { firstName, lastName, emailId, category, password } = req.body;
    try {
        if(!firstName || !lastName || !emailId || !category || !password){
            return res.status(400).json({ message: 'Enter all the details!' });
        }

        if (!validator.isEmail(emailId)) {
            res.status(400).json({ error: 'Enter valid email address.' });
        }

        const existingUser = await User.findOne({ emailId });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this emailId' });
        }
        
        const newUser = new User({ firstName, lastName, emailId, password, category, status:'pending', formStatus: 'Not Sumbitted'});

        await newUser.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'cloneform294@gmail.com',
                pass: 'drwz ydyr qsew vvmq'
            }
        });

        const mailOptions = {
            from: 'cloneform294@gmail.com',
            to: emailId,
            subject: 'Account Activation',
            text: `Please activate your account by clicking on the following link: http://localhost:5000/api/activate/${newUser._id}`
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: 'User registered. Activation email sent.' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { registerUser };
