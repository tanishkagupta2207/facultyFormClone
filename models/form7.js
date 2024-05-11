import mongoose from 'mongoose';

const { Schema } = mongoose;

const form7Schema = new Schema({
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
    significantResearchContributionFuturePlans: {
        type: String
    },
    significantTeachingContributionFuturePlans: {
        type: String
    },
    anyOtherRelevantInformation: {
        type: String
    },
    professionalService: {
        type: String
    },
    listOfJournalPublications: {
        type: String
    },
    listOfConferencePublications: {
        type: String
    }
});

const form7 = mongoose.model('form7', form7Schema);

export default form7;
