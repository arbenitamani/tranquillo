const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require('bcrypt'); // Add this for password hashing

app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "tranquillo",
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MYSQL server:", err);
  } else {
    console.log("Connected to MYSQL server.");
  }
  connection.release();
});

app.use(bodyParser.json()); // Use body-parser middleware to parse JSON data

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check user credentials and get the user's role from the database
  const sql = "SELECT role FROM Users WHERE username = ?";
  db.query(sql, [username], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const userRole = result[0].role;

    // Create a session or token based on the user's role
    // Redirect to the appropriate dashboard
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
});

app.post('/api/register', async (req, res) => {
    console.log(req.body); 
  
    try {
      const {
        username,
        password,
        email,
        role,
        name,
        specialization,
        availability,
        experience,
        bio,
      } = req.body;
  
      // Validate input data (e.g., check if required fields are present)
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      let sql, values;
  
      if (role === 'user') {
        sql = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)';
        values = [username, hashedPassword, email, role];
      } else if (role === 'therapist') {
        sql = 'INSERT INTO therapists (name, specialization, availability, experience, bio) VALUES (?, ?, ?, ?, ?)';
        values = [name, specialization, availability, experience, bio];
      } else {
        return res.status(400).json({ message: 'Invalid role' });
      }
  
      db.query(sql, values, (error, result) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: 'Registration failed' });
        }
        return res.status(200).json({ message: 'Registration successful' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Registration failed' });
    }
  });
  

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
