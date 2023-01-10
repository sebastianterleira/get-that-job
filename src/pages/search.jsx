/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { fonts } from "../styles/typography";
import JobList from "../components/job-list";
import FilterJob from "../components/filters-job";

const Wrapper = styled.div`
max-width: 1024px;
margin: auto;
display: flex;
flex-direction: column;
padding: 20px;
`

const Tittle = styled.div`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 34px;
line-height: 42px;
margin-bottom: 16px;
`

const Input = styled.input`
background-color: #F2F2F2;
box-sizing: border-box;
width: 419.93px;
height: 36px;
letter-spacing: 0.25px;
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-family: ${fonts.chiron};
color: #8E8E8E;
::placeholder {
	letter-spacing: 0.25px;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	font-family: ${fonts.chiron};
	color: #8E8E8E;
}
padding: 12px 0px 12px 42px;
outline: #F48FB1;
border: 1px solid #F48FB1;
border-radius: 8px;
`

const LabelInput = styled.label`
display: flex;
flex-direction: column;
font-weight: 400;
font-size: 10px;
line-height: 12px;
letter-spacing: 1.5px;
text-transform: uppercase;
color: #616161;
margin-bottom: 8px;
`

const GroupInput = styled.div`
position: relative;
`

function Search() {
	return (
		<>
			<Wrapper>
				<Tittle>Find that job</Tittle>
						<LabelInput>
							<p css={css`margin-bottom: 4px;`}>search by job title or company name</p>
								<GroupInput>
									<BiSearch css={css`position: absolute; margin-left: 15px; width: 16px; top: 11px;`}/>
										<Input
										placeholder="manufacturing, sales, swim"
										/>
							</GroupInput>
						</LabelInput>
					<FilterJob/>
				<JobList/>
			</Wrapper>
		</>
	);
}
export default Search;