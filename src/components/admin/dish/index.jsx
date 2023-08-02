import { Container, ProductContainer, ProductImage, ProductInfo, IngredientsOrganizer} from "./style";
import { Ingredients } from "../../admin/Ingredients";
import { BackButton } from "../../backButton";

export function Dish() {
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
                        <Ingredients />
                        <Ingredients />
                        <Ingredients />
                        <Ingredients />
                        <Ingredients />
                        <Ingredients />
                        <Ingredients />
                    </IngredientsOrganizer>
                <button>Editar prato</button>
                </ProductInfo>
            </ProductContainer>
        </Container>
    )
}