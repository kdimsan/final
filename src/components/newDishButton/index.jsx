import { Container } from "./style";

export function NewDishButton({onClick, title}) {
    return(
        <Container onClick={ onClick }>
                { title }
        </Container>
    )
}