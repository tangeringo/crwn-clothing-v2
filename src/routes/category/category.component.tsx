import { Fragment, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { selectShopCategories, selectIsCategoriesLoading } from '../../redux/categories/categories.selectors';

import ProductCard from '../../components/product-card/product-card.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

import { useParams } from 'react-router-dom';

import { Category_Container, Category_Title } from './category.styles';


type CategoryRouteParams = {
    category: string;
}

const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categoriesMap = useSelector(selectShopCategories);
    const isLoading = useSelector(selectIsCategoriesLoading);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Category_Title> {category.toUpperCase()} </Category_Title>
            {
                isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <Category_Container>
                        {products && products.map((product) => 
                            <ProductCard key={product.id} product={product}/>
                        )}
                    </Category_Container>
                )
            }
            
        </Fragment>
        )
}

export default Category;