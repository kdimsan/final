import styled from "styled-components";

export const Container = styled.button`
    
    padding: 10px 40px;

    gap: 10px;
        
    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
        
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};

    cursor: pointer;

    transition: filter 0.3s ease-in;

    :hover {
        filter: opacity(0.7);
    }
`;