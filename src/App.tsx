import "./components/ConsoleMessage.tsx";
import ConsoleMessage from "./components/ConsoleMessage.tsx";
import Increase from "./components/Increase.tsx";
import OverFive from "./components/OverFive.tsx";
import DoubleWatcher from "./components/DoubleWatcher.tsx";
import SumTitle from "./components/SumTitle.tsx";

function App() {
  return (
    <>
      <div className="flex justify-center items-start min-h-screen gap-8 pt-50">
        <div className="flex flex-col gap-4 items-start">
          <h2 className="self-start sticky top-0 text-2xl">
            First part of tasks
          </h2>
          <ConsoleMessage />
          <Increase />
          <OverFive />
          <DoubleWatcher />
          <SumTitle />
        </div>
      </div>
    </>
  );
}

export default App;
