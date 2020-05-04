const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./models')
const student = require('./routes/student')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/student', student)

db.sequelize.sync()
    .then(() => {
        app.listen(8000, () => {
            console.log('Server is running at port 8000')
        })
    })

