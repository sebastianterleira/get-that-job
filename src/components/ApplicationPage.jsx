/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { RiFocus3Line } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { fonts, colors } from "../styles";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaIndustry } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";
import { RiUploadLine } from "react-icons/ri";
import { typography } from "../styles";
import { useParams, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useAuth } from "../context/auth-context";
import Company from "../static/img/Companies-Logos/Rectangle1.png";

// ##################################################

const Container = styled.div`
  margin: 2rem 7rem 2rem 7rem;
  width: 910px;
  height: 900px;
`;

const ContainerButtonBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
  margin-bottom: 10px;
`;

const CardImagenCompany = styled.div`
  width: 80px;
  height: 74px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

const ConteinerCompany = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 920px;
  height: 100px;
  position: relative;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
`;

const StyledNAmeCompany = styled.div`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 24px;
  line-height: 42px;
  color: #373737;
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

const ButtonIcon = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #F48FB1;
border-radius: 50px;
font-family: ${fonts.chiron};
width: 40;
height: 40px;
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #fff
background: #F48FB1;
padding: 8px;
cursor: pointer;
overflow: hidden;
transition: all 500ms ease;
z-index: 0;

&:hover {
	background-color: #F48FB1;
	box-shadow: 0 0 10px #F48FB1, 0 0 10px #F48FB1, 0 0 15px #F48FB1;
	color: #616161;
}
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

const ContainerJobInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  gap: 8px;
`;

const JobTitle = styled.div`
  font-family: ${fonts.chiron};
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  color: #373737;
  margin-bottom: 9.5px;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  margin-bottom: 54px;
`;

const CardInfoJob = styled.div`
  min-width: 100px;
  max-width: 500px;
  min-height: 74px;
  max-height: 150px;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 1px solid #bf5f82;
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

const ContentCardInfoJob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const LabelCardInfoJob = styled.p`
  font-family: ${fonts.chiron};
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #616161;
  margin: 8px 103px 0px 103px;
`;

const CardInfo = styled.p`
  font-family: ${fonts.chiron};
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #373737;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

const SubTitle = styled.p`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #bf5f82;
  margin-bottom: 16px;
`;

const LabelCV = styled.p`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  color: #373737;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const TimeAgo = styled.p`
  font-family: ${fonts.bedroom};
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  color: #616161;
  text-transform: uppercase;
`;

const ContentTIme = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 5.25px;
  margin-bottom: 17px;
`;

const ContainerFile = styled.div`
  display: flex;
  gap: 1rem;
`;

const Img = styled.img`
  width: 74.67px;
  height: 74.67px;
  objetive-fit: cover;
  border-radius: 8px;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
`;

const AreaContainer = styled.div`
  width: 310px;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 4px;
  align-items: center;
`;

const AreaContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 4px;
`;

const LabelFile = styled.label`
  width: 150px;
  height: 36px;
  border-radius: 8px;
  color: #fff;
  ${typography.text.sm}
  Line-height: 12px;
  letter-spacing: 1.5px;
  padding: 0.2rem;
  background-color: #f48fb1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  svg {
    font-size: 1.4rem;
  }
`;

const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const CheckboxInput = styled.input`
appearance: none;
height: 15px;
width: 15px;
border: 1px solid palevioletred;
border-radius: 8px;
&:checked {
  height: 13px;
  width: 13px;
  background-color: palevioletred;
}

&:active,
&:focus {
  outline: 1px solid palevioletred;
  outline-offset: 3px;
}
`;

const MenssageFile = styled.label`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
color: #616161;
`

const Label = styled.label`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.4px;
color: #8E8E8E;
`;

const ContentRowInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 16px;
`;

const RadioInputLAbel = styled.label`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
color: #616161;
`

const StyledInput = styled.textarea`
  resize: none;
  width: 760px;
  height: 156px;
  border: 1.3px solid #f48fb1;
  border-radius: 8px;
  background-color: ${({ color }) => (color ? "" : "#fff")};
  box-sizing: border-box;

  &:focus-visible {
    outline: 1px solid #f48fb1;
  }
`;

const LabelTextFiel = styled.label`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 11px;
line-height: 12px;
letter-spacing: 1.5px;
color: #373737;
text-transform: uppercase;
margin-top: 16px;
`;

const StyledInput2 = styled.textarea`
  resize: none;
  width: 760px;
  height: 115px;
  border: 1.3px solid #f48fb1;
  border-radius: 8px;
  background-color: ${({ color }) => (color ? "" : "#fff")};
  box-sizing: border-box;

  &:focus-visible {
    outline: 1px solid #f48fb1;
  }
`;


