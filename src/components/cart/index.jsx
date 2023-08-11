import { useState, useEffect } from "react";

import { Container } from "./style";

import CartImage from "../../assets/cart.svg";

export function Cart({ cartItems }) {
    
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <Container>
            <img src={ CartImage } alt="Carrinho" />
            <div>
                { screenWidth < 770 ? (
                    <span>{totalQuantity}</span>
                ) : (
                    <span>Pedidos ({totalQuantity})</span>
                )}
            </div>
        </Container>
    )
}