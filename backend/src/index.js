const express = require('express');
const connectdb = require('./config/db');
const authRouter = require('./controllers/auth');
const userRoute = require('./controllers/user');
require('dotenv').config();

const PORT = process.env.PORT || 9080
const DB_URL = process.env.DB_URL

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) =>{
    res.send("Home page");
})

app.use('/auth', authRouter);
app.use('/profile', userRoute);

app.listen(PORT, async () =>{
    try{
        await connectdb(DB_URL);
        console.log("Database connected successfully!");
        console.log(`Server is runnig at port no. ${PORT}`);
    }catch(err){
        console.log(err);
    }
})