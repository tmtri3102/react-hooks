import * as React from "react";
import { Routes , Route , Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

export default function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>



            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
}