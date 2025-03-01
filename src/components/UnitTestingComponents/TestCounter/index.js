import React, { useState } from "react";
import "./index.css";

const TestCounter = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="test-counter-container">
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default TestCounter;
