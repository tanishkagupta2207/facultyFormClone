import mongoose from 'mongoose';

const { Schema } = mongoose;

const details = new Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    universityA: { 
        type: String 
    },
    departmentA: { 
        type: String
    },
    nameOfPhDSupervisorA: { 
        type: String
    },
    yearOfJoiningA: { 
        type: String
    },
    dateOfSuccessfulThesisDefenceA: { 
        type: Date
    },
    dateOfAwardA: { 
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
    school12D: {
        type: String,
    },
    school10D: {
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
    },
});

const form2 = mongoose.model('form2', details);

export default form2;
