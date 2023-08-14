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
  
  function handlePlateDetail(id) {
    navigate(`/pratos/${id}`);
  }

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

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />
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
  );
}
