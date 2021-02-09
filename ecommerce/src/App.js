// import logo from './logo.svg';git
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import {auth} from './firebase';

function App() {

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("The USER is >>>>>", authUser);
    })
  },[])


  return (
    <Router>
      <div className="App">
        
        <Switch>
        <Route path="/login">
           <Login />
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>

          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
