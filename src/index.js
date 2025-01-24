import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import App from "./App";
import Category from "./routes2/Category";
import Product from "./routes2/Product";
import FormikBook from "./components/FormikBook";

const container = document.getElementById ( "root" );
const root = ReactDOM.createRoot ( container );
root.render (
    <BrowserRouter>
        {/*<App/>*/}
        {/*<Routes>*/}
        {/*    <Route path="/" element={<Category />}></Route>*/}
        {/*    <Route path="/product/:categoryId" element={<Product />}></Route>*/}
        {/*</Routes>*/}
        <FormikBook />
    </BrowserRouter> ,
);
