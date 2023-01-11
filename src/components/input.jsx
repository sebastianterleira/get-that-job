import styled from "@emotion/styled";
import { typography } from "../styles/typography";

const StyledInput = styled("input")`
  ::placeholder {
		line-height: 22.63px;
		font-weight: 400;
		font-size: 18px;
		font-family: ${fonts.third};
		color: #333333;
  }
`;

const Label = styled.label`
  color: #373737;
  ${typography.text.sm}
  Line-height: 12px;
  letter-spacing: 1.5px;
`;

const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  color,
}) => {
  return (
    <Container>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <StyledInput
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
