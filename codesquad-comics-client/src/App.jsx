import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './shared/Header';
import Footer from './shared/Footer';
import About from './components/About';
import Admin from './components/Admin';
import Create from './components/Create';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Update from './components/Update';
import './App.css';

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {})
  const updateUsername = (e) => {
    setUser(e.target.value);
  }


  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/signup" element={<Signup user={user} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:bookId" element={<Update setUser={setUser} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
