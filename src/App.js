import React, { useState } from "react";
import { useForm } from "./useForm";
function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div>
      <form>
        <input
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
