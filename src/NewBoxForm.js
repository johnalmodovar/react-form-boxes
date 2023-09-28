import BoxList from "./BoxList";
import { useState } from 'react';

// remove console log from everywhere

/** NewBoxForm: Form component for BoxList.
 *
 * Props -
 * addBox(): add box to state in BoxList
 *
 * State -
 * formData: object with => { width, height, bgColor, }
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const initialState = { width: "", height: "", bgColor: "" };
  const [formData, setFormData] = useState(initialState);

  /** handles submit event.
   * - adds box to boxlist state.
   * - resets form state to default.
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** handles changes in form. */
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
