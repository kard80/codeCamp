const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', (req, res) => {
    db.findAll();
})

router.post('/', (req, res) => {
    const type = req.body.type;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const timeStartDate = req.body.timeStartDate;
    const timeEndDate = req.body.timeEndDate;
    const reason = req.body.reason;
    db.leave.create({
        type,
        startDate,
        endDate,
        timeStartDate,
        timeEndDate,
        reason
    })

        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.status(400).send(err)
        })
})






module.exports = router;