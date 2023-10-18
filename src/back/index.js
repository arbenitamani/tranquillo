const express=require("express");
const app=express();
const mysql=require("mysql");
const bodyParser=require("body-parser");
const cors=require("cors");

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"tranquillo",
});