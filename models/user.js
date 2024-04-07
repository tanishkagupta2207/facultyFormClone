import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: { 
        type: String, 
        required: true 
    },
    emailId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    status: {
        type: String,
        required: true,
        enum: ['activated', 'pending']
    }
});

const user = mongoose.model('user', userSchema);

export default user;
