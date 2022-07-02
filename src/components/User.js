import React from "react";
import { useDispatch,useSelector } from "react-redux";

export default function User() {
  const dispatch = useDispatch();
  const {value} = useSelector((state) => state.user);
  const onIncrement = () => {dispatch({type:'INCREMENT',})}
  const onDecrement = () => {dispatch({type:'DECREMENT',})}
  const onIncrementAsync = () => {dispatch({type:'INCREMENT_ASYNC'})}
  return (
    <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>
  );
}
