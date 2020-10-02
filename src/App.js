import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "../src/shared/navbar"
import Homepage from "./components/homepage"
import Login from "./components/login"
import Footer from "../src/shared/footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
