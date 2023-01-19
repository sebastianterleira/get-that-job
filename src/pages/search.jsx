/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { fonts } from "../styles/typography";
import JobList from "../components/job-list";
import FilterJob from "../components/filters-job";
import { useState } from "react";

const Container = styled.div`
  margin: 2rem 4rem 2rem 4rem;
`;

const Tittle = styled.div`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  background-color: #f2f2f2;
  box-sizing: border-box;
  width: 419.93px;
  height: 36px;
  letter-spacing: 0.25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-family: ${fonts.chiron};
  color: #8e8e8e;
  ::placeholder {
    letter-spacing: 0.25px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    font-family: ${fonts.chiron};
    color: #8e8e8e;
  }
  padding: 12px 0px 12px 42px;
  outline: #f48fb1;
  border: 1px solid #f48fb1;
  border-radius: 8px;
`;

const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #616161;
  margin-bottom: 8px;
`;

const GroupInput = styled.div`
  position: relative;
`;

function Search({ jobs }) {
  const [searh, setSearch] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [filtersTypes, setFiltersTypes] = useState([]);
  const [filtersAmounts, setFiltersAmounts] = useState({
    min: 0,
    max: 100000,
  });

  let filterJob = jobs;

  if (searh !== "") {
    filterJob = jobs.filter((job) =>
      job.name.toString().toLowerCase().includes(searh.toLowerCase())
    );
  }
  // Filters Categories in jobs
  if (selectedValues.length !== 0) {
    filterJob = filterJob.reduce((accu, current) => {
      selectedValues.forEach((element) => {
        if (current.category.toUpperCase() === element.key.toUpperCase())
          accu.push(current);
      });
      return accu;
    }, []);
  }
  //Filters types in jobs
  if (filtersTypes.length !== 0) {
    filterJob = filterJob.reduce((accu, current) => {
      filtersTypes.forEach((element) => {
        if (current.type_job.toUpperCase() === element.key.toUpperCase())
          accu.push(current);
      });
      return accu;
    }, []);
  }

  const handleChangeAmount = (event) => {
    const { name, value } = event.target;

    setFiltersAmounts({ ...filtersAmounts, [name]: value });
  };

  if (filtersAmounts.max !== "") {
    filterJob = filterJob?.reduce((accu, current) => {
      if (
        current.min_salary >= +filtersAmounts.min &&
        current.max_salary <= +filtersAmounts.max
      )
        accu.push(current);
      return accu;
    }, []);
  }

  return (
    <>
      <Container>
        <Tittle>Find that job</Tittle>
        <LabelInput>
          <p
            css={css`
              margin-bottom: 4px;
            `}
          >
            search by job title or company name
          </p>
          <GroupInput>
            <BiSearch
              css={css`
                position: absolute;
                margin-left: 15px;
                width: 16px;
                top: -1px;
                font-size: 40px;
              `}
            />
            <Input
              onChange={(event) => setSearch(event.target.value)}
              placeholder="manufacturing, sales, swim"
            />
          </GroupInput>
        </LabelInput>
        <FilterJob
          filters={setSelectedValues}
          filterType={setFiltersTypes}
          filtersAmounts={filtersAmounts}
          handleAmount={handleChangeAmount}
        />
        <JobList jobs={filterJob} />
      </Container>
    </>
  );
}
export default Search;
