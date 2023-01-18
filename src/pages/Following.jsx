import styled from "@emotion/styled";
import { useState } from "react";
import CompanyCard from "../components/company-follow";
import JobFollow from "../components/job-follow";
import { useAuth } from "../context/auth-context";

const Container = styled.div`
  margin: 2rem 7rem 2rem 7rem;
  min-height: 100vh;
`;

const Tittle = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  margin-bottom: 16px;
`;

const Subtitle = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  margin-bottom: 8px;
`;

const ContainerCard = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  margin-bottom: 2rem;
`;

function Following({ handlefollowing }) {
  const { user } = useAuth();
  const [followingJobs, setFollowingJobs] = useState(handlefollowing());

  function deleteJobFollowig(id) {
    let newJobs = followingJobs.filter((elem) => elem.id !== id);
    setFollowingJobs(newJobs);
  }

  return (
    <Container>
      <Tittle>Following</Tittle>
      <Subtitle>You are following {followingJobs.length} jobs</Subtitle>
      <ContainerCard>
        {followingJobs?.map((job) => (
          <JobFollow
            key={job.id}
            {...job}
            following={true}
            handleFollows={deleteJobFollowig}
          />
        ))}
      </ContainerCard>
      <Subtitle>You are following 0 company</Subtitle>
      <ContainerCard>
        {user.follows_company?.map((follow) => (
          <CompanyCard
            key={follow?.id}
            job_id={follow?.job_id}
            follow_id={follow?.id}
            company_data={follow?.data}
            following={true}
          />
        ))}
      </ContainerCard>
    </Container>
  );
}
export default Following;
