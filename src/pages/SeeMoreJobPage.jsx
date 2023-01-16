/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { colors } from "../styles";
import Company from "../static/img/Companies-Logos/Rectangle1.png"

const Container = styled.div`
  margin: 2rem 0 0 2rem;
  width: 1200px;
  height: 900px;
`;

const ContainerButtonBack = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12px
	margin: 0 0 18px 0;
`

const cardImagenCompany = styled.div`
	width: 74px;
	height: 74px;
	background-color: blue;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

function SeeMore({findJob}) {
	const { id } = useParams();
	const job = findJob(Number.parseInt(id));
	const history = useNavigate();

  return (
		<Container>
				<button onClick={() => history(-1)} css={css`border-width: 0; padding: 0;`}>
					<ContainerButtonBack>
						<MdOutlineArrowBackIosNew color={colors.black} /> 
						<p>BACK</p>
					</ContainerButtonBack>
				</button>

				<cardImagenCompany>
				<img src={Company} alt={"Company"}/>
				</cardImagenCompany>
		</Container>
	);
}

export default SeeMore;