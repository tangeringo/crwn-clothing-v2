import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { Cart_Dropdown_Container, Cart_Items, Empty_Message } from './cart-dropdown.styles';

const CartDropdown = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);

    const redirectToCheckout = () => navigate('/checkout')
    return (
        <Cart_Dropdown_Container>
            <Cart_Items>
                {cartItems.length ?
                cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))
                : <Empty_Message> Your cart is Empty </Empty_Message>
            }
            </Cart_Items>
            <Button onClick={redirectToCheckout}>CheckOut</Button>
        </Cart_Dropdown_Container>
    )
}

export default CartDropdown;