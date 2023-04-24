import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CategoryItem } from '../../redux/categories/categories.types';

import { addItemToCart } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';


import Button, { BUTTON_TYPE_CLASS } from '../button/button.component';

import { Product_Card_Container, Image, Footer_Describtion } from './product-card.styles';

type ProductCardProps = {
    product: CategoryItem;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { imageUrl, name, price } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    return (
        <Product_Card_Container>
            <Image imageUrl={imageUrl}/>
            <Footer_Describtion>
                <span className='name'> {name} </span>
                <span className='price'> {price} </span>
            </Footer_Describtion>
            <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASS.inverted}>Add to Card</Button>
        </Product_Card_Container>
    )
}

export default ProductCard;