import styled from "@emotion/styled";
import { useAuth } from "../context/auth-context";
import { fonts } from "../styles";
import LogoHeader from "../static/LogoHeader.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/landing-page";

const NavBarMenu = styled.div`
background: #FFFFFF;
margin: auto;
display: flex;
flex-direction: row;
padding: 12px 152px 12px 152px;
gap: 690px; 
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`

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
`

const ButtonNav = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #F48FB1;
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

&:before {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	margin: auto;
	background-color: #BF5F82;
	transition: all 500ms ease;
	z-index: 1;
}
&:hover {
	background-color: #F48FB1;
	box-shadow: 0 0 10px #F48FB1, 0 0 10px #F48FB1, 0 0 15px #F48FB1;
	color: #616161;
}
`

const ImagenLogo = styled.img`
position: relative;
overflow: hidden;
  transition: all 400ms ease;
  &:hover {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transform: translateY(-3%);
	border-radius: 10px;
  }
`
function Header() {
	const { navigate } = useAuth()
	function Navigate(link) {
		navigate(`/${link}`);
	}


  return (
	<>
		<NavBarMenu>
				<Link to={"/"}>
					<ImagenLogo src={LogoHeader} alt="LogoHeader" />
				</Link>
			<ContentRow>
				<ButtonNav onClick={() => Navigate("login")} >🙍‍♂️   Login</ButtonNav>
				<ButtonNav onClick={() => Navigate("signup")}>🙍‍♂️   Sign-Up</ButtonNav>
			</ContentRow>
		</NavBarMenu>
		<Wrapper>
		</Wrapper>
	</>
	);
}

export default Header;