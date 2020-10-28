import styled, {css} from "styled-components";
import {Link} from "react-router-dom";


const optionContainerStyles = css`
  color: #fff;
  padding: 10px 40px;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 98.5%;
  height: 70px;
  z-index: 10;
  padding-top: 2.3rem;
`;

export const LogoContainer = styled(Link)`
  width: 50%;
  height: 70px;
  padding-left: 2.3rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  height: 70px;
  float: left;
`;

export const OptionLink = styled(Link)`
  ${optionContainerStyles}
`;

export const OptionDiv = styled.div`
  color: #fff;
  padding: 10px 40px;
  cursor: pointer;
  font-size: 1.3rem;
`;