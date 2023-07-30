import { Container, ProductContainer, ProductImage, ProductInfo, IngredientsOrganizer, Selector, IncludeButton } from "./style";

import React, { useState } from "react";
import { Ingredient } from "../Ingredient";
import { BackButton } from "../backButton";
import Minus from "../../assets/minus.svg"
import Plus from "../../assets/plus.svg"
import Orders from "../../assets/ordersMobile.svg"


export function Dish() {
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
            <BackButton />
            <ProductContainer>
                <ProductImage>
                    <img width={ 264 } height={ 264 } src="src/assets/product.png" alt="Foto do produto" />
                </ProductImage>
                <ProductInfo>
                    <h2>Salada Ravanello</h2>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corporis minima voluptate laboriosam neque beatae dignissimos illum dicta fuga itaque. Ad voluptates excepturi aliquid repudiandae tempore rerum accusamus et modi?.</p>
                    <IngredientsOrganizer>
                        <Ingredient />
                        <Ingredient />
                        <Ingredient />
                        <Ingredient />
                        <Ingredient />
                        <Ingredient />
                        <Ingredient />
                    </IngredientsOrganizer>
                    <Selector>
                        <button onClick={() => changeQuantity("subtraction")}> <img src={ Minus } alt="Diminuir quantidade do produto" /> </button>
                        <span>{ itemQuantity }</span>
                        <button onClick={() => changeQuantity("sum")}> <img src={ Plus } alt="Adicionar produto" /> </button>
                        <IncludeButton> 
                            <img src={ Orders } alt="Incluir ao carrinho." />
                            <span>Incluir</span>
                            <span>R$ 25,00</span>
                        </IncludeButton>
                    </Selector>
                </ProductInfo>
            </ProductContainer>
        </Container>
    )
}