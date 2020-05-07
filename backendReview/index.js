const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./models')
const student = require('./routes/student')
const user = require('./routes/user')
const cors = require('cors')

require('./config/passport/passport')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/student', student)
app.use('/user', user)

db.sequelize.sync()
    .then(() => {
        app.listen(8000, () => {
            console.log('Server is running at port 8000')
        })
    })

