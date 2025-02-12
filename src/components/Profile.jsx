export default Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  handleChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          value={name}
          type="text"
          onChange={(e) => handleChange(e, "name")}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input
          value={age}
          type="number"
          onChange={(e) => handleChange(e, "age")}
        />
        {errors.age && <span>{errors.age}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          value={email}
          type="email"
          onChange={(e) => handleChange(e, "email")}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
    </div>
  );
};
