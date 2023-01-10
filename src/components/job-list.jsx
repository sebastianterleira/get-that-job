/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";

const Tittle = styled.div`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 34px;
line-height: 42px;
margin-bottom: 16px;
`

function JobList() {
	return (
		<>
			<Tittle>12 jobs for you</Tittle>
		</>
	);
}
export default JobList;