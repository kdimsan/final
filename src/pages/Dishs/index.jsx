import { Container } from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Dish } from "../../components/Dish";


export function Dishs() {
    return(
        <Container>
            <Header />
            <Dish />
            <Footer />
        </Container>
    )
}