const express = require ("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://saddamhassan280:sdmhsn2000@cluster0.cs0lgoc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('connect success!!!')
}).catch((error)=>{
    console.log('error with connection',error);
});

app.use(express.json());

app.get("/",(req,res)=>{
    res.send('hello');
});

app.listen(3000);