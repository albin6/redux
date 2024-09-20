import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../reduxCombineReducer/reducer";

function CounterOne() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      &nbsp;&nbsp;&nbsp;
      <span>{count}</span>&nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
}

export default CounterOne;
