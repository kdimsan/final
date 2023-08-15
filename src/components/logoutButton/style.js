import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;

    >img {
        @media(max-width: 769px) {
            display: none;
        }

        @media(min-width: 770px) {
            display: flex;
            
            width: 22px;
            height: 22px; 
            
            cursor: pointer;
        }
    }

    >span { 
        display: flex;
        
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 200;
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

        @media(min-width: 770px) {
            display: none;
        }
    }
`;

