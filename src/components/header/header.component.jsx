import React from "react";
import { connect } from "react-redux"; //connect is a high order component that let us connect to anything related to redux
import { createStructuredSelector } from "reselect";

import Icon from "../../assets/Icon-copy.svg";
import { auth } from "../../firebase/firebase.utils"; //step 4
import CardIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";


import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HeaderContainer,
  OptionsContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  MobileIcon,
  NavItem,
} from "./header.styles";
import {FaBars} from "react-icons/fa"


const Header = (
  { currentUser, hidden, toggle } //distructuring a current user to our app
) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <img src={Icon} alt="icon" />
    </LogoContainer>
    <MobileIcon onClick={toggle}>
      <FaBars />
    </MobileIcon>
    <OptionsContainer>
      <NavItem>
        <OptionLink to="/shop">SHOP</OptionLink>
      </NavItem>
      <NavItem>
        <OptionLink to="/contact">CONTACT</OptionLink>
      </NavItem>
      <NavItem>
        {currentUser ? ( // checking if the user is signed in or signed out, and displaying a div or a link depending on the state of the user
          <NavItem>
            <OptionDiv OptionLink onClick={() => auth.signOut()}>
              {" "}
              SIGN OUT
            </OptionDiv>
          </NavItem>
        ) : (
          <NavItem>
            {" "}
            <OptionLink to="signin">SIGN IN</OptionLink>
          </NavItem>
        )}
      </NavItem>
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
