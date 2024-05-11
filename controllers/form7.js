import form7 from '../models/form7.js';
import form4 from '../models/form4.js';
import { ObjectId } from 'mongodb';


export const fetchForm7 = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const existingUser = await form7.findOne({userId: id});
        const form4User = await form4.findOne({userId: id});

        if(existingUser) {
            console.log(existingUser.firstName);
            return res.status(200).json({
                status: 200,
                data1: existingUser.significantResearchContributionFuturePlans,
                data2: existingUser.significantTeachingContributionFuturePlans,
                data3: existingUser.anyOtherRelevantInformation,
                data4: existingUser.professionalService,
                data5: existingUser.listOfJournalPublications,
                data6: existingUser.listOfConferencePublications,
                fname: existingUser.firstName,
                lname: existingUser.lastName
            });
        }
        else if(form4User){
            const newUser = new form7({
                firstName: form4User.firstName,
                lastName: form4User.lastName,
                userId: form4User.userId,
                significantResearchContributionFuturePlans: '',
                significantResearchContributionFuturePlans: '',
                anyOtherRelevantInformation: '',
                professionalService: '',
                listOfJournalPublications: '',
                listOfConferencePublications: ''
            });
            
            await newUser.save();

            const existingUser2 = await form7.find({userId: id});
            return res.status(200).json({
                status: 200,
                data1: existingUser2.significantResearchContributionFuturePlans,
                data2: existingUser2.significantTeachingContributionFuturePlans,
                data3: existingUser2.anyOtherRelevantInformation,
                data4: existingUser2.professionalService,
                data5: existingUser2.listOfJournalPublications,
                data6: existingUser2.listOfConferencePublications,
                fname: existingUser2.firstName,
                lname: existingUser2.lastName
            });
        } 
        else {
            return res.json({ message: 'Invalid User' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateForm7 = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const existingUser = await form7.findOne({userId: id});
        if (existingUser) {
            const {researchStatement, teachingStatement, relIn, profServ, jourDetails, confDetails}= req.body;
                
                existingUser.significantResearchContributionFuturePlans = researchStatement;
                existingUser.significantTeachingContributionFuturePlans = teachingStatement ;
                existingUser.anyOtherRelevantInformation = relIn;
                existingUser.professionalService = profServ;
                existingUser.listOfJournalPublications = jourDetails;
                existingUser.listOfConferencePublications = confDetails;

                await existingUser.save();
                return res.json({message: 'Successful'});
        } else {
            return res.json({ message: 'Invalid User' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};