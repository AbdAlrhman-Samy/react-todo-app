import { useState } from "react";
const Form = ({ newItem }) => {
  const [value, setValue] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (!value) return;
    newItem(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleForm}>
      <input type="text" value={value} onChange={handleChange} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
