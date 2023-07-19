import { Container, Form } from "./styles";
import { Logo } from "../../components/logo";
import { Link } from "react-router-dom";

export function SignUp() { 
    return(
        <Container>
            <Logo />

            <Form >
                <h2>Crie sua conta</h2>

                <label for="name">Nome</label>
                <input type="text" id="name" placeholder="Exemplo: Maria da Silva"/>

                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br "/>

                <label for="password">Senha</label>
                <input type="password" id="password" placeholder="Senha"/>

                <button>Entrar</button>

                <Link to="/">Já tenho uma conta</Link>
            </Form>
            
            
            
        </Container>
    )
}