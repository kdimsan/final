import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    >main {
        flex: 1;
        
        >h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            letter-spacing: 1px;
            color: ${({theme}) => theme.COLORS.LIGHT_100};

            width: fit-content;
    
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
        "d d e"
        "f f f"
        "g h i"
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
        display: flex;
        flex-direction: column;

        margin-bottom: 30px;

        font-family: 'Roboto', sans-serif;
        text-align: start;

        @media (min-width: 770px) {
            padding: 0 16px;
        }
        
        >span {
            margin-bottom: 10px;
        }

        >input, textarea, select {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            :focus {
                outline: 2px solid ${({theme}) => theme.COLORS.LIGHT_500};
            }
        }

        >input {
            height: 50px;

            padding-left: 16px;

            border-radius: 8px;
            border: none;

            background-color: ${({theme}) => theme.COLORS.DARK_800};

            :focus {
                color: ${({theme}) => theme.COLORS.LIGHT_100};
            }
        }

        >select {
            width: 100%;
            height: 50px;

            padding-left: 16px;

            border-radius: 8px;
            border: none;

            color: ${({theme}) => theme.COLORS.LIGHT_500};

            background-color: ${({theme}) => theme.COLORS.DARK_800};
        }

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
    }
    .action-buttons{
        grid-area: i;

        display: flex;
        gap: 32px;

        @media(min-width: 770px) {
            gap: 0;
        }

        >:first-child{
            background-color: ${({theme}) => theme.COLORS.DARK_800};
            border: none;
            border-radius: 8px;

            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.LIGHT_100}; ;
        }
        
        >button {
                width: 100%;
                
                @media(min-width: 770px) {
                    justify-self: end;
                    margin: 0 17px;
                }
            }
    }
`;

export const ImageContainer = styled.label`
    grid-area: a;

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
    grid-area: b;
`;

export const CategoryContainer = styled.label`
    grid-area: c;
`;

export const IngredientsContainer = styled.label`
    grid-area: d;

    >div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;

        width: 100%;

        padding: 8px;

        border-radius: 8px;
        border: none;

        color: ${({theme}) => theme.COLORS.LIGHT_500};

        background-color: ${({theme}) => theme.COLORS.DARK_800};
    }
`;

export const PriceContainer = styled.label`
    grid-area: e;

    >div {
        display: flex;
        align-items: center;

        background-color: ${({theme}) => theme.COLORS.DARK_800};

        border-radius: 8px;

        >input {
            width: 100%;
            height: 50px;

            padding-left: 5px;

            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.LIGHT_100};

            background-color: ${({theme}) => theme.COLORS.DARK_800};
            border: none;
            border-radius: 8px;
            
            :focus {
                outline: 2px solid ${({theme}) => theme.COLORS.LIGHT_500};
                color: ${({theme}) => theme.COLORS.LIGHT_100}; 
            }
        }

        >span {
            padding-left: 14px;
        }
    }
`;

export const DescriptionContainer = styled.label`
    grid-area: f;
`;
