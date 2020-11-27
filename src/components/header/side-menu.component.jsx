import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";




import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWraper,
  SidebarMenu,
  SidebarOptions,
  SidebarRoutes,
  OptionLink,
  SignInButton,
} from "./header.styles";

const SideBar = ({ currentUser, hidden, isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <SidebarWraper>
        <SidebarMenu>
          <SidebarOptions>
            <SidebarRoutes to="/">HOME</SidebarRoutes>
          </SidebarOptions>
          <SidebarOptions>
            <SidebarRoutes to="/shop">SHOP</SidebarRoutes>
          </SidebarOptions>
          <SidebarOptions>
            <SidebarRoutes to="/contact">CONTACT</SidebarRoutes>
          </SidebarOptions>

          <SidebarOptions>
            {" "}
            {currentUser ? ( // checking if the user is signed in or signed out, and displaying a div or a link depending on the state of the user
              <SidebarOptions>
                <OptionLink onClick={() => auth.signOut()}>
                  {" "}
                  SIGN OUT
                </OptionLink>
              </SidebarOptions>
            ) : (
              <SidebarOptions>
                <SignInButton>
                  <OptionLink to="signin">SIGN IN</OptionLink>
                </SignInButton>
              </SidebarOptions>
            )}
          </SidebarOptions>
        </SidebarMenu>
      </SidebarWraper>
    </SidebarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps) (SideBar);
