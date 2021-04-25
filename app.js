const fetch = require('node-fetch');
const express =require("express");
const fs =require('fs');
const axios=require("axios")
const app=express();

/*
if database is messing up check models/Data.User.Model.js
this has a User.sync()
*/






// app.get('/',(req,res,next)=>{
//      res.send("hello");
// })
  
// app.listen("3000",(req,res)=>{
//     console.log("Server Running Now on "+ 3000);
// })