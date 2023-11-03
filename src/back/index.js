const express=require("express");
const app=express();
const mysql=require("mysql");
const bodyParser=require("body-parser");
const cors=require("cors");

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"tranquillo",
});
db.getConnection((err,connection)=>{
    if(err){
        console.error("Error connecting to MYSQL server:",err);
    }else{
        console.log("Connected to MYSQL server.");
    }
    connection.release();
})
