import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-base-200 transition-colors durations-300">
      {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
