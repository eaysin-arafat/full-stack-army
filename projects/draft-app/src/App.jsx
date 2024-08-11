import { useState } from "react";
import Input from "./components/ui/input-elements/Input";
import { deepClone } from "./utils/object-utils";

const initialState = {
  title: {
    value: "",
    error: "",
    focus: false,
  },
  bio: {
    value: "",
    error: "",
    focus: false,
  },
  skills: {
    value: "",
    error: "",
    focus: false,
  },
};

function App() {
  const [state, setState] = useState(deepClone(initialState));
  const [hasError, setHasError] = useState(false);

  const mapStateToValues = (state) => {
    return Object.keys(state).reduce((acc, curr) => {
      acc[curr] = state[curr].value;

      return acc;
    }, {});
  };

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    const oldState = deepClone(state);
    const values = mapStateToValues(oldState);
    oldState[key].value = value;

    const { errors } = checkValidity(values);

    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState(oldState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = mapStateToValues(state);
    const { isValid, errors } = checkValidity(values);

    if (isValid) {
      console.log(state);
    } else {
      console.log(errors);
      const oldState = deepClone(state);

      Object.keys(errors).forEach((key) => {
        oldState[key].error = errors[key];
      });

      setState(oldState);
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;

    const oldState = deepClone(state);
    oldState[name].focus = true;
    setState(oldState);
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const values = mapStateToValues(state);

    const { errors } = checkValidity(values);
    const oldState = deepClone(state);

    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState(oldState);
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
          value={state.title.value}
          error={state.title.error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Input
          type={"text"}
          name={"bio"}
          label={"What is you bio?"}
          placeholder={"I am software developer..."}
          value={state.bio.value}
          error={state.bio.error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Input
          type={"text"}
          name={"skills"}
          label={"What is you skills?"}
          placeholder={"Typescript, Javascript"}
          value={state.skills.value}
          error={state.skills.error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <button
          disabled={hasError}
          type="submit"
          className="border px-8 py-1 mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
