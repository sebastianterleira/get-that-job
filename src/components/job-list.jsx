/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";
import { MdOutlineDateRange } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaIndustry } from "react-icons/fa";

const Tittle = styled.div`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 34px;
line-height: 42px;
margin-bottom: 16px;
`

const ContainerCard = styled.div`
	margin-top: 20px;
  display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(3, 290px);
	grid-auto-rows: minmax(170px, auto);
`

const CardData = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
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
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

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

const TextCompanieName = styled.p`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.1px;
color: #616161;
`

function JobList({jobs}) {
	return (
		<>
		<Tittle>{jobs.length} jobs for you</Tittle>
			<ContainerCard>
			{ jobs.map((job) => (
				<CardData
				key={job.id}
				>
					<img src={job.image} css={css`width: 75px; height: 75px; position: absolute; left: 15px; top: 20px;`}/>
				<div css={css`display: flex; flex-direction: column; padding: 12px 0px 12px 42px; margin-left: 20px;`}>
					<div css={css`display: flex; flex-direction: row; align-items: center; gap: 4px;`}>
						<FaIndustry css={css`font-size: 12.5px;`}/>
						<TextCategory>{job.category}</TextCategory>
					</div>
						<TextTitle>{job.title}</TextTitle>
						<TextCompanieName>{job.company_name}</TextCompanieName>
						<div css={css`display: flex; flex-direction: row; align-items: center; gap: 4px;`}>
							<MdOutlineDateRange css={css`font-size: 12.5px;`}/>
							<TextCompanieName>{job.type}</TextCompanieName>
							<RiMoneyDollarCircleLine css={css`font-size: 12.5px;`}/>
							<TextCompanieName>{job.min_max_price}</TextCompanieName>
						</div>
				</div>
					</CardData>
				))}
			</ContainerCard>
		</>
	);
}
export default JobList;