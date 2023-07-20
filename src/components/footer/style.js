import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    padding: 0 20px;

    height: 77px;

    margin-top: 24px;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

    animation-name: appearing; 
    animation-duration: 2s;
    animation-delay: 1.5s;
    animation-fill-mode: backwards;

    @media(min-width: 770px) {
        justify-content: space-around;
        margin-top: 60px;
    }

    > p {
        font-family: 'Roboto', sans-serif;
        font-size: clamp(10px, 3vw, 18px);
        color: ${({theme}) => theme.COLORS.LIGHT_200};
        text-align: center;

        
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

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    >img {
        height: 22px;
        width: 22px;

        @media(min-width: 770px) {
            width: 30px;
            height: 30px;
        }
    }

    > h3 {
        font-family: 'Roboto', sans-serif;
        font-size: clamp(14px, 3vw, 24px);
        color: ${({theme}) => theme.COLORS.LIGHT_700};
        white-space: nowrap;
        
    }
`