import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ShoppingCartPovider } from './context/ShoppingCartContext';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
         <ShoppingCartPovider>
            <NavBar />
            <Container className='p-0'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Container>
            <Footer />
          </ShoppingCartPovider>
    </div>
    
  );
}

export default App;
