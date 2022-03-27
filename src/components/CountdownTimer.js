import { useState, useEffect } from "react";

export default function CountdownTimer({ countdownDate }) {
  const initialTimeState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const [timeLeft, setTimeLeft] = useState(initialTimeState);

  if (!countdownDate || countdownDate.trim() === "") return null;

  const futureDate = new Date(countdownDate);

  useEffect(() => {
    function countDown() {
      const currentDate = new Date();
      const myDate = futureDate - currentDate;

      const days = Math.floor(myDate / 1000 / 60 / 60 / 24);
      const hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(myDate / 1000 / 60) % 60;
      const seconds = Math.floor(myDate / 1000) % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }
    countDown();

    const timer = setInterval(countDown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdownTimer d-flex justify-content-center mb-5">
      <TimeFigure label="Days" value={timeLeft.days} />
      <TimeFigure label="Hours" value={timeLeft.hours} />
      <TimeFigure label="Minutes" value={timeLeft.minutes} />
      <TimeFigure label="Seconds" value={timeLeft.seconds} />
    </div>
  );
}

function TimeFigure({ label, value }) {
  return (
    <div className="timeFigure">
      <div className="timeFigureBox">
        <span>{value}</span>
      </div>
      <div className="timeFigureLabel">
        <span>{label}</span>
      </div>
    </div>
  );
}
