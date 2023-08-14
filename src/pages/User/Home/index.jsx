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

    const platesByCategory = {};

    plates.forEach((plate) => {
        if(!platesByCategory[plate.category]) {
            platesByCategory[plate.category] = [];
        }
        platesByCategory[plate.category].push(plate);
  });

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
            {Object.keys(platesByCategory).map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                        <PlatesOrganizer>
                            {platesByCategory[category].map((plate) => (
                                
                            <ProductCard
                                key={String(plate.id)}
                                data={plate}
                                onClick={ () => handlePlateDetail(plate.id) }
                            />
                            ))}
                        </PlatesOrganizer>
                </div>
            ))}
            </main>
            <Footer />
        </Container>
    )
}