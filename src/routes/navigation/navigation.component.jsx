import { Fragment, useContext } from "react";

import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../svgs/crown.svg';

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.contexts";
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
                <NavLink as="span" onClick={signOutUser}>
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