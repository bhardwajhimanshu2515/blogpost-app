import React, { useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { useState, useMemo } from "react";
import { UserContext } from "./UserContext";
import Navbar from "../src/shared/navbar";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Footer from "../src/shared/footer";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import { AuthContext } from "./context/auth-context";

function App(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  const login = useCallback((token) => {
    console.log('login called');
    setToken(token);
    // setUser(user);
    localStorage.setItem("token", JSON.stringify({ token: token }));
    
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token")
  });
  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <Router>
        <AuthContext.Provider
          value={{
            isLoggedIn: !!token,
            token: token,
            login: login,
            logout: logout,
          }}
        >
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
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
