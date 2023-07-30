import React, { useState } from "react"

import { Container, Selector, InfoContainer } from "./styles"
import Minus from "../../assets/minus.svg"
import Plus from "../../assets/plus.svg"
import Favorite from "../../assets/favorite.svg"

export function ProductCard() {
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
            <InfoContainer to= "/prato">
            <img src="src/assets/product.png" alt="Foto do produto" />
            <h5>Salada Ravanello</h5>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h4>R$ 49,97</h4>
            </InfoContainer>
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