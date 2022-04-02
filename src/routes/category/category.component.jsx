import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import ProductCard from '../../components/product-card/product-card.component';

import { useParams } from 'react-router-dom';

import { Category_Container, Category_Title } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Category_Title> {category.toUpperCase()} </Category_Title>
            <Category_Container>
                {products && products.map((product) => 
                    <ProductCard key={product.id} product={product}/>
                )}
            </Category_Container>
        </Fragment>
        )
}

export default Category;