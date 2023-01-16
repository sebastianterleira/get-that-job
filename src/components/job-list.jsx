/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { RiFocus3Line } from "react-icons/ri";
import { useState } from "react";
import Company from "../static/img/Companies-Logos/Rectangle1.png";
import { useAuth } from "../context/auth-context";
import JobFollow from "./job-follow";

const Tittle = styled.div`
  font-family: ${fonts.bedroom};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  margin-bottom: 8px;
`;

const ContainerCard = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 335px);
  grid-auto-rows: minmax(170px, auto);
`;

function JobList({ jobs }) {
  return (
    <>
      <Tittle>{jobs?.length} jobs for you</Tittle>
      <ContainerCard>
        {jobs?.map((job) => (
          <JobFollow {...job}/>
        ))}
      </ContainerCard>
    </>
  );
}
export default JobList;
