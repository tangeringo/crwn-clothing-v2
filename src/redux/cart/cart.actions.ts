import { CategoryItem } from "../categories/categories.types";

import { createAction, withMatcher, ActionWithPayload } from "../../utils/create-action-utils/reducer-actions";
import { CartTypes, CartItem } from "./cart.types";

import { addCartItem, removeCartItem, clearCartItem } from '../../utils/redux-cart.actions/cart-utils';



export type SetIsCartOpen = ActionWithPayload<CartTypes.SET_IS_CART_OPEN, boolean>

export type setCartItems = ActionWithPayload<CartTypes.SET_CART_ITEMS, CartItem[]>

export const setCartItems = withMatcher((cartItems: CartItem[]): setCartItems => 
    createAction(CartTypes.SET_CART_ITEMS, cartItems))


export const addItemToCart = (cartItems: CartItem[], product: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, product);
    return setCartItems(newCartItems);
}


export const removeItemFromCart = (cartItems: CartItem[], product: CartItem) => {
    const newCartItems = removeCartItem(cartItems, product);
    return setCartItems(newCartItems);
}


export const clearItemFromCart = (cartItems: CartItem[], product: CartItem) => {
    const newCartItems = clearCartItem(cartItems, product);
    return setCartItems(newCartItems);
}


export const setIsCartOpen = withMatcher((bool: boolean) : SetIsCartOpen => (
    createAction(CartTypes.SET_IS_CART_OPEN, bool)));