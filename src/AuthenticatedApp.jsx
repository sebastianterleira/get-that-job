import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import ProfileRecruiter from "./pages/profilePage";
import Search from "./pages/search";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

function AuthenticatedApp() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path={"/home"} element={<Search />} />
        <Route path={"/profile"} element={<ProfileRecruiter />} />
      </Routes>
    </Container>
  );
}

export default AuthenticatedApp;
