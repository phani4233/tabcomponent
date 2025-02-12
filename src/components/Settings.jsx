export default Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={(e) => handleChange(e)}
        />
        dark
      </label>
      <label>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={(e) => handleChange(e)}
        />
        light
      </label>
    </div>
  );
};
