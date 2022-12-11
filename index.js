const express = require ('express');
const router=require ('./router/router')
const mongo =require('./connect')
require("dotenv").config()
const port=process.env.PORT || 5000

const app=express();

console.log(process.env.PORT)
mongo.connect();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Let's! Book your Rooms");
})
app.use('/api',router)
app.listen(port,()=>{
    console.log(`server is listening on port: ${port}`);
})