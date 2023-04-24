import { all, call, put, takeLatest } from 'typed-redux-saga/macro';

import { CategorieTypes } from './categories.types';

import { getCollectionsDataFromFirestoreDb } from '../../utils/firebase/firebase.utils';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from './categories.actions';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCollectionsDataFromFirestoreDb);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailure(error as Error));
  }
}


export function* onFetchCategories() {
  yield* takeLatest(CategorieTypes.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}


export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}