import React, { useState } from "react";

import { Container, Selector } from "./styles";
import Minus from "../../../assets/minus.svg";
import Plus from "../../../assets/plus.svg";
import Favorite from "../../../assets/favorite.svg";

export function ProductCard({ data, onClick }) {
    const [itemQuantity, setItemQuantity] = useState(0);

    const changeQuantity = (e) => {
        if(e === "sum") {
            setItemQuantity(itemQuantity + 1)
        } else if (e === "subtraction" && itemQuantity > 0 ) {
            setItemQuantity(itemQuantity - 1)
        }
    };

    return(
        <Container>
            <div className="plate-infos" onClick={ onClick }>
                <img src="src/assets/product.png" alt="Foto do produto" />
                <h5 data={data.name}>{data.name}</h5>
                <p data={data.description}>{data.description}</p>
                <h4 data={data.price}>R${data.price}</h4>
            </div>
            <Selector>
                <button onClick={() => changeQuantity("subtraction")}> <img src={ Minus } alt="Diminuir quantidade do produto" /> </button>
                <span>{itemQuantity}</span>
                <button onClick={() => changeQuantity("sum")}> <img src={ Plus } alt="Adicionar produto" /> </button>
                <button>Incluir</button>
            </Selector>
            <button>Incluir</button>
            <img src={ Favorite } alt="Adicionar aos favoritos" />

        </Container>
    )
}