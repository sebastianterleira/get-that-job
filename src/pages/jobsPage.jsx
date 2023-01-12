import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import CardPosting from "../components/CardPostingJob";

const Container = styled.div`
  margin: 2rem auto;
  width: 1200px;
  height: 900px;
`;

const ContainerCards = styled.div`
  display: flex;
`;

const Title = styled.h2`
  ${typography.head.lg}
  font-weight:400;
  font-family: Montserrat;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h3`
  ${typography.text.xl}
  font-weight:500;
  font-family: Montserrat;
  margin-bottom: 0.5rem;
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

const JobsPage = () => {
  return (
    <Container>
      <Title>Job Postings</Title>
      <Filters>
        <ContainerFilter>
          <RadioButton type="radio" id="Choice3" name="contact" value="all" />
          <label for="Choice3">All</label>
        </ContainerFilter>
        <ContainerFilter>
          <RadioButton
            type="radio"
            id="contactChoice1"
            name="contact"
            value="ontrack"
          />
          <label for="contactChoice1">With candidates on track</label>
        </ContainerFilter>
        <ContainerFilter>
          <RadioButton
            type="radio"
            id="Choice2"
            name="contact"
            value="closed"
          />
          <label for="Choice2">Closed</label>
        </ContainerFilter>
      </Filters>
      <Subtitle>4 Job postings found</Subtitle>
      <ContainerCards>
        <CardPosting />
      </ContainerCards>
    </Container>
  );
};

export default JobsPage;
