import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImg src={logo} alt="Logo" />
        <LogoImg />
        <Logo>LOGO</Logo>
      </Link>
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

const LogoImg = styled.img`
  margin-top: 10px;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #353449;
  float: right;
`;
