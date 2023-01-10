/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";

const StyledInput = styled("input")`
	background-color: #F2F2F2;
  ::placeholder {
		line-height: 22.63px;
		font-weight: 400;
		font-size: 18px;
		font-family: ${fonts.third};
		color: #333333;
  }
  outline: none;
  border-style: none;
`;

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <div>
      {label && <label css={css`
			color: #B8B8BB;
			line-height: 16.8px;
			font-weight: 600;
			font-size: 14px;
			`} htmlFor={id || name}>{label}</label>}
      <StyledInput css={css`
          display: flex;
					padding-top: 10px;
          `}
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
				size="20"
      />
			<div css={css`
			border-top: 1px solid black;
			height: 2px;
			padding: 0;
			margin: 5px auto 0 auto;
			width: 314px;
			margin-bottom: 60px;
			`}/>
    </div>
  );
}

export default Input;
