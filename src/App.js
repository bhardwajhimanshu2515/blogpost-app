import React, { useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "../src/shared/navbar";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Footer from "../src/shared/footer";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";


function App(props) {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
