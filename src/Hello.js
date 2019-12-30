import React, { useRef } from "react";

const Hello = () => {
  const renders = useRef(0);
  console.log("Hello renders", renders.current++);
  return <div>Hello</div>;
};

export default Hello;
