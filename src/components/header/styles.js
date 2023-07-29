import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 114px;
    
    display: grid;
    grid-template-areas: "a b c";
    align-items: center;
    justify-content: space-around;

    background-color: ${({theme}) => theme.COLORS.DARK_700};

    animation-name: appearing;
    animation-duration: 2s;
    animation-delay: 0.3s;
    animation-fill-mode: backwards;

    /*------------- DESKTOP -------------- */
    @media(min-width: 770px) {
        display: flex;
        justify-content: space-around;
        gap: 30px;

        padding: 0 75px;
    }

    @media(min-width: 1300px) {
        padding: 0 93px;
    }

    @media(min-width: 2200px) {
        height: 130px;

        padding: 0 180px;
    }

    >input { 
        display: none;

        @media(min-width: 770px) {
            display: block;
            
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

        @media(min-width: 2200px) {
            height: 58px;
            font-size:18px;
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

                @media(min-width: 2200px) {
                    width: 26px;
                    height: 26px;
                }
            }
        }
    }
    button:first-of-type{
        
        width: 50%;
        max-width: 216px;
        height: 56px;

        align-items: center;
        justify-content: center;

        background: linear-gradient(to right, ${({theme}) => theme.COLORS.TOMATO_100}, ${({theme}) => theme.COLORS.TOMATO_100});

        border-radius: 5px;

        background-size: 200% 100%;

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        cursor: pointer;

        transition: filter 0.6s;

        :hover { 
            filter: brightness(0.7);
        }

        @media(min-width: 2200px) {
            height: 60px;
            font-size:18px;
        }
    }

@keyframes appearing {
    0% {
       filter: opacity(0);
    }

    100% {
        filter: opacity(1);
    }
}

`