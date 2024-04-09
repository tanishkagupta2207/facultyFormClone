import mongoose from 'mongoose';

const { Schema } = mongoose;

const form8Schema = new Schema({
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

const form8 = mongoose.model('form8', form8Schema);

export default form8;
