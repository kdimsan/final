import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    >main {
        flex: 1;

        >div {
            >h2 {
                font-family: 'Poppins', sans-serif;
                color: ${({theme}) => theme.COLORS.LIGHT_300};
                font-weight: 500;
                letter-spacing: 1.2px;

                margin: 30px 16px 0;

                animation-name: appearing;
                animation-duration: 2s;
                animation-delay: 1.5s;
                animation-fill-mode: backwards;

                @media(min-width: 400px) {
                    margin: 30px 20px 0;
                }

                @media(min-width: 770px) {
                    margin: 30px 44px 0;
                }

                @media(min-width: 1024px) {
                    margin: 30px 100px 0;
                }

                @media(min-width: 1200px) {
                    margin: 30px 124px 0;
                }
            }
        }
        
    }
`;
 
export const PlatesOrganizer = styled.div`
    display: flex;
    gap: 10px;

    margin: 10px 15px 20px 20px;
    overflow-x: auto;

    @media(min-width: 770px) {
        margin: 10px 15px 20px 44px;
    }

    @media(min-width: 1200px) {
        margin: 10px 15px 20px 124px;
    }
`;