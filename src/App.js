import './App.css';
import './js/generic.js'
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import {
  Routes, // instead of "Switch"
  Route, Navigate
} from "react-router-dom";
import { initObserver } from './js/generic.js'; 
function App() {
  const location = useLocation();
  const nodeRef = useRef(null)

  useEffect(() => {
    initObserver();
  }, [location]);



  return (
    <div className="App">
      <Header  />
          <div id='main-content' ref={nodeRef} >
            <Routes location={location}>
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
      <Footer />

    </div>

  )
}

export default App;
