import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.DARK_1000};
    border-radius: 5px;
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none" };

    >input {
        max-width: 120px;
        
        background: none;
        border: none;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        
        ::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }

    >button {
        background: none;
        border: none;

        >img {
            width: 8px;
            height: 8px;
        }
    }
`;

