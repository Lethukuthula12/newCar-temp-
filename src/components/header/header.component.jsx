import React from "react";
import { connect } from "react-redux"; //connect is a high order component that let us connect to anything related to redux
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/Icon.svg";
import { auth } from "../../firebase/firebase.utils"; //step 4
import CardIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {HeaderContainer, OptionsContainer, LogoContainer,OptionDiv, OptionLink } from "./header.styles";

const Header = (
  { currentUser, hidden } //distructuring a current user to our app
) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? ( // checking if the user is signed in or signed out, and displaying a div or a link depending on the state of the user
        <OptionDiv onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to="signin">
          SIGN IN
        </OptionLink>
      )}
      <CardIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

//this allow us to access the state from our root reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
