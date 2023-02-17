import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import { addNumber, minusNumber } from "./redux/modules/counter";
function App() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onPluseBtnHandler = () => {
    dispatch(addNumber(1));
  };

  const onMinusBtnHandler = () => {
    dispatch(minusNumber(1));
  };

  return (
    <div>
      {number}
      <br />
      <button onClick={onPluseBtnHandler}>+</button>
      <button onClick={onMinusBtnHandler}>-</button>
    </div>
  );
}

export default App;
