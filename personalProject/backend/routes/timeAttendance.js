const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', async (req, res) => {
    const timeAttendance = await db.timeAttendance.findAll();
    res.send(timeAttendance)
})

router.post('/', (req, res) => {
    const date = new Date;

    const day = date.getDate();
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const hour = date.getHours().length === 1 ? '0' + String(date.getHours()) : String(date.getHours());
    const minute = date.getMinutes().length === 1 ? '0' + String(date.getMinutes()) : String(date.getMinutes());
    const clockIn = `${hour}.${minute}`

    const remark = req.body.remark;

    db.timeAttendance.create({
        date: `${month[date.getMonth()]} ${day}`,
        clockIn,
        remark,

    })

        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.status(400).send(err)
        })
})

router.put('/', async (req, res) => {
    const date = new Date;
    const hour = date.getHours().length === 1 ? '0' + date.getHours() : String(date.getHours());
    const minute = date.getMinutes().length === 1 ? '0' + date.getMinutes() : String(date.getMinutes());

    const id = req.body.id

    const remark = req.body.remark

    const check = await db.timeAttendance.findOne({ where: { id: id } })

    const workingTime = () => {
        const splitClockIn = check.clockIn.split('.');
        const clockInHour = splitClockIn[0];
        const clockInMinute = splitClockIn[1];
        const clockInTotalMinute = (Number(clockInHour) * 60) + Number(clockInMinute);

        const clockOutTotalMinute = (Number(hour) * 60) + Number(minute);

        const calculate = clockOutTotalMinute - clockInTotalMinute;
        const minuteFraction = calculate % 60;
        const resultHour = Math.floor(calculate / 60)
        const resultMinute = minuteFraction === 1? '0' + String(minuteFraction):  minuteFraction

        
        
        return `${resultHour}.${resultMinute}`
    }


    await db.timeAttendance.update({
        clockOut: `${hour}.${minute}`,
        remark,
        workingTime: workingTime(),

    },
        { where: { id: id } })

        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.status(400).send(err)
        })
})








module.exports = router;