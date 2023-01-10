import { placeholder } from "@babel/types";
import "./loginform.css";


function Input({ id, name, type, value, onChange, placeholder, label }) {
  return (
    <div>
      {label && <label htmlFor={id || name}>{label}</label>}
      <input 
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
