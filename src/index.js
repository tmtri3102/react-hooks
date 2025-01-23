import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import FormikLogin from "./components/FormikLogin";

const container = document.getElementById ( "root" );
const root = ReactDOM.createRoot ( container );
root.render (
    <BrowserRouter>
        <FormikLogin/>
    </BrowserRouter> ,
);
