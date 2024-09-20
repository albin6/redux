import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../RTK/counterSlice";

function TKCounter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      &nbsp;&nbsp;&nbsp;
      <label>{count}</label>&nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default TKCounter;
