import { FC, memo } from 'react';
import { CartItem } from '../../redux/cart/cart.types';
import { Cart_Item_Container, Cart_Item_Describtion } from './cart-item.styles';

export type CartItemProps = {
    cartItem: CartItem
}

const CartItemComponent: FC<CartItemProps> = memo(({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return (
        <Cart_Item_Container>
            <img src={imageUrl} alt="cart-item" />
            <Cart_Item_Describtion>
                <span> {name} </span>
                <span> {quantity} x ${price} </span>
            </Cart_Item_Describtion>
        </Cart_Item_Container>
    );
});

export default CartItemComponent;