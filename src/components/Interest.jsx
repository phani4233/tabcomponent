export default Interest = ({ data, setData, errors }) => {
  const { interest } = data;
  const handleChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => i !== e.target.name),
    }));
  };
  console.log("interest", interest);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="coding"
          checked={interest.includes("coding")}
          onChange={handleChange}
        />
        Coding
      </label>
      <label>
        <input
          type="checkbox"
          name="playning"
          checked={interest.includes("playning")}
          onChange={handleChange}
        />
        Playning
      </label>
      <label>
        <input
          type="checkbox"
          name="music"
          checked={interest.includes("music")}
          onChange={handleChange}
        />
        Music
      </label>
      {errors.interest && <span>{errors.interest}</span>}
    </div>
  );
};
