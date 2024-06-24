import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/app.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Location from "./pages/location/location";
import Error from "./pages/error/error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <div className="wrapper">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  </React.StrictMode>
)