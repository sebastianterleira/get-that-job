/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { HiOutlineChevronDown } from "react-icons/hi";
import { RiPauseCircleLine, RiMailOpenLine, RiPhoneLine } from "react-icons/ri";

import { useState } from "react";
import { css } from "@emotion/react";
import dayjs from "dayjs";
import { updateApplicationJob } from "../service/applicationJobs";

const Container = styled.div`
  min-height: 102px;
  width: 997px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
`;

const Header = styled.section`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
`;

const Title = styled.p`
  ${typography.head.xs}
  font-family:Montserrat;
  font-weight: 500;
`;

const ContainerMain = styled.div`
  width: 888px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 0;
  transition: all 0.5s;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.2s linear;
  transform-origin: top;
  ${({ active }) =>
    active
      ? "  margin-top: 12px; visibility: visible; opacity: 1; height:auto;"
      : ""};
`;

const SubTitle = styled.p`
  ${typography.text.md}
  font-family:Montserrat;
  color: #bf5f82;
`;

const ContainerText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Icon = styled.div`
  margin: 0.5rem 0.25rem;
  cursor: pointer;
  align-self: end;
  transition: all 0.5s;
  font-size: 1.4rem;
  ${({ active }) => (active ? "rotate: -180deg;" : "")}
`;

const Details = styled.div`
  display: flex;
  gap: 0.5rem;
  ${typography.text.sm}
  font-family:inter;
  color: #8e8e8e;
`;

const JobCandidates = styled.div`
  width: 80px;
  height: 47px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ colorDesi }) => (colorDesi ? "color:#F48FB1;" : "")}
`;

const ContainerCandidates = styled.section`
  display: flex;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;
const TextIcon = styled.p`
  ${typography.text.sm}
`;

const ProfileData = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #8e8e8e;
  ${typography.text.sm}
`;

const ButtonSearch = styled.button`
  all: unset;
  width: 180px;
  height: 30px;
  padding: 6px 16px;
  border-radius: 20px;
  color: #616161;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid #f48fb1;
  border-radius: 1rem;
  ${typography.text.sm}

  ${({ disabled }) =>
    disabled
      ? "background-color: #E1E2E1; color:#8E8E8E; border:none;"
      : `
    cursor:pointer;
    &:hover {
      background-color: #db5c8b;
  
      color: #fff;
    }
`}
`;

const ContainerButtons = styled.section`
  display: flex;
  gap: 1rem;
`;

const CardApplies = ({ applications }) => {
  const [display, setDisplay] = useState(false);
  const [statusValue, setStatusValue] = useState(applications.state);

  function handleDisplay() {
    setDisplay(!display);
  }
  let message;
  switch (statusValue) {
    case "review":
      message = "Waiting in review";
      break;
    case "progress":
      message = "Review in progress";
      break;
    case "finished":
      message = "Review finished";
      break;
    case "declined":
      message = `Declined in ${dayjs(applications.updated_at).format(
        "MM-DD-YYYY"
      )}`;
      break;
    default:
      break;
  }

  function updateState() {
    let state;
    if (statusValue === "review") state = "progress";
    if (statusValue === "progress") state = "finished";

    updateApplicationJob({ state: state }, applications.id).then().catch();
    setStatusValue(state);
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <section>
            <Title>{applications?.user_data.name}</Title>
            <Details>
              <span>{applications?.user_data.title}</span>
            </Details>
          </section>
          <section
            css={css`
              width: 140px;
            `}
          >
            <ProfileData>
              <IconWrapper>
                <RiMailOpenLine />
              </IconWrapper>
              <span>{applications?.user_data.email}</span>
            </ProfileData>
            <ProfileData>
              <IconWrapper>
                <RiPhoneLine />
              </IconWrapper>
              <span>{applications.user_data.phone}</span>
            </ProfileData>
          </section>
          <ContainerCandidates>
            <JobCandidates>
              <IconWrapper>
                <RiMailOpenLine />
              </IconWrapper>
              <TextIcon>{`Sent 5 days ago`}</TextIcon>
            </JobCandidates>

            <JobCandidates colorDesi={"pink"}>
              <IconWrapper>
                {statusValue === "review" ? (
                  <RiPauseCircleLine />
                ) : (
                  <RiMailOpenLine />
                )}
              </IconWrapper>
              <TextIcon>{message}</TextIcon>
            </JobCandidates>
          </ContainerCandidates>

          <ContainerButtons>
            <ButtonSearch
              disabled={
                statusValue === "finished" || statusValue === "declined"
              }
              onClick={updateState}
            >
              {statusValue === "review"
                ? "MARK AS STARTED"
                : statusValue === "progress"
                ? "MARK AS FINISHED"
                : "FINISHED"}
            </ButtonSearch>
          </ContainerButtons>
        </Header>
        <ContainerMain active={display}>
          <ContainerText>
            <SubTitle>Professional experience</SubTitle>
            <p>{applications.user_data.experience}</p>
          </ContainerText>

          <ContainerText>
            <SubTitle>
              Why are you interested in working at The company name SA
            </SubTitle>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut est
              eligendi quidem ratione, hic pariatur adipisci ducimus quis error
              perspiciatis nisi suscipit dolorum cum molestiae veritatis rem!
              Totam rem repellat, possimus beatae excepturi nam dicta commodi
              oribus dolorem cum, suscipit iusto neque quos ducimus maiores
              molestias! Iste optio tenetur cum dolorum architecto sed molestiae
              eius voluptates, dolor laborum reiciendis tempore, voluptatem
              cupiditate commodi?
            </p>
          </ContainerText>
        </ContainerMain>
      </Wrapper>

      <Icon active={display}>
        <HiOutlineChevronDown onClick={handleDisplay} />
      </Icon>
    </Container>
  );
};

export default CardApplies;
