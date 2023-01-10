/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "./styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/landin-page";
import LoginPage from "./components/login-form";

const Wrapper = styled.div`
margin: auto;
display: flex;
flex-direction: column;
padding: 20px;
`

function UnauthenticatedApp() {
  return (
		<>
			<Header/>
				<Wrapper>
				<Routes>
					<Route
					path={"/"}
					element={<Home/>}
					/>
					<Route
					path={"/login"}
					element={<LoginPage/>}
					/>
				</Routes>
			</Wrapper>
		</>
	);
}

export default UnauthenticatedApp;