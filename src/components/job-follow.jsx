/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";
import { MdOutlineDateRange } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaIndustry } from "react-icons/fa";
import { RiFocus3Line } from "react-icons/ri";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import {
  createFollowing,
  deleteFollowing,
} from "../service/following-services";

const CardData = styled("div")`
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  width: 365px;
  overflow: hidden;
  transition: all 400ms ease;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transform: translateY(-3%);
  }
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ContentJob = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 16px 10px;
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
  font-family: Montserrat;
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

const ButtonIcon = styled.button`
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

function JobFollow({
  id,
  type_job,
  category,
  name,
  min_salary,
  max_salary,
  company_data,
  following,
  follow_id,
  handleFollows,
}) {
  const [activeButton, setActiveButton] = useState(following);
  const [follow, setFollow] = useState(follow_id);
  const { navigate } = useAuth();
  function handleLinkChange(event) {
    event.preventDefault();

    setActiveButton(!activeButton);
  }

  function handleNavigate() {
    navigate(`/jobs/${id}`);
  }

  function handleFollowing() {
    if (follow) deleteFollowing(id, "jobs", follow).then(() => setFollow(null));
    if (handleFollows) handleFollows(id);
    if (!follow)
      createFollowing(id, "jobs")
        .then((data) => {
          setFollow(data.id);
        })
        .catch(console.log);
  }
  return (
    <CardData>
      <div
        css={css`
          display: flex;
          gap: 1rem;
        `}
      >
        <img
          src={company_data.profile}
          css={css`
            width: 75px;
            height: 75px;
            border-radius: 50%;
          `}
          alt={"job"}
        />
        <ContentJob>
          <ContentRow>
            <FaIndustry
              css={css`
                font-size: 12.5px;
              `}
            />
            <TextCategory>{category}</TextCategory>
          </ContentRow>
          <TextTitle>{name}</TextTitle>
          <TextCompanyName>{company_data.name}</TextCompanyName>
          <ContentRow>
            <MdOutlineDateRange
              css={css`
                font-size: 12.5px;
              `}
            />
            <TextCompanyName>{type_job}</TextCompanyName>
            <RiMoneyDollarCircleLine
              css={css`
                font-size: 12.5px;
              `}
            />
            <TextCompanyName>{`${((min_salary || 1000) / 1000).toFixed(
              1
            )}k - ${(max_salary / 1000).toFixed(1)}k`}</TextCompanyName>
          </ContentRow>
        </ContentJob>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
          margin-left: 0.25rem;
        `}
      >
        <div onClick={handleLinkChange}>
          <ButtonIcon follow={activeButton} onClick={handleFollowing}>
            <RiFocus3Line
              css={css`
                font-size: 22px;
              `}
            />
          </ButtonIcon>
        </div>
        <TextButtonFollow
          css={css`
            width: 94px;
          `}
        >
          {activeButton ? "FOLLOWING" : "FOLLOW"}
        </TextButtonFollow>
        <ButtonSeeMore
          onClick={handleNavigate}
          css={css`
            margin-left: 1rem;
          `}
        >
          See More
        </ButtonSeeMore>
      </div>
    </CardData>
  );
}
export default JobFollow;
