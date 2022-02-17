import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SiTwitter, SiGithub, SiFacebook } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./About/About";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import SignIn from "./SignIn/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-secondary">
        <Router>
          <ul className="d-flex">
            <li className="left-content d-flex align-items-center">
              <Link to="/">
                <div className="">Home</div>
              </Link>
            </li>
            <li className="left-content d-flex align-items-center">
              <Link to="/About">
                <div className="">About</div>
              </Link>
            </li>
          </ul>
          <div className="">
            <section class="column">
              <h3 class="title">Customer Service Support:</h3>
              <p>
                1-EXP-ENS-EAPP
                <br />
                info@expensetracker.com
              </p>
              <div class="icons">
                <div className="m-2">
                  <a
                    href="https://twitter.com/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span variant="outline-info" title="Tweets are welcomed!">
                      Twitter
                    </span>
                  </a>
                </div>
                <a href="https://twitter.com/EVFY_inc" target="_blank">
                  <img src="social media icons/twitter.svg" />
                </a>
                <a href="https://www.linkedin.com/company/evfy" target="_blank">
                  <img src="social media icons/linkedIn.svg" />
                </a>
                <a href="https://www.instagram.com/evfy_inc/" target="_blank">
                  <img src="social media icons/IG.svg" />
                </a>
              </div>
            </section>
            <section class="column">
              <h3 class="title">Where to Find Us:</h3>
              <p>
                EVFY, Inc.
                <br />
                4360 Park Terrace Dr. Suite 100,
                <br />
                Westlake Village, CA 91361
              </p>
            </section>
            <section class="column logo">
              <a href="index.html">
                <img src="https://www.ev-fy.com/hubfs/images/EVFY_logos-white_green_green_border_RGB_SL_stacked_HR@2x.png" />
              </a>
            </section>
          </div>
          <FontAwesomeIcon
            icon={SiTwitter}
            className="fas fa-lg mx-1 text-white"
          />
          <div className="d-flex align-items-center">
            <p>
              © 2022 Expense Tracker All rights reserved.
              <a href="#" target="_blank">
                Privacy Policy
              </a>
              and
              <a href="#" target="_blank">
                Terms of Use
              </a>
            </p>
          </div>
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
      </footer>
    );
  }
}
