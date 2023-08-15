import { Container , BannerText} from "./style";

import bannerImageDesktop from "../../assets/BannerImage.png";
import bannerImage from "../../assets/macaroons.png";

export function Banner() {
    return(
    <Container>
        <img src={bannerImageDesktop} alt="Macaroons" />
        <img src={bannerImage} alt="Macaroons" />
        <BannerText>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </BannerText> 
    </Container>
    )
}