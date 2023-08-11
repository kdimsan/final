import { useLocation } from "react-router-dom";

import { Container } from "./style";
import { Header } from "../../../components/User/header";
import { Footer } from "../../../components/footer";
import { Dish } from "../../../components/User/dish";

export function Dishs() {

    const location = useLocation();
    const cartItems = location.state;
    
    return(
        <Container>
            <Header cartItems={cartItems}/>
            <Dish />
            <Footer />
        </Container>
    )
}