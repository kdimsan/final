import { Link } from "react-router-dom";

import { Container } from "./style";

import back from "../../assets/back.svg"

export function BackButton() {
    return(
        <Container>
            <img src={back} alt="Voltar" />
            <Link to="/">
                Voltar
            </Link>
        </Container>
    )
}