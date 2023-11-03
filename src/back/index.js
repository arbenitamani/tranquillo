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
app.post('/login', (req, res) => {
    // Check user credentials (e.g., username and password)
    // Query the database to get the user's role
  
    // Determine the user's role
    if (userRole === 'admin') {
      // Create a session or token with 'admin' role
      // Redirect to the admin dashboard
    } else if (userRole === 'manager') {
      // Create a session or token with 'manager' role
      // Redirect to the manager dashboard
    } else if (userRole === 'therapist') {
      // Create a session or token with 'therapist' role
      // Redirect to the therapist dashboard
    } else {
      // Create a session or token with 'user' role
      // Redirect to the user dashboard
    }
  });
  
