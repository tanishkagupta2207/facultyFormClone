import mongoose from 'mongoose';

const { Schema } = mongoose;

const form6Schema = new Schema({
    society9: {
        type: Array
    },
    membershipStatus9: {
        type: Array
    },
    typeOfTraining10: {
        type: Array
    },
    organization10: {
        type: Array
    },
    year10: {
        type: Array
    },
    duration10: {
        type: Array
    },
    awardName11: {
        type: Array
    },
    awardBy11: {
        type: Array
    },
    year11: {
        type: Array
    },
    agency12A: {
        type: Array
    },
    projectTitle12A: {
        type: Array
    },
    amount12A: {
        type: Array
    },
    period12A: {
        type: Array
    },
    role12A: {
        type: Array
    },
    status12A: {
        type: Array
    },
    organization12B: {
        type: Array
    },
    projectTitle12B: {
        type: Array
    },
    amount12B: {
        type: Array
    },
    period12B: {
        type: Array
    },
    role12B: {
        type: Array
    },
    status12B: {
        type: Array
    }
});

const form6 = mongoose.model('form6', form6Schema);

export default form6;
