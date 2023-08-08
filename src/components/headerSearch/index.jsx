import { Container } from "./style";

import Magnifier from "../../assets/magnifier.svg";

export function HeaderSearch({ onChange }) {
    return (
        <Container>
            <img src={ Magnifier } alt="Buscar" />
            <input
                type="text" 
                placeholder="Busque por pratos ou ingredientes"
                onChange={ onChange }
            />
        </Container>
    )
}