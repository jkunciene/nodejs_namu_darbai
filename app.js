require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = require('./config/db');
connectDB();

const User = require('./models/User');

const express = require('express');
const app = express();
app.use(express.json());

//controllers
const createUser = require('./controllers/userController');

app.post('/api/user',createUser );

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});