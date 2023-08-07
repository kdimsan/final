import { Container } from "./style";
import { useNavigate } from "react-router-dom";

import back from "../../assets/back.svg"

export function BackButton() {

    const navigate = useNavigate();

    function handleBack() {
        navigate("/");
    }
    return(
        <Container onClick={handleBack}>
            <img src={ back } alt="Voltar" />
            <span>Voltar</span>
        </Container>
    )
}