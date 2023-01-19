/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { RiSendPlaneLine } from "react-icons/ri";
import { colors, fonts } from "../styles";
import { MdOutlineDateRange } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { RiFocus3Line } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Company from "../static/img/Companies-Logos/Rectangle1.png";
import { useAuth } from "../context/auth-context";
import {
  createFollowing,
  deleteFollowing,
} from "../service/following-services";

const Container = styled.div`
  margin: 2rem 7rem 2rem 7rem;
`;

const ContainerButtonBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
  margin-bottom: 10px;
`;

const CardImagenCompany = styled.div`
  width: 80px;
  height: 74px;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition: all 400ms ease;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transform: translateY(-3%);
  }
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

const ConteinerCompany = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 920px;
  height: 100px;
  position: relative;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
`;

const StyledNAmeCompany = styled.div`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 24px;
  line-height: 42px;
  color: #373737;
`;

const ButtonFollow = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-family: ${fonts.chiron};
  width: 30px;
  height: 30px;
  padding: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: all 500ms ease;

  ${({ follow }) =>
    follow
      ? " background: #f48fb1; color: #fff; border: 1px solid #F48FB1;  &:hover {	background-color: #F48FB1;	box-shadow: 0 0 10px #F48FB1, 0 0 10px #F48FB1, 0 0 15px #F48FB1;	color: #fff;}"
      : " color:#00000; background: #fff; &:hover {	border: 1px solid #F48FB1;}"}
`;

const ButtonIcon = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #F48FB1;
border-radius: 50px;
font-family: ${fonts.chiron};
width: 40;
height: 40px;
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #fff
background: #F48FB1;
padding: 8px;
cursor: pointer;
overflow: hidden;
transition: all 500ms ease;
z-index: 0;

&:hover {
	background-color: #F48FB1;
	box-shadow: 0 0 10px #F48FB1, 0 0 10px #F48FB1, 0 0 15px #F48FB1;
	color: #616161;
}
`;

const TextButtonFollow = styled.p`
  font-family: ${fonts.chiron};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #616161;
`;

const ContainerJobInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  gap: 8px;
`;

const JobTitle = styled.div`
  font-family: ${fonts.chiron};
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  color: #373737;
  margin-bottom: 9.5px;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  margin-bottom: 54px;
`;

const CardInfoJob = styled.div`
  min-width: 100px;
  max-width: 500px;
  min-height: 74px;
  max-height: 150px;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 1px solid #bf5f82;
  position: relative;
  overflow: hidden;
  transition: all 400ms ease;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transform: translateY(-3%);
  }
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: center;
  cursor: default;
`;

const ContentCardInfoJob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const LabelCardInfoJob = styled.p`
  font-family: ${fonts.chiron};
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #616161;
  margin: 8px 103px 0px 103px;
`;

const CardInfo = styled.p`
  font-family: ${fonts.chiron};
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #373737;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

const SubTitle = styled.p`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #bf5f82;
  margin-bottom: 8px;
`;

const ParrafoText = styled.p`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #373737;
  margin-bottom: 16px;
`;

const TimeAgo = styled.p`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  color: #616161;
  text-transform: uppercase;
`;

const ContentTIme = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 5.25px;
  margin-bottom: 17px;
`;

