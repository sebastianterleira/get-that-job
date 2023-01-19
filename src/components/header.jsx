import styled from "@emotion/styled";
import { useAuth } from "../context/auth-context";
import { fonts } from "../styles";
import LogoHeader from "../static/LogoHeader.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/landing-page";
import { css } from '@emotion/react'

const NavBarMenu = styled.div`
  background: #ffffff;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding: 12px 20px 12px 20px;
  // gap: 690px;
  justify-content: space-between;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  padding: 20px 0px 0px 0px;
  align-items: center;
  justify-content: center;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const ButtonNav = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f48fb1;
  border-radius: 30px;
  font-family: ${fonts.chiron};
  width: 110px;
  height: 35px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #616161;
  background: #fff;
  padding: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 500ms ease;
  z-index: 0;

  // &:before {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   margin: auto;
  //   background-color: #bf5f82;
  //   transition: all 500ms ease;
  //   z-index: 1;
  // }
  &:hover {
    background-color: #f48fb1;
    box-shadow: 0 0 10px #f48fb1, 0 0 10px #f48fb1, 0 0 15px #f48fb1;
    color: #616161;
  }
`;

const ImagenLogo = styled.img`
  position: relative;
  overflow: hidden;
  transition: all 400ms ease;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transform: translateY(-3%);
    border-radius: 10px;
  }
`;

function Header() {
  const { navigate } = useAuth();
  function Navigate(link) {
    navigate(`/${link}`);
  }

  return (
    <>
      <NavBarMenu css={css`
      font-size: 30px;
      @media (min-width: 420px) {
        font-size: 50px;
      }
    `}>
        <Link to={"/"}>
          <ImagenLogo src={LogoHeader} alt="LogoHeader" />
        </Link>
        <ContentRow css={css`
      font-size: 30px;
      @media (min-width: 420px) {
        font-size: 50px;
      }
    `}>
          <ButtonNav onClick={() => Navigate("login")}>🙍‍♂️ Login</ButtonNav>
          <ButtonNav onClick={() => Navigate("signup")}>🙍‍♂️ Sign-Up</ButtonNav>
        </ContentRow>
      </NavBarMenu>
    </>
  );
}

export default Header;
