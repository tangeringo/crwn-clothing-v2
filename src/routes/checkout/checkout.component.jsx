import { useSelector } from 'react-redux';

import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-fom.component';

import { Checkout_Container, Checkout_Headder, Headder_Block, Total } from  './checkout.styles';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    
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
            <PaymentForm />
        </Checkout_Container>
    );
}

export default Checkout;