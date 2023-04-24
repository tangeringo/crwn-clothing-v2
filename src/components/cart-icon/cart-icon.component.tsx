import { useDispatch, useSelector } from 'react-redux';

import { setIsCartOpen } from '../../redux/cart/cart.actions';
import { selectIsCartOpen, selectCartCount } from '../../redux/cart/cart.selectors';

import { Cart_Icon_Container, ShoppingIcon, Counter } from './cart-icon.styles';

const CartIcon = () => {
    const dispatch = useDispatch()
    const toggle = () => dispatch(setIsCartOpen(!isCartOpen));

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Cart_Icon_Container onClick={toggle}>
            <ShoppingIcon />
            <Counter> {cartCount} </Counter>
        </Cart_Icon_Container>
    );
}

export default CartIcon;