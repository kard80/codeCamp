const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', async (req, res) => {
    const position = await db.position.findAll();
    res.status(200).send(position)

})

router.post('/', (req, res) => {
    const position = req.body.position;
    const departmentId = req.body.departmentId;
    db.position.create({
        position,
        departmentId
    })
    
    .then(result => {
        res.status(200).send(result)
    }).catch(err => {
        res.status(400).send(err)
    })
})

router.put('/', (req,res) => {
    const variable = req.body.edit;
    const id = req.body.id
    db.department.update({data: variable}, {where: {id: id}}).then(result => {
        res.status(200).send(result)
    }).catch(err => {
        res.status(400).send(err)
    })
})

router.delete('/', (req,res) => {
    const id = req.params.id;
    db.person.destroy({where: {id: id}}).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err)
    })

})





module.exports = router;