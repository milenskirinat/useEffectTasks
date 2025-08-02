import { useEffect } from "react";
import "./Card.css";

export default function ConsoleMessage() {
  useEffect(() => {
    console.log("Компонент смонтирован");
  }, []);
  return <p className="card">Откройте консоль</p>;
}
