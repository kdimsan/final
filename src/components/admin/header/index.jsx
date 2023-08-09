import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, HeaderContent } from "./style";

import { useAuth } from "../../../hooks/auth";
import { Logo } from "../logo";
import { Sidebar } from "../../sidebar";
import { LogoutButton } from "../../logoutButton";
import { NewDishButton } from "../../newDishButton";
import { HeaderSearch } from "../../headerSearch";

import Menu from "../../../assets/menu.svg";


export function Header({ onChange }) {

    const navigate = useNavigate();

    const { signOut } = useAuth();

    const [sideBar, setSideBar] = useState(false);

    function showSideBar() {
        setSideBar(!sideBar);
    }

    function handleCreateDish() {
        navigate("/pratos");
    }

    return(
        <Container> 
            <HeaderContent>
                <img onClick={ () => showSideBar() } src={ Menu } alt="Menu" />
                { sideBar && <Sidebar onChange={ onChange } active={setSideBar} /> } 
                <Logo />
                <HeaderSearch onChange={ onChange } />
                <NewDishButton title="Novo prato" onClick={ () => handleCreateDish() } />
                <LogoutButton onClick={ signOut } />
            </HeaderContent>
        </Container>
    )
}