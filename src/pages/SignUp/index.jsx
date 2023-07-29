import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Logo } from "../../components/logo";
import { api } from "../../services/api";

export function SignUp() { 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();
        if(!name || !email || !password) {
           return alert("Preencha todos os campos.");
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Cadastro realizado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.error);
            } else {
                alert("Não foi possível realizar o cadastro.");
            }
        });
    }

    return(
        <Container>

            <Logo />

            <Form >
                <h2>Crie sua conta</h2>

                <label htmlFor="name">Nome</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Exemplo: Maria da Silva"
                    onChange={e => setName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    placeholder="Exemplo: exemplo@exemplo.com.br "
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />

                <button onClick={handleSignUp}>Cadastrar</button>

                <Link to="/">Já tenho uma conta</Link>
            </Form>
            
            
            
        </Container>
    )
}