import { Container } from "./style"

import logo from "../../assets/logo.svg"

export function Logo() {
    return(
        <Container> 
            <img src={ logo } alt="Logo Food Explorer" />
            <h1>food explorer</h1>
        </Container>
    )
}