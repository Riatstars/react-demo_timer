import SnapRender from "./SnapRender";
import {formatTime} from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time,snapShot, startTimer, stopTimer, resetTimer,snap, active } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button
            className="button"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={snap}> 
          Snap
          </button>
        </div>
      </div>
      <SnapRender snapShot={snapShot}/>
    </div>
  );
}

export default App;
