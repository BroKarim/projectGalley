import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

function RealTimeCopy() {
  const [timezone, setTimezone] = useState("Asia/Jakarta"); // Ganti zona waktu sesuai kebutuhan Anda
  const [currentTime, setCurrentTime] = useState(DateTime.now().setZone(timezone));

  const updateTimes = () => {
    setCurrentTime(DateTime.now().setZone(timezone));
  };

  useEffect(() => {
    const intervalId = setInterval(updateTimes, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timezone]);

  const hour = currentTime.toFormat("H");
  const isOpen = hour >= 9 && hour < 18;

  return (
    <section className="times">
      <div className="md:flex hidden gap-2" data-date-timezone={timezone}>
        <h2>Nusantara,</h2>
        <output>{currentTime.toFormat("HH:mm:ss")}</output>
      </div>
      {/* {isOpen && <div className="open-label">Open</div>} */}
    </section>
  );
}

export default RealTimeCopy;