function SeeMore({ findJob }) {
  const { navigate, user } = useAuth();

  let followintrue = user?.follows_company?.find(
    (elem) => elem?.name === user?.data?.name
  )?.job_id;

  const { id } = useParams();
  const job = findJob(Number.parseInt(id));
  const [activeButton, setActiveButton] = useState(Boolean(followintrue));
  const [follow, setFollow] = useState(followintrue);

  const history = useNavigate();

  function handleLinkChange(event) {
    event.preventDefault();

    setActiveButton(!activeButton);
  }

  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);

  const Ago = dayjs(`${job.created_at}`).fromNow(true);

  function handleFollowing() {
    if (activeButton) deleteFollowing(job.company_data.id, "companies", follow);
    if (!activeButton)
      createFollowing(job.company_data.id, "companies")
        .then(setFollow)
        .catch(console.log);
  }

  return (
    <Container>
      <button
        onClick={() => history(-1)}
        css={css`
          border-width: 0;
          padding: 0;
        `}
      >
        <ContainerButtonBack>
          <MdOutlineArrowBackIosNew color={colors.black} />
          <p>BACK</p>
        </ContainerButtonBack>
      </button>
      <ConteinerCompany>
        <CardImagenCompany>
          <img
            css={css`
              width: 80px;
              height: 75px;
            `}
            src={
              job?.company_data.profile === null
                ? Company
                : job?.company_data.profile
            }
            alt={"Company"}
          />
        </CardImagenCompany>
        <ContentText>
          <StyledNAmeCompany>{job.company_data.name}</StyledNAmeCompany>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 4px;
              margin-bottom: 20px;
            `}
          >
            <div onClick={handleLinkChange}>
              <ButtonFollow follow={activeButton} onClick={handleFollowing}>
                <RiFocus3Line
                  css={css`
                    font-size: 22px;
                  `}
                />
              </ButtonFollow>
            </div>
            <TextButtonFollow>
              {activeButton ? "FOLLOWING" : "FOLLOW"}
            </TextButtonFollow>
          </div>
        </ContentText>
      </ConteinerCompany>
      <ButtonIcon
        onClick={() => navigate(`application/${job.id}`)}
        css={css`
          position: absolute;
          top: 85px;
          margin-left: 750px;
        `}
      >
        <RiSendPlaneLine
          css={css`
            font-size: 22px;
            margin-right: 10px;
          `}
        />
        APPLY NOW
      </ButtonIcon>
      <ContainerJobInfo>
        <JobTitle>{job.name}</JobTitle>
        <ContentTIme>
          <CiClock2
            css={css`
              color: #616161;
              font-size: 12.5px;
            `}
          />
          <TimeAgo>{`${Ago} Ago`}</TimeAgo>
        </ContentTIme>
        <ContainerCards>
          <CardInfoJob>
            <ContentCardInfoJob>
              <LabelCardInfoJob>Category</LabelCardInfoJob>
              <ContentRow>
                <FaIndustry
                  css={css`
                    font-size: 28px;
                  `}
                />
                <CardInfo>{job.category}</CardInfo>
              </ContentRow>
            </ContentCardInfoJob>
          </CardInfoJob>
          <CardInfoJob>
            <ContentCardInfoJob>
              <LabelCardInfoJob>Type</LabelCardInfoJob>
              <ContentRow>
                <MdOutlineDateRange
                  css={css`
                    font-size: 28px;
                  `}
                />
                <CardInfo>{job.type_job}</CardInfo>
              </ContentRow>
            </ContentCardInfoJob>
          </CardInfoJob>
          <CardInfoJob>
            <ContentCardInfoJob>
              <LabelCardInfoJob>Salary</LabelCardInfoJob>
              <ContentRow>
                <RiMoneyDollarCircleLine
                  css={css`
                    font-size: 28px;
                  `}
                />
                <CardInfo>{`${((job.min_salary || 1000) / 1000).toFixed(
                  1
                )}k`}</CardInfo>
                <p>-</p>
                <CardInfo>{`${(job.max_salary / 1000).toFixed(1)}k`}</CardInfo>
              </ContentRow>
            </ContentCardInfoJob>
          </CardInfoJob>
        </ContainerCards>
      </ContainerJobInfo>
      <SubTitle>About The company name SA</SubTitle>
      <ParrafoText>{job.company_data.description}</ParrafoText>
      <SubTitle>About the job position</SubTitle>
      <ParrafoText>{job.description}</ParrafoText>
      <SubTitle>Mandatory Requirements</SubTitle>
      <ParrafoText>{job.requirements}</ParrafoText>
      <SubTitle>Optional Requirements</SubTitle>
      <ParrafoText>{job.optional_requirements}</ParrafoText>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <ButtonIcon
          css={css`
            margin-bottom: 25px;
            margin-top: 15px;
          `}
          onClick={() => navigate(`application/${job.id}`)}
        >
          <RiSendPlaneLine
            css={css`
              font-size: 22px;
              margin-right: 10px;
            `}
          />
          APPLY NOW
        </ButtonIcon>
      </div>
    </Container>
  );
}

export default SeeMore;
