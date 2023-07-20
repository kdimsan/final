import styled from "styled-components";

export const Container = styled.div`
    
    margin: 10px 15px 15px 0;
    > span {
        padding: 6px;
        background-color: ${({theme}) => theme.COLORS.DARK_1000};
        border-radius: 5px;

        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 12px;

        @media(min-width: 770px) {
            font-size: 14px;
            padding: 6px 8px;
        }
    }
 
`

