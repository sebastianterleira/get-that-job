import styled from "@emotion/styled";
import { typography } from "../styles/typography";
const Container = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledInput = styled.input`
  height: 36px;
  border: 1.3px solid #f48fb1;
  border-radius: 8px;
  padding: 4px 12px;
  background-color: ${({ color }) => (color ? "" : "#fff")};
  box-sizing: border-box;
  &:focus-visible {
    outline: 1px solid #f48fb1;
  }
`;
const Label = styled.label`
  color: #373737;
  ${typography.text.xs}
  Line-height: 12px;
  letter-spacing: 1.5px;
`;
const InputStyled = ({
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
        color={color}
      />
    </Container>
  );
};
export default InputStyled;
