import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectShopCategories, selectIsCategoriesLoading } from '../../redux/categories/categories.selectors';

import CategoryPreview from "../../components/category-preview/category-preview.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectShopCategories);
  const isLoading = useSelector(selectIsCategoriesLoading);
  
    return (
      <Fragment>
        {
          isLoading ? (
            <LoadingSpinner />
          ) : (
            Object.keys(categoriesMap).map((key) => {
              const products = categoriesMap[key];
              return <CategoryPreview key={key} title={key} products={products} />;
            })
          )
        }
      </Fragment>
    );
};

export default CategoriesPreview;