function ApplicationJob({ findJob }) {
	const { id } = useParams();
  const job = findJob(Number.parseInt(id));
  const [activeButton, setActiveButton] = useState(true);
  const history = useNavigate();
  const { navigate, user } = useAuth();
  // const { navigate, updateRecruiterProfile } = useAuth();
  const [imageReview, setImageReview] = useState(null);
  const [formData, setFormData] = useState({
    profile: job?.profile_image,
    experience: user?.experience,
    interested: user?.interested,
  });
  const { profile, experience, interested } = formData;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleChangeFile(event) {
    const file = event.target.files[0];

    setFormData({ ...formData, profile: file });

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageReview(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData);
    // const fileUploaded = event.target.files[0];
    const formData1 = new FormData();
    formData1.append("profile", profile);
    formData1.append("experience", experience);
    formData1.append("interested", interested);

    // updateRecruiterProfile(formData1);
    // navigate("/");
  }


  function handleLinkChange(event) {
    event.preventDefault();

    setActiveButton(!activeButton);
  }

  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);

  const Ago = dayjs(`${job.created_at}`).fromNow(true);

  return (
<Container>
      <button
        onClick={() => history(-1)}
        css={css`
          border-width: 0;
          padding: 0;
        `}
      >
        <ContainerButtonBack>
          <MdOutlineArrowBackIosNew color={colors.black} />
          <p>BACK</p>
        </ContainerButtonBack>
      </button>
      <ConteinerCompany>
        <CardImagenCompany>
          <img
            src={
              job?.company_data.profile === null
                ? Company
                : job?.company_data.profile
            }
            alt={"Company"}
          />
        </CardImagenCompany>
        <ContentText>
          <StyledNAmeCompany>{job.company_data.name}</StyledNAmeCompany>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 4px;
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
            <TextButtonFollow>{activeButton ? "FOLLOWING" : "FOLLOW"}</TextButtonFollow>
          </div>
        </ContentText>
      </ConteinerCompany>
      <ButtonIcon
        css={css`
          position: absolute;
          top: 85px;
          margin-left: 750px;
        `}
      >
        <MdOutlineMail
          css={css`
            font-size: 22px;
            margin-right: 10px;
          `}
        />
        Send Application
      </ButtonIcon>
      <ContainerJobInfo>
        <JobTitle>{job.name}</JobTitle>
        <ContentTIme>
          <CiClock2
            css={css`
              color: #616161;
              font-size: 12.5px;
            `}
          />
          <TimeAgo>{`${Ago} Ago`}</TimeAgo>
        </ContentTIme>
        <ContainerCards>
          <CardInfoJob>
            <ContentCardInfoJob>
              <LabelCardInfoJob>Category</LabelCardInfoJob>
              <ContentRow>
                <FaIndustry
                  css={css`
                    font-size: 28px;
                  `}
                />
                <CardInfo>{job.category}</CardInfo>
              </ContentRow>
            </ContentCardInfoJob>
          </CardInfoJob>
          <CardInfoJob>
            <ContentCardInfoJob>
              <LabelCardInfoJob>Type</LabelCardInfoJob>
              <ContentRow>
                <MdOutlineDateRange
                  css={css`
                    font-size: 28px;
                  `}
                />
                <CardInfo>{job.type_job}</CardInfo>
              </ContentRow>
            </ContentCardInfoJob>
          </CardInfoJob>
          <CardInfoJob>
            <ContentCardInfoJob>
              <LabelCardInfoJob>Salary</LabelCardInfoJob>
              <ContentRow>
                <RiMoneyDollarCircleLine
                  css={css`
                    font-size: 28px;
                  `}
                />
                <CardInfo>{`${((job.min_salary || 1000) / 1000).toFixed(
                  1
                )}k`}</CardInfo>
                <p>-</p>
                <CardInfo>{`${(job.max_salary / 1000).toFixed(1)}k`}</CardInfo>
              </ContentRow>
            </ContentCardInfoJob>
          </CardInfoJob>
        </ContainerCards>
      </ContainerJobInfo>
      <SubTitle>Complete Your application</SubTitle>
        <LabelCV>Send your cv updated</LabelCV>
        <ContentRowInput>
        <RadioInputLAbel><CheckboxInput type="radio" id="profileradio" value="profileradio" name="profileradio"/>  Use current CV</RadioInputLAbel>
        <RadioInputLAbel><CheckboxInput type="radio" id="profileradio" value="profileradio" name="profileradio"/>  Upload new CV</RadioInputLAbel>
        </ContentRowInput>
        <form onSubmit={handleSubmit}>
        <ContainerFile>
          <div>
            <AreaContainer>
              <LabelFile htmlFor={"profile"}>
                <RiUploadLine />
                <span> Choose a file</span>
              </LabelFile>
              <FileInput
                id="profile"
                name="profile"
                type="file"
                placeholder="Choose a file"
                onChange={handleChangeFile}
              />
              <MenssageFile htmlFor={"profile"}>No file Chosen</MenssageFile>
            </AreaContainer>
            <Label>Only PDF. Max size 5MB</Label>
          </div>
        </ContainerFile>
        
        <AreaContainerColumn>
          <LabelTextFiel htmlFor={"experience"}>Professional experience (taken from your profile)</LabelTextFiel>
          <StyledInput
            id="experience"
            name="experience"
            value={experience}
            onChange={handleChange}
            placeholder={
              "My Company SA has the vision to change thw way how..."
            }
          />
        </AreaContainerColumn>
        <AreaContainerColumn>
          <LabelTextFiel htmlFor={"interested"}>Why are you interested in working at The company name SA</LabelTextFiel>
          <StyledInput2
            id="interested"
            name="interested"
            value={interested}
            onChange={handleChange}
            placeholder={
              "My Company SA has the vision to change thw way how..."
            }
          />
        </AreaContainerColumn>
        <Label>Between 50 and 1000 characters</Label>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        `}
      >
        <ButtonIcon css={css`margin-bottom: 25px; margin-top: 25px;`} onClick={() => navigate(`application/${job.id}`)}>
          <MdOutlineMail
            css={css`
              font-size: 22px;
              margin-right: 10px;
            `}
          />
          Send Application
        </ButtonIcon>
      </div>
      </form>
    </Container>
	);
}

export default ApplicationJob;