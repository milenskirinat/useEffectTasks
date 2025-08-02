import { useState, useEffect } from "react";
import "./Card.css";

export default function OverFive() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 6) {
      console.log("Счетчик превысил 5!");
    }
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="card">
      <p>{count}</p>
      <button onClick={handleClick}>Увеличить</button>
    </div>
  );
}
