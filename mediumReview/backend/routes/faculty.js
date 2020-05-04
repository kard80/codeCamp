const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/', (req, res) => {
    db.faculty.findAll()
        .then(result => {
            res.status(200).send(result)
        }).catch(error => {
            res.status(400).send(error)
        })
})

router.post('/', (req, res) => {
    const name = req.body.name
    db.faculty.create({name: name})
        .then(result => {
            res.status(200).send(result)
        }).catch(error => {
            res.status(200).send(error)
        })
})

router.put('/', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    db.faculty.update({ name: name }, { where: { id: id } })
        .then(result => {
            res.status(200).send(result)
        }).catch(error => {
            res.status(400).send(error)
        })
})

router.delete('/', (req, res) => {
    id = req.body.id;
    db.faculty.destroy({ where: { id: id } })
        .then(result => {
            res.status(200).send(result)
        }).catch(error => {
            res.status(400).send(error)
        })
})

module.exports = router