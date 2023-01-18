import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import NavbarProfessional from "./components/navbar_professional";
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
import YourApplication from "./components/yourApplicationPage";
import SeeMore from "./pages/SeeMoreJobPage";
import ApplicationJob from "./components/ApplicationPage";
import ProfileUser from "./pages/userProfilePage";
import ShowCompany from "./pages/showCompany";

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
      getJobsRecruiter()
        .then((data) => {
          setJobs(data);
          setLocalSto(data);
        })
        .catch(console.log);
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

  function addJob(job) {
    setJobs([...jobs, job]);
  }

  function followingJobs() {
    return jobs.reduce((accu, current, currentIndex) => {
      current.followings.forEach((elem) => {
        if (elem.user_id === user.id) {
          current["follow_id"] = elem.id;
          accu.push(jobs[currentIndex]);
        }
      });
      return accu;
    }, []);
  }

  function getFollowingCompany(id) {
    return jobs.reduce((accu, current) => {
      current.followings.forEach((elem) => {
        if (elem.user_id === user.id && elem.followable_id === id) {
          current["follow_id"] = elem.id;
          current["follow"] = true;
        }
      });
      return accu;
    }, {});
  }

  return (
    <Container>
      {user ? (
        <>
          <NavbarProfessional />
          <Routes>
            <Route path={"/"} element={<Search jobs={jobs}/>} />
            <Route path={"/home"} element={<Search jobs={jobs}/>} />
            <Route path={"*"} element={<Search jobs={jobs}/>} />
            <Route path={"Applications"} element={<YourApplication />} />
            <Route
              path={"following"}
              element={<Following handlefollowing={followingJobs} />}
            />
            <Route
              path={"jobs/:id"}
              element={<SeeMore findJob={searchJob} />}
            />
            <Route
              path={"/userProfile"}
              element={<ProfileUser user={user} />}
            />
            <Route
              path={"companies/:id"}
              element={<ShowCompany following={getFollowingCompany} />}
            />
            <Route
              path={"application/:id"}
              element={<ApplicationJob findJob={searchJob} />}
            />
          </Routes>
        </>
      ) : (
        <>
          <Navbar />
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

            <Route path={"/newjob"} element={<NewJob addNewJob={addJob} />} />

            <Route
              path={"/profile"}
              element={<ProfileRecruiter recruiter={recruiter} />}
            />

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
            <Route
              path={"*"}
              element={
                <JobsPage
                  handleFilter={handleFilter}
                  jobs={filterJobs}
                  handleState={handleJob}
                />
              }
            />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default AuthenticatedApp;
