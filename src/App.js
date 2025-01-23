import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Invoices from "./route/Invoices";
import Expenses from "./route/Expenses";

export default function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="expenses" element={<Expenses/>}/>
                <Route path="form" element={<Invoices />}/>
            </Routes>
        </div>
    );
}