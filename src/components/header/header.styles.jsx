import styled from "styled-components";
import {Link} from "react-router-dom";
import {  FaTimes } from "react-icons/fa";




export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 98.5%;
  z-index: 10;
  padding-top: 2.3rem;

  @media (max-width: 442px) {
    padding-top: 1px;
    margin-bottom:20px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  position: relative;
  margin-top: -2rem !important;

  @media (max-width: 445px) {
    margin-top: -1rem !important;
  }
`;

export const OptionsContainer = styled.ul`
  display: flex;
  height: 70px;
  float: left;

  @media (max-width: 800px) {
    font-size: 10px;
    display:none;
  }
`;

export const OptionLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  padding: 10px 40px;
  cursor: pointer;
  font-size: 1.3rem;
  

  &:active {
    border-bottom: 5px solid white;
  }

  @media (max-width: 442px) {
  }
`;

export const OptionDiv = styled.div`
  color: #fff;
  padding: 10px 40px;
  cursor: pointer;
  font-size: 1.3rem;
  

  @media (max-width: 442px) {
    padding: 10px 10px;
    font-size: 15px;
  }
`; 

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    position: absolute;
    top:10;
    right:0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
  }
`;

export const NavItem = styled.li`
  height: 70px;
  text-decoration: none;
  list-style: none;
`;

/* THIS IS THE SIDEBAR STYLES */

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen? "100%" : "0")};
  top: ${({isOpen}) => (isOpen ? "0" : "-100%")}
`;

export const CloseIcon = styled(FaTimes)`color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  fron-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWraper = styled.div`
  color: #000;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: left;

  @media screen and (max-width: 443px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const  SidebarOptions = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  list-style: none;
  transition: 0.2s ease-in-out;
  
  cursor: pointer;

  &:hover {
    color: #000;
    transition: 0.2 ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoutes = styled(Link)`
  border-radius: 50px;
  background: #000;
  white-space: nowrape;
  padding: 16px 64px;
  color: #fff;
  font-size: 25px;
  outline: none;
  border: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #04bf61;
    transition: 0.2 ease-in-out;
    background: #fff;
  }
`;

export const SignInButton =styled.button`
margin: auto;
background: transparent;
border: 2px solid #fff;
margin-top:10rem;
`
