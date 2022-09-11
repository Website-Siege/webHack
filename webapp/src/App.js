import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './main';
import loginPage from './routes/loginPage';
import userPage from './routes/userPage';
import contact from './routes/contact';
import aboutUs from './routes/aboutUs';

function App() {
  return (
    //Routes for website
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/loginPage" element={<loginPage />}/>
        <Route exact path="/login?credentials" element={<userPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
