import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { Checkout_Container, Checkout_Headder, Headder_Block, Total } from  './checkout.styles';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <Checkout_Container>
            <Checkout_Headder>
                <Headder_Block>
                    <span>Product</span>
                </Headder_Block>
                <Headder_Block>
                    <span>Describtion</span>
                </Headder_Block>
                <Headder_Block>
                    <span>Quantity</span>
                </Headder_Block>
                <Headder_Block>
                    <span>Price</span>
                </Headder_Block>
                <Headder_Block>
                    <span>Remove</span>
                </Headder_Block>
            </Checkout_Headder>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <Total>Total: ${cartTotal}</Total>
        </Checkout_Container>
    );
}

export default Checkout;