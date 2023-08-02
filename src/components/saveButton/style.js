import styled from "styled-components";

export const Container = styled.button`
    
    padding: 12px;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
    border: none;
    border-radius: 8px;

    cursor: pointer;
`;