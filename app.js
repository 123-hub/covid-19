//jshint esversion:6
const express = require ("express");
const https = require ("https");

const app = express();

app.use(express.static("public"));
app.get ("/Contacts Information", function(req,res){
  res.sendFile(__dirname+"index.html")

  app.get ("/Notifications and advisory", function(req,res){
    res.sendFile(__dirname+"notification.html")















app.listen(3000,function(){
  console.log("Running")
});
