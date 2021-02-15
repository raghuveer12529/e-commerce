// import logo from './logo.svg';git
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promsie = loadStripe("pk_test_51IL4uQJyzeCL6zyGmJ94Vojc5Rigg4V1tdgjmeyreztfp1nfDyMT2nApiIChKmNxx9jXTZSc68PB0YI2YwsRb3Ny00dqE95HSd");

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The USER is >>>>>", authUser);

      if (authUser) {
        //  the user is logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // user is logged out 

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promsie}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
