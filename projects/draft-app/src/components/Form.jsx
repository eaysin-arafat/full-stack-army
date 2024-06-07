import { Input } from "postcss";
import { useState } from "react";

const init = {
  title: "",
  bio: "",
  skills: "",
};

function App() {
  const [values, setValues] = useState({ ...init });
  const [inputError, setInputErrors] = useState({ ...init });
  const [focuses, setFocuses] = useState({
    title: false,
    bio: false,
    skills: false,
  });

  const handleChange = (e) => {
    const key = e.target.name;

    setValues((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));

    const { errors } = checkValidity(values);

    if (!errors[key]) {
      setInputErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = checkValidity(values);

    if (isValid) {
      console.log(values);
      setInputErrors({ ...errors });
    } else {
      console.log(errors);
      setInputErrors({
        ...errors,
      });
    }
  };

  const handleFocus = (e) => {
    setFocuses((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const { errors } = checkValidity(values);

    if (errors[key] && focuses[key] === true) {
      setInputErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    } else {
      setInputErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  const checkValidity = (values) => {
    const { title, bio, skills } = values;
    const errors = {};

    if (!title) {
      errors.title = "Invalid title";
    }
    if (!bio) {
      errors.bio = "Invalid bio";
    }
    if (!skills) {
      errors.skills = "Invalid skills";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="grid place-items-center mt-9">
        <h1 className="text-4xl">User Form</h1>

        <Input
          type={"text"}
          name={"title"}
          label={"What is you title?"}
          placeholder={"Software Developer"}
          value={values.title}
          error={inputError.title}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Input
          type={"text"}
          name={"bio"}
          label={"What is you bio?"}
          placeholder={"I am software developer..."}
          value={values.bio}
          error={inputError.bio}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Input
          type={"text"}
          name={"skills"}
          label={"What is you skills?"}
          placeholder={"Typescript, Javascript"}
          value={values.skills}
          error={inputError.skills}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <button type="submit" className="border px-8 py-1 mt-5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
