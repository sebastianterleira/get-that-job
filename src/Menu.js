import React from "react";
import styled from "@emotion/styled";
import logo from "../src/styles/image/logo.svg";
import search from "../src/styles/image/search.png";
import group from "../src/styles/image/G.png";
import eli from "../src/styles/image/eli.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import "../src/componente/loginform.css";

const Parrafo = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
text-align: center
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
{ grid-area: 1 / 2 / 2 / 3; }

height: 472px;
top: calc(50% - 472px/2);
background: #BF5F82;
`;

const StyledDiv2 = styled.div`
{ grid-area: 1 / 1 / 2 / 3; }

height: 472px;

top: calc(50% - 472px/2);

background: #FFFFFF;
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
  width: 1056px;
  height: 273px;

`;

const StyledH3 = styled.h3`
  width: 356px;
  height: 59px;
  left: calc(50% - 356px / 2);
  top: 64px;

  font-family: "Montserrat";
  font-style: normal;
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
  width: 850px;
  height: 486px;
  left: 0px;
  top: 1369px;
  margin-top: 0px;
`;

// const StyledDi = styled.div`
// height: 472px;
// left: 0px;
// right: 38.89%;
// top: calc(50% - 472px/2);

// background: #BF5F82
// `;

const StyledH2 = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  color: white;
`;

const StyledPa = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: white;

 
`;

const StyledSect = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;

width: 1440px;
height: 472px;
left: 0px;
top: 897px;
`;

const StyledSe = styled.section`
  width: 1062px;
  height: 737px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const StyledIm = styled.img`
  
  margin: 0px;
  width: 1062px;
  height: 350px;
 
  top: 419px;
 
  
`;

const StyledP = styled.p`
  width: 720px;
  height: 87px;
  left: calc(50% - 720px / 2 - 3px);
  top: 212px;

  font-family: "Montserrat";
  font-style: normal;
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



width: 264px;
height: 56px;
border: none;
left: calc(50% - 264px/2 - 3px);
top: 331px;

background: #F48FB1;
border-radius: 16px;



font-weight: 500;
font-size: 14px;
line-height: 24px;
color: white
`;

const StyledH1 = styled.h1`
  
  width: 504px;
  height: 148px;
  left: calc(50% - 504px / 2 - 3px);
  top: 32px;

  /* Regular/Headline2 */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 61px;
  line-height: 74px;
  text-align: center;
  letter-spacing: -0.5px;
`;

function MenuIndex() {
  return (
    <div>
      <footer>
        <img src={logo} />
        <button>
          SIGN UP <FaHeart />{" "}
        </button>
        <button>
          LOGIN <FaHeart />{" "}
        </button>
      </footer>
      <StyledSe>
        <StyledH1>The place where you get that job</StyledH1>
        <StyledP>
          With our Machine Learning algorithm you will get that job in no time.
          We promise you! Just give us the money and we will take care of it.
        </StyledP>
        <StyledBu>CREATE AN ACCOUNT NOW</StyledBu>
        <StyledIm src={group} />
      </StyledSe>
      <StyledSect>
        <StyledDiv1>
          <StyledH2>Find your next job</StyledH2>
          <StyledPa>
            Our Machine learning algorithm is so good that it’s even illegal in
            some countries. Join us to use our barelly legal algorithm that is
            actually a group of interns that work on our basement. We have a job
            for you, no matter your background or previous experience. Is
            sending random memes through chat your only skill? That’s ok, we got
            you, our Rock Star Meme Curator role is here for you.
          </StyledPa>
        </StyledDiv1>
        <StyledDiv2>
          <img src={search} />
        </StyledDiv2>
      </StyledSect>

      <StyledD>
        <StyledH3>Meet the team</StyledH3>
        <StyledI>
          <div className="orden">
            <img src={eli} />
            < Parrafo>Camilo</ Parrafo>
            <div style={{width: "50px", display: "flex", justifyContent: "space-between"}}>
            <DiGithubBadge />
              <AiFillLinkedin />  
            </div>
          </div>
          <div className="orden">
            <img src={eli} />
            < Parrafo>Beatriz</ Parrafo>
            <div style={{width: "50px", display: "flex", justifyContent: "space-between"}}>
            <DiGithubBadge />
              <AiFillLinkedin />  
            </div>
          </div>

          <div className="orden">
            <img src={eli} />
            < Parrafo>sebastian Terleira</ Parrafo>
            <div style={{width: "50px", display: "flex", justifyContent: "space-between"}}>
            <DiGithubBadge />
              <AiFillLinkedin />  
            </div>
          </div>

          <div className="orden">
            <img src={eli} />
            < Parrafo>Patricia Mendoza</ Parrafo>
            <div style={{width: "50px", display: "flex", justifyContent: "space-between"}}>
            <DiGithubBadge />
              <AiFillLinkedin />  
            </div>
          </div>

          <div className="orden">
            <img src={eli} />
            <Parrafo>Elias</ Parrafo>
            <div style={{width: "50px", display: "flex", justifyContent: "space-between"}}>
            <DiGithubBadge />
              <AiFillLinkedin />  
            </div>
              
          </div>
        </StyledI>
      </StyledD>

      <footer style={{display: "flex", gap: "10px"}}>
        <p>© 202X - Get That Job</p>
        <p>Source Code</p>
        <p>Codeable - Cohort X Final Project</p>
        <p>Ruby on Rails REST API</p>
        <p>React Responsive SPA</p>
      </footer>
    </div>
  );
}

export default MenuIndex;
