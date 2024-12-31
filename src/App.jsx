import dayjs from "dayjs";
import { useEffect, useState } from "react";
import InputComponent from './InputComponent'
const TimerComponent = ({ value, headingText }) => {
  return (
    <div className="counter-card">
      <div className="counter-background">
        <p className="counter-text">{value}</p>
      </div>
      <p className="counter-header-text">{headingText}</p>
    </div>
  );
};

function App() {
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const isNewYearCompleted = remaining.days <= 0 && remaining.hours <= 0 && remaining.minutes<=0 && remaining.seconds <=0;
  useEffect(() => {
    const date1 = dayjs();
    const date2 = dayjs("2025-01-01");
    const diff = date2.diff(date1);
    let timer;
    if(isNewYearCompleted){
      return;
    }else{
      timer = setInterval(() => {
        setRemaining({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }, 1000);
    }
    
    return () => {

      clearInterval(timer);
    };
  }, [remaining]);

  return isNewYearCompleted ? (
    <InputComponent/>
  ) :(
    <>
      <h1>Something special for my love is coming soon ❤️❤️🤗🤗</h1>
      <main>
        <TimerComponent
          value={remaining.days < 10 ? "0" + remaining.days : remaining.days}
          headingText={"DAYS"}
        />
        <TimerComponent
          value={remaining.hours < 10 ? "0" + remaining.hours : remaining.hours}
          headingText={"HOURS"}
        />
        <TimerComponent
          value={
            remaining.minutes < 10 ? "0" + remaining.minutes : remaining.minutes
          }
          headingText={"MINUTES"}
        />
        <TimerComponent
          value={
            remaining.seconds < 10 ? "0" + remaining.seconds : remaining.seconds
          }
          headingText={"SECONDS"}
        />
      </main>
    </>
  );
}

export default App;
