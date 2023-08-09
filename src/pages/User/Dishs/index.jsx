import { Container } from "./style";
import { Header } from "../../../components/User/header";
import { Footer } from "../../../components/footer";
import { Dish } from "../../../components/User/dish";

export function Dishs() {
    return(
        <Container>
            <Header />
            <Dish />
            <Footer />
        </Container>
    )
}