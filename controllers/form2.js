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
              
              const data4 = existingUser.schoolD.map((school, index) => ({
                school: school,
                passingYear: existingUser.yearOfPassingD[index],
                perce: existingUser.percentageD[index],
                rank: existingUser.divisionD[index],
              }));
              
            const data5 = existingUser.degreeE.map((degree, index) => ({
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
                schoolD: [null,null],
                yearOfPassingD: [null,null],
                percentageD: [null,null],
                divisionD: [null,null],
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
              
            const data4 = existingUser2.schoolD.map((school, index) => ({
                school: school,
                passingYear: existingUser2.yearOfPassingD[index],
                perce: existingUser2.percentageD[index],
                rank: existingUser2.divisionD[index],
            }));
            const data5 = existingUser2.degreeE.map((degree, index) => ({
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
                data: data1,
                data2,
                data3,
                data4,
                data5,
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
        const existingUser = await form2.findOne({userId: id});
        if (existingUser) {
                const {phdDetails, additionalDetails, schoolDetails, ugDetails, pgDetails} = req.body;
                existingUser.universityA = phdDetails.college;
                existingUser.department = phdDetails.stream;
                existingUser.nameOfPhDSupervisor = phdDetails.supervisor;
                existingUser.yearOfJoiningA = phdDetails.yoj;
                existingUser.dateOfSuccessfulThesisDefence = phdDetails.dod;
                existingUser.dateOfAward = phdDetails.doa;
                existingUser.titleOfPhDThesisA = phdDetails.title;

                existingUser.degreeB=[];
                existingUser.universityB=[];
                existingUser.branchB=[];
                existingUser.yearOfCompletionB=[];
                existingUser.yearOfJoiningB=[];
                existingUser.durationB=[];
                existingUser.percentageB=[];
                existingUser.divisionB=[];
                pgDetails.forEach(item => {
                    existingUser.degreeB.push(item.degree);
                    existingUser.universityB.push(item.college);
                    existingUser.branchB.push(item.subjects);
                    existingUser.yearOfJoiningB.push(item.yoj);
                    existingUser.yearOfCompletionB.push(item.yog);
                    existingUser.durationB.push(item.duration);
                    existingUser.percentageB.push(item.perce);
                    existingUser.divisionB.push(item.rank);
                });
                existingUser.degreeC=[];
                existingUser.universityC=[];
                existingUser.branchC=[];
                existingUser.yearOfJoiningC=[];
                existingUser.yearOfCompletionC=[];
                existingUser.durationC=[];
                existingUser.percentageC=[];
                existingUser.divisionC=[];
                ugDetails.forEach(item => {
                    existingUser.degreeC.push(item.degree);
                    existingUser.universityC.push(item.college);
                    existingUser.branchC.push(item.subjects);
                    existingUser.yearOfJoiningC.push(item.yoj);
                    existingUser.yearOfCompletionC.push(item.yog);
                    existingUser.durationC.push(item.duration);
                    existingUser.percentageC.push(item.perce);
                    existingUser.divisionC.push(item.rank);
                });
                
                existingUser.schoolD = [];
                existingUser.yearOfPassingD = [];
                existingUser.percentageD = [];
                existingUser.divisionD=[];
                schoolDetails.forEach(item => {
                    existingUser.schoolD.push(item.school);
                    existingUser.yearOfPassingD.push(item.passingYear);
                    existingUser.percentageD.push(item.perce);
                    existingUser.divisionD.push(item.rank);
                });
                existingUser.degreeE=[];
                existingUser.universityE=[];
                existingUser.branchE=[];
                existingUser.yearOfJoiningE=[];
                existingUser.yearOfCompletionE=[];
                existingUser.durationE=[];
                existingUser.percentageE=[];
                existingUser.divisionE=[];
                additionalDetails.forEach(item => {
                    existingUser.degreeE.push(item.degree);
                    existingUser.universityE.push(item.college);
                    existingUser.branchE.push(item.subjects);
                    existingUser.yearOfJoiningE.push(item.yoj);
                    existingUser.yearOfCompletionE.push(item.yog);
                    existingUser.durationE.push(item.duration);
                    existingUser.percentageE.push(item.perce);
                    existingUser.divisionE.push(item.rank);
                });
                
                await existingUser.save();
                return res.json({message: 'Successful'});

        } else {
            return res.json({ message: 'Invalid User' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};