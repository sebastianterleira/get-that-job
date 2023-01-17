/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { fonts } from "../styles/typography";
import JobList from "../components/job-list";
import FilterJob from "../components/filters-job";
import { useState, useEffect } from "react";
import { useAuth } from "../context/auth-context";
import { getJobs } from "../service/user-services";

const Wrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
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

function Search() {
  const { jobs, setJobs } = useAuth([]);
  const [tablaProducts, setTablaProducts] = useState([]);
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null,
  });
  const { status, data: item, error } = state;

  useEffect(() => {
    getJobs().then(setTablaProducts).catch(console.log);
  }, []);

  const filterSearch = (terminoBusqueda) => {
    var searchResults = tablaProducts.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setJobs(searchResults);
  };

  // let allCategories = jobs.reduce((accu, current) => {
  // 	if (!accu.includes(current.category)) accu.push(current.category);

  // 	return accu;
  // }, ["All"]);

  // console.log(tablaProducts);

  const filteredProducts = (data) =>
    tablaProducts.map((job) => {
      if (data.includes(job.category)) {
        console.log(job);
        setJobs(job);
      }
    });

  return (
    <>
      <Wrapper>
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
              onChange={(event) => filterSearch(event.target.value)}
              placeholder="manufacturing, sales, swim"
            />
          </GroupInput>
        </LabelInput>
        <FilterJob jobs={jobs} filteredProducts={filteredProducts} />
        <JobList jobs={jobs} />
      </Wrapper>
    </>
  );
}
export default Search;
