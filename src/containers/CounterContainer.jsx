import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  //   console.log(number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <div>
      <h3>counter redux</h3>
      <div style={{border:'1px solid black', padding:'8px', width:'50%'}}>
        <h1>{number}</h1>
        <button onClick={onIncrease}>plus</button>
        <button onClick={onDecrease}>minus</button>
      </div>
    </div>
  );
};

export default CounterContainer;
