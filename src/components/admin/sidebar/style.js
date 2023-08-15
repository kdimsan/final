import styled from "styled-components";

export const Container = styled.div`
    position: fixed;

    height: 100vh;

    display: flex;
    flex-direction: column;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 2;

    background-color:${({theme}) => theme.COLORS.DARK_400};

    left: ${props => props.SideBar ? "0" : "100%"};
    animation: showSidebar .4s;

    @keyframes showSidebar {
        from{
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 100%;
        }
    }

`;

export const SidebarHeader = styled.div`
    height: 114px;

    display: flex;
    align-items: center;
    gap: 20px;
    
    padding: 30px;

    background-color:${({theme}) => theme.COLORS.DARK_700};

    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    >img {
        width: 18px;
        height: 18px;
    }
`;

export const Content = styled.div`
    
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 20px;

        margin: 36px 28px;
`;