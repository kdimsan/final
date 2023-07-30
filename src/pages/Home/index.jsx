import { Container, Banner, Text } from "./styles"
import { Header } from "../../components/header"
import { ProductCard } from "../../components/productCard"
import { Footer } from "../../components/footer"
export function Home() {
    return(
        <Container>
            <Header />
            <Banner>
                <img src="src/assets/macaroons.png" alt="Macaroons" />
                <img src="src/assets/macaroonsDesktop.png" alt="Macaroons" />
                <Text>
                    <h3>Sabores inigualáveis</h3>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </Text> 
            </Banner>
            <h2>Refeições</h2>
            <ProductCard />
            <Footer />
        </Container>
    )
}