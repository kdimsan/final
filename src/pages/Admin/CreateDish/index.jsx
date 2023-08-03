import { useState } from "react";

import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Form, ImageContainer, ImageUploader, NameContainer, CategoryContainer, IngredientsContainer, PriceContainer, DescriptionContainer } from "./style";
import { BackButton } from "../../../components/backButton";
import { Header } from "../../../components/admin/header";
import { Footer } from "../../../components/footer";
import { SaveButton } from "../../../components/saveButton";
import { Ingredients } from "../../../components/admin/Ingredients";

import Upload from "../../../assets/upload.svg";

export function CreateDish() {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag() {
        if(!newTag) {
            return alert("Valor vazio inválido");
        }
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(tagDeleted) {
        setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
    }

    const navigate = useNavigate()

   async function handlePlateCreate() {
    if(!name) {
        return alert("Campo nome vazio, favor preencha.")
    }
    if(!category) {
        return alert("Favor selecionar uma categoria ao prato.")
    }
    if(!price) {
        return alert("Favor digitar o valor do prato.")
    }
    if(!description) {
        return alert("Favor adicionar uma descrição ao prato.")
    }
    if(!tags) {
        return alert("Indique, ao menos, um ingrediente do prato.")
    }

    if(newTag) {
        return alert("Há ingredientes que não foram adicionados, favor clicar para adicionar.");
    }
    await api.post("/pratos", {
        name,
        category,
        price,
        description,
        ingredients: tags
    })
    .then(() =>{
        alert("Prato criado com sucesso.")
        navigate("/")
    })
    .catch(error => {
        if(error.response) {
            alert(error.response.data.message);
        } else {
            alert("Não foi possível realizar o cadastro.");
        }
     });
    };
    
    return(
        <Container>
            <Header />
            <main>
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
                            onChange={e => setName(e.target.value)}
                        />
                    </NameContainer>

                    <CategoryContainer htmlFor="options">
                        <span>Categoria</span>
                        <select 
                            onChange={e => setCategory(e.target.value)} 
                            id="options">
                                <option value=""></option>
                                <option value="meal">Refeição</option>
                                <option value="main plate">Prato principal</option>
                                <option value="drink">Bebidas</option>
                        </select>
                    </CategoryContainer>

                    <IngredientsContainer>  
                        <span>Ingredientes</span>
                        <div>
                            {
                                tags.map((tag, index) => (
                                    <Ingredients
                                        key={ String(index) }
                                        onClick={( ) => {handleRemoveTag(tag)}}
                                        value={ tag }
                                    />
                                ))
                            }
                            <Ingredients
                                isNew
                                placeholder={"Adicionar"}
                                onClick={handleAddTag}
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                            />
                        </div>
                    </IngredientsContainer>

                    <PriceContainer htmlFor="price">
                        <span>Preço</span>
                        <input
                            type="text"
                            id="price"
                            placeholder="R$ 00,00"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </PriceContainer>

                    <DescriptionContainer htmlFor="description">
                        <span>Descrição</span>
                        <textarea
                            id="description"
                            rows="5"
                            cols="40"
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </DescriptionContainer>
                <SaveButton onClick={handlePlateCreate} title="Salvar prato"/>
                </Form>
            </main>
            <Footer />
        </Container>
    )
}