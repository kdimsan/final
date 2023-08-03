import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    gap: 7px;

    width: fit-content;

    margin: 20px 28px 0;

    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    cursor: pointer;
    
    @media(min-width: 770px) {
        margin: 40px 44px 0;
    }

    @media(min-width: 1024px) {
        margin: 40px 100px 0;
    }

    @media(min-width: 1200px) {
        margin: 40px 124px 0;
    }
`;