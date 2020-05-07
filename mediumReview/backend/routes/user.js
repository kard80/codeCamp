const express = require('express');
const router = express.Router();
const db = require('../models');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const user = await db.user.findOne({where: {username: username}})
    if(user) {
        res.status(400).send({message: 'Username already taken'})
    }else {
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, salt)

        await db.user.create({
            username,
            password: hashedPassword
        })}
    res.status(201).send({message: 'user created'})})

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await db.user.findOne({where: {username: username}})
    if(!user) {
        res.status(400).send('Invalid username')
    }else {
        const isCompleted = await bcryptjs.compareSync(password, user.password);
        const aHour = 36000

        if(isCompleted) {
            const payload = {
                id: user.id
            }

            const token = jwt.sign(payload, 'signKey', {expiresIn: aHour})
            res.status(200).send({token: token})
        }else {
            res.status(400).send({message: 'Invalid username or password'})
        }
    }})
module.exports = router