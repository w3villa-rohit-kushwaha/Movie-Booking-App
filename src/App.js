// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Summary from './components/Cards/Summary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/show/:id" element={<Summary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
