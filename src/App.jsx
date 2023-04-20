import './App.css';
import NavBar from './Components/Navbar';
import 'bootstrap';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import styled from 'styled-components';

function App() {

  
  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>
          {/* <Route path='/' element={}/> */}
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;

