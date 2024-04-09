import mongoose from 'mongoose';
const { Schema } = mongoose;

const form9Schema = new Schema({
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
    best: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    phdCertificate: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    pgDocuments: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    ugDocuments: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    hsc: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    ssc: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    paySlip: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    noc: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    postPhdExperience: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    others: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    sign: {
        filename: String,
        contentType: String,
        length: Number,
        uploadDate: { type: Date, default: Date.now },
        data: Buffer
    },
    name1:{
        type: String
    },
    name2:{
        type: String
    },
    name3:{
        type: String
    },
    position1:{
        type: String
    },
    position2:{
        type: String
    },
    position3:{
        type: String
    },
    associationWithRefree1:{
        type: String,
        enum:["Thesis Supervisor","Postdoc Supervisor","Research Collaborator", "Other"]
    },
    associationWithRefree2:{
        type: String,
        enum:["Thesis Supervisor","Postdoc Supervisor","Research Collaborator", "Other"]
    },
    associationWithRefree3:{
        type: String,
        enum:["Thesis Supervisor","Postdoc Supervisor","Research Collaborator", "Other"]
    },
    institution1:{
        type:String
    },
    institution2:{
        type:String
    },
    institution3:{
        type:String
    },
    email1:{
        type:String 
    },
    email2:{
        type:String 
    },
    email3:{
        type:String 
    },
    contact1:{
        type:String
    },
    contact2:{
        type:String
    },
    contact3:{
        type:String
    },
    });

const form9 = mongoose.model('form9', form9Schema);

export default form9;