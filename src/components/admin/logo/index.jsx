import { Container, Divisor } from "./style"

import logo from "../../../assets/logo.svg"

export function Logo() {
    return(
        <Container> 
            <Divisor>
                <img src={ logo } alt="Logo Food Explorer" />
                <h1>food explorer</h1>
            </Divisor>
            <span>admin</span>
        </Container>
    )
}