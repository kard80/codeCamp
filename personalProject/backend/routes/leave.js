const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', async (req, res) => {
    const leave = await db.leave.findAll();
    res.send(leave)
})

router.post('/', async (req, res) => {
    const type = req.body.type;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const timeStartDate = req.body.timeStartDate;
    const timeEndDate = req.body.timeEndDate;
    const reason = req.body.reason;

    const startDateCalculation = new Date(startDate);
    const endDateCalculation = new Date(endDate);
    const oneDay = 24 * 60 * 60 * 1000

    const totalDate = Math.round(Math.abs((startDateCalculation - endDateCalculation) / oneDay))


    db.leave.create({
        type,
        startDate,
        endDate,
        timeStartDate,
        timeEndDate,
        reason,
        totalDate
    })

        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.status(400).send(err)
        })
})






module.exports = router;