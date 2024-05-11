import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
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
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['activated', 'pending']
    },
    formStatus: {
        type:String,
        required: true,
        enum: ['Submitted', 'Not Submitted']
    }
});

const user = mongoose.model('user', userSchema);

export default user;
