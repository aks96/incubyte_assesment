import React, { useState } from "react";
import { add } from "./utils/Calculator";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const handleCalculate = () => {
    setResult(add(input));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
};

export default StringCalculator;
