import mongoose from 'mongoose';

const { Schema } = mongoose;

const form2Schema = new Schema({
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
    universityA: { 
        type: String 
    },
    department: { 
        type: String
    },
    nameOfPhDSupervisor: { 
        type: String
    },
    yearOfJoiningA: { 
        type: String
    },
    dateOfSuccessfulThesisDefence: { 
        type: Date
    },
    dateOfAward: { 
        type: Date,  
    },
    titleOfPhDThesisA: {
        type: String,
    },
    degreeB: {
        type: String,
    },
    universityB: {
        type: String,
    },
    branchB: {
        type: String,
    },
    yearOfJoiningB: {
        type: String,
    },
    yearOfCompletionB: {
        type: String,
    },
    durationB: {
        type: String,
    },
    percentageB: {
        type: String,
    },
    divisionB: {
        type: String,
    },
    degreeC: {
        type: String,
    },
    universityC: {
        type: String,
    },
    branchC: {
        type: String,
    },
    yearOfJoiningC: {
        type: String,
    },
    yearOfCompletionC: {
        type: String,
    },
    durationC: {
        type: String,
    },
    percentageC: {
        type: String,
    },
    divisionC: {
        type: String,
    },
    school12: {
        type: String,
    },
    school10: {
        type: String,
    },
    yearOfPassing12D: {
        type: String,
    },
    yearOfPassing10D: {
        type: String,
    },
    percentage12D: {
        type: String,
    },
    percentage10D: {
        type: String,
    },
    division12D: {
        type: String,
    },
    division10D: {
        type: String,
    },
    degreeE: {
        type: Array,
    },
    universityE: {
        type: Array,
    },
    branchE: {
        type: Array,
    },
    yearOfJoiningE: {
        type: Array,
    },
    yearOfCompletionE: {
        type: Array,
    },
    durationE: {
        type: Array,
    },
    percentageE: {
        type: Array,
    },
    divisionE: {
        type: Array,
    }
});

const form2 = mongoose.model('form2', form2Schema);

export default form2;
