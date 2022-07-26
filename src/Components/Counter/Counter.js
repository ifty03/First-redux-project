import React from "react";
import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../Redux/state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="card">
        <div className="title">
          <h3 className="text">Counter App</h3>
        </div>
        <h1 style={{ margin: "10px 20px" }}>{count}</h1>
        <form>
          <input name="number" className="input" type="number" />
          <input className="inc" type="submit" value="ADD" />
        </form>

        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <button onClick={() => dispatch(increment())} className="inc">
            Increase
          </button>{" "}
          <button onClick={() => dispatch(decrement())} className="dec">
            decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
