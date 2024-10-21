import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Parameters from "./pages/Parameters";
import Presets from "./pages/Presets";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/parameters" element={<Parameters />}></Route>
                <Route path="/presets" element={<Presets />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </Router>
    );
}
export default App;
