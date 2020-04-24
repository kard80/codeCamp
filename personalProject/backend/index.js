const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

db.sequelize.sync({ force: false })
    .then(() => {
        app.listener(8000, () => {
            console.log('Server is running')
        })
    })
