/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "./styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/landing-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  padding: 20px 20px 0px 20px;
  align-items: center;
`;

function UnauthenticatedApp() {
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/signup"} element={<SignUpPage />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default UnauthenticatedApp;
