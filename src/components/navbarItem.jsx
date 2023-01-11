import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  display: flex;
  gap: 0.75rem;
  ${typography.text.md};
  color: #373737;
  font-weight: 500;
  align-items: center;

  cursor: pointer;
  text-decoration: none;
  &:hover {
    svg {
      fill: #828282;
    }
  }
  &:focus {
    background: #f2f2f2;
    svg {
      fill: #828282;
    }
  }
  &:visited {
  }
`;
const Icon = styled.div`
  font-size: 1.4rem;
`;

function NavBarItem({ name, icon, to, handleClick }) {
  return (
    <StyledNavLink
      onClick={handleClick || console.log}
      to={to}
      style={({ isActive }) => {
        if (!isActive) return;
        return {
          background: colors.gray[400],
        };
      }}
    >
      <Icon>{icon}</Icon>
      {name}
    </StyledNavLink>
  );
}

export default NavBarItem;
