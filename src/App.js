import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './main';
import Login from './components/loginComponents/loginPage';
import Contact from './routes/contact';
import About from './routes/aboutUs';
import Fetch from './components/userComponents/components/fetch';

function App() {
  return (
    //Routes for website
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
	      <Route exact path="/about" element={<About />} />
	      <Route exact path="/contact"  element={<Contact />} />
        <Route exact path="/fetch" element={<Fetch />}/>
      </Routes>
    </Router>
  );
}

export default App;
