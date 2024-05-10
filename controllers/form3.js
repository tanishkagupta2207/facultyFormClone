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
            const data2 = existingUser.positionB.map((position, index) => ({
                position: position,
                employer: existingUser.organizationB[index],
                doj: existingUser.dateOfJoiningB[index],
                dol: existingUser.dateOfLeavingB[index],
                duration: existingUser.durationB[index],
            }));
            const data3 = existingUser.positionC.map((position, index) => ({
                position: position,
                employer: existingUser.employer[index],
                course: existingUser.courseTaught[index],
                ugpg: existingUser.ugPg[index],
                no_students: existingUser.noOfStudents[index],
                doj: existingUser.dateOfJoiningInstitute[index],
                dol: existingUser.dateOfLeavingInstitute[index],
                duration: existingUser.durationC[index],
            }));
            const data4 = existingUser.positionD.map((position, index) => ({
                position: position,
                institute: existingUser.instituteD[index],
                supervisor: existingUser.supervisor[index],
                doj: existingUser.dateOfJoiningD[index],
                dol: existingUser.dateOfLeavingD[index],
                duration: existingUser.durationD[index],
            }));
            const data5 = existingUser.organizationE.map((organization, index) => ({
                organization: organization,
                work: existingUser.workProfile[index],
                doj: existingUser.dateOfJoiningE[index],
                dol: existingUser.dateOfLeavingE[index],
                duration: existingUser.durationE[index],
            }));
            console.log(data2);
            return res.status(200).json({
                status : 200,
                data1,
                data2,
                data3,
                data4,
                data5,
                data6: existingUser.specialization,
                data7: existingUser.research,
                data8: existingUser.firstName,
                data9: existingUser.lastName
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
                positionB: [null],
                organizationB: [null],
                dateOfJoiningB: [null],
                dateOfLeavingB: [null],
                durationB: [null],
                experience: [null],
                positionC: [null],
                employer: [null],
                courseTaught: [null],
                ugPg: [null],
                noOfStudents: [null],
                dateOfJoiningInstitute: [null],
                dateOfLeavingInstitute: [null],
                durationC: [null],
                positionD: [null],
                instituteD: [null],
                supervisor: [null],
                dateOfJoiningD: [null],
                dateOfLeavingD: [null],
                durationD: [null],
                organizationE: [null],
                workProfile: [null],
                dateOfJoiningE: [null],
                dateOfLeavingE: [null],
                durationE: [null],
                specialization: '',
                research: ''
            });
    
            await newUser.save();
            const existingUser2 = await form3.findOne({userId: id});
            if (existingUser2) {
                const data1 = {
                    position: existingUser2.positionA,
                    employer: existingUser2.organizationA,
                    status: existingUser2.status,
                    doj: existingUser2.dateOfJoiningA,
                    dol: existingUser2.dateOfLeavingA,
                    duration: existingUser2.durationA
                };
                const data2 = existingUser2.positionB.map((position, index) => ({
                    position: position,
                    employer: existingUser2.organizationB[index],
                    doj: existingUser2.dateOfJoiningB[index],
                    dol: existingUser2.dateOfLeavingB[index],
                    duration: existingUser2.durationB[index],
                }));
                const data3 = existingUser2.positionC.map((position, index) => ({
                    position: position,
                    employer: existingUser2.employer[index],
                    course: existingUser2.courseTaught[index],
                    ugpg: existingUser2.ugPg[index],
                    no_students: existingUser2.noOfStudents[index],
                    doj: existingUser2.dateOfJoiningInstitute[index],
                    dol: existingUser2.dateOfLeavingInstitute[index],
                    duration: existingUser2.durationC[index],
                }));
                const data4 = existingUser2.positionD.map((position, index) => ({
                    position: position,
                    institute: existingUser2.instituteD[index],
                    supervisor: existingUser2.supervisor[index],
                    doj: existingUser2.dateOfJoiningD[index],
                    dol: existingUser2.dateOfLeavingD[index],
                    duration: existingUser2.durationD[index],
                }));
                const data5 = existingUser2.organizationE.map((organization, index) => ({
                    organization: organization,
                    work: existingUser2.workProfile[index],
                    doj: existingUser2.dateOfJoiningE[index],
                    dol: existingUser2.dateOfLeavingE[index],
                    duration: existingUser2.durationE[index],
                }));
                
                return res.status(200).json({
                    status : 200,
                    data1,
                    data2,
                    data3,
                    data4,
                    data5,
                    data6: existingUser2.specialization,
                    data7: existingUser2.research,
                    data8: existingUser2.firstName,
                    data9: existingUser2.lastName
                }
            );
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
    console.log("asd");
    try {
        const existingUser = await form3.findOne({userId:id});
        if (existingUser) {
                console.log("asd");
                const {presentEmployment,experienceDetails,teachingExperience,researchExperience,industrialExperience,areasOfSpecialization,currentAreasOfResearch} = req.body;
                     
                existingUser.positionA = presentEmployment.position;
                existingUser.organizationA = presentEmployment.employer;
                existingUser.status = presentEmployment.status;
                existingUser.dateOfJoiningA = presentEmployment.doj;
                existingUser.dateOfLeavingA = presentEmployment.dol;
                existingUser.durationA = presentEmployment.duration;

                experienceDetails.forEach(item => {
                    existingUser.positionB.push(item.position);
                    existingUser.organizationB.push(item.employer);
                    existingUser.dateOfJoiningB.push(item.doj);
                    existingUser.dateOfLeavingB.push(item.dol);
                    existingUser.durationB.push(item.duration);
                });

                teachingExperience.forEach(item =>{
                    existingUser.positionC.push(item.position);
                    existingUser.employer.push(item.employer);
                    existingUser.courseTaught.push(item.course);
                    existingUser.ugPg.push(item.ugpg);
                    existingUser.noOfStudents.push(item.no_students);
                    existingUser.dateOfJoiningInstitute.push(item.doj);
                    existingUser.dateOfLeavingInstitute.push(item.dol);
                    existingUser.durationC.push(item.duration);
                });

                researchExperience.forEach(item =>{
                    existingUser.positionD.push(item.position);
                    existingUser.instituteD.push(item.institute);
                    existingUser.supervisor.push(item.supervisor);
                    existingUser.dateOfJoiningD.push(item.doj);
                    existingUser.dateOfLeavingD.push(item.dol);
                    existingUser.durationD.push(item.duration);
                });

                industrialExperience.forEach(item =>{
                existingUser.organizationE.push(item.organization);
                existingUser.workProfile.push(work);
                existingUser.dateOfJoiningE.push(doj);
                existingUser.dateOfLeavingE.push(dol);
                existingUser.durationE.push(duration);
                });

                existingUser.specialization = areasOfSpecialization;
                existingUser.research = currentAreasOfResearch;
                console.log("ds");
                await existingUser.save();
                console.log("Ds");
                return res.json({ message: 'Successful' });
        }
         else {
            return res.json({ message: 'Invalid User' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};