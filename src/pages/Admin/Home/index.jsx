import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, PlatesOrganizer } from "./style";

import { Header } from "../../../components/admin/header";
import { Banner } from "../../../components/banner";
import { ProductCard } from "../../../components/admin/productCard";
import { Footer } from "../../../components/footer";

import { api } from "../../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [plates, setPlates] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/pratos?name=${search}`);
      setPlates(response.data);
    }
    fetchPlates();
  }, [search]);

  function handlePlateDetail(id) {
    navigate(`/detalhes/${id}`);
  }
  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />
      <Banner />
      <h2>Refeições</h2>
      <PlatesOrganizer>
        {plates.map((plate) => (
            console.log("esse é um plate",plate), /* fazer o map para pegar todos os plates, e aí fazer um filter para pegar o plate.category e colocar 
            cada um em seu lugar de categoria. */
          <ProductCard
            key={String(plate.id)}
            data={plate}
            onClick={() => handlePlateDetail(plate.id)}
          />
        ))}
      </PlatesOrganizer>
      <Footer />
    </Container>
  );
}
