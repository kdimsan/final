import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    gap: 4px;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.DARK_1000};
    border-radius: 5px;
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none" };

    >input {
        max-width: 60px;
        
        background: none;
        border: none;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        
        ::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
        :focus {
            outline: none;
        }
        @media(min-width: 1200px) {
            max-width: 120px;
        }
    }

    >button {
        background: none;
        border: none;

        width: 15px;

        cursor: pointer;

        >img {
            width: 8px;
            height: 8px;
        }
    }
`;

