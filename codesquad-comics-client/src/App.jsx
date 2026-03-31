import { useState } from 'react'
import Header from './shared/Header'
import Footer from './shared/Footer'
import About from './components/About'
import Admin from './components/admin'
import Create from './components/Create'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Update from './components/Update'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <Home />
    <Login />
    <Signup />
    <Admin />
    <Create />
    <Update />
    <About />
    <Footer />
    </>
  )
}

export default App
