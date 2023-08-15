import { Container, SidebarHeader, Content } from "./style";

import { useAuth } from "../../../hooks/auth";
import { Footer } from "../../footer";
import { LogoutButton } from "../../logoutButton";
import { HeaderSearch } from "../../headerSearch";

import closeButton from "../../../assets/x.svg";

export function Sidebar({ active, onChange } ) {

    const { signOut} = useAuth();

    function closeSideBar() {
        active(false);
    }

    return(
        <Container SideBar={ active }>
            <SidebarHeader>
                <img onClick={ () => closeSideBar() } src={ closeButton } alt="Fechar" />
                <span>Menu</span>
            </SidebarHeader>
            <Content>
                <HeaderSearch onChange={ onChange } />
                <LogoutButton title="Sair" onClick={ signOut }/>
            </Content>
            <Footer />
        </Container>
    )
}