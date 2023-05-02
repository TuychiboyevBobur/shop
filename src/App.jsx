import "./App.css"
import NavBar from "./Components/Navbar/Navbar"
import "bootstrap"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import styled from 'styled-components';
import OnlineShop from "./Components/Section/OnlineShop"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Home from "./pages/home"
import Example from "./pages/home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/shop" element={<OnlineShop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
