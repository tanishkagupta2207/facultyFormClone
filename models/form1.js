import mongoose from 'mongoose';

const { Schema } = mongoose;

const form1Schema = new Schema({
    category: {
        type: String
    },
    emailId: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    applicationNumber: {
        type: Number,
        required: true,
    },
    advertisementNumber: {
        type: String
    },
    date: {
        type: String
    },
    postApplied: {
        type: String
    },
    department: {
        type: String
    },
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },
    nationality: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    age: {
        type: Number
    },
    ageDays: {
        type: Number
    },
    gender: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    idProofname: {
        type: String
    },
    idProofImage: {
        type: Buffer
    },
    fatherName: {
        type: String
    },
    personalPhoto: {
        type: Buffer
    },
    correspondenceStreet: {
        type: String
    },
    correspondenceCity: {
        type: String
    },
    correspondenceState: {
        type: String
    },
    correspondenceCountry: {
        type: String
    },
    correspondencePin: {
        type: String
    },
    permanentStreet: {
        type: String
    },
    permanentCity: {
        type: String
    },
    permanentState: {
        type: String
    },
    permanentCountry: {
        type: String
    },
    permanentPin: {
        type: String
    },
    mobile: {
        type: Number
    },
    alternateMobile: {
        type: Number
    },
    alternateEmailId: {
        type: String
    },
    landlineNumber: {
        type: Number
    }
});

const form1 = mongoose.model('form1', form1Schema);

export default form1;
