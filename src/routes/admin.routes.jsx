import { Routes, Route } from "react-router-dom";

import { CreateDish } from "../pages/Admin/CreateDish";
import { Home } from "../pages/Admin/Home";
import { Dishs } from "../pages/Admin/Dishs";
import { EditDish } from "../pages/Admin/EditDish";

export function AdminRoutes() {
    return(
        <Routes>
            <Route path="/" element= { <Home /> } />
            <Route path="/pratos" element = { <CreateDish /> } />
            <Route path="/pratos/:id" element = { <Dishs /> } />
            <Route path="/editarprato/:id" element = { <EditDish /> } />
        </Routes>
    )
}