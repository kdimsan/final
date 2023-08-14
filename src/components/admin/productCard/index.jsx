import { Container, InfoContainer } from "./style";

import Edit from "../../../assets/edit.svg";

import { api } from "../../../services/api";

export function ProductCard({ data, onClick }) {

    const imageUrl = `${api.defaults.baseURL}/files/${data.image}`;

    return(
        <Container onClick={onClick}>
            <InfoContainer>
            <img src={ imageUrl } alt="Foto do produto" />
            <h5 data={data.name}>{data.name}</h5>
            <p data={data.description}>{data.description}</p>
            <h4 data={data.price}>R${data.price}</h4>
            </InfoContainer>
            <img src={ Edit } alt="Adicionar aos favoritos" />
        </Container>
    )
}