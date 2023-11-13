export const formatTime = (time) => { 
  const centiseconds = time%100
  const getCentiseconds = (centiseconds <10)? '0'+ centiseconds: centiseconds;
  const seconds = Math.floor(time/100%60);
  const getSeconds = (seconds <10)? '0'+ seconds: seconds;
  const minutes = Math.floor(time/6000%60);
  const getMinutes = (minutes <10)? '0'+ minutes: minutes;
  const hours = Math.floor(time/360000)
  const getHours = (hours <10)? '0'+ hours: hours;

        return `${getHours} : ${getMinutes} : ${getSeconds} : ${getCentiseconds}`;
};
