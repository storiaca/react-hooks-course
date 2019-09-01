import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
//import Hello from "./Hello";
function App() {
  //const [showHello, setShowHello] = useState(true);
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
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
