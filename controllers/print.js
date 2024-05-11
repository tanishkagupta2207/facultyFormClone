import form1 from '../models/form1.js';
import form2 from '../models/form2.js';
import form3 from '../models/form3.js';
import form4 from '../models/form4.js';
import form7 from '../models/form7.js';
import { ObjectId } from 'mongodb';

export const fetchInfo = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const form1User = await form1.findOne({userId: id});
        const form2User = await form2.findOne({userId: id});
        const form3User = await form3.findOne({userId: id});
        const form4User = await form4.findOne({userId: id});
        const form7User = await form7.findOne({userId: id});

        if (form1User && form2User) {
            const data1 = {
                advNum: form1User.advertisementNumber,
                doa: form1User.date,
                refNum: form1User.applicationNumber,
                post: form1User.postApplied,
                dept: form1User.department,
                mname: form1User.middleName,
                nationality: form1User.nationality,
                dob: form1User.dateOfBirth,
                age: form1User.age,
                ageDays: form1User.ageDays,
                gender: form1User.gender,
                mstatus: form1User.maritalStatus,
                cast: form1User.category,
                disabilityType: form1User.disabilityType,
                idProof: form1User.idProofname,
                fatherName: form1User.fatherName,
                cadd: form1User.correspondenceStreet,
                cadd1: form1User.correspondenceCity,
                cadd2: form1User.correspondenceState,
                cadd3: form1User.correspondenceCountry,
                cadd4: form1User.correspondencePin,
                padd: form1User.permanentStreet,
                padd1: form1User.permanentCity,
                padd2: form1User.permanentState,
                padd3: form1User.permanentCountry,
                padd4: form1User.permanentPin,
                mobile: form1User.mobile,
                email: form1User.emailId,
                mobile2: form1User.alternateMobile,
                email2: form1User.alternateEmailId,
                landline: form1User.landlineNumber,
                fname: form1User.firstName,
                lname: form1User.lastName};

            const data2 = {
                college: form2User.universityA,
                stream: form2User.department,
                supervisor: form2User.nameOfPhDSupervisor,
                yoj: form2User.yearOfJoiningA,
                dod: form2User.dateOfSuccessfulThesisDefence,
                doa: form2User.dateOfAward,
                title: form2User.titleOfPhDThesisA,
            };
            const data3 = form2User.degreeB.map((degree, index) => ({
                degree: degree,
                college: form2User.universityB[index],
                subjects: form2User.branchB[index],
                yoj: form2User.yearOfJoiningB[index],
                yog: form2User.yearOfCompletionB[index],
                duration: form2User.durationB[index],
                perce: form2User.percentageB[index],
                rank: form2User.divisionB[index],
                }));
                  
            const data4 = form2User.degreeC.map((degree, index) => ({
                degree: degree,
                college: form2User.universityC[index],
                subjects: form2User.branchC[index],
                yoj: form2User.yearOfJoiningC[index],
                yog: form2User.yearOfCompletionC[index],
                duration: form2User.durationC[index],
                perce: form2User.percentageC[index],
                rank: form2User.divisionC[index],
            }));
                  
            const data5 = form2User.schoolD.map((school, index) => ({
                school: school,
                passingYear: form2User.yearOfPassingD[index],
                perce: form2User.percentageD[index],
                rank: form2User.divisionD[index],
            }));
                  
            const data6 = form2User.degreeE.map((degree, index) => ({
                degree: degree,
                college: form2User.universityE[index],
                subjects: form2User.branchE[index],
                yoj: form2User.yearOfCompletionE[index],
                yog: form2User.yearOfJoiningE[index],
                duration: form2User.durationE[index],
                perce: form2User.percentageE[index],
                rank: form2User.divisionE[index]
            }));
            
            const data7 = {
                position: form3User.positionA,
                employer: form3User.organizationA,
                status: form3User.status,
                doj: form3User.dateOfJoiningA,
                dol: form3User.dateOfLeavingA,
                duration: form3User.durationA
            };
            const data8 = form3User.positionB.map((position, index) => ({
                position: position,
                employer: form3User.organizationB[index],
                doj: form3User.dateOfJoiningB[index],
                dol: form3User.dateOfLeavingB[index],
                duration: form3User.durationB[index],
            }));
            const data9 = form3User.positionC.map((position, index) => ({
                position: position,
                employer: form3User.employer[index],
                course: form3User.courseTaught[index],
                ugpg: form3User.ugPg[index],
                no_students: form3User.noOfStudents[index],
                doj: form3User.dateOfJoiningInstitute[index],
                dol: form3User.dateOfLeavingInstitute[index],
                duration: form3User.durationC[index],
            }));
            const data10 = form3User.positionD.map((position, index) => ({
                position: position,
                institute: form3User.instituteD[index],
                supervisor: form3User.supervisor[index],
                doj: form3User.dateOfJoiningD[index],
                dol: form3User.dateOfLeavingD[index],
                duration: form3User.durationD[index],
            }));
            const data11 = form3User.organizationE.map((organization, index) => ({
                organization: organization,
                work: form3User.workProfile[index],
                doj: form3User.dateOfJoiningE[index],
                dol: form3User.dateOfLeavingE[index],
                duration: form3User.durationE[index],
            }));

            const data14 = {
                noIntlJour: form4User.numberOfInternationalJournalPapers,
                noNntlJour: form4User.numberOfNationalJournalPapers,
                noIntlConf: form4User.numberOfInternationalConferencePapers,
                noNntlConf: form4User.numberOfNationalConferencePapers,
                noPat: form4User.numberOfPatents,
                noBooks: form4User.numberOfBooks,
                noBookChap: form4User.numberOfBookChapters
            };
            const data15 = form4User.author.map((author, index) => ({
                author: author,
                title: form4User.title[index],
                name: form4User.nameOfJournal[index],
                year: form4User.yearVolPage[index],
                impact: form4User.impactFactor[index],
                doi: form4User.doi[index],
                status: form4User.status[index]
              }));
              
              const data16 = form4User.Inventor.map((inventor, index) => ({
                author: inventor,
                title: form4User.titleOfPatent[index],
                country: form4User.countryOfPatent[index],
                number: form4User.patentNumber[index],
                dof: form4User.dateOfFilling[index],
                dop: form4User.dateOfPublished[index],
                status: form4User.statusA[index]
              }));
              
              const data17 = form4User.authorB.map((author, index) => ({
                author: author,
                title: form4User.titleB[index],
                year: form4User.yearOfPublicationB[index],
                isbn: form4User.isbnB[index]
              }));
              
              const data18 = form4User.authorC.map((author, index) => ({
                author: author,
                title: form4User.titleC[index],
                year: form4User.yearOfPublicationC[index],
                isbn: form4User.isbnC[index]
              }));
                return res.status(200).json({
                    status: 200,
                    data1,
                    data2,
                    data3,
                    data4,
                    data5,
                    data7,
                    data8,
                    data9,
                    data10,
                    data11,
                    data12: form3User.specialization,
                    data13: form3User.research,
                    data14,
                    data15,
                    data16,
                    data17,
                    data18,
                    data19:form4User.url,
                    data20: form7User.significantResearchContributionFuturePlans,
                    data21: form7User.significantTeachingContributionFuturePlans,
                    data22: form7User.anyOtherRelevantInformation,
                    data23: form7User.professionalService,
                    data24: form7User.listOfJournalPublications,
                    data25: form7User.listOfConferencePublications,
                });
        }
        else {
            return res.json({ message: 'Invalid User' });
        }
        
        }
        catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
