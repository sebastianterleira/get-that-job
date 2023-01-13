/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
  RiMailOpenLine,
  RiCloseCircleLine,
  RiSearchLine,
} from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import * as dayjs from "dayjs";

import { useState } from "react";
import { FaIndustry } from "react-icons/fa";
import DetailJob from "./detailJob";
import { css } from "@emotion/react";
import { useAuth } from "../context/auth-context";

dayjs().format();

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
`;

const Header = styled.section`
  display: flex;
  gap: 3rem;
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

const Amount = styled.span`
  ${typography.text.md}
`;

const ButtonClose = styled.button`
  all: unset;
  width: 90px;
  height: 30px;
  padding: 6px 16px;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  ${typography.text.sm}
  font-weight:500;
  ${({ disabled }) =>
    disabled
      ? "background-color: #E1E2E1; color:#8E8E8E;"
      : `background-color: #BF5F82;
    cursor:pointer;
    &:hover {
  background-color: #db5c8b;
}
`}
`;

const ButtonSearch = styled.button`
  all: unset;
  width: 90px;
  height: 30px;
  padding: 6px 16px;
  border-radius: 20px;
  color: #616161;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  ${typography.text.sm}
  cursor:pointer;
  &:hover {
    background-color: #f5f5f6;
    color: #00000;
  }
`;

const ContainerButtons = styled.section`
  display: flex;
  gap: 1rem;
`;

const CardPosting = ({ job, handleUpdate }) => {
  const { navigate } = useAuth();
  const [display, setDisplay] = useState(false);
  const {
    id,
    name,
    description,
    category,
    type_job,
    mix_salary,
    max_salary,
    requirements,
    optional_requirements,
    state,
    applications,
    // company_id,
  } = job;

  function handleDisplay() {
    setDisplay(!display);
  }

  function handleNavigate() {
    navigate(`/jobs/${id}`);
  }

  function handleUpdateState() {
    handleUpdate({ state: "closed" }, id);
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <section
            css={css`
              width: 322px;
            `}
          >
            <Title>{name}</Title>
            <Details>
              <DetailJob icon={<FaIndustry />} name={category} />

              <DetailJob icon={<RiCalendar2Line />} name={type_job} />
              <DetailJob
                icon={<RiMoneyDollarCircleLine />}
                name={`${((mix_salary || 1000) / 1000).toFixed(1)}k - ${(
                  max_salary / 1000
                ).toFixed(1)}k`}
              />
            </Details>
          </section>
          <ContainerCandidates>
            <JobCandidates>
              <IconWrapper>
                <RiMailOpenLine />
              </IconWrapper>
              <TextIcon>{`Open on ${dayjs(job?.created_at).format(
                "MM-DD-YYYY"
              )}`}</TextIcon>
            </JobCandidates>
            <JobCandidates>
              <IconWrapper>
                <BiUserCircle />
                <Amount>{applications?.length}</Amount>
              </IconWrapper>
              <TextIcon>{`Total Candidates`}</TextIcon>
            </JobCandidates>

            <JobCandidates colorDesi={"pink"}>
              <IconWrapper>
                <BiUserCircle />
                <Amount>
                  {
                    applications?.filter((elem) => elem.state === "review")
                      ?.length
                  }
                </Amount>
              </IconWrapper>
              <TextIcon>{`Candidates on track`}</TextIcon>
            </JobCandidates>
          </ContainerCandidates>

          <ContainerButtons>
            <ButtonSearch onClick={handleNavigate}>
              <RiSearchLine
                css={css`
                  font-size: 1.4rem;
                `}
              />
              SHOW
            </ButtonSearch>
            <ButtonClose
              onClick={handleUpdateState}
              disabled={state === "closed"}
            >
              <RiCloseCircleLine
                css={css`
                  font-size: 1.4rem;
                `}
              />
              CLOSE
            </ButtonClose>
          </ContainerButtons>
        </Header>
        <ContainerMain active={display}>
          <ContainerText>
            <SubTitle>About the job position</SubTitle>
            <p>{description}</p>
          </ContainerText>

          <ContainerText>
            <SubTitle>Mandatory Requirements</SubTitle>
            <div>{requirements}</div>
          </ContainerText>
          <ContainerText>
            <SubTitle>Optional Requirements</SubTitle>
            <div>{optional_requirements}</div>
          </ContainerText>
        </ContainerMain>
      </Wrapper>

      <Icon active={display}>
        <HiOutlineChevronDown onClick={handleDisplay} />
      </Icon>
    </Container>
  );
};

export default CardPosting;
