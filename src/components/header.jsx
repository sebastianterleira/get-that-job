/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";
import LogoHeader from "../static/LogoHeader.png"
import { Link } from "react-router-dom";

const NavBarMenu = styled.div`
background: #FFFFFF;
margin: auto;
display: flex;
flex-direction: row;
padding: 12px 152px 12px 152px;
gap: 690px; 
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`

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

function Header() {
  return (
		<NavBarMenu>
			<Link to="/">
				<img src={LogoHeader} alt="LogoHeader"/>
			</Link>
			<ContentRow>
				<Link to="/login" css={css`text-decoration: none;`}>
					<ButtonNav>🙍‍♂️   Login</ButtonNav>
				</Link>
				<Link to="/signup" css={css`text-decoration: none;`}>
					<ButtonNav>🙍‍♂️   Sign-Up</ButtonNav>
				</Link>
			</ContentRow>
		</NavBarMenu>
	);
}

export default Header;