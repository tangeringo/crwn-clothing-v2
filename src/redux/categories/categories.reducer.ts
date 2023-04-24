import { Category } from './categories.types';
import { fetchCategoriesStart, fetchCategoriesFailure, fetchCategoriesSuccess } from './categories.actions';
import { AnyAction } from 'redux';

export type CategorieState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null; 
}

export const CATEGORIES_INITIAL_STATE: CategorieState = {
    categories: [],
    isLoading: false,
    error: null,
}

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE, 
    action: AnyAction
): CategorieState => {

    if (fetchCategoriesStart.match(action)) 
        return { ...state, isLoading: true }
    if (fetchCategoriesSuccess.match(action)) 
        return { ...state, categories: action.payload, isLoading: false }
    if (fetchCategoriesFailure.match(action)) 
        return { ...state, error: action.payload, isLoading: false, }
    return state
}