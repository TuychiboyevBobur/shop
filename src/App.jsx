import "./App.css"
import NavBar from "./Components/Navbar/Navbar"
import "bootstrap"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OnlineShop from "./Components/Section/OnlineShop"
import About from "./Components/About/About"
import Example from "./Components/Section/home"
import Details from "./Components/Section/ProductDetails"
import LoginPage from "./Components/Login/LoginPage"
import AddCard from "./Components/Section/Addcard"
import { useState } from "react"


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/shop" element={<OnlineShop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<LoginPage setIsAuth={setIsAuth}/>} />
          <Route path="/addcard" element={<AddCard />} />
          <Route path="/product/:key" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
