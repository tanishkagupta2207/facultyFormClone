import form1 from '../models/form1.js';
import user from '../models/user.js';
import { ObjectId } from 'mongodb';

export const fetchForm1 = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    
    try {
        const existingUser = await form1.findById(id);
        if (existingUser) {
            const data1 = {advNum: existingUser.advertisementNumber,
                doa: existingUser.date,
                refNum: existingUser.applicationNumber,
                post: existingUser.postApplied,
                dept: existingUser.department,
                mname: existingUser.middleName,
                nationality: existingUser.nationality,
                dob: existingUser.dateOfBirth,
                age: existingUser.age,
                ageDays: existingUser.ageDays,
                gender: existingUser.gender,
                mstatus: existingUser.maritalStatus,
                cast: existingUser.cast,
                disabilityType: existingUser.disabilityType,
                idProof: existingUser.idProofname,
                fatherName: existingUser.fatherName,
                cadd: existingUser.correspondenceStreet,
                cadd1: existingUser.correspondenceCity,
                cadd2: existingUser.correspondenceState,
                cadd3: existingUser.correspondenceCountry,
                cadd4: existingUser.correspondencePin,
                padd: existingUser.permanentStreet,
                padd1: existingUser.permanentCity,
                padd2: existingUser.permanentState,
                padd3: existingUser.permanentCountry,
                padd4: existingUser.permanentPin,
                mobile: existingUser.mobile,
                email: existingUser.emailId,
                mobile2: existingUser.alternateMobile,
                email2: existingUser.alternateEmailId,
                landline: existingUser.landlineNumber};
            return res.status(200).json({
                status: 200,
                data1,
                data2 : existingUser.firstName,
                data3 : existingUser.lastName,
            });
        }
        else if(await user.findById(id)){
            const loginUser = await user.findById(id);
            const newUser = new form1({
                category: null,
                emailId: null,
                userfirstName: loginUser.firstName,
                userlastName: loginUser.lastName,
                userId: loginUser._id,
                applicationNumber: null,
                advertisementNumber: null,
                date: null,
                postApplied: null,
                department: null,
                firstName: null,
                middleName: null,
                lastName: null,
                nationality: null,
                dateOfBirth: null,
                age: null,
                ageDays: null,
                gender: null,
                maritalStatus: null,
                idProofname: null,
                idProofImage: null,
                fatherName: null,
                personalPhoto: null,
                correspondenceStreet: null,
                correspondenceCity: null,
                correspondenceState: null,
                correspondenceCountry: null,
                correspondencePin: null,
                permanentStreet: null,
                permanentCity: null,
                permanentState: null,
                permanentCountry: null,
                permanentPin: null,
                mobile: null,
                alternateMobile: null,
                alternateEmailId: null,
                landlineNumber: null
            });

        await newUser.save();
        } 
        else {
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
            const { advNum,doa,refNum, post, dept, mname, nationality, dob, age, ageDays, gender, mstatus, cast, disabilityType, idProof, fatherName, cadd, cadd1, cadd2, cadd3, cadd4, padd, padd1, padd2, padd3, padd4, mobile, email, mobile2, email2, landline } = req.body;
                existingUser.advertisementNumber = advNum;
                existingUser.date = doa ;
                existingUser.applicationNumber = refNum;
                existingUser.postApplied = post;
                existingUser.department = dept;
                existingUser.middleName = mname;
                existingUser.nationality = nationality;
                existingUser.dateOfBirth = dob;
                existingUser.age = age;
                existingUser.ageDays = ageDays;
                existingUser.gender = gender;
                existingUser.maritalStatus = mstatus;
                existingUser.cast = cast;
                existingUser.disabilityType = disabilityType;
                existingUser.idProofname = idProof;
                existingUser.fatherName = fatherName;
                existingUser.correspondenceStreet = cadd;
                existingUser.correspondenceCity = cadd1;
                existingUser.correspondenceState = cadd2;
                existingUser.correspondenceCountry = cadd3;
                existingUser.correspondencePin = cadd4;
                existingUser.permanentStreet = padd;
                existingUser.permanentCity = padd1;
                existingUser.permanentState = padd2;
                existingUser.permanentCountry = padd3;
                existingUser.permanentPin = padd4;
                existingUser.mobile = mobile;
                existingUser.emailId = email;
                existingUser.alternateMobile = mobile2;
                existingUser.alternateEmailId = email2;
                existingUser.landlineNumber = landline;
                await existingUser.save();
                return res.json({message: 'Successful'});
        } else {
            return res.json({ message: 'Invalid User' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};