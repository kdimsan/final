import { Container } from "./style";

import orders from "../../assets/ordersMobile.svg";

export function IncludeButton({ title, onClick, data}) {

    return(
        <Container onClick={onClick}>
            <img src={orders} alt="Incluir ao carrinho de compras." />
            <span>{ `${title} ∙ R$ ${data.dish.price}`}</span>
        </Container>
    )
}