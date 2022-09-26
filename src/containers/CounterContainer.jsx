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
      <h1>{number}</h1>
      <button onClick={onIncrease}>plus</button>
      <button onClick={onDecrease}>minus</button>
    </div>
  );
};

export default CounterContainer;
