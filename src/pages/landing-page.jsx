/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Group from "../static/img/HomePage/G.png"
import Sebastian from "../static/img/HomePage/sebastian.jpeg"
import Patricia from "../static/img/HomePage/patricia.jpeg"
import Camilo from "../static/img/HomePage/camilo.png"
import Beatriz from "../static/img/HomePage/bea.png"
import Search from "../static/img/HomePage/search.png"
import styled from "@emotion/styled";
import { fonts } from "../styles";
import { icons } from "react-icons";
import { typography } from "../styles";
import { DiGithubBadge, DiReact, DiRuby } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";



const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const ContentTitle = styled.div`
display: flex;
margin: 12px 350px 32px 350px;
`

const Title = styled.p`
  ${typography.sm};
  font-weight: 300;
  font-size: 61px;
  line-height: 74px;
  text-align: center;
  letter-spacing: -0.5px;
	color: #373737;
`;

const ContentParrafo = styled.div`
display: flex;
margin: 0px 400px 32px 400px;
`

const PageDescription = styled.p`
  ${typography.sm};
  font-weight: 400;
  font-size: 24px;
	line-height: 29px;
  text-align: center;
	color: #000000;
`;

const ButtonNav = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #F48FB1;
border-radius: 30px;
font-family: ${fonts.chiron};
width: 260px;
height: 45px;
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

const Card = styled.div`
display: flex;
background: #fff;
width: 100%;
height: 472px;
margin: 0px 0px 64px 0px;
`

const ContentText = styled.div`
width: 60%;
padding: 20px;
display: flex;
background: #BF5F82;
justify-content: center;
flex-direction: column;
align-items: flex-start;
gap: 30px;
`

const TextLG = styled.p`
${typography.sm};
font-weight: 400;
font-size: 48px;
line-height: 59px;
text-align: center;
color: #FFFFFF;
align-items: flex-start;
`

const TextSM = styled.p`
font-weight: 400;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
`

const ContentIMG = styled.div`
margin: auto;
display: flex;
align-items: center;
justify-content: center;
`

const TitleMembers = styled.p`
${typography.sm};
font-weight: 400;
font-size: 48px;
line-height: 59px;
text-align: center;
color: #BF5F82;
`

const GridMembers = styled.div`
  display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(4, 320px);
	grid-auto-rows: minmax(170px, auto);
	justify-items: center;
	align-items: center;
	margin-bottom: 30px;
`

const ContentGrid = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 16px;
`

const ContentContact = styled.div`
width: 50px;
display: flex;
justifyContent: space-between;
gap: 50px;
justify-content: center;
`

const NameDev = styled.p`
${typography.sm};
font-weight: 400;
font-size: 24px;
line-height: 29px;
color: #000000;
`

function Home() {
  return (
	  <main>
			<section>
				<Wrapper>
					<ContentTitle>
						<Title>The place where you get <span style={{color:"#F48FB1"}}>that</span> job</Title>
					</ContentTitle>
						<ContentParrafo>
							<PageDescription>
							With our Machine Learning algorithm you will get that job
							in no time. We promise you! Just give us the money and we 
							will take care of it.
							</PageDescription>
						</ContentParrafo>
							<ButtonNav>CREATE AN ACCOUNT NOW</ButtonNav>
							<img src={Group} alt={"Group"} css={css`margin: 20px 0 60px 0;`}/>
						<Card>
						<ContentText>
							<TextLG>
								Find your next job
							</TextLG>
							<TextSM>
								Our Machine learning algorithm is so good that it’s even illegal in some countries. Join us to use our barelly legal algorithm that is actually a group of interns that work on our basement.
							</TextSM>
							<TextSM>
								We have a job for you, no matter your background or previous experience. Is sending random memes through chat your only skill? That’s ok, we got you, our Rock Star Meme Curator role is here for you.
							</TextSM>
						</ContentText>
						<ContentIMG>
							<img src={Search} alt={"Search"} css={css`font-size: 300px`}/>
						</ContentIMG>
						</Card>
						<Wrapper>
							<ContentTitle>
								<TitleMembers>Meet the team</TitleMembers>
							</ContentTitle>
							<GridMembers>
								<ContentGrid>
								<img src={Sebastian} alt={"SebastianIMG"} css={css`width: 180px; height: 180px; border-radius: 50%`}/>
								<NameDev>Sebastian</NameDev>
									<ContentContact>
										<a href="https://github.com/sebastianterleira" css={css`text-decoration: none;`} target="blank_"> <DiGithubBadge css={css`font-size: 30px; text-decoration: none; color: #616161;`}/> </a>
										<a href="https://www.linkedin.com/in/sebastian-terleira-8773a4247/" css={css`text-decoration: none;`} target="blank_"> <AiFillLinkedin css={css`font-size: 30px; text-decoration: none; color: #616161;`}/> </a>
									</ContentContact>
								</ContentGrid>
								<ContentGrid>
								<img src={Beatriz} alt={"BeaIMG"} css={css`width: 180px; height: 180px; border-radius: 50%`}/>
								<NameDev>Beatriz</NameDev>
									<ContentContact>
										<a href="https://github.com/bettysl20" css={css`text-decoration: none;`} target="blank_"> <DiGithubBadge css={css`font-size: 30px; text-decoration: none; color: #616161;`}/> </a>
										<a href="#" css={css`text-decoration: none;`} target="blank_"> <AiFillLinkedin css={css`font-size: 30px; text-decoration: none; color: #616161;`}/> </a>
									</ContentContact>
								</ContentGrid>
								<ContentGrid>
								<img src={Patricia} alt={"PatriciaIMG"} css={css`width: 180px; height: 180px; border-radius: 50%`}/>
								<NameDev>Patricia</NameDev>
									<ContentContact>
										<a href="https://github.com/patico14" css={css`text-decoration: none;`} target="blank_"> <DiGithubBadge css={css`font-size: 30px; text-decoration: none; color: #616161;`}/> </a>
										<a href="#" css={css`text-decoration: none;`} target="blank_"> <AiFillLinkedin css={css`font-size: 30px; text-decoration: none; color: #616161;`}/> </a>
									</ContentContact>
								</ContentGrid>
								<ContentGrid>
								<img src={Camilo} alt={"CamiloIMG"} css={css`width: 180px; height: 180px; border-radius: 50%`}/>
								<NameDev>Camilo</NameDev>
									<ContentContact>
										<a href="https://github.com/Camilo-J" css={css`text-decoration: none;`} target="blank_"> <DiGithubBadge css={css`font-size: 30px; text-decoration: none; color: #616161;`}/> </a>
										<a href="https://www.linkedin.com/in/camilohuanca/" css={css`text-decoration: none;`} target="blank_"> <AiFillLinkedin css={css`font-size: 30px; text-decoration: none; color: #616161;`}/> </a>
									</ContentContact>
								</ContentGrid>
							</GridMembers>
							<footer style={{ display: "flex",  flexDirection: "column", gap: "10px", background: "#F5F5F6" }}>
          <div style={{ display: "flex", gap: "10px", justifyContent: "space-between"}}  >
          <p>© 2023 - Get That Job</p>
          <p>Source Code</p>
          <p>Codeable - Cohort X Final Project</p>
          </div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <p> <DiRuby/> Ruby on Rails REST API</p>
            <p> <DiReact/> React Responsive SPA</p>
          </div>
        </footer>
						</Wrapper>
					</Wrapper>
			</section>
	  </main>
	);
}

export default Home;