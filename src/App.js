import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
//import Hello from "./Hello";
import { useFetch } from "./useFetch";

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  const { data, loading } = useFetch("http://numbersapi.com/43/trivia");
  //http://numbersapi.com/43/trivia

  return (
    <div>
      {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />} */}
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
