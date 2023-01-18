/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import CustomButton from "../components/button";
import InputStyledut from "../components/inputStyled";
import { typography } from "../styles";
import { RiUploadLine } from "react-icons/ri";
import { useAuth } from "../context/auth-context";

const Container = styled.div`
  margin: 2rem auto;
  width: 960px;
  background-color: ;
`;

const Title = styled.p`
  margin-bottom: 26px;
  ${typography.head.lg}
  font-family:Montserrat;
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-family: Montserrat;
  margin-bottom: 10px;
`;

const Comment = styled.p`
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 400;
`;

const AreaContainer = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

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

const ContainerFile = styled.div`
  display: flex;
  gap: 1rem;
`;

const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
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

const Label = styled.label`
  color: #373737;
  ${typography.text.xs}
  Line-height: 12px;
  letter-spacing: 1.5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProfileUser = ({ user }) => {
  const { navigate, updateUserProfile } = useAuth();
  const [formData, setFormData] = useState({
    email: user?.email,
    name: user?.name,
    phone: user?.phone,
    birthdate: user?.birthdate,
    profile: user?.profile_image,
    title: user?.title,
    education: user?.education,
    experience: user?.experience,
    linkedin: user?.linkedin,
    curriculum: user?.user_cv,
  });
  const {
    email,
    name,
    phone,
    birthdate,
    linkedin,
    title,
    experience,
    education,
    curriculum,
  } = formData;

  console.log(curriculum);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleChangeFile(event) {
    const file = event.target.files[0];

    if (file.size > 5000000) {
      file.value = "";
      return alert(
        "El archivo es demasiado grande. El tamaño máximo permitido es de 5MB."
      );
    }

    setFormData({ ...formData, curriculum: file });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData);
    // const fileUploaded = event.target.files[0];
    const formData1 = new FormData();
    formData1.append("email", email);
    formData1.append("name", name);
    formData1.append("phone", phone);
    formData1.append("birthdate", birthdate);
    formData1.append("linkedin", linkedin);
    formData1.append("title", title);
    formData1.append("experience", experience);
    formData1.append("education", education);
    formData1.append("curriculum", curriculum);

    updateUserProfile(formData1);
    navigate("/");
    console.log(curriculum);
  }

  return (
    <Container>
      <Title>Profile</Title>
      <Subtitle>Personal Information</Subtitle>
      <Form onSubmit={handleSubmit}>
        <InputStyledut
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder=""
          label="EMAIL"
        />
        <InputStyledut
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder=""
          label="NAME"
        />
        <InputStyledut
          id="phone"
          name="phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={phone}
          onChange={handleChange}
          placeholder=""
          label="PHONE"
        />

        <InputStyledut
          id="birthdate"
          name="birthdate"
          type="date"
          value={birthdate}
          onChange={handleChange}
          placeholder=""
          label="BIRTHDATE"
        />

        <InputStyledut
          id="linkedin"
          name="linkedin"
          type="text"
          value={linkedin}
          onChange={handleChange}
          placeholder=""
          label="LINKEDIN URL"
        />
        <div>
          <Subtitle>Professional Information</Subtitle>
          <Comment>
            Changes made here will be reflected in your future applications
          </Comment>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 1rem;
          `}
        >
          <InputStyledut
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={handleChange}
            placeholder=""
            label="TITLE"
          />

          <AreaContainer>
            <Label htmlFor={"experience"}>PROFESSIONAL EXPERIENCE</Label>
            <StyledInput
              id="experience"
              name="experience"
              value={experience}
              onChange={handleChange}
            />
          </AreaContainer>

          <AreaContainer>
            <Label htmlFor={"education"}>EDUCATION</Label>
            <StyledInput
              id="education"
              name="education"
              value={education}
              onChange={handleChange}
            />
          </AreaContainer>
          <ContainerFile>
            <div>
              <AreaContainer>
                <Label>UPLOAD/UPDATE YOUR CV</Label>
                <LabelFile htmlFor={"curriculum"}>
                  <RiUploadLine />
                  <span> Choose a file</span>
                </LabelFile>
                <FileInput
                  id="curriculum"
                  name="curriculum"
                  type="file"
                  accept="application/pdf"
                  placeholder="Choose a file"
                  onChange={handleChangeFile}
                />
              </AreaContainer>
              <Label>Only PDF. Max size 5MB</Label>
            </div>
          </ContainerFile>
        </div>

        <CustomButton>Update Profile</CustomButton>
      </Form>
    </Container>
  );
};

export default ProfileUser;
