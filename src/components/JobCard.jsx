/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { RiFocus3Line } from "react-icons/ri";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Company from "../static/img/Companies-Logos/Rectangle1.png";

const CardData = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 45px;
  margin-top: 9px;
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

const ContentJob = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px 12px 85px;
  margin-left: 20px;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const TextCategory = styled.p`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #8e8e8e;
`;

const TextTitle = styled.p`
  font-family: ${fonts.bedroom};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: #373737;
`;

const TextCompanyName = styled.p`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #616161;
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

const ButtonSeeMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f48fb1;
  border-radius: 30px;
  font-family: ${fonts.chiron};
  width: 110px;
  height: 35px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #616161;
  background: #fff;
  padding: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 500ms ease;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    background-color: #bf5f82;
    transition: all 500ms ease;
    z-index: 1;
  }
  &:hover {
    background-color: #f48fb1;
    box-shadow: 0 0 10px #f48fb1, 0 0 10px #f48fb1, 0 0 15px #f48fb1;
    color: #616161;
  }
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

function JobCard(job) {
  const [activeButton, setActiveButton] = useState(true);
  const { navigate } = useAuth();

  function handleLinkChange(event) {
    event.preventDefault();

    setActiveButton(!activeButton);
  }

  return (
    <CardData key={job?.id}>
      <ContentJob>
        <img
          src={
            job?.company_data.profile === null
              ? Company
              : job?.company_data.profile
          }
          alt={""}
          css={css`
            width: 75px;
            height: 75px;
            position: absolute;
            left: 15px;
            top: 20px;
            border-radius: 50%;
          `}
        />
        <ContentRow>
          <FaIndustry
            css={css`
              font-size: 12.5px;
            `}
          />
          <TextCategory>{job?.category}</TextCategory>
        </ContentRow>
        <TextTitle>{job?.name}</TextTitle>
        <TextCompanyName>{job?.company_data.name}</TextCompanyName>
        <ContentRow>
          <MdOutlineDateRange
            css={css`
              font-size: 12.5px;
            `}
          />
          <TextCompanyName>{job?.type_job}</TextCompanyName>
          <RiMoneyDollarCircleLine
            css={css`
              font-size: 12.5px;
            `}
          />
          <TextCompanyName>
            {`${((job?.min_salary || 1000) / 1000).toFixed(1)}k`}
          </TextCompanyName>
          <p>-</p>
          <TextCompanyName>{`${(job?.max_salary / 1000).toFixed(
            1
          )}k`}</TextCompanyName>
        </ContentRow>
      </ContentJob>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        `}
      >
        <div onClick={handleLinkChange}>
          <ButtonFollow follow={activeButton}>
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
        <ButtonSeeMore onClick={() => navigate(`jobs/${job?.id}`)}>
          See More
        </ButtonSeeMore>
      </div>
    </CardData>
  );
}

export default JobCard;
