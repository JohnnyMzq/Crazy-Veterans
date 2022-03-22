import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

import { images } from "./constants";
import { Home, Navbar } from "./components";
import { Download, Rules, Stats, Server} from "./container";

import "./App.css";
import "./components/Navbar/Navbar.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  

  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/server" element={<Server />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
