import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { CartItemProps } from '../cart-item/cart-item.component';

import {
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart 
} from '../../redux/cart/cart.actions';

import { Checkout_Item_Container, Quantity, Remove_Button, Checkout_Price } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }: CartItemProps) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();

    const addItem = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItem = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));

    return (
        <Checkout_Item_Container>
            <div className='image-container'>
                <img src={imageUrl} alt="item-bg"/>
            </div>
            <div> {name} </div>
            <Quantity> 
                <div className='arrow' onClick={addItem}>&#10094;</div>
                {quantity} 
                <div className='arrow' onClick={removeItem}>&#10095;</div>
            </Quantity>
            <Checkout_Price> {price} </Checkout_Price>
            <Remove_Button onClick={clearItem}>&#10005;</Remove_Button>
        </Checkout_Item_Container>
    );
}

export default CheckoutItem;