import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconName } from "react-icons/fa";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import About from "./About/About";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import SignIn from "./SignIn/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar(props) {
  return (
    <div>
      <Router>
        <header className="navbar bg-success p-3">
          <div className="header px-5">
            <Link to="/" className="text-decoration-none text-white">
              <img src="../Images/expense-logo.png" alt="Logo" height="50px" />
              Expense
              <span className="font-weight-bold" style={{ color: "#fabb47" }}>
                Tracker
              </span>
            </Link>
          </div>
          <ul className="d-flex">
            <li className="left-content d-flex align-items-center">
              <Link to="/">
                <button className="btn border-0 p-2 uppercase">Home</button>
              </Link>
            </li>
            <li className="left-content d-flex align-items-center">
              <Link to="/About">
                <button className="btn border-0 p-2 uppercase">About</button>
              </Link>
            </li>
            <li className="left-content d-flex align-items-center">
              <Link to="/Features">
                <button className="btn border-0 p-2 uppercase">Features</button>
              </Link>
            </li>
            <li className="left-content d-flex align-items-center">
              <Link to="/Pricing">
                <button className="butn btn border-0 p-2 uppercase">
                  Pricing
                </button>
              </Link>
            </li>
          </ul>
          <p className="text-white">
            <Link to="/Signin">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="fas fa-lg mx-1 text-white"
              />
            </Link>
            <span>Sign In</span>
          </p>
        </header>

        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Features">
            <Features />
          </Route>
          <Route path="/Pricing">
            <Pricing />
          </Route>
          <Route path="/Signin">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
