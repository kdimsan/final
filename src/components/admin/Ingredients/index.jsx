import { Container } from "./style";

import X from "../../../assets/x.svg";
import Plus from "../../../assets/plus.svg";

export function Ingredients({ isNew, onClick, value, ...rest}) {
    return(
        <Container isNew={isNew}>
           <input 
                type="text" 
                value={value}
                disabled={!isNew}
                {...rest}
            />
            <button onClick={onClick}>
                {isNew ? <img src={Plus} alt="Adicionar" /> : <img src={X} alt="Remover" />}
            </button>
        </Container>
    )
}