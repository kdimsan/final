import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    
   @media(min-width: 770px) {
        margin: 0 60px;
    }
    @media(min-width: 900px) {
        margin: 0 100px;
    }
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    @media(min-width: 770px) {
        flex-direction: row;
        min-height: 50vh;
    }

`;

export const ProductImage = styled.div`
    @media(min-width: 770px) {
        margin-right: 30px;
    }
`;

export const ProductInfo = styled.div`
    text-align: center;

    @media(min-width: 770px) {
        text-align: justify;
    }

    > h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 26px;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        margin: 20px 0;

        @media(min-width: 770px) {
            font-size: 36px;
        }
        @media(min-width: 1200px) {
            font-size: 40px;
        }
    }
    
    > p {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 300;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        margin: 0 15px 20px;

        @media(min-width: 770px) {
            font-size: 20px;
            margin: 0 0 40px;
        }
        @media(min-width: 1200px) {
            font-size: 22px;
            margin: 0 0 60px;
        }
    }
`;

export const IngredientsOrganizer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    @media(min-width: 770px) {
        justify-content: start;
        margin-bottom: 40px;
    }
`;
export const Selector = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    @media(min-width: 770px) {
        justify-content: start;
    }
   
    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;

        background: none;
        border: none;

        > img {
            width: 22px;
            height: 22px;
        }
    }
`;

export const IncludeButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 24px;

    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    border-radius: 5px;
    @media(min-width: 900px) {
        margin-left: 30px;
    }
    > img {
        display: none;
        width: 20px;
        height: 20px;
        @media(min-width: 320px){
            display: inline;
        }
    }
    > span {
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        @media(min-width: 770px) {
            font-size: 16px;
        }
    }
`;