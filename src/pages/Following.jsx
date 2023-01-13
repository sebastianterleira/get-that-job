/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { fonts } from "../styles/typography";
import JobFollow from "../components/job-follow";
import FilterJob from "../components/filters-job";
import data from "../data/data";
import { useState } from "react";

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


const GroupInput = styled.div`
position: relative;
`

function Following() {
	const [jobs] = useState(data);
    

// 	let allCategories = jobs.reduce((accu, current) => {
//     if (!accu.includes(current.follow)) accu.push(current.follow);
//    console.log(Following)
// 		return accu;
//   }, []);


	return (
		<>
			<Wrapper>
				<Tittle>Following</Tittle>
					{/* <FilterJob categories={allCategories}/> */}
				<JobFollow jobs={jobs}/>
			</Wrapper>
		</>
	);
}
export default Following;


