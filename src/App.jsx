import React from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
