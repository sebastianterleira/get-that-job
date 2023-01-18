/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";
import HombreSaludo from "../static/img/LoginPage/HombreSaludo.png"
import { useState } from "react";
import LoginFormProfessional from "../components/FormLogin/login-form-professional";
import LoginFormRecruiter from "../components/FormLogin/login-form-recruiter";

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  padding: 12px 0px 20px 0px;
  align-items: center;
  justify-content: center;
`;

const Wrapper2 = styled.div`
max-width: 1024px;
margin: auto;
display: flex;
flex-direction: row;
padding: 0px 20px 0px 20px
background-color: #F2F2F2;
`

const LinkOn = styled.button`
border: none;
background: none;
cursor: pointer;
border-bottom: 3px #F48FB1 solid;
`

const LinkOff = styled.button`
border: none;
background: none;
cursor: pointer;
height: 48px;
`

const NavContainer = styled.div`
display: flex;
justify-content: space-evenly;
font-family "Source Sans Pro", sans-serif;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
height: 50px;
background: #fff;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
margin-bottom: 50px;
`
const WelcomeText = styled.p`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 48px;
line-height: 59px;
color: #373737;
margin-bottom: 16px;
`

const Message = styled.p`
font-family: ${fonts.bedroom};
font-weight: 500;
font-size: 20px;
line-height: 28px;
color: #373737;
letter-spacing: 0.15px;
margin-bottom: 32px;
`

const Card = styled.div`
  display: flex:
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 440px;
  height: 500px;
	position: relative;
	border-radius: 81% 19% 30% 70% / 54% 54% 46% 46%;
  background-image: radial-gradient(circle at 100% 0%, #9fdae1 0, #a0dae5 4.55%, #a1d9e9 9.09%, #a4d8ec 13.64%, #a7d7ef 18.18%, #abd6f1 22.73%, #b0d5f3 27.27%, #b5d3f4 31.82%, #bbd2f4 36.36%, #c1d0f4 40.91%, #c7cff3 45.45%, #cdcdf2 50%, #d3cbf0 54.55%, #d9caed 59.09%, #dec8ea 63.64%, #e3c7e7 68.18%, #e8c6e3 72.73%, #ecc5df 77.27%, #efc4da 81.82%, #f2c4d6 86.36%, #f4c3d1 90.91%, #f6c3cc 95.45%, #f7c3c8 100%);
	transition: border-radius 200ms ease-in-out;
	&:hover {
		border-radius: 22% 78% 32% 68% / 59% 14% 86% 41%;
		background-image: radial-gradient(circle at 13.51% 93.49%, #a4dbef 0, #a7daf2 5%, #abd9f4 10%, #b0d8f6 15%, #b5d7f8 20%, #bbd5f8 25%, #c1d3f8 30%, #c7d2f8 35%, #ced0f6 40%, #d4cff4 45%, #dacdf2 50%, #e0cbef 55%, #e5caec 60%, #eac9e8 65%, #eec8e3 70%, #f2c7df 75%, #f5c6da 80%, #f8c6d5 85%, #f9c6d0 90%, #fac6cb 95%, #fbc6c7 100%);
	}
	margin-top: 35px;
`

function LoginPage() {
	const [showLogin, setShowLogin] = useState("Professional")

	function handleLinkChange(event) {
    event.preventDefault();
    event.target.innerText !== showLogin
    ? setShowLogin(event.target.innerText)
    : setShowLogin(showLogin);
  }

  return (
		<Wrapper>
		<Wrapper2>
			<div css={css`display: flex; flex-direction: column;`}>
				<WelcomeText>Welcome back</WelcomeText>
				<Message>Login to you account as...</Message>
				<div onClick={handleLinkChange}>
					{showLogin === "Professional"
					? <NavContainer>
						<LinkOn onClick={handleLinkChange}>Professional</LinkOn>
						<LinkOff onClick={handleLinkChange}>Recruiter</LinkOff>
					</NavContainer>
					: <NavContainer>
						<LinkOff onClick={handleLinkChange}>Professional</LinkOff>
						<LinkOn onClick={handleLinkChange}>Recruiter</LinkOn>
					</NavContainer>}
				</div>

        {showLogin === "Professional" ? <LoginFormProfessional/> : <LoginFormRecruiter/>}
      </div>
		</Wrapper2>
			<Card>
				<img src={HombreSaludo} alt="HobreSaludo" css={css`width: 400px; margin-right: 70px;`}/>
			</Card>
		</Wrapper>
	);
}

export default LoginPage;