import "./components/ConsoleMessage.tsx";
import ConsoleMessage from "./components/ConsoleMessage.tsx";
import Increase from "./components/Increase.tsx";
import OverFive from "./components/OverFive.tsx";
import DoubleWatcher from "./components/DoubleWatcher.tsx";

function App() {
  return (
    <>
      <ConsoleMessage />
      <Increase />
      <OverFive />
      <DoubleWatcher />
    </>
  );
}

export default App;
