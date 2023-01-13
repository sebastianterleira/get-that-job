import styled from "@emotion/styled";
import {
  RiSuitcaseLine,
  RiUserLine,
  RiLogoutCircleLine,
  RiGithubFill,
  RiFileList2Line,
} from "react-icons/ri";
import {
  AiOutlineSearch,
} from "react-icons/ai";
import {
  BiTargetLock,
} from "react-icons/bi";

import { VscNewFile } from "react-icons/vsc";
import NavBarItem from "./navbarItem";
import { typography } from "../styles";
import getJob from "../static/img/logoNavbar.svg";
import { useAuth } from "../context/auth-context";

const NavbarC = styled("div")`
  height: 1000px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.3rem 0;
  background-color: #e1e2e1;
`;

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 1rem 4rem 1rem 1rem;
  ${typography.text.xs}
  color: #616161;
`;

const Authors = styled.div`
  font-size: ;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Github = styled.div`
  font-size: 1.2rem;
`;

const ContainerImage = styled.div`
  padding: 0 1rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Navbar_professional() {
  const { logout } = useAuth();
  const optionIcon = {
    following: <BiTargetLock/>,
    search: <AiOutlineSearch />,
    application: <RiFileList2Line />,
    job: <RiSuitcaseLine />,
    create: <VscNewFile />,
    profile: <RiUserLine />,
    logout: <RiLogoutCircleLine />,
  };
  return (
    <NavbarC>
      <Main>
        <ContainerImage>
          <img src={getJob} alt="navbar-Title" />
        </ContainerImage>
        <ContainerItems>
          <NavBarItem
            to={"home"}
            name={"Find that job"}
            icon={optionIcon.search}
          />
          <NavBarItem
            to={"/"}
            name={"Your applications"}
            icon={optionIcon.application}
          />
          <NavBarItem
            to={"profile"}
            name={"Following"}
            icon={optionIcon.following}
          />
          <NavBarItem
            to={"profile"}
            name={"Profile"}
            icon={optionIcon.profile}
          />

          <NavBarItem
            to={"/"}
            handleClick={logout}
            name={"Logout"}
            icon={optionIcon.logout}
          />
        </ContainerItems>
      </Main>

      <Footer>
        <p>2023 -Get That Job</p>
        <p>Codeable- Cohort X Final Project</p>
        <div>
          <p>Build with by:</p>
          <Authors>
            <Github>
             <a href="https://github.com/sebastianterleira" target="_blank"><RiGithubFill /></a>
            </Github>
            <a href="https://github.com/eliasmaq" target="_blank"><p>Sebastian Terleira</p></a>
          </Authors>

          <Authors>
            <Github>
            <a href="https://github.com/eliasmaq" target="_blank"><RiGithubFill /></a>
            </Github>
            <a href="https://github.com/eliasmaq" target="_blank"><p>Elias Mesones</p></a>
          </Authors>
          <Authors>
            <Github>
            <a href="https://github.com/patico14" target="_blank"><RiGithubFill /></a>
            </Github>
            <a href="https://github.com/eliasmaq" target="_blank"><p>Patricia Mendoza</p></a>
          </Authors>

          <Authors>
            <Github>
            <a href="https://github.com/Camilo-J" target="_blank"><RiGithubFill /></a>
            </Github>
            <a href="https://github.com/eliasmaq" target="_blank"><p>Camilo Huanca</p></a>
          </Authors>
        </div>
        <div>
          <p>Source Code:</p>
          <p>Ruby on Rails REST API</p>
          <p>React Responsive SPA</p>
        </div>
      </Footer>
    </NavbarC>
  );
}

export default Navbar_professional;
