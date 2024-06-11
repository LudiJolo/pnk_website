import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home/Home";
import Navi from "./components/navbar/Navi";
import Contact from "./components/contact/Contact";
import About from "./components/aboutme/About";
import Pricing from "./components/pricing/Pricing";
import Footer from "./components/footer/Footer";
import Collection from "./components/collection/Collection";
import Keyboard from "./components/collection/Keyboard";
import Login from "./components/login/login";
import Authenticate from "./components/login/Authenticate";
import Request from "./components/request/Request";
import Purchase from "./components/purchase/Purchase";

function App() {
  return (
    <div class="maincontainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navi />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="request" element={<Request />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="collection">
              <Route index={true} element={<Collection />} />
              <Route path=":keyboard_id" element={<Keyboard />} />
            </Route>
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/pnk_login" element={<Login />} />
          <Route path="/pnk_auth" element={<Authenticate />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
