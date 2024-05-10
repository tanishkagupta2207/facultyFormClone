import mongoose from 'mongoose';
const { Schema } = mongoose;

const form4Schema = new Schema({
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
    numberOfInternationalJournalPapers: { 
        type: Number
    },
    numberOfNationalJournalPapers: { 
        type: Number
    },
    numberOfInternationalConferencePapers: { 
        type: Number
    },
    numberOfNationalConferencePapers: { 
        type: Number
    },
    numberOfPatents: { 
        type: Number
    },
    numberOfBooks: { 
        type: Number
    },
    numberOfBookChapters: { 
        type: Number
    },
    author: { 
        type: Array
    },
    title: { 
        type: Array
    },
    nameOfJournal: { 
        type: Array 
    },
    yearVolPage: {
        type: Array
    },
    impactFactor: { 
        type: Array
    },
    doi: { 
        type: Array
    },
    status: { 
        type: Array
    },
    Inventor:{
        type: Array
    },
    titleOfPatent:{
        type: Array
    },
    countryOfPatent:{
        type: Array
    },
    patentNumber:{
        type: Array
    },
    dateOfFilling:{
        type: Array
    },
    dateOfPublished:{
        type: Array
    },
    statusA:{
        type: Array
    },
    authorB:{
        type: Array
    },
    titleB:{
        type: Array
    },
    yearOfPublicationB:{
        type: Array
    },
    isbnB:{
        type: Array
    },
    authorC:{
        type: Array
    },
    titleC:{
        type: Array
    },
    yearOfPublicationC:{
        type: Array
    },
    isbnC:{
        type: Array
    },
    url:{
        type: String
    }
});

const form4 = mongoose.model('form4', form4Schema);

export default form4;