import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    position: relative;

    @media(min-width: 770px) {
        width: 50%;
        max-width: 216px;
        height: 56px;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 12px ;

        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        border-radius: 5px;

        cursor: pointer;
    }

    >img {
        height: 20px;
        width: 20px;

        @media(min-width: 350px) {
            width: 24px;
            height: 24px;
        }

        @media(min-width: 600px) {
            width: 28px;
            height: 28px;
        }
    }

    >div {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -10px;
        left: 8px;

        width: 24px;

        padding: 1px;

        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        border-radius:50%;

        @media(min-width: 350px) {
            top: -10px;
            left: 12px;
        }

        @media(min-width: 600px) {
            top: -8px;
            left: 15px;
        }
        
        @media(min-width: 770px) {
            display: block;

            position: static;
            
            border-radius: 8px;
            width: auto;
            padding: 10px;
        }

        >span {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            white-space: nowrap;
        }
    }
`;