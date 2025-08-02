import { useState, useEffect, use } from "react";

export default function DoubleWatcher() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  useEffect(() => {
    console.log("Counter One changed", counterOne);
  }, [counterOne]);

  useEffect(() => {
    console.log("Counter Two changed", counterTwo);
  }, [counterTwo]);

  return (
    <div>
      <p>First: {counterOne}</p>
      <button onClick={() => setCounterOne(counterOne + 1)}>+1 to first</button>
      <p>Second: {counterTwo}</p>
      <button onClick={() => setCounterTwo(counterTwo + 1)}>
        +1 to second
      </button>
    </div>
  );
}
