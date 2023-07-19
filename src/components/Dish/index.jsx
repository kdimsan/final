import { Link } from "react-router-dom";
import { Container, ProductContainer, ProductImage, ProductInfo, IngredientsOrganizer } from "./style";

import { Ingredient } from "../Ingredient";
import { BackButton } from "../backButton";


export function Dish() {
    return(
        <Container>
            <BackButton />
            <ProductContainer>
                <ProductImage>
                    <img width={264} height={264} src="src/assets/product.png" alt="Foto do produto" />
                </ProductImage>
                <ProductInfo>
                    <h2>Salada Ravanello</h2>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                    <IngredientsOrganizer>
                        <Ingredient />
                        <Ingredient />
                        <Ingredient />
                        <Ingredient />
                        <Ingredient />
                        <Ingredient />
                        <Ingredient />
                    </IngredientsOrganizer>
                </ProductInfo>
            </ProductContainer>
        </Container>
    )
}