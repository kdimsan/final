import { useState, useEffect } from "react";

import { Container, PlatesOrganizer } from "./styles";

import { Header } from "../../../components/User/header";
import { ProductCard } from "../../../components/User/productCard";
import { Footer } from "../../../components/footer";
import { Banner } from "../../../components/banner";

import { api } from "../../../services/api";


export function Home() {
    const [search, setSearch] = useState("");
    const [plates, setPlates] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    useEffect(() => {
        async function fetchPlates() {
        const response = await api.get(`/pratos?search=${search}`);
        setPlates(response.data);
        }
        fetchPlates();
    }, [search]);

    return(
        <Container>
           <Header 
                onChange={(e) => setSearch(e.target.value)} 
                cartItems={ cartItems }
            />
            <main>
            <Banner />
            <h2>Refeições</h2>
            <PlatesOrganizer>
                {plates.map((plate) => (
                    /* fazer o map para pegar todos os plates, e aí fazer um filter para pegar o plate.category e colocar 
                    cada um em seu lugar de categoria. */
                    <ProductCard
                        key={String(plate.id)}
                        data={plate}
                        addToCart={ addToCart }
                        cartItems={ cartItems }
                    />
                ))}
            </PlatesOrganizer>
            </main>
            <Footer />
        </Container>
    )
}