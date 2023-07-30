import { Container } from "./styles"
import { Logo } from "../logo"
import { useAuth } from "../../hooks/auth";

import Menu from "../../assets/menu.svg"
import Logout from "../../assets/logout.svg"
import OrderMobile from "../../assets/ordersMobile.svg"

export function Header() {

    const { signOut } = useAuth();

    return(
        <Container> 
            <img src={ Menu } alt="Menu" />
            <Logo />
            <input type="text" placeholder="Busque por pratos ou ingredientes" />
            <button> <img src={ OrderMobile } alt="Pedidos" />Pedidos</button>
            <img src={ OrderMobile } alt="Pedidos" />
            <button onClick={ signOut }><img src={ Logout } alt="Sair da conta" /></button>
        </Container>
    )
}