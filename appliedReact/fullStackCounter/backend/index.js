const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const counterRoute = require('./routes/counter')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use('/counters', counterRoute)

app.listen(8000, () => {
    console.log("Server is running on port:8000")
})