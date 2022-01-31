const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const morgan = require('morgan')
const cors=require('cors')
const userRouter = require('./routes/userRoutes');
const formRouter = require('./routes/formRoutes');
const mockData = require('./routes/mockDataRoute');
const { dbSelect } = process.env;

app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(
    cors({
        origin:"*",  
        methods: "GET,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true
    })
);

require("./config/db");


app.use('/user',userRouter);
app.use('/form',formRouter);
app.use('/mockData',mockData);


module.exports = app;