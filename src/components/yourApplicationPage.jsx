import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getApplications } from "../service/applicationJobs";
import YourApplicationComponent from "./yourApplicationComponent";

const Title = styled("h1")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.25px;
  margin-bottom: 40px;
`;

const FilterTitle = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  margin-bottom: 4px;
`;

const FilterCount = styled("h3")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Filters = styled.section`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`;

const ContainerFilter = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const RadioButton = styled.input`
  appearance: none;
  height: 18px;
  width: 18px;
  border: 1px solid palevioletred;
  border-radius: 8px;
  &:checked {
    height: 16px;
    width: 16px;
    background-color: palevioletred;
  }

  &:active,
  &:focus {
    outline: 1px solid palevioletred;
    outline-offset: 3px;
  }
`;

export default function YourApplication() {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    getApplications().then(setApplications).catch(console.log);
  }, []);

  function handleFilter(event) {
    setFilter(event.target.value);
  }
  let filterApplications = applications;

  if (filter !== "all") {
    filterApplications = applications?.filter(
      (elem) => elem.state.toLowerCase() === filter
    );
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "0 128px",
      }}
    >
      <div style={{ width: "80vw", marginTop: "2rem" }}>
        <Title>Your Applications</Title>
        <FilterTitle>FILTER YOUR APPLICATIONS</FilterTitle>
        <Filters>
          <ContainerFilter>
            <RadioButton
              type="radio"
              id="Choice3"
              name="contact"
              value="all"
              onClick={handleFilter}
            />
            <label htmlFor="Choice3">All</label>
          </ContainerFilter>
          <ContainerFilter>
            <RadioButton
              type="radio"
              id="contactChoice1"
              name="contact"
              value="review"
              onClick={handleFilter}
            />
            <label htmlFor="contactChoice1">Waiting</label>
          </ContainerFilter>
          <ContainerFilter>
            <RadioButton
              type="radio"
              id="Choice2"
              name="contact"
              value="progress"
              onClick={handleFilter}
            />
            <label htmlFor="Choice2">In progress</label>
          </ContainerFilter>
          <ContainerFilter>
            <RadioButton
              type="radio"
              id="finished"
              name="contact"
              value="finished"
              onClick={handleFilter}
            />
            <label htmlFor="finished">Finished</label>
          </ContainerFilter>
          <ContainerFilter>
            <RadioButton
              type="radio"
              id="declined"
              name="contact"
              value="declined"
              onClick={handleFilter}
            />
            <label htmlFor="declined">Declined</label>
          </ContainerFilter>
        </Filters>
        <FilterCount>4 applications found</FilterCount>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {filterApplications?.map((elem) => (
            <YourApplicationComponent key={elem.id} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
}
