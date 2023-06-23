import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    margin: 0 auto ;

    white-space: nowrap;

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

    @media(min-width: 2200px) {
        font-size: 32px;
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
        @media(min-width: 2200px) {
            height: 40px;
            width: 40px;
        }
    }
    
`