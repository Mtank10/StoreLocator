const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//load env vars
dotenv.config({path:'./config/config.env'});

//connect to database
connectDB();

const app = express();

//Body parser
app.use(express.json());
//Enable cors
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use('/api/v1/stores',require('./router/stores'));

const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});
