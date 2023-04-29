import './App.css';
import NavBar from './Components/Navbar';
import 'bootstrap';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import styled from 'styled-components';
import OnlineShop from './Components/Section/OnlineShop';
import About from './Components/Section/About';
import Contact from './Components/Section/Contact';

function App() {

  
  return (
    <div className='App'>
      <BrowserRouter>

        <NavBar/>
        <Routes>
            <Route path='/' element={<OnlineShop />}/>
            <Route path='/shop' element={<OnlineShop />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;

