const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const login = require('./routes/login');
const diary = require('./routes/diary');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const port = 5000;

const db = 'mongodb://localhost:27017/diary';

mongoose.connect(db,{useNewUrlParser : true,useUnifiedTopology : true})
    .then(() => console.log('MongoDB connected.....'))
    .catch(err => console.log(err));

app.use('/',login);
app.use('/',diary);



app.listen(port, () => console.log(`Server Started on port ${port}`));