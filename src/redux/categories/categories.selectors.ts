import { createSelector } from 'reselect';
import { RootState } from '../store';

import { CategorieState } from './categories.reducer';
import { CategoryMap } from './categories.types';

const selectCategoryReducer = (state: RootState) :CategorieState => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectShopCategories = createSelector(
    [selectCategories],
    (categories) : CategoryMap => 
        categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {} as CategoryMap)
);


export const selectIsCategoriesLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);