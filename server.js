const User = ('./models/User');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(bodyParser.json());


// Import routes 
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)


// CONNECT TO THE MONGO DATABASE
mongoose.connect( process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if(!error){
        console.log('Connection Successful')
    } else {
        console.log('Something went wrong')
    } 
})
app.get('/', (req, res) => {
    res.send('We are on Home right now');
})

app.get('/posts', (req, res) => {
    res.send('We are on Posts right now');
})


// listening 
app.listen(3000);