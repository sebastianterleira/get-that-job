/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import SelectExample from "./selectedExample";
import InputStyled from "../components/inputStyled";
import { typography } from "../styles";
import CustomButton from "../components/button";
import { useState } from "react";
import { fonts } from "../styles";

const Container = styled.div`
  margin: 2rem auto;
  width: 1200px;
  height: 900px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AreaContainer = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledInput = styled.textarea`
  resize: none;
  width: 760px;
  height: 76px;
  border: 1.3px solid #f48fb1;
  border-radius: 8px;
  background-color: ${({ color }) => (color ? "" : "#fff")};
  box-sizing: border-box;
  padding: 4px 12px;

  &:focus-visible {
    outline: 1px solid #f48fb1;
  }
`;

const Label = styled.label`
  color: #373737;
  ${typography.text.xs}
  Line-height: 12px;
  letter-spacing: 1.5px;
`;

const Type = styled.select`
  all: unset;
  width: 310px;
  height: 36px;
  padding: 4px 12px;
  border: 1.3px solid #f48fb1;
  color: #8e8e8e;
  background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")
    no-repeat;
  background-position: calc(100% - 0.75rem) center !important;
  border-radius: 8px;
  background-color: #fff;
  box-sizing: border-box;
  &:focus-visible {
    outline: 1px solid #f48fb1;
  }
`;

const Title = styled.h2`
  ${typography.head.lg}
  font-weight:400;
  font-family: "Montserrat";
`;

const SubTitle = styled.h3`
  ${typography.head.sm}
  font-weight:400;
  font-family: "Montserrat";
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
const InputSalary = styled.input`
  background-color: #fff;
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

const NewJob = () => {
  const [formData, setFormData] = useState({
    description: "",
    name: "",
    category: "",
    min_salary: 0,
    max_salary: 0,
    type_job: "",
    requirements: "",
    optional_requirements: "",
    // profile: "",
  });
  const {
    category,
    name,
    min_salary,
    description,
    max_salary,
    type_job,
    requirements,
    optional_requirements,
  } = formData;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // const fileUploaded = event.target.files[0];
    // updateRecruiterProfile(formData);
    // navigate("/");
  }
  return (
    <Container>
      <Title>Create new job posting</Title>

      <Form onSubmit={handleSubmit}>
        <Main>
          <SubTitle>Main information</SubTitle>
          <InputStyled
            id="name"
            name="name"
            placeholder={"Software enginerr"}
            value={name}
            onChange={handleChange}
            label="JOB TITLE"
          />
          <SelectExample />
          <Type
            name="type_job"
            id="type_job"
            value={type_job}
            onChange={handleChange}
          >
            <option defaultValue={"Select a type"} hidden value="">
              Select a type
            </option>
            <option value="Full time">Full Time</option>
            <option value="Part time">Part time</option>
            <option value="Intership">Intership</option>
          </Type>

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
                name="min_salary"
                id="min_salary"
                value={min_salary}
                onChange={handleChange}
                type={"number"}
              />
              <RiMoneyDollarCircleFill
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
                type={"number"}
                name="max_salary"
                id="max_salary"
                value={max_salary}
                onChange={handleChange}
              />
              <RiMoneyDollarCircleFill
                css={css`
                  position: absolute;
                  left: 140px;
                  top: 9px;
                  font-size: 25px;
                `}
              />
            </GroupInput>
          </LabelInput>
        </Main>

        <div>
          <SubTitle>Additional informtation</SubTitle>

          <AreaContainer>
            <Label htmlFor={"description"}>ABOUT THE COMPANY</Label>
            <StyledInput
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder={
                "My Company SA has the vision to change thw way how..."
              }
            />
          </AreaContainer>
          <AreaContainer>
            <Label htmlFor={"description"}>ABOUT THE COMPANY</Label>
            <StyledInput
              id="requirements"
              name="requirements"
              value={requirements}
              onChange={handleChange}
              placeholder={"List each mandatory requirement in a new line"}
            />
          </AreaContainer>
          <AreaContainer>
            <Label htmlFor={"description"}>ABOUT THE COMPANY</Label>
            <StyledInput
              id="optional_requirements"
              name="optional_requirements"
              value={optional_requirements}
              onChange={handleChange}
              placeholder={"Lish each optional requirement in a new line"}
            />
          </AreaContainer>
        </div>
        <CustomButton>POST THIS JOB</CustomButton>
      </Form>
    </Container>
  );
};

export default NewJob;
