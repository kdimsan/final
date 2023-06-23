import { Container, Banner } from "./styles"
import { Header } from "../../components/header"

export function Home() {
    return(
        <Container>
            <Header />
            <Banner>
                <img src="" alt="Macaroons" />
                <h3>Sabores inigualáveis</h3>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p> 
            </Banner>
        </Container>
    )
}