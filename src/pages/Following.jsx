import styled from "@emotion/styled";
import JobFollow from "../components/job-follow";

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
  //   grid-template-columns: repeat(3, 290px);
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));

  //   grid-auto-rows: minmax(170px, auto);
`;

function Following({ handlefollowing }) {
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
    </Wrapper>
  );
}
export default Following;
