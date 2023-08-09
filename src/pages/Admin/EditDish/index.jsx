import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Form, ImageContainer, ImageUploader, NameContainer, CategoryContainer, IngredientsContainer, PriceContainer, DescriptionContainer } from "./style";

import { Header } from "../../../components/admin/header";
import { Footer } from "../../../components/footer";
import { Ingredients } from "../../../components/admin/Ingredients";
import { SaveButton } from "../../../components/saveButton";
import { BackButton } from "../../../components/backButton";

import Upload from "../../../assets/upload.svg";

export function EditDish() {

    const [data, setData] = useState();

    const [dish, setDish] = useState(null);

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    
    const params = useParams();
    const navigate = useNavigate();

    function handleAddTag() {
        if(newTag.trim() !== "") {
            setTags( [...tags, { title: newTag }] );
            setNewTag("");
        }
    }

    function handleRemoveTag(tagDeleted) {
        setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
    }

    async function handleUpdate() {

        const tagsToSend = tags.map((tag) => tag.title);

        if(!dish.name) {
            return alert("Favor digitar o nome");
        }

        await api.put(`/pratos/${params.id}`, {
            name: dish.name,
            category: dish.category,
            ingredients: dish.ingredients,
            price: dish.price,
            description: dish.description,
            tags: tagsToSend
        }).then(() => {
            alert("Atualizado com sucesso.");
            navigate(-1)
        });
    }
    
    useEffect(() => {
        async function fetchPlate() {
            const response = await api.get(`/pratos/${params.id}`);
            setData(response.data);
            setDish(response.data.dish);
            setTags(response.data.tags);
        }
        fetchPlate();
    }, []);

    return(
        <Container>
            <Header />
            <BackButton />
            {
            data &&
                <main>
                    <h1>Editar prato</h1>

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
                                value={ dish.name }
                                onChange={ (e) => setDish({ ...dish, name: e.target.value }) } 
                            />
                        </NameContainer>

                        <CategoryContainer htmlFor="options">
                            <span>Categoria</span>
                            <select 
                                onChange={ (e) => setDish({ ...dish, category: e.target.value }) } 
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
                                            value={ tag.title }
                                            onClick={  () => {handleRemoveTag(tag)} }
                                        />
                                    ))
                                }
                                
                                <Ingredients
                                    isNew
                                    placeholder={"Adicionar"}
                                    onClick={handleAddTag}
                                    onChange={ e => setNewTag(e.target.value) }
                                    value={ newTag }
                                />
                            </div>
                        </IngredientsContainer>

                        <PriceContainer htmlFor="price">
                            <span>Preço</span>
                            <div>
                                <span>R$</span>
                                <input
                                    type="text"
                                    id="price"
                                    value={ dish.price }
                                    onChange={ (e) => setDish({ ...dish, price:e.target.value }) } 
                                />
                            </div>
                        </PriceContainer>

                        <DescriptionContainer htmlFor="description">
                            <span>Descrição</span>
                            <textarea
                                id="description"
                                rows="5"
                                cols="40"
                               value={ dish.description }
                               onChange={ (e) => setDish({ ...dish, description: e.target.value }) } 
                            />
                        </DescriptionContainer>

                        <SaveButton onClick={ () => handleUpdate() } title="Salvar prato"/>
                    </Form>
                </main>
            }
            <Footer />
        </Container>
    )
}