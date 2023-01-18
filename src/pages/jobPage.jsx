import styled from "@emotion/styled";
import { useState } from "react";

import { useParams } from "react-router-dom";
import CardApplies from "../components/cardApplies";
import CardPosting from "../components/CardPostingJob";

import { typography } from "../styles/typography";

const Container = styled.div`
  margin: 2rem 4rem 2rem 4rem;
`;

const Filters = styled.section`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`;

const ContainerFilter = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const RadioButton = styled.input`
  appearance: none;
  height: 18px;
  width: 18px;
  border: 1px solid palevioletred;
  border-radius: 8px;
  &:checked {
    height: 16px;
    width: 16px;
    background-color: palevioletred;
  }

  &:active,
  &:focus {
    outline: 1px solid palevioletred;
    outline-offset: 3px;
  }
`;

const WrapperJob = styled.div`
  display: flex;
`;

const ContainerApplications = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  ${typography.head.lg}
  font-weight:400;
  font-family: Montserrat;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  ${typography.text.xl}
  font-weight:500;
  font-family: Montserrat;
  margin-bottom: 0.5rem;
`;

const JobPage = ({ findJob, setJobs }) => {
  const [filter, setFilter] = useState("all");
  const { id } = useParams();
  const job = findJob(Number.parseInt(id));

  let applications = job.applications;

  let filterApplications = applications;

  if (filter !== "all") {
    filterApplications = applications.filter(
      (elem) => elem.state.toLowerCase() === filter
    );
  }

  function handleFIlter(event) {
    setFilter(event.target.value);
  }

  return (
    <Container>
      <Title>Show Job Posting</Title>
      <WrapperJob>
        <CardPosting job={job} handleUpdate={console.log} />
      </WrapperJob>
      <Filters>
        <ContainerFilter>
          <RadioButton
            type="radio"
            id="all"
            name="state"
            value="all"
            onClick={handleFIlter}
          />
          <label htmlFor="all">All</label>
        </ContainerFilter>
        <ContainerFilter>
          <RadioButton
            type="radio"
            id="waiting"
            name="state"
            value="review"
            onClick={handleFIlter}
          />
          <label htmlFor="waiting">Waiting</label>
        </ContainerFilter>
        <ContainerFilter>
          <RadioButton
            type="radio"
            id="In progress"
            name="state"
            value="progress"
            onClick={handleFIlter}
          />
          <label htmlFor="In progress">In progress</label>
        </ContainerFilter>
        <ContainerFilter>
          <RadioButton
            type="radio"
            id="Finished"
            name="state"
            value="finished"
            onClick={handleFIlter}
          />
          <label htmlFor="Finished">Finished</label>
        </ContainerFilter>
      </Filters>
      <Subtitle>{`${filterApplications.length} candidates found`}</Subtitle>

      <ContainerApplications>
        {filterApplications?.map((appli) => (
          <CardApplies key={appli.id} applications={appli} />
        ))}
      </ContainerApplications>
    </Container>
  );
};

export default JobPage;
