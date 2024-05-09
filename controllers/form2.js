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
            const data2 = existingUser.degreeB.map((degree, index) => ({
                degree: degree,
                college: existingUser.universityB[index],
                subjects: existingUser.branchB[index],
                yoj: existingUser.yearOfJoiningB[index],
                yog: existingUser.yearOfCompletionB[index],
                duration: existingUser.durationB[index],
                perce: existingUser.percentageB[index],
                rank: existingUser.divisionB[index],
              }));
              
              const data3 = existingUser.degreeC.map((degree, index) => ({
                degree: degree,
                college: existingUser.universityC[index],
                subjects: existingUser.branchC[index],
                yoj: existingUser.yearOfJoiningC[index],
                yog: existingUser.yearOfCompletionC[index],
                duration: existingUser.durationC[index],
                perce: existingUser.percentageC[index],
                rank: existingUser.divisionC[index],
              }));
              
              const data4 = existingUser.school10.map((school, index) => ({
                school: school,
                passingYear: existingUser.yearOfPassing10D[index],
                perce: existingUser.percentage10D[index],
                rank: existingUser.division10D[index],
              }));
              
              const data5 = existingUser.school12.map((school, index) => ({
                school: school,
                passingYear: existingUser.yearOfPassing12D[index],
                perce: existingUser.percentage12D[index],
                rank: existingUser.division12D[index],
              }));
              
            const data6 = existingUser.degree.map((degree, index) => ({
                degree: degree,
                college: existingUser.universityE[index],
                subjects: existingUser.branchE[index],
                yoj: existingUser.yearOfCompletionE[index],
                yog: existingUser.yearOfJoiningE[index],
                duration: existingUser.durationE[index],
                perce: existingUser.percentageE[index],
                rank: existingUser.divisionE[index]
              }));
            return res.status(200).json({
                status : 200,
                data1,
                data2,
                data3,
                data4,
                data5,
                data6,
                fname: existingUser.firstName,
                lname: existingUser.lastName
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
                degreeB: [null],
                universityB: [null],
                branchB: [null],
                yearOfJoiningB: [null],
                yearOfCompletionB: [null],
                durationB: [null],
                percentageB: [null],
                divisionB: [null],
                degreeC: [null],
                universityC: [null],
                branchC: [null],
                yearOfJoiningC: [null],
                yearOfCompletionC: [null],
                durationC: [null],
                percentageC: [null],
                divisionC: [null],
                school12: [null],
                school10: [null],
                yearOfPassing12D: [null],
                yearOfPassing10D: [null],
                percentage12D: [null],
                percentage10D: [null],
                division12D: [null],
                division10D: [null],
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
                status: 200,
                college: existingUser2.universityA,
                stream: existingUser2.department,
                supervisor: existingUser2.nameOfPhDSupervisor,
                yoj: existingUser2.yearOfJoiningA,
                dod: existingUser2.dateOfSuccessfulThesisDefence,
                doa: existingUser2.dateOfAward,
                title: existingUser2.titleOfPhDThesisA,
            };
            const data2 = existingUser2.degreeB.map((degree, index) => ({
                degree: degree,
                college: existingUser2.universityB[index],
                subjects: existingUser2.branchB[index],
                yoj: existingUser2.yearOfJoiningB[index],
                yog: existingUser2.yearOfCompletionB[index],
                duration: existingUser2.durationB[index],
                perce: existingUser2.percentageB[index],
                rank: existingUser2.divisionB[index],
              }));
              
              const data3 = existingUser2.degreeC.map((degree, index) => ({
                degree: degree,
                college: existingUser2.universityC[index],
                subjects: existingUser2.branchC[index],
                yoj: existingUser2.yearOfJoiningC[index],
                yog: existingUser2.yearOfCompletionC[index],
                duration: existingUser2.durationC[index],
                perce: existingUser2.percentageC[index],
                rank: existingUser2.divisionC[index],
              }));
              
              const data4 = existingUser2.school10.map((school, index) => ({
                school: school,
                passingYear: existingUser2.yearOfPassing10D[index],
                perce: existingUser2.percentage10D[index],
                rank: existingUser2.division10D[index],
              }));
              
              const data5 = existingUser2.school12.map((school, index) => ({
                school: school,
                passingYear: existingUser2.yearOfPassing12D[index],
                perce: existingUser2.percentage12D[index],
                rank: existingUser2.division12D[index],
              }));
              
            const data6 = existingUser2.degreeE.map((degree, index) => ({
                degree: degree,
                college: existingUser2.universityE[index],
                subjects: existingUser2.branchE[index],
                yoj: existingUser2.yearOfCompletionE[index],
                yog: existingUser2.yearOfJoiningE[index],
                duration: existingUser2.durationE[index],
                perce: existingUser2.percentageE[index],
                rank: existingUser2.divisionE[index]
            }));

            return res.status(200).json({
                status : 200,
                data1,
                data2,
                data3,
                data4,
                data5,
                data6,
                fname: existingUser2.firstName,
                lname: existingUser2.lastName
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
        const existingUser = await form1.findOne({userId: id});
        if (existingUser) {
                const {phdDetails, additionalDetails, schoolDetails, ugDetails, pgDetails} = req.body;

                existingUser.universityA = phdDetails.college;
                existingUser.stream = phdDetails.stream;
                existingUser.supervisor = phdDetails.supervisor;
                existingUser.yoj = phdDetails.yoj;
                existingUser.dod = phdDetails.dod;
                existingUser.doa = phdDetails.doa;
                existingUser.title = phdDetails.title;

                const mappedArray = pgDetails.map((element, index) => ({
                    [degreeB[index]]: element.degree,
                    [universityB[index]]: element.college,
                    [branchB[index]]: element.subjects,
                    [yearOfJoiningB[index]]: element.yoj,
                    [yearOfCompletionB[index]]: element.yog,
                    [durationB[index]]: element.duration,
                    [percentageB[index]]: element.perce,
                    [divisionB[index]]: element.rank,
                }));
                const mappedArray2 = ugDetails.map((element, index) => ({
                    [degreeC[index]]: element.degree,
                    [universityC[index]]: element.college,
                    [branchC[index]]: element.subjects,
                    [yearOfJoiningC[index]]: element.yoj,
                    [yearOfCompletionC[index]]: element.yog,
                    [durationC[index]]: element.duration,
                    [percentageC[index]]: element.perce,
                    [divisionC[index]]: element.rank,
                }));
                
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