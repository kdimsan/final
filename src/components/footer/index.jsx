import { Container, Logo } from "./style"

import LogoFooter from "../../assets/logoFooter.svg"

export function Footer() { 
    return(
        <Container>
            <Logo >
                <img src={LogoFooter} alt="Logo do footer" />
                <h3>food explorer</h3>
            </Logo>

            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}