import Settings from "./Settings";
import Profile from "./Profile";
import Interest from "./Interest";
import { useState } from "react";

export default TabForm = () => {
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "phani",
    age: "23",
    email: "phani@gmail.com",
    interest: ["coding", "music"],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const error = {};
        if (!data.name || data.name.length < 2) {
          error.name = "name is invalid";
        }
        if (!data.age || data.age < 18) {
          error.age = "age is invalid";
        }
        if (!data.email || data.email.length < 2) {
          error.email = "email is invalid";
        }
        console.log(error);

        setErrors(error);

        return error.name || error.age || error.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const error = {};
        if (data.interest < 1) {
          error.interest = "please select atleast 1";
        }

        setErrors(error);
        return error.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTab = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("formData", data);
  };
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTab data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && (
          <button type="submit" onClick={handlePrevClick}>
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button type="submit" onClick={handleNextClick}>
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        )}
      </div>
    </div>
  );
};
