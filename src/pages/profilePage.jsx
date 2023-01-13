import styled from "@emotion/styled";
import { useState } from "react";
import CustomButton from "../components/button";
import InputStyledut from "../components/inputStyled";
import { typography } from "../styles";
import { RiUploadLine } from "react-icons/ri";

const Container = styled.div`
  margin: 2rem auto;
  width: 960px;
  height: 630px;
  background-color: ;
`;

const Title = styled.p`
  margin-bottom: 26px;
  ${typography.head.lg}
  font-family:Montserrat;
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

const Img = styled.img`
  width: 74.67px;
  height: 74.67px;
  objetive-fit: cover;
  border-radius: 8px;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
`;

const ProfileRecruiter = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    website: "",
    description: "",
    profile: "",
  });
  const { email, name, website, description, profile } = formData;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleChangeFile(event) {
    console.log(event.target.files[0]);
    setFormData({ ...formData, profile: event.target.files[0] });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // const fileUploaded = event.target.files[0];
    // login(formData);
  }

  return (
    <Container>
      <Title>Profile</Title>
      <Form onSubmit={handleSubmit}>
        <ContainerFile>
          <Img />

          <div>
            <AreaContainer>
              <Label>COMPANY LOGO</Label>
              <LabelFile htmlFor={"profile"}>
                <RiUploadLine />
                <span> Choose a file</span>
              </LabelFile>
              <FileInput
                id="profile"
                name="profile"
                type="file"
                placeholder="Choose a file"
                value={profile}
                onChange={handleChangeFile}
              />
            </AreaContainer>
            <Label>PNG, JPEG, IMG</Label>
          </div>
        </ContainerFile>

        <InputStyledut
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder=""
          label="COMPANY EMAIL"
        />
        <InputStyledut
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder=""
          label="COMPANY NAME"
        />
        <InputStyledut
          id="website"
          name="website"
          type="text"
          value={website}
          onChange={handleChange}
          placeholder=""
          label="COMPANY WEBSITE"
        />

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
        <CustomButton>Update Profile</CustomButton>
      </Form>
    </Container>
  );
};

export default ProfileRecruiter;
