import React from "react";
import { useState } from "react";
import "./loginform.css";
import Input from "./input";

    function LoginForm(onLogin) {
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
      
          onLogin(formData);
        }

        return (
            <div>
              <form onSubmit={handleSubmit}>
                <input  className="input"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  label="Email"
                />
        
                <input className="input"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="*************"
                  label="Password"
                />
        
            <button className="button" type="submit">Login</button>
        
              </form>
            </div>
          );
};
//   return (
//     <div class="div">
//       <h1 class="h1">Welcome back</h1>
//       <p class="p">Login to you account as...</p>

//       <button class="buttontwo">PROFESSIONAL</button>
//       <button class="buttontwo">RECRUITER</button>
//       <form>
//         <label class="label">
//           NAME:
//           <input class= "input" type="text" placeholder="some.user@mail.com" />
//         </label>
//         <label class="label">
//           PASSWORD:
//           <input class= "input" type="password" placeholder="password" />
//         </label>
//         {/* <img src= {Person}></img> */}
//         <button class="button">LOGIN</button>
//       </form>
//     </div>
//   );


export default LoginForm;
