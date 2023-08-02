import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 114px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({theme}) => theme.COLORS.DARK_700};

    animation-name: appearing;
    animation-duration: 2s;
    animation-delay: 0.3s;
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

    >input { 
        display: none;

        @media(min-width: 770px) {
            display: flex;
            
            width: 100%;
            max-width: 900px;
            height: 48px;

            padding: 0 20px;

            background-color: ${({theme}) => theme.COLORS.DARK_900};
            border: none;
            border-radius: 5px;

            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.LIGHT_500};   
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

        /*------------- DESKTOP -------------- */
        @media(min-width: 770px) {
            display: none;
        }
    }

    >button {
        display: none;
        cursor: pointer;

        @media(min-width: 770px) {
            display: flex;
            align-items: center;
            gap: 10px;

            background: none;
            border: none;

            >img {
                width: 22px;
                height: 22px;
            }
        }
    }
    >a {
        display: none;

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