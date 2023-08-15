import { Container } from "./style";

export function SaveButton({ title, onClick }) {
    return(
        <Container onClick={ onClick }>
            <span>{ title }</span>
        </Container>
    )
}