import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home/Home";
import Navi from "./components/navbar/Navi";
import Contact from "./components/contact/Contact";
import About from "./components/aboutme/About";
import Request from "./components/request/Request";
import Footer from "./components/footer/Footer";
import Collection from "./components/collection/Collection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navi />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="request" element={<Request />} />
            <Route path="collection" element={<Collection />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
