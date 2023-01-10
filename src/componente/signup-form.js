import { useState } from "react";
import Input from "./input";
import { createUser } from "../service/user-service";


function SignupForm( { onSignup }) {
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

    // createUser(formData).then(console.log).catch(console.log);
    createUser(formData)
      .then((event) => console.log(event))
      .catch(console.log);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
          label="Email"
        />

        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="*************"
          label="Password"
        />

      <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default SignupForm;
