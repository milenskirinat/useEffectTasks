import { useState, useEffect } from "react";

export default function Increase() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Счетчик готов к работе");
  }, []);

  useEffect(() => {
    if (counter > 0 && counter % 2 === 0) {
      console.log(counter);
    }
  }, [counter]);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter is: {counter}</p>
      <button onClick={handleClick}>Увеличить</button>
    </div>
  );
}
