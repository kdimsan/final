import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 114px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({theme}) => theme.COLORS.DARK_700};

    animation-name: appearing;
    animation-duration: 1s;
    animation-fill-mode: backwards;

    @keyframes appearing {
        0% {
            filter: opacity(0);
        }
        100% {
            filter: opacity(1);
        }
    }
`;

export const HeaderContent = styled.div`
    display: grid;
    grid-template-areas: "a b c";
    align-items: center;
    justify-content: space-between;
    
    width: 100%;

    margin: 0 28px;

    @media(min-width: 770px) {
        display: flex;
        gap: 30px;

        margin: 0 44px;
    }

    @media(min-width: 1024px) {
        margin: 0 100px;
        gap: 40px;
    }

    @media(min-width: 1200px) {
        margin: 0 124px;
    }

    >:nth-child(3) {
        @media(max-width: 769px) {
            display: none;
        }
    }

    >img {
        height: 20px;
        width: 20px;

        @media(min-width: 350px) {
            height: 24px;
            width: 24px;
        }

        @media(min-width: 600px) {
            height: 28px;
            width: 28px;
        }

        @media(min-width: 770px) {
            display: none;
        }
    }

    >a {
        @media(max-width: 769px) {
            display: none;
        }
    }
    
    >button  {
        @media(max-width: 769px) {
            display: none;
        }
    }

`;