const express = require('express');
const router = express.Router();
const db = require('../models');
const jwtDecode = require('jwt-decode')
const auth = require('../config/authorize')

router.get('/', (req, res) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    const decode = jwtDecode(token)
    const person = db.findOne({where: {id: decode.id}})

    res.status(200).send(person)
})


router.get('/admin', auth, (req, res) => {
    const person = db.findAll();

    res.status(200).send(person)
})

router.post('/', (req, res) => {
    const name = req.body.name
    db.person.create({
        name,
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