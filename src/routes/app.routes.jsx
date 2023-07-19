import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreateDish } from "../pages/CreateDish";
import { Dishs } from "../pages/Dishs";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/criarprato/:id" element = {<CreateDish />} />
            <Route path="/prato" element = {<Dishs />} />
        </Routes>
    )
}