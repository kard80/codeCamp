const express = require('express');
const router = express.router();
const db = require('../models');


router.get('/', (req, res) => {
    db.findAll();
})

router.post('/', (req, res) => {
    const variable = req.body.post
    db.person.create({
        data: data
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
    db.department.update({data: data}, {where: {id: id}}).then(result => {
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