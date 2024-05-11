import form4 from '../models/form4.js';
import form3 from '../models/form3.js';
import { ObjectId } from 'mongodb';

export const fetchForm4 = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const existingUser = await form4.findOne({userId: id});
        const form3User = await form3.findOne({userId: id});
        if (existingUser) {
            const data1 = {
                noIntlJour: existingUser.numberOfInternationalJournalPapers,
                noNntlJour: existingUser.numberOfNationalJournalPapers,
                noIntlConf: existingUser.numberOfInternationalConferencePapers,
                noNntlConf: existingUser.numberOfNationalConferencePapers,
                noPat: existingUser.numberOfPatents,
                noBooks: existingUser.numberOfBooks,
                noBookChap: existingUser.numberOfBookChapters
            };
            const data2 = existingUser.author.map((author, index) => ({
                author: author,
                title: existingUser.title[index],
                name: existingUser.nameOfJournal[index],
                year: existingUser.yearVolPage[index],
                impact: existingUser.impactFactor[index],
                doi: existingUser.doi[index],
                status: existingUser.status[index]
              }));
              
              const data3 = existingUser.Inventor.map((inventor, index) => ({
                author: inventor,
                title: existingUser.titleOfPatent[index],
                country: existingUser.countryOfPatent[index],
                number: existingUser.patentNumber[index],
                dof: existingUser.dateOfFilling[index],
                dop: existingUser.dateOfPublished[index],
                status: existingUser.statusA[index]
              }));
              
              const data4 = existingUser.authorB.map((author, index) => ({
                author: author,
                title: existingUser.titleB[index],
                year: existingUser.yearOfPublicationB[index],
                isbn: existingUser.isbnB[index]
              }));
              
              const data5 = existingUser.authorC.map((author, index) => ({
                author: author,
                title: existingUser.titleC[index],
                year: existingUser.yearOfPublicationC[index],
                isbn: existingUser.isbnC[index]
              }));
            console.log('data sent');
            return res.status(200).json({
                status : 200,
                data1,
                data2,
                data3,
                data4,
                data5,
                gschlink: existingUser.url,
                fname: existingUser.firstName,
                lname: existingUser.lastName
            });
        }
        else if(form3User){
            const newUser = new form4({
                    firstName: form3User.firstName,
                    lastName: form3User.lastName,
                    userId: form3User.userId,
                    numberOfInternationalJournalPapers: null,
                    numberOfNationalJournalPapers: null,
                    numberOfInternationalConferencePapers: null,
                    numberOfNationalConferencePapers: null,
                    numberOfPatents: null,
                    numberOfBooks: null,
                    numberOfBookChapters: null,
                    author: [null],
                    title: [null],
                    nameOfJournal: [null],
                    yearVolPage: [null],
                    impactFactor: [null],
                    doi: [null],
                    status: [null],
                    Inventor: [null],
                    titleOfPatent: [null],
                    countryOfPatent: [null],
                    patentNumber: [null],
                    dateOfFilling: [null],
                    dateOfPublished: [null],
                    statusA: [null],
                    authorB: [null],
                    titleB: [null],
                    yearOfPublicationB: [null],
                    isbnB: [null],
                    authorC: [null],
                    titleC: [null],
                    yearOfPublicationC: [null],
                    isbnC: [null],
                    url: null
            });

            await newUser.save();

            const existingUser2 = await form4.findOne({userId: id});
            if (existingUser2) {
                const data1 = {
                    noIntlJour: existingUser2.numberOfInternationalJournalPapers,
                    noNntlJour: existingUser2.numberOfNationalJournalPapers,
                    noIntlConf: existingUser2.numberOfInternationalConferencePapers,
                    noNntlConf: existingUser2.numberOfNationalConferencePapers,
                    noPat: existingUser2.numberOfPatents,
                    noBooks: existingUser2.numberOfBooks,
                    noBookChap: existingUser2.numberOfBookChapters
                };
                const data2 = existingUser2.author.map((author, index) => ({
                    author: author,
                    title: existingUser2.title[index],
                    name: existingUser2.nameOfJournal[index],
                    year: existingUser2.yearVolPage[index],
                    impact: existingUser2.impactFactor[index],
                    doi: existingUser2.doi[index],
                    status: existingUser2.status[index]
                  }));
                  
                  const data3 = existingUser2.Inventor.map((inventor, index) => ({
                    author: inventor,
                    title: existingUser2.titleOfPatent[index],
                    country: existingUser2.countryOfPatent[index],
                    number: existingUser2.patentNumber[index],
                    dof: existingUser2.dateOfFilling[index],
                    dop: existingUser2.dateOfPublished[index],
                    status: existingUser2.statusA[index]
                  }));
                  
                  const data4 = existingUser2.authorB.map((author, index) => ({
                    author: author,
                    title: existingUser2.titleB[index],
                    year: existingUser2.yearOfPublicationB[index],
                    isbn: existingUser2.isbnB[index]
                  }));
                  
                  const data5 = existingUser2.authorC.map((author, index) => ({
                    author: author,
                    title: existingUser2.titleC[index],
                    year: existingUser2.yearOfPublicationC[index],
                    isbn: existingUser2.isbnC[index]
                  }));
                return res.status(200).json({
                    status : 200,
                    data1,
                    data2,
                    data3,
                    data4,
                    data5,
                    gschlink: existingUser2.url,
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

export const updateForm4 = async (req, res) => {
    const userId = req.params.userId;
    const id = new ObjectId(userId); 
    try {
        const existingUser = await form4.findOne({userId: id});
        // console.log(existingUser);
        if (existingUser) {
                const {summaryOfPublication, tenBestPub, patents, book, bookChap, gschlink} = req.body;
                console.log(summaryOfPublication);
                console.log(tenBestPub);
                console.log(patents);
                console.log(book);
                console.log(bookChap);
                console.log(gschlink);
                // console.log(req);
                existingUser.numberOfInternationalJournalPapers = summaryOfPublication.noIntlJour;
                existingUser.numberOfNationalJournalPapers = summaryOfPublication.noNntlJour;
                existingUser.numberOfInternationalConferencePapers = summaryOfPublication.noIntlConf;
                existingUser.numberOfNationalConferencePapers = summaryOfPublication.noNntlConf;
                existingUser.numberOfPatents = summaryOfPublication.noPat;
                existingUser.numberOfBooks = summaryOfPublication.noBooks;
                existingUser.numberOfBookChapters = summaryOfPublication.noBookChap;
                // console.log("1",existingUser);
                existingUser.author = []
                existingUser.title = []
                existingUser.nameOfJournal = []
                existingUser.yearVolPage = []
                existingUser.impactFactor = []
                existingUser.doi = []
                existingUser.status = []
                
                tenBestPub.forEach(item => {
                    existingUser.author.push(item.author);
                    existingUser.title.push(item.title);
                    existingUser.nameOfJournal.push(item.name);
                    existingUser.yearVolPage.push(item.year);
                    existingUser.impactFactor.push(item.impact);
                    existingUser.doi.push(item.doi);
                    existingUser.status.push(item.status);
                });
                // console.log("2",existingUser);
                existingUser.Inventor = []
                existingUser.titleOfPatent = []
                existingUser.countryOfPatent = []
                existingUser.patentNumber = []
                existingUser.dateOfFilling = []                
                existingUser.dateOfPublished = []                
                existingUser.statusA = []

                patents.forEach(item => {
                    existingUser.Inventor.push(item.author);
                    existingUser.titleOfPatent.push(item.title);
                    existingUser.countryOfPatent.push(item.country);
                    existingUser.patentNumber.push(item.number);
                    existingUser.dateOfFilling.push(item.dof);
                    existingUser.dateOfPublished.push(item.dop);
                    existingUser.statusA.push(item.status);

                });
                // console.log("3",existingUser);
                existingUser.authorB = [];
                existingUser.titleB = [];
                existingUser.yearOfPublicationB = [];                
                existingUser.isbnB = [];  

                book.forEach(item => {
                    existingUser.authorB.push(item.author);
                    existingUser.titleB.push(item.title);
                    existingUser.yearOfPublicationB.push(item.year);
                    existingUser.isbnB.push(item.isbn);
                });
                // console.log("4",existingUser);
                existingUser.authorC = [];
                existingUser.titleC = [];
                existingUser.yearOfPublicationC = [];                
                existingUser.isbnC = [];  

                bookChap.forEach(item => {
                    existingUser.authorC.push(item.author);
                    existingUser.titleC.push(item.title);
                    existingUser.yearOfPublicationC.push(item.year);
                    existingUser.isbnC.push(item.isbn);
                });

                existingUser.url = gschlink;
                // console.log("5",existingUser);
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