import { useState, useEffect } from "react";

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
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Увеличить</button>
    </div>
  );
}
