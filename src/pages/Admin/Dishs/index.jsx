import { Container } from "./style";
import { Header } from "../../../components/admin/header";
import { Footer } from "../../../components/footer";
import { Dish } from "../../../components/admin/dish";

export function Dishs() {
    return(
        <Container>
            <Header />
            <Dish />
            <Footer />
        </Container>
    )
}