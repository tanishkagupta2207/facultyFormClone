import mongoose from 'mongoose';
const { Schema } = mongoose;

const form3Schema = new Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    positionA: { 
        type: String 
    },
    organizationA: { 
        type: String
    },
    status: { 
        type: String
    },
    dateOfJoiningA: { 
        type: Date
    },
    dateOfLeavingA: { 
        type: Date,  
    },
    durationA: {
        type: String,
    },
    positionB: { 
        type: Array
    },
    organizationB: { 
        type: Array
    },
    dateOfJoiningB: { 
        type: Array
    },
    dateOfLeavingB: { 
        type: Array,  
    },
    durationB: {
        type: Array,
    },
    experience:
    {
        type: String,
        enum: ["yes", "no"]
    },
    positionC: { 
        type: Array
    },
    employer: { 
        type: Array
    },
    courseTaught: { 
        type: Array
    },
    ugPg:
    {
        type: String,
        enum: ["UG", "PG"]
    },
    noOfStudents: { 
        type: Array,  
    },
    dateOfJoiningInstitute: { 
        type: Array
    },
    dateOfLeavingInstitute: { 
        type: Array,  
    },
    durationC: {
        type: Array,
    },
    positionD: { 
        type: Array
    },
    instituteD: { 
        type: Array
    },
    supervisor: { 
        type: Array
    },
    dateOfJoiningD: { 
        type: Array
    },
    dateOfLeavingD: { 
        type: Array,  
    },
    durationD: {
        type: Array,
    },
    organizationE: { 
        type: Array
    },
    workProfile: { 
        type: Array
    },
    dateOfJoiningE: { 
        type: Array
    },
    dateOfLeavingE: { 
        type: Array,  
    },
    durationE: {
        type: Array,
    },
    specialization:{
        type: String
    },
    research:{
        type: String
    }
});

const form3 = mongoose.model('form3', form3Schema);

export default form3;