import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: ${({theme})=> theme.COLORS.CAKE_200};
    
    @media(min-width: 770px) {
        display: block;
    }
    >span { 
        display: flex;
        align-items: center;

        @media(min-width: 770px){
            position: relative;
            left:120px;
            }

        @media(min-width: 1024px){
            left:145px;
        }
        }
`;
export const Divisor = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    gap: 8px;
    /*------------- DESKTOP -------------- */
    @media(min-width: 770px) {
        margin: 0;
    }

    >h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};


        @media(min-width: 350px) {
            font-size: 22px;
        }

        @media(min-width: 600px) {
            font-size: 24px;
        }

        /*------------- DESKTOP -------------- */
        @media(min-width: 770px) {
            font-size: 20px;
        }

        @media(min-width: 1024px) {
            font-size: 24px;
        }
    }

    >img {
        height: 32px;
        width: 32px;
        
        @media(min-width: 350px) {
            height: 36px;
            width: 36px;
        }

        /*------------- DESKTOP -------------- */
        @media(min-width: 770px) {
            height: 30px;
            width: 30px;
        }
    }
`;
