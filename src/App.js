import React, { useEffect, useState, useRef } from "react";
import { useForm } from "./useForm";
import Hello from "./Hello";
import { useFetch } from "./useFetch";

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  const inputRef = useRef(null);

  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />}
      <div>{!data ? "loading..." : data}</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        ref={inputRef}
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

      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
}

export default App;
