import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Show_about from "./page/Show_about";
import Show_portfolio from "./page/Show_portfolio";
import ReactGA from "react-ga4";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  //Google analytik integration
  ReactGA.initialize(import.meta.env.VITE_APP_GA_ID);
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/show-about' Component={Show_about} />
        <Route path='/show-portfolio' Component={Show_portfolio} />
      </Routes>
    </Router>
  );
}

export default App;
