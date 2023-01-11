/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { fonts } from "../styles/typography";

const StyledInput = styled("input")`
  ::placeholder {
		line-height: 22.63px;
		font-weight: 400;
		font-size: 18px;
		font-family: ${fonts.third};
		color: #333333;
  }
`;

const Container = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #373737;
  ${typography.text.sm}
  Line-height: 12px;
  letter-spacing: 1.5px;
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
      <Container>
          {label && <Label htmlFor={id || name}>{label}</Label>}
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
      </Container>
    </div>
  );
}

export default Input;

