const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./route/counter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors());

app.use('/count', router);

app.listen(8000, () => {
    console.log('Server is running')
})

