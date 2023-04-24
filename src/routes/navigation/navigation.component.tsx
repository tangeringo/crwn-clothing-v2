import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../svgs/crown.svg';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectIsCartOpen } from '../../redux/cart/cart.selectors';

import { signOutStart } from "../../redux/user/user.actions";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOut = () => dispatch(signOutStart());

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to="/">
            <CrwnLogo className="logo"/>
          </LogoContainer>
          <NavLinksContainer>
            <NavLink to="/shop">
                SHOP
            </NavLink>
            { currentUser ? (
                <NavLink as="span" onClick={signOut}>
                  SIGN OUT 
                </NavLink>
              ) : (
                <NavLink to="/auth">
                  SIGN IN
                </NavLink>
            )}
            <CartIcon />
          </NavLinksContainer>
          {isCartOpen && <CartDropdown />}  
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation;