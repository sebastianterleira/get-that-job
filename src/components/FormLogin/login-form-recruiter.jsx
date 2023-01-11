import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { fonts } from "../../styles";
import Input from "../input";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f48fb1;
  border-radius: 30px;
  font-family: ${fonts.chiron};
  width: 110px;
  height: 35px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #616161;
  background: #fff;
  padding: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 500ms ease;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    background-color: #bf5f82;
    transition: all 500ms ease;
    z-index: 1;
  }
  &:hover {
    background-color: #f48fb1;
    box-shadow: 0 0 10px #f48fb1, 0 0 10px #f48fb1, 0 0 15px #f48fb1;
    color: #616161;
  }
`;

function LoginFormRecruiter() {
  const { lgoinRecruiter } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    lgoinRecruiter(formData);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <DivContainer>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="my_mail@mail.com"
            label="Email address"
          />
        </DivContainer>
        <DivContainer>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="*******"
            label="Password"
          />
        </DivContainer>
        <ButtonForm type="submit">Login</ButtonForm>
      </Form>
    </>
  );
}

export default LoginFormRecruiter;
