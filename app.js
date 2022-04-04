require('dotenv').config();
require('./src/database');

const express = require('express');
const morgan = require('morgan');
const app = express();

let port = process.env.PORT || 3100;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//app.use(require('./src/routes'));


app.listen(port,()=>{
    console.log('JSON Server is running - port: ' + port);
});