import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

import { Cart_Icon_Container, ShoppingIcon, Counter } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggle = () => setIsCartOpen(!isCartOpen);

    return (
        <Cart_Icon_Container onClick={toggle}>
            <ShoppingIcon />
            <Counter> {cartCount} </Counter>
        </Cart_Icon_Container>
    );
}

export default CartIcon;