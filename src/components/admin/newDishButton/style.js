import styled from "styled-components";

export const Container = styled.a`

    border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 200;
    line-height: 140%;
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    @media(min-width: 770px) {
        width: 50%;
        max-width: 216px;
        height: 56px;

        background: linear-gradient(to right, ${({theme}) => theme.COLORS.TOMATO_100}, ${({theme}) => theme.COLORS.TOMATO_100});

        border-radius: 5px;

        background-size: 200% 100%;

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        text-decoration: none;

        cursor: pointer;

        transition: filter 0.6s;

        :hover { 
            filter: brightness(0.7);
        }

        @media(min-width: 770px) {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media(min-width: 2200px) {
            height: 60px;
            
            font-size:18px;
        }
    }
`;