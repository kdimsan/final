import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    @media(min-width: 770px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        
       justify-content: space-around;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    padding: 20px 40px ;

    @media(min-width: 770px) {
        background-color:${({theme}) => theme.COLORS.DARK_700};
        border-radius: 10px; 

        padding: 40px;
    }

    @media(min-width: 1200px) {
        padding: 64px;
    }

    >h2 {
        display: none;

        @media(min-width: 770px) {
            display: flex;

            margin: auto;

            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            line-height: 44.8px;
        }

        @media(min-width: 1200px) {
            font-size: 32px;
            margin-bottom: 32px;
        }
    }

    > label {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color:${({theme}) => theme.COLORS.LIGHT_400};

     @media(min-width: 770px) {
        margin-bottom: 8px;
     }
    }

    > input {
        background-color:${({theme}) => theme.COLORS.DARK_900};

        margin-bottom: 32px;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color:${({theme}) => theme.COLORS.LIGHT_500};

        padding: 16px;

        border: none;
        border-radius: 8px;

        :focus {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }

        @media(min-width: 770px) {
            width: 348px;
        }
    }

    > button {
        padding: 12px;
        margin-bottom: 32px;

        border-radius: 8px;
        border: none;

        font-family: 'Poppins', sans-serif;
        font-weight:500;
        font-size: 14px;
        line-height: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        background-color:${({theme}) => theme.COLORS.TOMATO_100} ;

        cursor: pointer;
    }

    > a {
        background: none;
        border: none;

        margin: auto;
        
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        cursor: pointer;
    }
`;