import { useState } from "react";

import { Container, Form, ImageContainer, ImageUploader, NameContainer, CategoryContainer, IngredientsContainer, PriceContainer, DescriptionContainer, Organizer } from "./style";
import { BackButton } from "../../../components/backButton";
import { Header } from "../../../components/admin/header";
import { Footer } from "../../../components/footer";
import { SaveButton } from "../../../components/saveButton";
import { Ingredients } from "../../../components/admin/Ingredients";

import Upload from "../../../assets/upload.svg";

export function CreateDish() {

    return(
        <Container>
            <Header />
            <BackButton />
            <h1>Novo prato</h1>
            <Form>
                <ImageContainer htmlFor="image">
                    <span>Imagem do prato</span>
                    <ImageUploader>
                        <img src={ Upload }alt="Selecionar imagem" />
                        <input 
                            type="file"
                            id="image"
                        />
                        <span>Selecione imagem</span>
                    </ImageUploader>
                </ImageContainer>

                <NameContainer htmlFor="name">
                    <span>Nome</span>
                    <input 
                        type="text"
                        id="name"
                        placeholder="Ex.: Salada Ceasar"
                        
                    />
                </NameContainer>

                <CategoryContainer htmlFor="options">
                    <span>Categoria</span>
                    <select id="options">
                        <option value="meal">Refeição</option>
                        <option value="main plate">Prato principal</option>
                        <option value="drink">Bebidas</option>
                    </select>
                </CategoryContainer>

                <IngredientsContainer htmlFor="Ingredients">  
                    <span>Ingredientes</span>
                    <Organizer>
                        <Ingredients value={"Arroz"} />
                        <Ingredients value={"Arroz"} />
                        <Ingredients value={"Arroz"} />
                        <Ingredients value={"Arroz"} />
                        <Ingredients value={"Mandioca"} />
                        <Ingredients placeholder={"Adicionar"} isNew/>
                    </Organizer>
                       
                </IngredientsContainer>

                <PriceContainer htmlFor="price">
                    <span>Preço</span>
                    <input
                        type="text"
                        id="price"
                        placeholder="R$ 00,00"
                        
                    />
                </PriceContainer>

                <DescriptionContainer htmlFor="description">
                    <span>Descrição</span>
                    <textarea
                        id="description"
                        rows="5"
                        cols="40"
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        
                    />
                </DescriptionContainer>
            <SaveButton title="Salvar"/>
            </Form>
            <Footer />
        </Container>
    )
}