import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    
    padding: 16px 14px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 8px;
    
    @media(min-width: 770px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
    }

    >input { 
        display: flex;
        
        width: 100%;

        border: none;
        border-radius: 5px;
        background: none;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_500}; 
        
        :focus {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            outline: 2px solid ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }
    >button {
        background: none;
        border: none;

        width: 28px;
        height: 100%;
    }
`;