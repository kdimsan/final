import styled from "styled-components";

export const Container = styled.div`
> a {
    
}
`;

export const ProductContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const ProductImage = styled.div`
    margin: 16px 0;
`;

export const ProductInfo = styled.div`
    text-align: center;
    > h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 26px;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        margin-bottom: 20px;
    }
    
    > p {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        margin: 0 15px 20px;
    }
`;

export const IngredientsOrganizer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;
`;