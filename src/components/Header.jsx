import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <Logo>LOGO</Logo>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 136px;
  box-shadow: 0px 8px 10px lightgrey;
  background-color: white;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #353449;
`;
