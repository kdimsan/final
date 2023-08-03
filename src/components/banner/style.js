import styled from "styled-components";

export const Container = styled.div`

    display: flex;  
    grid-template-areas: "a b"
    "a c";

    height: 120px; 
   
    background: linear-gradient(180deg, #091E26, #00131C );
    border-radius: 5px;

    animation-name: appearing;
    animation-duration: 2s;
    animation-delay: 1.5s;
    animation-fill-mode: backwards;

    @media(max-width: 319px) {
        
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin: 44px 10px 0;
 
        position: initial;

        padding: 35px;
    }

    @media(min-width: 320px) {
        margin: 44px 15px 31px 15px;
    }

    @media(min-width: 430px) {
        margin: 44px 15px 31px 36px;
    }

    @media(min-width: 770px) {
        margin: 100px 44px 31px;

        height: 200px;
    }

    @media(min-width: 1024px) {
        margin: 164px 100px 31px ;
        height: 230px;
    }

    @media(min-width: 1300px) {
        margin: 164px 124px 31px;
        height: 260px;
    } 

    > img:nth-child(1) { 
        grid-area: a;
        position: relative;
        top: -29px;
        left: -15px;
        width: 230px;
        height: 148px;

        @media(max-width: 319px) {
            position: absolute ;
            left: 0;
            top: 129px;  
            
            animation-name: appearing;
            animation-duration: 2s;
            animation-delay: 3.5s;
            animation-fill-mode: backwards;
        }

        @media(min-width: 430px) {
            left: -26px;
        }      
        
        @media(min-width: 770px) {
            display: none;
        }
    }

    >img:nth-child(2) {
       display: none;

       animation-name: topdown;
       animation-duration: 2s;
       animation-delay: 1.8s;
       animation-fill-mode: backwards;
        
       @media(min-width: 770px) {
            display: inline;
            position: relative;
            width: 400px;
            top: -56px;
            left: -35px;
            height: 256px;
       }

       @media(min-width: 1024px) {
            width: 483px;
            top: -146px;
            left: -47px;
            height: 376px;
       }

       @media(min-width: 1300px) {
            width: 630px;
            top: -146px;
            left: -55px;
            height: 406px;
       }
       
    }  
`;

export const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    z-index: 1;

    animation-name: leftright;
    animation-duration: 1s;
    animation-delay: 1.5s;



   @media(min-width: 320px) {
        margin-left: -50px;
   }

   @media(min-width: 380px) {
        margin-left: 0;
   }

    > h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        white-space: nowrap;

        @media(max-width: 319px) {
            font-size: clamp(16px, 5vw, 28px);
        }

        @media(min-width: 320px) {
            
            font-size: clamp(14px, 4vw, 24px);
        }

        @media(min-width: 425px) {
            
            font-size: clamp(18px, 4vw, 24px);
        }

        @media(min-width: 1024px) {
            font-size: clamp(20px, 3vw, 46px);

        }
    }

    > p {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(12px, 2vw, 18px);
        font-weight: 400;
        line-height: 18px;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        @media(min-width: 320px) {
           
        }

        @media(min-width: 425px) {
            
            font-size: clamp(14px, 2vw, 20px);
        }

        @media(min-width: 1300px) {
            
            font-size: clamp(14px, 2vw, 16px);
        }
    }

    @keyframes leftright {
        0% {
            transform: translateX(-25px);
        }
        100%{
            transform: translateY(0);
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

    @keyframes topdown {
        0% {
            transform: translateY(-30px);
            filter: opacity(0);
        }

        100% {
            transform: translateY(0);
            filter: opacity(1);
        }
    }   
`;