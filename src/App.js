import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './register.js'; // Use a relative import path
import Login from './login.js';
function App() {
  return (
    <div className="App">
        <Router>
        <Routes>

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      </Routes>
      </Router>

      
    </div>
  );
}

export default App;

