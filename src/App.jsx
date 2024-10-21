import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Parameters from "./pages/Parameters";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}
                <Route path="/parameters" element={<Parameters />}></Route>
            </Routes>
        </Router>
    );
}
export default App;
