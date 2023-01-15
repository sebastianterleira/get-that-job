/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { colors } from "../styles";


function SeeMore({findJob}) {
	const { id } = useParams();
	const job = findJob(Number.parseInt(id));
	const history = useNavigate();

  return (
		<>
			<button onClick={() => history(-1)} css={css`border-width: 0; padding: 0;`}>
			<MdArrowBackIosNew color={colors.black} />
			</button>
		<hr/><hr/>
			<h2>{job.name}</h2>
		</>
	);
}

export default SeeMore;