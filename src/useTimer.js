import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const snapShot = useRef([])
  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef();

  const startTimer = () => {
    ;
    isStart.current = true;
    active.current.disabled = true;
    refInterval.current = setInterval(()=>{
      if (isStart.current){
        setTime((time)=> time+1)
      }
    },10)

   
  };
  const stopTimer = () => {
  ;
    isStart.current = false
    clearInterval(refInterval.current)
    active.current.disabled = false;
  };
  const resetTimer = () => {
  ;setTime(0)
    clearInterval(refInterval.current)
    active.current.disabled = false;
    
  };
  const snap = () => {
    snapShot.current.push(time)
  }

  return { time, snapShot, startTimer, stopTimer, resetTimer,snap, active };
};
export default useTimer;
 