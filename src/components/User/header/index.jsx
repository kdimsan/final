import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, HeaderContent } from "./style";

import { useAuth } from "../../../hooks/auth";
import { Logo } from "../../logo";
import { Sidebar } from "../sidebar";
import { LogoutButton } from "../../logoutButton";
import { HeaderSearch } from "../../headerSearch";
import { Cart } from "../../cart";

import Menu from "../../../assets/menu.svg";


export function Header({ onChange }) {

    const navigate = useNavigate();

    const { signOut } = useAuth();

    const [sideBar, setSideBar] = useState(false);

    function showSideBar() {
        setSideBar(!sideBar);
    }

    return(
        <Container> 
            <HeaderContent>
                <img onClick={ () => showSideBar() } src={ Menu } alt="Menu" />
                { sideBar && <Sidebar onChange={ onChange } active={setSideBar} /> } 
                <Logo />
                <HeaderSearch onChange={ onChange } />
                <Cart />
                <LogoutButton onClick={ signOut } />
            </HeaderContent>
        </Container>
    )
}