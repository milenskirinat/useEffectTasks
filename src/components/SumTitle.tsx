import { useState, useEffect } from "react";
import "./Card.css";

export default function SumTitle() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  useEffect(() => {
    document.title = `Sum of A and B: ${counterOne + counterTwo}`;
  }, [counterOne, counterTwo]);
  return (
    <div className="card">
      <p className="flex justify-center">
        A: {counterOne}, B: {counterTwo}
      </p>
      <button
        className="border-1 p-4 m-2"
        onClick={() => setCounterOne(counterOne + 1)}
      >
        +A
      </button>
      <button
        className="
        border-1
        p-4
        m-2"
        onClick={() => setCounterTwo(counterTwo + 1)}
      >
        +B
      </button>
    </div>
  );
}
