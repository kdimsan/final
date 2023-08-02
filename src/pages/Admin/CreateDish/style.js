import styled from "styled-components";
import { IngredientsOrganizer } from './../../../components/Dish/style';

export const Container = styled.div`
    display: grid;
    flex-direction: column;

    >h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        letter-spacing: 1px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        margin: 20px 28px ;

        @media(min-width: 770px) {
            margin: 20px  44px 0;
        }
        
        @media(min-width: 1024px) {
            margin: 20px 100px 0;
        }

        @media(min-width: 1200px) {
            margin: 20px 124px 0;
        }
    }
    
    >button {
        margin: 0 28px;

        @media(min-width: 770px) {
            justify-self: end;
            width: 150px;
            margin: 0 60px;
        }

        @media(min-width: 1024px) {
            margin: 0 116px;
        }

        @media(min-width: 1200px) {
            margin: 0 143px;
        }
    }
`;

export const Form = styled.div`
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    display: flex;
    flex-direction: column;

    margin: 20px 28px;

    @media(min-width: 770px) {
        display: grid;
        grid-template-areas: 
        "a b c"
        "d d f"
        "g g g"
        ;

        margin: 20px 44px;
    }
    
    @media(min-width: 1024px) {
        margin: 20px 100px;
    }

    @media(min-width: 1200px) {
        margin: 20px 124px;
    }
    
    >label {
        font-family: 'Roboto', sans-serif;
        text-align: start;

        cursor: pointer;

        @media (min-width: 770px) {
            padding: 0 16px;
        }
        >span {
            margin-bottom: 10px;
        }
    }  
`;

export const ImageContainer = styled.label`
    display: flex;
    flex-direction: column;

    margin-bottom: 30px;
`;

export const ImageUploader = styled.div`
    display: flex;
    align-items: center;

    
    width: 100%;

    padding-left: 16px;

    border-radius: 8px;
    border: none;

    color: ${({theme}) => theme.COLORS.LIGHT_500};

    background-color: ${({theme}) => theme.COLORS.DARK_800};
    >input {
        display: none;
    }

    >span {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    >img {
        padding: 10px 8px;
    }
`;

export const NameContainer = styled.label`
    display: flex;
    flex-direction: column;

    margin-bottom: 30px;

    >input {
        height: 50px;

        padding-left: 16px;

        border-radius: 8px;
        border: none;

        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_500};

        background-color: ${({theme}) => theme.COLORS.DARK_800};

        :focus {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }
`;

export const CategoryContainer = styled.label`
    display: flex;
    flex-direction: column;

    margin-bottom: 30px;

    >select {
        width: 100%;
        height: 50px;

        padding-left: 16px;

        border-radius: 8px;
        border: none;

        color: ${({theme}) => theme.COLORS.LIGHT_500};

        background-color: ${({theme}) => theme.COLORS.DARK_800};
    }
`;

export const IngredientsContainer = styled.label`
    display: flex;
    flex-direction: column;
    grid-area: d;

    margin-bottom: 30px;
`;

export const PriceContainer = styled.label`
    display: flex;
    flex-direction: column;

    margin-bottom: 30px;
    
    >input {
        height: 50px;

        padding-left: 16px;

        border-radius: 8px;
        border: none;

         color: ${({theme}) => theme.COLORS.LIGHT_500};

        background-color: ${({theme}) => theme.COLORS.DARK_800};

        :focus {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }
`;

export const DescriptionContainer = styled.label`
    display: flex;
    flex-direction: column;
    grid-area: g;

    margin-bottom: 30px;

    >textarea {
        width: 100%;
        height: 140px;

        padding: 16px;

        border-radius: 8px;
        border: none;
        background-color: ${({theme}) => theme.COLORS.DARK_800};

        font-family: 'Roboto', sans-serif;

        resize: none;
        
        :focus {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }
`;


export const  Organizer= styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;

    width: 100%;

    padding: 8px;

    border-radius: 8px;
    border: none;

    color: ${({theme}) => theme.COLORS.LIGHT_500};

    background-color: ${({theme}) => theme.COLORS.DARK_800};
`;