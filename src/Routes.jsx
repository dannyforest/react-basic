import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import HelloWorld from "./components/HelloWorld";
import React from "react";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/hello" element={<HelloWorld name={"Danny"}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;