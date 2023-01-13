import styled from "@emotion/styled";

const Container = styled.div`
  margin: 2rem auto;
  width: 1200px;
  height: 900px;
`;

const NewJob = () => {
  return (
    <Container>
      <p>Create new job posting</p>
      <p>Main informtation</p>
      <p>Additional informtation</p>
    </Container>
  );
};

export default NewJob;
