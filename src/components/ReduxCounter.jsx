import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/store";

function ReduxCounter() {
  const count = useSelector((state) => state.count);
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

export default ReduxCounter;
