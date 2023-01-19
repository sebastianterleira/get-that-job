/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";
import { RiCloseLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Multiselect from "multiselect-react-dropdown";

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
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

const InputSalary = styled.input`
  background-color: #f2f2f2;
  box-sizing: border-box;
  width: 102px;
  height: 42px;
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
const Guion = styled.p`
  margin-left: 8px;
  margin-right: 8px;
  display: inline;
  color: #8e8e8e;
  font-size: 19px;
`;

const GroupInput = styled.div`
  position: relative;
`;

function FilterJob({ filters, filterType, filtersAmounts, handleAmount }) {
  const categories = [
    { cat: "Group 1", key: "Manufactoring" },
    { cat: "Group 1", key: "Legal" },
    { cat: "Group 1", key: "Education" },
    { cat: "Group 1", key: "Goverment" },
    { cat: "Group 1", key: "Sales" },
    { cat: "Group 1", key: "Art" },
  ];

  const handleChange = (value) => {
    filters([...value]);
  };

  const handleChangeTypes = (value) => {
    filterType([...value]);
  };

  return (
    <>
      <ContentRow>
        <LabelInput>
          <p
            css={css`
              margin-bottom: 4px;
            `}
          >
            Category
          </p>
          <GroupInput>
            <Multiselect
              customCloseIcon={<RiCloseLine />}
              displayValue="key"
              onRemove={handleChange}
              onSelect={handleChange}
              options={categories}
              placeholder="Select Category"
              style={{
                chips: {
                  "font-size": "12px",
                  "letter-spacing": "0.4px",
                  "font-weight": "400",
                  "line-height": "16px",
                  "font-family": `${fonts.chiron}`,
                  gap: "7px",
                  "text-transform": "capitalize",
                  background: "#FFC1E3",
                },
                searchBox: {
                  "background-color": "#F2F2F2",
                  "box-sizing": "border-box",
                  width: "280px",
                  "letter-spacing": "0.25px",
                  "font-weight": "400",
                  "font-size": "14px",
                  "line-height": "20px",
                  "font-family": `${fonts.chiron}`,
                  color: "#8E8E8E",
                  padding: "7px 0px 7px 8px",
                  outline: "#F48FB1",
                  border: "1px solid #F48FB1",
                  "border-radius": "8px",
                },
                optionContainer: {
                  // To change css for option container
                  "box-shadow":
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  "text-transform": "capitalize",
                  "letter-spacing": "0.25px",
                  "font-weight": "400",
                  "font-size": "14px",
                  "line-height": "20px",
                  "font-family": `${fonts.chiron}`,
                  color: "#616161",
                  "border-radius": "8px",
                },
              }}
            />
            <RiArrowDownSLine
              css={css`
                position: absolute;
                margin-left: 245px;
                top: 8px;
                font-size: 25px;
              `}
            />
            <RiArrowDownSLine
              css={css`
                position: absolute;
                margin-left: 245px;
                top: 8px;
                font-size: 25px;
              `}
            />
          </GroupInput>
        </LabelInput>
        <LabelInput>
          <p
            css={css`
              margin-bottom: 4px;
            `}
          >
            Type
          </p>
          <GroupInput>
            <Multiselect
              customCloseIcon={<RiCloseLine />}
              displayValue="key"
              onRemove={handleChangeTypes}
              onSelect={handleChangeTypes}
              options={[
                {
                  cat: "Group 1",
                  key: "Full Time",
                },
                {
                  cat: "Group 1",
                  key: "Part Time",
                },
                {
                  cat: "Group 1",
                  key: "Apprentice",
                },
              ]}
              placeholder="Select a type"
              style={{
                chips: {
                  "font-size": "12px",
                  "letter-spacing": "0.4px",
                  "font-weight": "400",
                  "line-height": "16px",
                  "font-family": `${fonts.chiron}`,
                  gap: "7px",
                  "text-transform": "capitalize",
                  background: "#FFC1E3",
                },
                searchBox: {
                  "background-color": "#F2F2F2",
                  "box-sizing": "border-box",
                  width: "280px",
                  "letter-spacing": "0.25px",
                  "font-weight": "400",
                  "font-size": "14px",
                  "line-height": "20px",
                  "font-family": `${fonts.chiron}`,
                  color: "#8E8E8E",
                  padding: "7px 0px 7px 8px",
                  outline: "#F48FB1",
                  border: "1px solid #F48FB1",
                  "border-radius": "8px",
                },
                optionContainer: {
                  // To change css for option container
                  "box-shadow":
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  "text-transform": "capitalize",
                  "letter-spacing": "0.25px",
                  "font-weight": "400",
                  "font-size": "14px",
                  "line-height": "20px",
                  "font-family": `${fonts.chiron}`,
                  color: "#616161",
                  "border-radius": "8px",
                },
                option: {
                  // To change css for dropdown options
                  // "&:hover {background: red,}"
                },
              }}
            />
            <RiArrowDownSLine
              css={css`
                position: absolute;
                margin-left: 245px;
                top: 8px;
                font-size: 25px;
              `}
            />
          </GroupInput>
        </LabelInput>
        <LabelInput>
          <p
            css={css`
              margin-bottom: 4px;
            `}
          >
            Salary range
          </p>
          <GroupInput>
            <InputSalary
              placeholder="min"
              name="min"
              value={filtersAmounts.min}
              onChange={handleAmount}
            />
            <RiMoneyDollarCircleLine
              css={css`
                position: absolute;
                left: 10px;
                top: 9px;
                font-size: 25px;
              `}
            />
            <Guion>-</Guion>
            <InputSalary
              placeholder="max"
              name="max"
              value={filtersAmounts.max}
              onChange={handleAmount}
            />
            <RiMoneyDollarCircleLine
              css={css`
                position: absolute;
                right: 66px;
                top: 9px;
                font-size: 25px;
              `}
            />
          </GroupInput>
        </LabelInput>
      </ContentRow>
    </>
  );
}
export default FilterJob;
