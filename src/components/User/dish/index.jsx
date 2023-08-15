import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, ProductImage, ProductInfo, IngredientsOrganizer, Selector } from "./style";

import { BackButton } from "../../backButton";
import { IncludeButton } from "../../includeButton";

import Minus from "../../../assets/minus.svg";
import Plus from "../../../assets/plus.svg";

import { api } from "../../../services/api";

export function Dish() {

    const params = useParams();

    const [data, setData] = useState();
    const [itemQuantity, setItemQuantity] = useState(0);

    function changeQuantity(e) {
        if(e === "sum") {
            setItemQuantity(itemQuantity + 1)
        } else if (e === "subtraction" && itemQuantity > 0 ) {
            setItemQuantity(itemQuantity - 1)
        }
    };

    useEffect(() => {
        async function fetchPlate() {
            const response = await api.get(`/pratos/${params.id}`);
            setData(response.data);
        }
        fetchPlate();
    },[]);

    return (
        <Container>
            <BackButton />
            {
                data &&
                <main>
                    <ProductImage>
                        <img src={ `${api.defaults.baseURL}/files/${data.dish.image}` } alt="Foto do produto" />
                    </ProductImage>
                    <ProductInfo>
                        <h2>{data.dish.name}</h2>
                        <p>{data.dish.description}</p>
                        {
                            data.tags && 
                        <IngredientsOrganizer>
                            {
                                data.tags.map(tags => (
                                        <span 
                                        key={String(tags.id)}>
                                            {tags.title}
                                        </span>
                                ))
                            }
                        </IngredientsOrganizer>
                        }
                        <Selector>
                            <button onClick={ () => changeQuantity("subtraction") }> <img src={ Minus } alt="Diminuir quantidade do produto" /> </button>
                            <span>{itemQuantity}</span>
                            <button onClick={ () => changeQuantity("sum") }> <img src={ Plus } alt="Adicionar produto" /> </button>
                            <IncludeButton data={ data } title={"Incluir"} />
                        </Selector>
                    </ProductInfo>
                </main>
            }
        </Container>
    )
}