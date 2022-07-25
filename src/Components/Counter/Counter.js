import React from "react";
import "./Counter.css";
const Counter = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="title">
          <h3 className="text">Counter App</h3>
        </div>
        <h1 style={{ margin: "10px 20px" }}>00</h1>
        <input className="input" type="text" />
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <button className="inc">Increase</button>{" "}
          <button className="dec">decrease</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
