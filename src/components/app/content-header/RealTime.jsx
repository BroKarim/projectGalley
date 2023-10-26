// https://youtu.be/2Q07rMdB1oA?si=utFeWh7hhwUueQ6R
import { useState, useEffect } from "react";
import { DateTime, Duration } from "luxon";

const [time, setTime] = useState(DateTime.now());
  const [timezone, setTimezone] = useState(
    location.state?.timezone || "America/Los_Angeles"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
export default function RealTime() {
  return (
    <div className="time flex gap-2">
      <h2>SF,</h2>
      <output>00:00:00</output>
    </div>
  );
}
