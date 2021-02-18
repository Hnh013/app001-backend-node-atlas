const express = require('express');
const bodyParser = require('body-parser');
var employeeController = require('./controllers/employeeController.js');


const { mongoose } = require('./util/database.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server running at Port 3000'));

app.use('/employees' , employeeController);