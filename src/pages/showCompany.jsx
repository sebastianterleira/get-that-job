/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiFocus3Line } from "react-icons/ri";
import { HiOutlineChevronLeft } from "react-icons/hi";

import JobFollow from "../components/job-follow";
import { useAuth } from "../context/auth-context";
import { getCompany } from "../service/user-services";
import { fonts, typography } from "../styles";
import {
  createFollowing,
  deleteFollowing,
} from "../service/following-services";

const Wrapper = styled.div`
  margin: 1.5rem 8.31rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
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

const Tittle = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 29.75px;
`;

const Subtitle = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  margin-bottom: 8px;
`;

const ContainerCard = styled.div`
  display: grid;
  grid-gap: 2rem;
  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-columns: repeat(3, 370px);
  grid-auto-rows: minmax(170px, auto);
  margin-bottom: 2rem;
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
      : " color:#00000; background: #fff; 	border: 1px solid #fff; &:hover {	border: 1px solid #F48FB1;}"}
`;

const BackPage = styled.div`
  width: 70px;
  ${typography.text.sm}
  color: #616161;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
  cursor: pointer;
`;

function ShowCompany({ following }) {
  const [company, setCompany] = useState({});
  const [activeButton, setActiveButton] = useState(
    following(company.id)?.follow
  );
  const { navigate, user } = useAuth();
  const [followCom, setFollowCom] = useState(following(company.id)?.follow_id);
  const { id } = useParams();

  useEffect(() => {
    getCompany(id).then(setCompany).catch(console.log);
  }, [id]);

  function handleFollowing() {
    if (activeButton)
      deleteFollowing(company.id, "companies", followCom).then(() =>
        setFollowCom(null)
      );
    if (!activeButton)
      createFollowing(company.id, "companies").then((data) =>
        setFollowCom(data.id)
      );
  }

  function handleLinkChange(event) {
    event.preventDefault();

    handleFollowing();
    setActiveButton(!activeButton);
  }
  function handleNavigate() {
    navigate(-1);
  }

  let follow = user?.follows_jobs?.reduce((accumulator, currentValue) => {
    accumulator[currentValue.job_id] =
      accumulator[currentValue.job_id] ?? currentValue.id;

    return accumulator;
  }, {});

  let jobsfollow = user?.follows_jobs?.reduce((accumulator, currentValue) => {
    accumulator?.push(currentValue.job_id);
    return accumulator;
  }, []);

  return (
    <Wrapper>
      <BackPage onClick={handleNavigate}>
        <HiOutlineChevronLeft />
        <p>BACK</p>
      </BackPage>

      <div
        css={css`
          display: flex;
          gap: 1rem;
          align-items: start;
        `}
      >
        <img
          src={company?.profile_image}
          alt=""
          css={css`
            width: 75px;
            height: 75px;
            border-radius: 8px;
          `}
        />

        <div
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <Tittle>{company?.name}</Tittle>
          <div
            onClick={handleLinkChange}
            css={css`
              display: flex;
              align-items: center;
              gap: 1rem;
            `}
          >
            <ButtonIcon follow={activeButton}>
              <RiFocus3Line
                css={css`
                  font-size: 22px;
                `}
              />
            </ButtonIcon>

            <TextButtonFollow
              css={css`
                width: 94px;
              `}
            >
              {activeButton ? "FOLLOWING" : "FOLLOW"}
            </TextButtonFollow>
          </div>
        </div>
      </div>
      <Subtitle>{company?.jobs?.length} job openings</Subtitle>
      <ContainerCard>
        {company?.jobs?.map((job) => (
          <JobFollow
            key={job.id}
            {...job}
            company_data={{
              profile: company.profile_image,
              name: company.name,
            }}
            following={jobsfollow?.includes(job.id)}
            follow_id={follow[job.id]}
          />
        ))}
      </ContainerCard>
    </Wrapper>
  );
}
export default ShowCompany;
// follow?.find((ele) => ele === job.id)
