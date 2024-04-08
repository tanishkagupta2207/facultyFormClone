import User from '../models/user.js';
import nodemailer from 'nodemailer';

const resetPassword = async (req, res) => {
    const {emailId} = req.body;
    try {
        if(!emailId){
            return res.status(400).json({ message: 'Enter mail_id!' });
        }
        const existingUser = await User.findOne({ "emailId":emailId, "status":"activated" });
        if (existingUser) {
        
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
            subject: 'Password Reset',
            text: `Please activate your account by clicking on the following link: http://localhost:3000/resetPassword/${existingUser._id}`
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: 'Password reset link sent on mail_id' });
    }
    else{
        return res.json({ message: 'Email-id not registered' });
    }
    } catch (error) {
        console.error('Error processing password reset:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { resetPassword};
