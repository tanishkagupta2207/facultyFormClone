import form2 from '../models/form2.js';
import form1 from '../models/form1.js';
import { ObjectId } from 'mongodb';

export const fetchForm2 = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const existingUser = await form2.findOne({userId: id});
        const form1User = await form1.findOne({userId: id});
        if (existingUser) {
            const data1 = {
                college: existingUser.universityA,
                stream: existingUser.department,
                supervisor: existingUser.nameOfPhDSupervisor,
                yoj: existingUser.yearOfJoiningA,
                dod: existingUser.dateOfSuccessfulThesisDefence,
                doa: existingUser.dateOfAward,
                title: existingUser.titleOfPhDThesisA,
            };
            const data2 = {
                degree: existingUser.degreeB,
                college: existingUser.universityB,
                subjects: existingUser.branchB,
                yoj: existingUser.yearOfJoiningB,
                yog: existingUser.yearOfCompletionB,
                duration: existingUser.durationB,
                perce: existingUser.percentageB,
                rank: existingUser.divisionB,
            };
            const data3 = {
                degree: existingUser.degreeC,
                college: existingUser.universityC,
                subjects: existingUser.branchC,
                yoj: existingUser.yearOfJoiningC,
                yog: existingUser.yearOfCompletionC,
                duration: existingUser.durationC,
                perce: existingUser.percentageC,
                rank: existingUser.divisionC
            };
            const data4 = {
                    school: existingUser.school10,
                    passingYear: existingUser.yearOfPassing10D,
                    perce: existingUser.percentage10D,
                    rank: existingUser.division10D
            };
            const data5 = {
                    school: existingUser.school12,
                    passingYear: existingUser.yearOfPassing12D,
                    perce: existingUser.percentage12D,
                    rank: existingUser.division12D
            };
            const data6 = {
                degree: existingUser.degreeE,
                college: existingUser.universityE,
                subjects: existingUser.branchE,
                yoj: existingUser.yearOfCompletionE,
                yog: existingUser.yearOfCompletionE,
                duration: existingUser.durationE,
                perce: existingUser.percentageE,
                rank: existingUser.divisionE
            };
            return res.status(200).json({
                status : 200,
                data1,
                data2,
                data3,
                data4,
                data5,
                data6,
                data: existingUser.firstName,
                data: existingUser.lastName
            }
        );
        }
        else if(form1User){
            const newUser = new form2({
                firstName: form1User.firstName,
                lastName: form1User.lastName,
                userId: form1User.userId,
                universityA: null,
                department: null,
                nameOfPhDSupervisor: null,
                yearOfJoiningA: null,
                dateOfSuccessfulThesisDefence: null,
                dateOfAward: null,
                titleOfPhDThesisA: null,
                degreeB: null,
                universityB: null,
                branchB: null,
                yearOfJoiningB: null,
                yearOfCompletionB: null,
                durationB: null,
                percentageB: null,
                divisionB: null,
                degreeC: null,
                universityC: null,
                branchC: null,
                yearOfJoiningC: null,
                yearOfCompletionC: null,
                durationC: null,
                percentageC: null,
                divisionC: null,
                school12: null,
                school10: null,
                yearOfPassing12D: null,
                yearOfPassing10D: null,
                percentage12D: null,
                percentage10D: null,
                division12D: null,
                division10D: null,
                degreeE: [],
                universityE: [],
                branchE: [],
                yearOfJoiningE: [],
                yearOfCompletionE: [],
                durationE: [],
                percentageE: [],
                divisionE: []
            });
            await newUser.save();
            const existingUser2 = await form2.findOne({userId: id});
            if (existingUser2) {
                const data1 = {
                college: existingUser2.universityA,
                stream: existingUser2.department,
                supervisor: existingUser2.nameOfPhDSupervisor,
                yoj: existingUser2.yearOfJoiningA,
                dod: existingUser2.dateOfSuccessfulThesisDefence,
                doa: existingUser2.dateOfAward,
                title: existingUser2.titleOfPhDThesisA,
            };
            const data2 = {
                degree: existingUser2.degreeB,
                college: existingUser2.universityB,
                subjects: existingUser2.branchB,
                yoj: existingUser2.yearOfJoiningB,
                yog: existingUser2.yearOfCompletionB,
                duration: existingUser2.durationB,
                perce: existingUser2.percentageB,
                rank: existingUser2.divisionB,
            };
            const data3 = {
                degree: existingUser2.degreeC,
                college: existingUser2.universityC,
                subjects: existingUser2.branchC,
                yoj: existingUser2.yearOfJoiningC,
                yog: existingUser2.yearOfCompletionC,
                duration: existingUser2.durationC,
                perce: existingUser2.percentageC,
                rank: existingUser2.divisionC
            };
            const data4 = {
                    school: existingUser2.school10,
                    passingYear: existingUser2.yearOfPassing10D,
                    perce: existingUser2.percentage10D,
                    rank: existingUser2.division10D
            };
            const data5 = {
                    school: existingUser2.school12,
                    passingYear: existingUser2.yearOfPassing12D,
                    perce: existingUser2.percentage12D,
                    rank: existingUser2.division12D
            };
            const data6 = {
                degree: existingUser2.degreeE,
                college: existingUser2.universityE,
                subjects: existingUser2.branchE,
                yoj: existingUser2.yearOfCompletionE,
                yog: existingUser2.yearOfCompletionE,
                duration: existingUser2.durationE,
                perce: existingUser2.percentageE,
                rank: existingUser2.divisionE
            };
            return res.status(200).json({
                status : 200,
                data1,
                data2,
                data3,
                data4,
                data5,
                data6,
                data: existingUser2.firstName,
                data: existingUser2.lastName
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

export const updateForm2 = async (req, res) => {
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