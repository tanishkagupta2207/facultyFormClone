import form3 from '../models/form3.js';
import form2 from '../models/form2.js';
import { ObjectId } from 'mongodb';

export const fetchForm3 = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const existingUser = await form3.findOne({userId: id});
        const form2User = await form2.findOne({userId: id});
        if (existingUser) {
            const data1 = {
                position: existingUser.positionA,
                employer: existingUser.organizationA,
                status: existingUser.status,
                doj: existingUser.dateOfJoiningA,
                dol: existingUser.dateOfLeavingA,
                duration: existingUser.durationA
            };
            const data2 = {
                position: existingUser.positionB,
                employer: existingUser.organizationB,
                doj: existingUser.dateOfJoiningB,
                dol: existingUser.dateOfLeavingB,
                duration: existingUser.durationB,
            };
            const data3 = {
                position: existingUser.positionC,
                employer: existingUser.employer,
                course: existingUser.courseTaught,
                ugpg: existingUser.ugPg,
                no_students: existingUser.noOfStudents,
                doj: existingUser.dateOfJoiningInstitute,
                dol: existingUser.dateOfLeavingInstitute,
                duration: existingUser.durationC,
            };
            const data4 = {
                position: existingUser.positionD,
                institute: existingUser.instituteD,
                supervisor: existingUser.supervisor,
                doj: existingUser.dateOfJoiningD,
                dol: existingUser.dateOfLeavingD,
                duration: existingUser.durationD,
            };
            const data5 = {
                organization: existingUser.organizationE,
                work: existingUser.workProfile,
                doj: existingUser.dateOfJoiningE,
                dol: existingUser.dateOfLeavingE,
                duration: existingUser.durationE,
            };
            return res.status(200).json({
                status : 200,
                data1,
                data2,
                data3,
                data4,
                data5,
                data: existingUser.firstName,
                data: existingUser.lastName
            }
        );
        }
        else if(form2User){
            const newUser = new form3({
                firstName: form2User.firstName,
                lastName: form2User.lastName,
                userId: form2User.userId,
                positionA: null,
                organizationA: null,
                status: null,
                dateOfJoiningA: null,
                dateOfLeavingA: null,
                durationA: null,
                positionB: [],
                organizationB: [],
                dateOfJoiningB: [],
                dateOfLeavingB: [],
                durationB: [],
                experience: [],
                positionC: [],
                employer: [],
                courseTaught: [],
                ugPg: [],
                noOfStudents: [],
                dateOfJoiningInstitute: [],
                dateOfLeavingInstitute: [],
                durationC: [],
                positionD: [],
                instituteD: [],
                supervisor: [],
                dateOfJoiningD: [],
                dateOfLeavingD: [],
                durationD: [],
                organizationE: [],
                workProfile: [],
                dateOfJoiningE: [],
                dateOfLeavingE: [],
                durationE: [],
                specialization: null,
                research: null
            });
    
            await newUser.save();
            const existingUser2 = await form3.findOne({userId: id});
            if (existingUser2) {
                const data1 = {
                    position: existingUser.positionA,
                    employer: existingUser.organizationA,
                    status: existingUser.status,
                    doj: existingUser.dateOfJoiningA,
                    dol: existingUser.dateOfLeavingA,
                    duration: existingUser.durationA
                };
                const data2 = {
                    position: existingUser.positionB,
                    employer: existingUser.organizationB,
                    doj: existingUser.dateOfJoiningB,
                    dol: existingUser.dateOfLeavingB,
                    duration: existingUser.durationB,
                };
                const data3 = {
                    position: existingUser.positionC,
                    employer: existingUser.employer,
                    course: existingUser.courseTaught,
                    ugpg: existingUser.ugPg,
                    no_students: existingUser.noOfStudents,
                    doj: existingUser.dateOfJoiningInstitute,
                    dol: existingUser.dateOfLeavingInstitute,
                    duration: existingUser.durationC,
                };
                const data4 = {
                    position: existingUser.positionD,
                    institute: existingUser.instituteD,
                    supervisor: existingUser.supervisor,
                    doj: existingUser.dateOfJoiningD,
                    dol: existingUser.dateOfLeavingD,
                    duration: existingUser.durationD,
                };
                const data5 = {
                    organization: existingUser.organizationE,
                    work: existingUser.workProfile,
                    doj: existingUser.dateOfJoiningE,
                    dol: existingUser.dateOfLeavingE,
                    duration: existingUser.durationE,
                };

            return res.status(200).json({
                status : 200,
                data1,
                data2,
                data3,
                data4,
                data5,
                data6 : existingUser2.firstName,
                data7: existingUser2.lastName
            });
        }}
        
        else {
            return res.json({ message: 'Invalid User' });
        }
        }
        catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateForm3 = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const existingUser = await form1.findById(id);
        if (existingUser) {
                const {stream1, department1, nameOfPhDSupervisor1, yearOfJoiningA1, dateOfSuccessfulThesisDefence1, dateOfAward1, titleOfPhDThesisA1, 
                    college2, subjects2, yoj2, yog2, duration2, perce2, rank2, 
                    college3, subjects3, yoj3, yog3, duration3, perce3, rank3, 
                    passingYear4, perce4, rank4, 
                    passingYear5, perce5, rank5, 
                    college6, subjects6, yoj6, yog6, duration6, perce6, rank6
                     } = req.body;
                     
                existingUser.universityA = stream1;
                existingUser.stream = department1;
                existingUser.supervisor = nameOfPhDSupervisor1;
                existingUser.yoj = yearOfJoiningA1;
                existingUser.dod = dateOfSuccessfulThesisDefence1;
                existingUser.doa = dateOfAward1;
                existingUser.title = titleOfPhDThesisA1;
                existingUser.degreeB = college2;
                existingUser.college = subjects2;
                existingUser.subjects = yoj2;
                existingUser.yoj = yog2;
                existingUser.yog = duration2;
                existingUser.duration = perce2;
                existingUser.perce = rank2;
                existingUser.degreeC = college3;
                existingUser.college = subjects3;
                existingUser.subjects = yoj3;
                existingUser.yoj = yog3;
                existingUser.yog = duration3;
                existingUser.duration = perce3;
                existingUser.perce = rank3;
                existingUser.school10 = passingYear4;
                existingUser.passingYear10D = perce4;
                existingUser.percentage10D = rank4;
                existingUser.school12 = passingYear5;
                existingUser.yearOfPassing12D = perce5;
                existingUser.percentage12D = rank5;
                existingUser.degreeE = college6;
                existingUser.universityE = subjects6;
                existingUser.branchE = yoj6;
                existingUser.yearOfCompletionE = yog6;
                existingUser.yearOfCompletionE = duration6;
                existingUser.durationE = perce6;
                existingUser.percentageE = rank6;
                await existingUser.save();
        } else {
            return res.json({ message: 'Invalid User' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};