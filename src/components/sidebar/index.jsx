import { Container, SidebarHeader, Content } from "./style";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { Footer } from "../footer";
import { LogoutButton } from "../logoutButton";
import { NewDishButton } from "../newDishButton";
import { HeaderSearch } from "../headerSearch";

import closeButton from "../../assets/x.svg";

export function Sidebar({ active, onChange } ) {

    const navigate = useNavigate();

    const { signOut} = useAuth();

    function closeSideBar() {
        active(false);
    }

    function handleCreateDish() {
        navigate("/pratos");
    }

    return(
        <Container SideBar={ active }>
            <SidebarHeader>
                <img onClick={ () => closeSideBar() } src={ closeButton } alt="Fechar" />
                <span>Menu</span>
            </SidebarHeader>
            <Content>
                <HeaderSearch onChange={ onChange } />
                <NewDishButton title="Novo prato" onClick={ () => handleCreateDish() } />
                <LogoutButton title="Sair" onClick={ signOut }/>
            </Content>
            <Footer />
        </Container>
    )
}