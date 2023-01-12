import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { useAuth } from "./context/auth-context";
import JobPage from "./pages/jobPage";
import ProfileRecruiter from "./pages/profilePage";
import Search from "./pages/search";
import JobsPage from "./pages/jobsPage";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

function AuthenticatedApp() {
  const { user } = useAuth();

  return (
    <Container>
      {user ? (
        ""
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path={"/home"} element={<Search />} />
            <Route path={"/profile"} element={<ProfileRecruiter />} />
            <Route path={"/jobs"} element={<JobsPage />} />
            <Route path={"/jobs/:id"} element={<JobPage />} />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default AuthenticatedApp;
