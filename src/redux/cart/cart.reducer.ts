import { AnyAction } from "redux";
import { CartItem } from "./cart.types";

import { setCartItems, setIsCartOpen } from "./cart.actions";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
}

export const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
  if (setIsCartOpen.match(action)) 
    return { ...state, isCartOpen: action.payload, }
  if (setCartItems.match(action)) 
    return { ...state, cartItems: action.payload }
  return state;
}
