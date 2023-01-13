import styled from "@emotion/styled";
import React, { useState } from "react";

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

function SelectExample({ handleCategory }) {
  const [options, setOptions] = useState([
    "Manufactoring",
    "Legal",
    "Education",
    "Goverment",
    "Sales",
  ]);

  const [selectedOption, setSelectedOption] = useState("none");
  const [newOption, setNewOption] = useState("");

  const handleChange = (event) => {
    if (event.target.value === "addNew") {
      setSelectedOption("");
    } else {
      setSelectedOption(event.target.value);
      handleCategory(event.target.value);
    }
  };

  const handleAdd = () => {
    setOptions([...options, newOption]);
    setSelectedOption(newOption);
    setNewOption("");
    handleCategory(newOption);
  };

  return (
    <div>
      <Type value={selectedOption} onChange={handleChange}>
        <option defaultValue={"Manufactoring"} hidden value="none">
          Select or create a category
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        <option value="addNew">Agregar nuevo</option>
      </Type>
      {selectedOption === "" && (
        <div>
          <input
            type="text"
            placeholder="Ingresar nueva opcion"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
          />
          <button onClick={handleAdd}>Agregar</button>
        </div>
      )}
    </div>
  );
}

export default SelectExample;
