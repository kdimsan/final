import { Container , BannerText} from "./style";

export function Banner() {
    return(
    <Container>
        <img src="src/assets/macaroons.png" alt="Macaroons" />
        <img src="src/assets/macaroonsDesktop.png" alt="Macaroons" />
        <BannerText>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </BannerText> 
    </Container>
    )
}