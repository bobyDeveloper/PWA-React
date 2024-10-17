// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import AcercaDe from './pages/AcercaDe';
import Contacto from './pages/Contacto';
import Blogs from './pages/Blogs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
