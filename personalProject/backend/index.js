const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const department = require('./routes/department')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/department', department)

db.sequelize.sync({ force: false })
    .then(() => {
        app.listen(8000, () => {
            console.log('Server is running')
        })
    })