const digitalElement = document.querySelector(".digital");
const sElement = document.querySelector(".p_s");
const mElement = document.querySelector(".p_m");
const hElement = document.querySelector(".p_h");

const updateClock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(
    seconds
  )}`;

  const sDeg = (360 / 60) * seconds - 90;
  const mDeg = (360 / 60) * minutes - 90;
  const hDeg = (360 / 12) * hours - 90;

  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
};

const fixZero = (time) => {
  return time > 9 ? time : `0${time}`;
};

setInterval(updateClock, 1000);