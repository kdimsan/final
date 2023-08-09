import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import { Logo } from "../../components/logo";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


export function SignIn() { 

    const [ email, setEmail ] = useState("");
    const [ password, setPassword] = useState("");

    const { signIn } = useAuth();
    const navigate = useNavigate();

    function handleCreateAccount() {
        navigate("/register");
    }

    function handleSignIn(e) {
        signIn({ email, password });
        e.preventDefault();
    }

    return(
        <Container>
            <Logo />
            <Form >
                <h2>Faça Login</h2>

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

                <button onClick={ handleSignIn }>Entrar</button>

                <a onClick={ () => handleCreateAccount() }>Criar uma conta</a>
            </Form>  
        </Container>
    )
}