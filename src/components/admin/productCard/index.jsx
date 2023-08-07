import { Container, InfoContainer } from "./style"

import Edit from "../../../assets/edit.svg"

export function ProductCard({ data, onClick }) {
    return(
        <Container onClick={onClick}>
            <InfoContainer>
            <img src="src/assets/product.png" alt="Foto do produto" />
            <h5 data={data.name}>{data.name}</h5>
            <p data={data.description}>{data.description}</p>
            <h4 data={data.price}>R${data.price}</h4>
            </InfoContainer>
            <img src={ Edit } alt="Adicionar aos favoritos" />
        </Container>
    )
}