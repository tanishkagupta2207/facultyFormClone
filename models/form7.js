import mongoose from 'mongoose';

const { Schema } = mongoose;

const form7Schema = new Schema({
    nameA: {
        type: Array
    },
    titleA: {
        type: Array
    },
    roleA: {
        type: Array
    },
    statusA: {
        type: Array
    },
    sinceOrCompletedA: {
        type: Array
    },
    nameB: {
        type: Array
    },
    titleB: {
        type: Array
    },
    roleB: {
        type: Array
    },
    statusB: {
        type: Array
    },
    sinceOrCompletedB: {
        type: Array
    },
    nameC: {
        type: Array
    },
    titleC: {
        type: Array
    },
    roleC: {
        type: Array
    },
    statusC: {
        type: Array
    },
    sinceOrCompletedC: {
        type: Array
    },
});

const form7 = mongoose.model('form7', form7Schema);

export default form7;
