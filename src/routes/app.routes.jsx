import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dishs } from "../pages/Dishs";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element= { <Home /> } />
            <Route path="/prato" element = { <Dishs /> } />
        </Routes>
    )
}