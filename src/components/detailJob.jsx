import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconDetails = styled.div`
  font-size: 1.2rem;
`;
//   ${({ active }) => (active ? "rotate: -180deg;" : "")}

const DetailJob = ({ name, icon }) => {
  return (
    <Container>
      <IconDetails>{icon}</IconDetails>
      <span>{name}</span>
    </Container>
  );
};

export default DetailJob;
