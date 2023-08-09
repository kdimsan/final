import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/User/Home";
import { Dishs } from "../pages/User/Dishs";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element= { <Home /> } />
            <Route path="/pratos/:id" element = { <Dishs /> } />
        </Routes>
    )
}