import styled from "@emotion/styled";
import CompanyCard from "../components/company-follow";
import JobFollow from "../components/job-follow";
import { useAuth } from "../context/auth-context";

const Wrapper = styled.div`
  margin: 2rem 8.31rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
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
  let followingJobs = handlefollowing();

  return (
    <Wrapper>
      <Tittle>Following</Tittle>
      <Subtitle>You are following {followingJobs.length} jobs</Subtitle>
      <ContainerCard>
        {followingJobs?.map((job) => (
          <JobFollow key={job.id} {...job} />
        ))}
      </ContainerCard>
      <Subtitle>You are following 0 company</Subtitle>
      <ContainerCard>
        {user.follows_company?.map((follow) => (
          <CompanyCard
            job_id={follow?.job_id}
            follow_id={follow?.id}
            company_data={follow?.data}
          />
        ))}
      </ContainerCard>
    </Wrapper>
  );
}
export default Following;
