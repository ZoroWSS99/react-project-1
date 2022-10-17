import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom"
import Home from "./Components/pages/Home";
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Products";
import SignUp from "./Components/pages/SignUp";


function App () {
  return(
    <div className="App">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        

    </div>
  )
}

export default App;
