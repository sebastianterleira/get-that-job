/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";
import { MdOutlineDateRange } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaIndustry } from "react-icons/fa";
import { RiFocus3Line } from "react-icons/ri";
import { useState } from "react";

const Tittle = styled.div`
font-family: ${fonts.bedroom};
font-weight: 500;
font-size: 20px;
line-height: 28px;
letter-spacing: 0.15px;
margin-bottom: 8px;
`

const ContainerCard = styled.div`
  display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(3, 290px);
	grid-auto-rows: minmax(170px, auto);
`

const CardData = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
border-radius: 8px;
margin-bottom: 45px;
margin-top: 9px;
position: relative;
overflow: hidden;
  transition: all 400ms ease;
  &:hover {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transform: translateY(-3%);
  }
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ContentJob = styled.div`
display: flex;
flex-direction: column;
padding: 12px 0px 12px 42px;
margin-left: 20px;
`

const ContentRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 4px;
`

const TextCategory = styled.p`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.4px;
color: #8E8E8E;
`

const TextTitle = styled.p`
font-family: ${fonts.bedroom};
font-weight: 500;
font-size: 20px;
line-height: 28px;
letter-spacing: 0.15px;
color: #373737;
`

const TextCompanyName = styled.p`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.1px;
color: #616161;
`

const TextButtonFollow = styled.p`
font-family: ${fonts.chiron};
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #616161;
`

const ButtonSeeMore = styled.button`
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

const ButtonApplied = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #8E8E8E;
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
background: #8E8E8E;;
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
	background-color: #5C5C5C;
	transition: all 500ms ease;
	z-index: 1;
}
&:hover {
	background-color: #8E8E8E;
	box-shadow: 0 0 10px #8E8E8E, 0 0 10px #8E8E8E, 0 0 15px #8E8E8E;
	color: #616161;
}
`

const ButtonIcon = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #F48FB1;
border-radius: 50px;
font-family: ${fonts.chiron};
width: 40;
height: 40px;
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #fff
background: #F48FB1;
padding: 8px;
cursor: pointer;
overflow: hidden;
transition: all 500ms ease;
z-index: 0;

&:hover {
	background-color: #F48FB1;
	box-shadow: 0 0 10px #F48FB1, 0 0 10px #F48FB1, 0 0 15px #F48FB1;
	color: #616161;
}
`

const ButtonIconNoActivated = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #F48FB1;
border-radius: 50px;
font-family: ${fonts.chiron};
width: 40;
height: 40px;
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #fff
background: #F48FB1;
padding: 8px;
cursor: pointer;
overflow: hidden;
transition: all 500ms ease;
z-index: 0;
`

function JobFollow({jobs}) {
	const [activeButton, setActiveButton] = useState(".")

	function handleLinkChange(event) {
    event.preventDefault();
    event.target.innerText !== activeButton
    ? setActiveButton(event.target.innerText)
    : setActiveButton(activeButton);
  }


	return (
		<>
		<Tittle> You are fllowing {jobs.filter((job)=> job.follow === true).length} jobs </Tittle>
			<ContainerCard>
			{ jobs.filter((job)=> job.follow === true).map((job) => (
				<CardData
				key={job.id}
				>
					<img src={job.image} css={css`width: 75px; height: 75px; position: absolute; left: 15px; top: 20px; border-radius: 50%;`}/>
				<ContentJob>
					<ContentRow>
						<FaIndustry css={css`font-size: 12.5px;`}/>
						<TextCategory>{job.category}</TextCategory>
					</ContentRow>
						<TextTitle>{job.title}</TextTitle>
						<TextCompanyName>{job.company_name}</TextCompanyName>
						<ContentRow>
							<MdOutlineDateRange css={css`font-size: 12.5px;`}/>
							<TextCompanyName>{job.type}</TextCompanyName>
							<RiMoneyDollarCircleLine css={css`font-size: 12.5px;`}/>
							<TextCompanyName>{job.min_max_price}</TextCompanyName>
						</ContentRow>
				</ContentJob>
				<div css={css`
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 20px;
				margin-bottom: 20px;
				`}>
				<div onClick={handleLinkChange}>
					{ activeButton === "."
					? 
					<ButtonIcon>.
						<RiFocus3Line css={css`font-size: 22px;`}/>
					</ButtonIcon>
					: 
					<ButtonIconNoActivated>a
						<RiFocus3Line css={css`font-size: 22px;`}/>
					</ButtonIconNoActivated>
					}
				</div>
					<TextButtonFollow>follow</TextButtonFollow>
					<ButtonSeeMore>See More</ButtonSeeMore>
				</div>
				</CardData>
				))}
			</ContainerCard>
		</>
	);
}
export default JobFollow;