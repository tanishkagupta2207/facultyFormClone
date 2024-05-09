import form2 from '../models/form2.js';
import { ObjectId } from 'mongodb';

export const fetchForm2 = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const existingUser = await form2.findById(id);
        if (existingUser) {
            return res.status(200).json({
                status: 200,
                college: existingUser.universityA,
                stream: existingUser.department,
                supervisor: existingUser.nameOfPhDSupervisor,
                yoj: existingUser.yearOfJoiningA,
                dod: existingUser.dateOfSuccessfulThesisDefence,
                doa: existingUser.dateOfAward,
                title: existingUser.titleOfPhDThesisA,
            },
            {
                degree: existingUser.degreeB,
                college: existingUser.universityB,
                subjects: existingUser.branchB,
                yoj: existingUser.yearOfJoiningB,
                yog: existingUser.yearOfCompletionB,
                duration: existingUser.durationB,
                perce: existingUser.percentageB,
                rank: existingUser.divisionB,
            },
            {
                degree: existingUser.degreeC,
                college: existingUser.universityC,
                subjects: existingUser.branchC,
                yoj: existingUser.yearOfJoiningC,
                yog: existingUser.yearOfCompletionC,
                duration: existingUser.durationC,
                perce: existingUser.percentageC,
                rank: existingUser.divisionC,
            },
            {
                school: existingUser.school10,
                passingYear: existingUser.yearOfPassing10D,
                perce: existingUser.percentage10D,
                rank: existingUser.division10D
            },
            {
                school: existingUser.school12,
                passingYear: existingUser.yearOfPassing12D,
                perce: existingUser.percentage12D,
                rank: existingUser.division12D
            },
            {
                degree: existingUser.degreeE,
                college: existingUser.universityE,
                subjects: existingUser.branchE,
                yoj: existingUser.yearOfCompletionE,
                yog: existingUser.yearOfCompletionE,
                duration: existingUser.durationE,
                perce: existingUser.percentageE,
                rank: existingUser.divisionE,
            },
            {
                data: existingUser.firstName
            },
            {
                data: existingUser.lastName
            }
        );
        } else {
            return res.json({ message: 'Invalid User' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateForm1 = async (req, res) => {
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