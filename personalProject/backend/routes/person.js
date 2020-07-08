const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../config/authorize')

router.get('/', async (req, res) => {
    const personGet = await db.person.findAll({
        include: {model: db.department, attributes: ['department']},
    });
    res.status(200).send(personGet)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const personGetId = await db.person.findOne({ 
        where: { userId: id, },
        include: {model: db.department, attributes: ['department']}
    })
    res.status(200).send(personGetId)
})


router.get('/admin', auth, (req, res) => {
    const person = db.findAll();

    res.status(200).send(person)
})

// router.post('/', (req, res) => {
//     const name = req.body.name;
//     const surname = req.body.surname;
//     const email = req.body.email;
//     const gender = req.body.gender;
//     const dateOfBirth = req.body.dateOfBirth;
//     const martialStatus = req.body.martialStatus;
//     const nationality = req.body.nationality;
//     const IDNumber = req.body.IDNumber;
//     const contactNumber = req.body.contactNumber;
//     const address = req.body.address;
//     const employeeCode = req.body.employeeCode;
//     const workingStartDate = req.body.workingStartDate;
//     const probationEndDate = req.body.probationEndDate;
//     const jobTitle = req.body.jobTitle;
//     const department = req.body.department;
//     const employeeType = req.body.employeeType;
//     const employeeStatus = req.body.employeeStatus;
//     const manager = req.body.manager;
//     const resignationDate = req.body.resignationDate;
//     const resignationReason = req.body.resignationReason;
//     db.person.create({
//         name,
//         surname,
//         email,
//         gender,
//         dateOfBirth,
//         martialStatus,
//         nationality,
//         IDNumber,
//         contactNumber,
//         address,

//         employeeCode,
//         workingStartDate,
//         probationEndDate,
//         jobTitle,
//         department,
//         employeeType,
//         employeeStatus,
//         manager,
//         resignationDate,
//         resignationReason,

//         taxID,
//         accountNO,
//         accountName,
//         compensationType,
//         salary,
//     })

//         .then(result => {
//             res.status(200).send(result)
//         }).catch(err => {
//             res.status(400).send(err)
//         })
// })

router.put('/syncPosition', async (req, res) => {
    const {id, positionId} =  req.body;
    const departmentId =  await db.position.findOne({where: {id: positionId}, attributes: ['departmentId']})
    db.person.update({
        positionId,
        departmentId: departmentId.departmentId,
    }, {where: {id}})
    res.status(200).send('Update completed')
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const gender = req.body.gender;
    const dateOfBirth = req.body.dateOfBirth;
    const martialStatus = req.body.martialStatus;
    const nationality = req.body.nationality;
    const IDNumber = req.body.IDNumber;
    const contactNumber = req.body.contactNumber;
    const address = req.body.address;
    const employeeCode = req.body.employeeCode;
    const workingStartDate = req.body.workingStartDate;
    const probationEndDate = req.body.probationEndDate;
    const jobTitle = req.body.jobTitle;
    const department = req.body.department;
    const employeeType = req.body.employeeType;
    const employeeStatus = req.body.employeeStatus;
    const manager = req.body.manager;
    const resignationDate = req.body.resignationDate;
    const resignationReason = req.body.resignationReason;
    const taxID = req.body.taxID;
    const accountNO = req.body.accountNO;
    const accountName = req.body.accountName;
    const compensationType = req.body.compensationType;
    const salary = req.body.salary;
    
    db.person.update({ 
        name,
        surname,
        email,
        gender,
        dateOfBirth,
        martialStatus,
        nationality,
        IDNumber,
        contactNumber,
        address,
        employeeCode,
        workingStartDate,
        probationEndDate,
        jobTitle,
        department,
        employeeType,
        employeeStatus,
        resignationDate,
        resignationReason,
        taxID,
        accountNO,
        accountName,
        compensationType,
        salary,
     }, { where: { id: id } })
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.status(400).send(err)
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.person.destroy({ where: { id: id } })
    .then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err)
    })

})





module.exports = router;