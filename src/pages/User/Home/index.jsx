import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, PlatesOrganizer } from "./styles";

import { Header } from "../../../components/User/header";
import { ProductCard } from "../../../components/User/productCard";
import { Footer } from "../../../components/footer";
import { Banner } from "../../../components/banner";

import { api } from "../../../services/api";


export function Home() {
    const [search, setSearch] = useState("");
    const [plates, setPlates] = useState([]);

    const navigate = useNavigate();
  
    function handlePlateDetail(id) {
      navigate(`/pratos/${id}`);
    }

    useEffect(() => {
        async function fetchPlates() {
        const response = await api.get(`/pratos?name=${search}&ingredients=${search}`);
        setPlates(response.data);
        }
        fetchPlates();
    }, [search]);

    return(
        <Container>
           <Header onChange={(e) => setSearch(e.target.value)} />
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
                        onClick={ () => handlePlateDetail(plate.id) }
                    />
                ))}
            </PlatesOrganizer>
            </main>
            <Footer />
        </Container>
    )
}