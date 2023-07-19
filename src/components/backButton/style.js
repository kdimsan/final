import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 20px 20px 0;

    cursor: pointer;
    > a {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        text-decoration: none;
    }

`;