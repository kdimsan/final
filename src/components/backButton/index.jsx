import { Container } from "./style";

import back from "../../assets/back.svg"

export function BackButton() {
    return(
        <Container to="/">
            <img src={ back } alt="Voltar" />
            <span>Voltar</span>
        </Container>
    )
}