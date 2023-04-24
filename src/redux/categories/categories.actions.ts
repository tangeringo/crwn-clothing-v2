import { CategorieTypes, Category } from './categories.types';

import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/create-action-utils/reducer-actions";


export type FetchCategoriesStart = Action<CategorieTypes.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CategorieTypes.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CategorieTypes.FETCH_CATEGORIES_FAILURE, Error>


export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart =>
  createAction(CategorieTypes.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess =>
  createAction(
    CategorieTypes.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  ));

export const fetchCategoriesFailure = withMatcher((error: Error): FetchCategoriesFailed =>
  createAction(CategorieTypes.FETCH_CATEGORIES_FAILURE, error));
