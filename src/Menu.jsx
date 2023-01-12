import React from "react";
import styled from "@emotion/styled";
import search from "../src/styles/image/search.png";
import group from "../src/styles/image/G.png";
import eli from "../src/styles/image/eli.png";
import sebastian from "../src/styles/image/sebastian.jpeg";
import patricia from "../src/styles/image/patricia.jpeg";
import bea from "../src/styles/image/bea.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { DiGithubBadge, DiReact, DiRuby } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { icons } from "react-icons";
import { typography } from "./styles/typography"

const styledIma = styled.img`

width: 180px;
height: 180px;
top: 0px;
border-radius:150px;

`;

const StyledO = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Parrafo = styled.p`
  margin-top: 30px;
   ${typography.xs};
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
`;
const Div5 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
`;
const Div4 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
`;
const Div3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`;
const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;
const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
const StyledDiv1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  flex-direction: column;

  background: #bf5f82;
`;
const StyledDiv2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
`;
// const StyledFo = styled.footer`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 100%;
//   position: absolute;
//   width: 900px;
//   height: 73px;
//   left: 0px;
//   top: 1855px;
// `;
const StyledSea = styled.div`
  height: 472px;
  left: 61.11%;
  right: 0%;
  top: calc(50% - 472px / 2);
  background: #ffffff;
`;
const StyledI = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 273px;
  gap: 16px;
`;
const StyledH3 = styled.h3`
  width: 356px;
  height: 59px;
  top: 64px;
   ${typography.sm};
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  color: #bf5f82;
`;
const StyledD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 192px;
  gap: 26px;
  height: 486px;

  top: 1369px;
  margin-top: 0px;
  background: #f5f5f6;
`;
// const StyledDi = styled.div`
// height: 472px;
// left: 0px;
// right: 38.89%;
// top: calc(50% - 472px/2);
// background: #BF5F82
// `;
const StyledH2 = styled.h2`
  margin-top: 61px;
  ${typography.sm};
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  color: white;
`;
const StyledPa = styled.p`
  margin-top: 30px;
  ${typography.sm};
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: white;
`;
const StyledSect = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 70px;
  height: 472px;
  top: 897px;
  background: #dadada;
`;
const StyledSe = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 737px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background: #f5f5f6;
`;
const StyledIm = styled.img`
  margin: 30px;
`;
const StyledP = styled.p`
margin-top: 30px;
  width: 720px;
  ${typography.sm};
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  
`;
const StyledBu = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  margin-top: 30px;

  border: none;
  background: #f48fb1;
  border-radius: 16px;
   ${typography.sm};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: white;
`;
const StyledH1 = styled.h1`
  margin-top: 61px;
  width: 504px;
   ${typography.sm};
  font-weight: 300;
  font-size: 61px;
  line-height: 74px;
  text-align: center;
  letter-spacing: -0.5px;
`;
function MenuIndex() {
  return (
    <>
      <div >
        <StyledSe>
          <StyledH1>The place where you get <span style={{color:"#F48FB1"}}>that</span> job</StyledH1>
      
          <StyledP>
            With our Machine Learning algorithm you will get that job in no
            time. We promise you! Just give us the money and we will take care
            of it.
          </StyledP>
        
          <StyledBu>CREATE AN ACCOUNT NOW</StyledBu>
          <StyledIm src={group} />
        </StyledSe>

        <StyledSect>
          <StyledDiv1>
            <div style={{
                  width: "600px",
                }}>
              <StyledH2>Find your next job</StyledH2>
              <StyledPa>
                Our Machine learning algorithm is so good that it’s even illegal
                in some countries. Join us to use our barelly legal algorithm
                that is actually a group of interns that work on our basement.
                We have a job for you, no matter your background or previous
                experience. Is sending random memes through chat your only
                skill? That’s ok, we got you, our Rock Star Meme Curator role is
                here for you.
              </StyledPa>
            </div>
          </StyledDiv1>

          <StyledDiv2>
            <img src={search} />
          </StyledDiv2>
        </StyledSect>
        <StyledD>
          <StyledH3>Meet the team</StyledH3>
          <StyledI>
            <StyledO>
              <img src={eli} />
              <Parrafo>Camilo</Parrafo>
              <div
                style={{
                  width: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a href="https://github.com/Camilo-J"> <DiGithubBadge /> </a>
                <a href="https://www.linkedin.com/in/camilohuanca/"> <AiFillLinkedin /> </a>
              </div>
            </StyledO>
            <StyledO>
              <img style={{
                  width: "180px",
                  borderRadius:"50%"
                }} src={bea} />
              <Parrafo>Beatriz</Parrafo>
              <div
                style={{
                  width: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                 <a href="https://github.com/bettysl20"> <DiGithubBadge /> </a>
                <a href="https://www.linkedin.com/in/beatriz-sl/"> <AiFillLinkedin /> </a>
              </div>
            </StyledO>

            <StyledO>
              <img style={{
                  width: "180px",
                  borderRadius:"50%"
                }} src={sebastian} />
              <Parrafo>Sebastian Terleira</Parrafo>
              <div
                style={{
                  width: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a href="https://github.com/sebastianterleira"> <DiGithubBadge /> </a>
                <a href="https://www.linkedin.com/in/sebastian-terleira-8773a4247/"> <AiFillLinkedin /> </a>
              </div>
            </StyledO>
            <StyledO>
              <img style={{
                  width: "180px",
                  borderRadius:"50%"
                }} src={patricia} />
              <Parrafo>Patricia Mendoza</Parrafo>
            
              <div
                style={{
                  width: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a href="https://github.com/patico14"> <DiGithubBadge /> </a>
                <a href="https://www.linkedin.com/in/patricia-mendoza-8261b6224/"> <AiFillLinkedin /> </a>
              </div>
            </StyledO>
            <StyledO>
              <img src={eli} />
              <Parrafo>Elias</Parrafo>
              <div
                style={{
                  width: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <DiGithubBadge />
                <AiFillLinkedin />
              </div>
            </StyledO>
          </StyledI>
        </StyledD>

        <footer style={{ display: "flex",  flexDirection: "column", gap: "10px", background: "#F5F5F6" }}>
          <div style={{ display: "flex", gap: "10px", justifyContent: "space-between"}}  >
          <p>© 202X - Get That Job</p>
          <p>Source Code</p>
          <p>Codeable - Cohort X Final Project</p>
          </div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <p> <DiRuby/> Ruby on Rails REST API</p>
            <p> <DiReact/> React Responsive SPA</p>
          </div>
        </footer>
      </div>
    </>
  );
}
// .orden {
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   }
export default MenuIndex;
