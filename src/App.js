import React, { useEffect } from "react";
import { useForm } from "./useForm";
function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  useEffect(() => {
    console.log("render");
  }, [values.email, values.password]);
  return (
    <div>
      <form>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
