import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

import { Checkout_Item_Container, Quantity, Remove_Button, Checkout_Price } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    return (
        <Checkout_Item_Container>
            <div className='image-container'>
                <img src={imageUrl} alt="item-bg"/>
            </div>
            <div> {name} </div>
            <Quantity> 
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>&#10094;</div>
                {quantity} 
                <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>&#10095;</div>
            </Quantity>
            <Checkout_Price> {price} </Checkout_Price>
            <Remove_Button onClick={() => clearItemFromCart(cartItem)}>&#10005;</Remove_Button>
        </Checkout_Item_Container>
    );
}

export default CheckoutItem;