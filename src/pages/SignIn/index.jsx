import { Container, Form } from "./styles"
import { Logo } from "../../components/logo"

export function SignIn() { 
    return(
        <Container>
            <Logo />

            <Form >
                <h2>Faça Login</h2>

                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br "/>

                <label for="password">Senha</label>
                <input type="password" id="password" placeholder="Senha"/>

                <button>Entrar</button>

                <a>Criar uma conta</a>
            </Form>
            
            
            
        </Container>
    )
}