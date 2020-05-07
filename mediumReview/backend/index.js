const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const db = require('./models');
const student = require('./routes/student')
const faculty = require('./routes/faculty')
const user = require('./routes/user')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.use('/student', student);
app.use('/faculty', faculty);
app.use('/user', user)

db.sequelize.sync({ force: false })
    .then(() => {
        app.listen(8000,() => {
            console.log('Server is running at port 8000')
        })
    })