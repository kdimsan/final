import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 20px 20px 0;

    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    cursor: pointer;
        
    @media(min-width: 770px) {
        font-weight: 600;
        margin: 24px 40px 0;
    }
    

`;