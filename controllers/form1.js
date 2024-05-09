import form1 from '../models/form1.js';
import User from '../models/user.js';
import { ObjectId } from 'mongodb';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateApplicationNumber() {
    const min = 1000000; 
    const max = 9999999; 
    const randomNumber = getRandomNumber(min, max);
    return randomNumber;
}

export const fetchForm1 = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const existingUser = await form1.findOne({userId: id});
        const loginUser = await User.findById(id);

        if(existingUser) {
            // console.log(existingUser[advertisementNumber]);
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
                cast: existingUser.category,
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
                landline: existingUser.landlineNumber,
                fname: existingUser.firstName,
                lname: existingUser.lastName};
            return res.status(200).json({
                status: 200,
                data1
            });
        }
        else if(loginUser){
            const newUser = new form1({
                category: loginUser.category,
                emailId: loginUser.emailId,
                userId: loginUser._id,
                applicationNumber: generateApplicationNumber(),
                advertisementNumber: null,
                date: null,
                postApplied: null,
                department: null,
                firstName: loginUser.firstName,
                middleName: null,
                lastName:loginUser.lastName,
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

            const existingUser2 = await form1.find({userId: id});

            const data1 = {advNum: existingUser2.advertisementNumber,
                doa: existingUser2.date,
                refNum: existingUser2.applicationNumber,
                post: existingUser2.postApplied,
                dept: existingUser2.department,
                mname: existingUser2.middleName,
                nationality: existingUser2.nationality,
                dob: existingUser2.dateOfBirth,
                age: existingUser2.age,
                ageDays: existingUser2.ageDays,
                gender: existingUser2.gender,
                mstatus: existingUser2.maritalStatus,
                cast: existingUser2.category,
                disabilityType: existingUser2.disabilityType,
                idProof: existingUser2.idProofname,
                fatherName: existingUser2.fatherName,
                cadd: existingUser2.correspondenceStreet,
                cadd1: existingUser2.correspondenceCity,
                cadd2: existingUser2.correspondenceState,
                cadd3: existingUser2.correspondenceCountry,
                cadd4: existingUser2.correspondencePin,
                padd: existingUser2.permanentStreet,
                padd1: existingUser2.permanentCity,
                padd2: existingUser2.permanentState,
                padd3: existingUser2.permanentCountry,
                padd4: existingUser2.permanentPin,
                mobile: existingUser2.mobile,
                email: existingUser2.emailId,
                mobile2: existingUser2.alternateMobile,
                email2: existingUser2.alternateEmailId,
                landline: existingUser2.landlineNumber,
                fname: existingUser2.firstName,
                lname: existingUser2.lastName};
            
                return res.status(200).json({
                status: 200,
                data1
            });
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
        const existingUser = await form1.findOne({userId: id});
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
                existingUser.category = cast;
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
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};