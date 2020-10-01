import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "../src/shared/navbar"
import Homepage from "./components/homepage"
import Footer from "../src/shared/footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
