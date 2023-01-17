import styled from "@emotion/styled";
import { fonts } from "../styles";
import JobCard from "./JobCard";

const Tittle = styled.div`
  font-family: ${fonts.bedroom};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  margin-bottom: 8px;
`;

const ContainerCard = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 318px);
  grid-auto-rows: minmax(170px, auto);
`;

function JobList({ jobs }) {
  return (
    <>
      <Tittle>{jobs?.length} jobs for you</Tittle>
      <ContainerCard>
        {jobs?.map((job) => (
          <JobCard {...job} />
        ))}
      </ContainerCard>
    </>
  );
}
export default JobList;
