import BoxList from "./BoxList";

function NewBoxForm({ addBox }) {
  const initialState = { width: "", height: "", bgColor: "" };
  const [formData, setFormData] = useState(initialState);

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
        value={formData.name}
        onChange={handleChange}
      ></input>
      <label htmlFor="height" /> Height:
      <input
        id="height"
        name="height"
        value={formData.name}
        onChange={handleChange}
      ></input>
      <label htmlFor="bgColor" /> Background Color:
      <input
        id="bgColor"
        name="bgColor"
        value={formData.name}
        onChange={handleChange}
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default NewBoxForm;
