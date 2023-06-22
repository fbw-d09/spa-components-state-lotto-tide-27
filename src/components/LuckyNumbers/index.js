import React, { useState } from "react";
import "./LuckyNumbers.css";

function LuckyNumbers() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const generatedNumbers = [];
    while (generatedNumbers.length < 6) {
      const number = Math.floor(Math.random() * 49) + 1;
      if (!generatedNumbers.includes(number)) {
        generatedNumbers.push(number);
      }
    }
    const superNumber = Math.floor(Math.random() * 10) + 1;
    setNumbers([...generatedNumbers, superNumber]);
  };

  const resetNumbers = () => {
    setNumbers([]);
  };

  return (
    <div>
      <h1>Lucky Numbers</h1>
      <button onClick={generateNumbers}>Show me lucky numbers</button>
      {numbers.length > 0 && (
        <div>
          <h2>Lucky Numbers:</h2>
          <div className="numbers-container">
            {numbers.slice(0, 6).map((number, index) => (
              <div key={index} className="number-circle">
                {number}
              </div>
            ))}
          </div>
          <h2>Super Number:</h2>
          <div className="number-circle">{numbers[6]}</div>
          <button onClick={resetNumbers}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default LuckyNumbers;