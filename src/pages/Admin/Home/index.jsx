import { Container, Banner, BannerText } from "./style"
import { Header } from "../../../components/admin/header"
import { ProductCard } from "../../../components/admin/productCard"
import { Footer } from "../../../components/footer"

export function Home() {
    return(
        <Container>
            <Header />
            <Banner>
                <img src="src/assets/macaroons.png" alt="Macaroons" />
                <img src="src/assets/macaroonsDesktop.png" alt="Macaroons" />
                <BannerText>
                    <h3>Sabores inigualáveis</h3>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </BannerText> 
            </Banner>
            <h2>Refeições</h2>
            <ProductCard />
            <Footer />
        </Container>
    )
}