import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

import Button, { BUTTON_TYPE_CLASS } from '../button/button.component';

import { Product_Card_Container, Image, Footer_Describtion } from './product-card.styles';

const ProductCard = ({ product }) => {
    const { imageUrl, name, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)
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