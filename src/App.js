import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { useState, useMemo } from "react";
import { UserContext } from "./UserContext";
import Navbar from "../src/shared/navbar"
import Homepage from "./components/homepage"
import Login from "./components/login"
import Footer from "../src/shared/footer"
import Signup from "./components/signup"
import Dashboard from './components/dashboard';

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <Router>
      <UserContext.Provider value={value}>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signup" exact>
            <Signup />
          </Route>
        </Switch>
        <Switch>
          <Route path="/dashboard/read" exact>
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
