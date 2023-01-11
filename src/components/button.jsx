import styled from "@emotion/styled";
import { typography } from "../styles/typography";

const Button = styled.button`
  all: unset;
  width: 165px;
  height: 25px;
  padding: 12px 16px;
  border-radius: 30px;
  color: #fff;
  text-align: center;
  ${typography.text.lg}

  ${({ disabled }) =>
    disabled
      ? "background-color: #fa7849;"
      : `background-color: #F48FB1;
      cursor:pointer;
      &:hover {
    background-color: #f16494;
  }`}
`;

function CustomButton({ children, handleCLick, disable }) {
  return (
    <Button onClick={handleCLick} disabled={Boolean(disable)}>
      {children}
    </Button>
  );
}

export default CustomButton;
