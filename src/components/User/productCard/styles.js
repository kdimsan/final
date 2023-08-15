import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    position: relative;
    
    min-width: 190px;
    height: 310px;

    background-color: ${({theme}) => theme.COLORS.DARK_200};
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};

    animation-name: appearing; 
    animation-duration: 1.2s;
    animation-delay: 1.2s;
    animation-fill-mode: backwards;

    @media(min-width: 400px) {
        min-width: 210px;
        max-width: 210px;
    }

    @media(min-width: 770px) {
        min-width: 254px;
        max-width: 254px;
        height: 432px;
        
        padding: 20px;
    }

    @media(min-width: 1024px) {
        min-width: 304px;
        max-width: 304px;
    }

    > button {
        margin-bottom: 24px;
        width: 80%;

        padding: 4px;

        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        border: none;
        border-radius: 5px;

        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        line-height: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        cursor: pointer;

        @media(min-width: 770px) {
            display: none;
        }
    }

    >img:last-child {
        position: absolute;
        top: 16px;
        right: 16px;

        cursor: pointer;
    }
    .plate-infos{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    text-decoration: none;

    cursor: pointer;

    > img:nth-child(1) {
            height: 88px;
            width: 88px;

            margin: 24px 0 12px;
        }

    > h5 {
            font-family: 'Poppins', sans-serif;
            font-size: 15px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.LIGHT_400};

            @media(min-width: 770px) {
                font-size: clamp(16px, 2vw, 24px);
                font-weight: 600;
                line-height: 56px;
            }
        }

    > p {
            display: none;

            @media(min-width: 770px) {
                display: block;

                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                text-align: center;
                line-height: 20px;
                color: ${({theme}) => theme.COLORS.LIGHT_400}
            }

            @media(min-width: 1300px) {
                margin: 10px 0;
            }
        }

    > h4 {
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.CAKE_200};

            margin: 14px 0;

            @media(min-width: 770px) {
                font-size: clamp(16px, 2vw, 26px);
            }
        }
    }
    
    @keyframes appearing {
        0% {
        filter: opacity(0);
        }

        100% {
            filter: opacity(1);
        } 
    }
`

export const Selector = styled.div`
    display: flex;
    gap: 14px;

    align-items: center;

    margin-bottom: 24px;

    @media(min-width: 1300px) {
        margin: 25px 0;
    }

    >button {
        height: 18px;

        display: flex;
        align-items: center;
        justify-content: center; 

        background: none;
        border: none;

        cursor: pointer;
    }

    >button:last-child {
        padding: 20px 24px;

        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        border: none;
        border-radius: 5px;

        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        line-height: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        cursor: pointer;

        transition: filter 0.6s;

        :hover {
            filter: brightness(0.8);
        }

        @media(max-width: 769px) {
            display: none;
        }
    }

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        @media(min-width: 770px) {
            font-weight: 600;
            font-size: 18px;
        }
    }
`;