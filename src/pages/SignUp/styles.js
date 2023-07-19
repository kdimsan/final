import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    

    color: #fff;

    

    @media(min-width: 850px) {
        display: grid;
        grid-template-areas: "a b";
        align-items: center;
       
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    @media(min-width: 850px) {
        background-color:${({theme}) => theme.COLORS.DARK_700};

        padding: 48px ;
        margin-right: 60px;

        border-radius: 10px;
    }

    @media(min-width: 1024px) {
        margin-right: 88px;
        padding: 64px;
    }

    @media(min-width: 1200px) {
        margin-right: 108px;
    }
    @media(min-width: 1600px) {
        margin-right: 188px;
        padding: 104px;
    }

    >h2 {
        display: none;

        @media(min-width: 850px) {
            display: block;

            margin: 0 auto 32px;

            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            line-height: 44.8px;
        }

        @media(min-width: 1200px) {
            font-size: 32px;

        }
    }

    > label {
        margin: 0 47px 8px 65px;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;

     color:${({theme}) => theme.COLORS.LIGHT_400};

     @media(min-width: 850px) {
        margin: 0;
        margin-bottom: 8px;
     }
    }

    > input {
        background-color:${({theme}) => theme.COLORS.DARK_900};

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color:${({theme}) => theme.COLORS.LIGHT_500};

        padding: 14px 16px;
        
        margin: 0 47px 32px 65px;

        height: 48px;

        border: none;
        border-radius: 8px;

        @media(min-width: 850px) {
        margin: 0;
        margin-bottom: 32px;
     }
    }

    > button {
        margin: 0 47px 32px 65px;

        padding: 12px;

        border-radius: 8px;
        border: none;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;
        font-weight:500;
        font-size: 14px;
        line-height: 24px;

        background-color:${({theme}) => theme.COLORS.TOMATO_100} ;

        @media(min-width: 850px) {
            margin: 0;
            margin-bottom: 32px;
        }
    }

    > a {
        background: none;
        border: none;

        margin: auto;
        

        color: ${({theme}) => theme.COLORS.LIGHT_100};

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-decoration: none;

        cursor: pointer;
    }
`