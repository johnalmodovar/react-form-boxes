import BoxList from "./BoxList";
import { useState } from 'react';


// docstrings
// remove console log from everywhere
function NewBoxForm({ addBox }) {
  const initialState = { width: "", height: "", bgColor: "" };
  const [formData, setFormData] = useState(initialState);
  console.log("formData inside NewBoxForm", formData)

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((cData) => ({
      ...cData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width" /> Width:
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="height" /> Height:
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="bgColor" /> Background Color:
      <input
        id="bgColor"
        name="bgColor"
        value={formData.bgColor}
        onChange={handleChange}
      ></input>
      <br></br>

      <button>Submit</button>
    </form>
  );
}

export default NewBoxForm;
