import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
// import About from "./Components/About/About";
// import Features from "./Components/Features/Features";
// import Pricing from "./Components/Pricing/Pricing";
import SlideCarousel from "./Components/Carousel/SlideCarousel";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div className="shop_cart">
        <Navbar />
        {/* <SlideCarousel /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
