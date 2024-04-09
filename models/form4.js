import mongoose from 'mongoose';

const { Schema } = mongoose;

const form4Schema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    presentPosition: {
        type: String,
    },
    presentOrganization: {
        type: String
    },
    presentStatus: {
        type: String
    },
    dateOfJoining: {
        type: date
    },
    dateOfLeaving: {
        type: String
    },
    duration: {
        type: String
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
        type: Array
    },
    durationB: {
        type: Array
    },
    positionC: {
        type: Array
    },
    employerC: {
        type: Array
    },
    courseC: {
        type: Array
    },
    ugOrPgC: {
        type: Array
    },
    noOfStudentsC: {
        type: Array
    },
    dateOfJoiningC: {
        type: Array
    },
    dateOfLeavingC: {
        type: Array
    },
    durationC: {
        type: Array
    },
    positionD: {
        type: Array
    },
    innstituteD: {
        type: Array
    },
    supervisorD: {
        type: Array
    },
    dateOfJoiningD: {
        type: Array
    },
    dateOfLeavingD: {
        type: Array
    },
    durationD: {
        type: Array
    },
    organizationE: {
        type: Array
    },
    workDateE: {
        type: Array
    },
    dateOfJoiningE: {
        type: Array
    },
    dateOfLeavingE: {
        type: Array
    },
    durationE: {
        type: Array
    },
    areaOfSpecialization: {
        type: String
    },
    currentAreaOfResearch: {
        type: String
    }
});

const form4 = mongoose.model('form4', form4Schema);

export default form4;
