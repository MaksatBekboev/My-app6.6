import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNum1, setNum2, setResult } from "../store/calculationSlice";

function Calculator() {
  const dispatch = useDispatch();
  const { num1, num2, result } = useSelector((state) => state.calculation);
  const [localNum1, setLocalNum1] = useState("");
  const [localNum2, setLocalNum2] = useState("");

  const handleNum1Change = (e) => {
    setLocalNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setLocalNum2(e.target.value);
  };

  const handleAdd = () => {
    if (localNum1 === "" || localNum2 === "") {
      alert("Both fields must be filled.");
      return;
    }
    const sum = parseFloat(localNum1) + parseFloat(localNum2);
    dispatch(setResult(sum));
  };

  const handleSubtract = () => {
    if (localNum1 === "" || localNum2 === "") {
      alert("Both fields must be filled.");
      return;
    }
    const diff = parseFloat(localNum1) - parseFloat(localNum2);
    dispatch(setResult(diff));
  };

  const handleMultiply = () => {
    if (localNum1 === "" || localNum2 === "") {
      alert("Both fields must be filled.");
      return;
    }
    const product = parseFloat(localNum1) * parseFloat(localNum2);
    dispatch(setResult(product));
  };

  const handleDivide = () => {
    if (localNum1 === "" || localNum2 === "") {
      alert("Both fields must be filled.");
      return;
    }
    if (parseFloat(localNum2) === 0) {
      alert("Cannot divide by zero.");
      return;
    }
    const quotient = parseFloat(localNum1) / parseFloat(localNum2);
    dispatch(setResult(quotient));
  };

  return (
    <div>
      <input type="number" value={localNum1} onChange={handleNum1Change} />
      <input type="number" value={localNum2} onChange={handleNum2Change} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      {result !== "" && <p>Result: {result}</p>}
    </div>
  );
}

export default Calculator;
