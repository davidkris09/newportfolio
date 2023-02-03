import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="h-screen w-screen">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
