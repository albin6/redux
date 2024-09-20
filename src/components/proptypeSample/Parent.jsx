import React from "react";
import Child from "./Child";

function Parent() {
  const num = 10;
  const str = "Hello";
  const bool = true;
  return (
    <div>
      <Child data={num} />
    </div>
  );
}

export default Parent;
