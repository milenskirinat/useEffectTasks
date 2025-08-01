import { useEffect } from "react";

export default function ConsoleMessage() {
  useEffect(() => {
    console.log("Компонент смонтирован");
  }, []);
  return <p>Откройте консоль</p>;
}
