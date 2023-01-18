/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import IconExample from "../styles/img/iconoexample.svg";
import {
  RiArrowDownSLine,
  RiPauseCircleLine,
  RiMailLine,
  RiTimeLine,
  RiBuilding3Line,
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
  RiMailOpenLine,
  RiCloseCircleLine,
} from "react-icons/ri";
import dayjs from "dayjs";
import { useState } from "react";
import { updateApplicationJob } from "../service/applicationJobs";

dayjs().format();

const Conteiner = styled("div")`
  border: 1px solid #e1e2e1;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 944px;
  padding: 16px;
  display: flex;
  gap: 1rem;
`;

const JobTitle = styled("h4")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
`;

const CompanyName = styled("p")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #616161;
`;

const ExtraDetails = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #8e8e8e;
  display: flex;
  align-items: center;
`;

const MoreDetailsButton = styled("button")`
  border: none;
  align-self: end;
`;

const UpdateDate = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 25px 0 16px 0;
`;

const SubTitles = styled("h2")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #bf5f82;
`;

const Text = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  margin: 1rem 0;
  color: #373737;
`;

const CVButton = styled("a")`
  width: 183px;
  height: 40px;
  border: 1px solid #f48fb1;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const DeclineButton = styled("button")`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 242px;
  height: 40px;
  justify-content: center;
  background: #bf5f82;
  border-radius: 16px;
  color: white;
  border: none;
  ${({ status }) =>
    status === "declined"
      ? "background-color: #E1E2E1; color:#8E8E8E; border:none;"
      : "cursor: pointer;"}
`;

const View = styled.div`
  gap: "16px";
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
`;

export default function YourApplicationComponent({
  id,
  interest,
  state,
  created_at,
  cv_url,
  updated_at,
  user_data,
  user_experience,
  job_data,
}) {
  const [statusValue, setStatusValue] = useState(state);
  const [open, setOpen] = useState(false);

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
      message = `Declined in ${dayjs(updated_at).format("MM-DD-YYYY")}`;
      break;
    default:
      break;
  }

  function handleDeclined() {
    setStatusValue("declined");
    updateApplicationJob({ state: "declined" }, id);
  }

  function handleOpen() {
    setOpen(!open);
  }

  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);

  const Ago = dayjs(`${created_at}`).fromNow(true);

  return (
    <Conteiner>
      <div style={{ width: "105%" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img
              src={IconExample}
              style={{ width: "60px", height: "60px" }}
              alt={"job"}
            />
            <div>
              <JobTitle>{job_data?.name}</JobTitle>
              <CompanyName>{job_data?.company_name}</CompanyName>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: "10px", width: "250px" }}>
              <ExtraDetails>
                <RiBuilding3Line style={{ marginRight: "6px" }} />
                {job_data?.company_name}
              </ExtraDetails>
              <ExtraDetails>
                <RiCalendar2Line style={{ marginRight: "6px" }} />
                {job_data?.type}
              </ExtraDetails>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <ExtraDetails>
                <RiMoneyDollarCircleLine style={{ marginRight: "6px" }} />
                {`${((job_data?.min_salary || 1000) / 1000).toFixed(1)}k - ${(
                  job_data?.max_salary / 1000
                ).toFixed(1)}k`}
              </ExtraDetails>
              <ExtraDetails>
                <RiTimeLine style={{ marginRight: "6px" }} />
                Posted {`${dayjs(job_data?.created_at).format("MM/DD/YYYY")}`}
              </ExtraDetails>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              gap: 16px;
              align-items: center;
            `}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "116px",
              }}
            >
              <ExtraDetails>
                <RiMailLine />
              </ExtraDetails>
              <ExtraDetails>{`${Ago} ago`}</ExtraDetails>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ExtraDetails
                style={{
                  color: statusValue === "declined" ? "#BF5F82" : "#F48FB1",
                  width: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {statusValue === "review" ? (
                  <RiPauseCircleLine style={{ fontSize: "1rem" }} />
                ) : statusValue === "declined" ? (
                  <RiCloseCircleLine
                    style={{ fontSize: "1rem", color: "#BF5F82" }}
                  />
                ) : (
                  <RiMailOpenLine style={{ fontSize: "1rem" }} />
                )}
                {message}
              </ExtraDetails>
            </div>
          </div>
        </div>
        <View open={open}>
          <UpdateDate>
            Last Updated on{" "}
            {`${dayjs(job_data?.updated_at).format("MM/DD/YYYY")}`}
          </UpdateDate>

          <SubTitles>Professional experience</SubTitles>
          <Text>{user_experience}</Text>
          <SubTitles>
            Why are you interested in working at The company name SA
          </SubTitles>
          <Text>{interest}</Text>
          <div
            style={{
              gap: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CVButton href={cv_url} target="_blank" download>
              DOWNLOAD CV
            </CVButton>
            <DeclineButton
              disabled={statusValue === "declined"}
              status={statusValue}
              onClick={handleDeclined}
            >
              DECLINE APPLICATION
            </DeclineButton>
          </div>
        </View>
      </div>
      <MoreDetailsButton onClick={handleOpen}>
        <RiArrowDownSLine />
      </MoreDetailsButton>
    </Conteiner>
  );
}
