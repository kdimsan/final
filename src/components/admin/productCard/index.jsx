import { Container, InfoContainer } from "./style"

import Edit from "../../../assets/edit.svg"

export function ProductCard() {


    return(
        <Container>
            <InfoContainer to= "/prato">
            <img src="src/assets/product.png" alt="Foto do produto" />
            <h5>Salada Ravanello</h5>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h4>R$ 49,97</h4>
            </InfoContainer>
            <img src={ Edit } alt="Adicionar aos favoritos" />
        </Container>
    )
}