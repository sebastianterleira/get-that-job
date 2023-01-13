import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { useAuth } from "./context/auth-context";

import Following from "./pages/Following";

import JobPage from "./pages/jobPage";

import ProfileRecruiter from "./pages/profilePage";
import Search from "./pages/search";
import JobsPage from "./pages/jobsPage";
import { useEffect, useState } from "react";
import { getJobsRecruiter, updateJob } from "./service/jobsRecruiter-services";
import { useLocalStorage } from "./hook";
import NewJob from "./pages/newJob";

const Container = styled.div`
  display: flex;
`;

function AuthenticatedApp() {
  const { user, recruiter } = useAuth();
  const [localSto, setLocalSto] = useLocalStorage([], "Jobs");
  const [jobs, setJobs] = useState(localSto || []);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (user) {
    }
    if (recruiter) {
      getJobsRecruiter()
        .then((data) => {
          setJobs(data);
          setLocalSto(data);
        })
        .catch(console.log);
    }
  }, [recruiter, user, setLocalSto]);

  let filterJobs = jobs;

  if (filter === "closed") {
    filterJobs = jobs?.filter((elem) => elem.state.toLowerCase() === filter);
  }

  if (filter === "ontrack") {
    filterJobs = jobs?.filter(
      (elem) =>
        elem.applications.filter((elem) => elem.state === "review").length > 0
    );
  }

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  function searchJob(id) {
    return jobs.find((elem) => elem.id === id);
  }

  function handleJob(data, id) {
    updateJob(data, id);
    let newjobs = jobs.filter((elem) => elem.id !== id);

    let job = searchJob(id);
    job.state = "closed";

    newjobs.push(job);

    setJobs(newjobs);
  }

  return (
    <Container>

     
      {user ? (
        <>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Search />} />
          </Routes>
        </>
      ) : (

        <>

        <Following />
          {/* <Navbar />
          <Routes>
            <Route
              path={"/"}
              element={
                <JobsPage
                  handleFilter={handleFilter}
                  jobs={filterJobs}
                  handleState={handleJob}
                />
              }
            />

            <Route path={"/newjob"} element={<NewJob />} />

            <Route path={"/profile"} element={<ProfileRecruiter />} />

          </Routes> */}

            <Route
              path={"/jobs"}
              element={
                <JobsPage
                  handleFilter={handleFilter}
                  jobs={filterJobs}
                  handleState={handleJob}
                />
              }
            />
            <Route
              path={"/jobs/:id"}
              element={<JobPage findJob={searchJob} setJobs={setJobs} />}
            />
          </Routes>

        </>
      {/* )} */}
    </Container>
  );
}

export default AuthenticatedApp;
