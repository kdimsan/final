import { Container } from "./style";

import Logout from "../../assets/logout.svg";

export function LogoutButton({ onClick, title }) {
    return(
        <Container>
            <img onClick={ onClick } src={ Logout } alt="Sair da conta" />
            <span onClick={ onClick }> { title } </span>
        </Container>
    )
}