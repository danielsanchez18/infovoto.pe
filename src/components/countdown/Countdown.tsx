'use client';

import { useState, useEffect } from 'react';
import Slot from "../slot/Slot";

interface TimeRemaining {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-15T00:00:00');

    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        let months = 0;
        let tempDate = new Date(now);
        while (tempDate < targetDate) {
          tempDate.setMonth(tempDate.getMonth() + 1);
          if (tempDate <= targetDate) {
            months++;
          }
        }
        
        const afterMonths = new Date(now);
        afterMonths.setMonth(afterMonths.getMonth() + months);
        const remainingTime = targetDate.getTime() - afterMonths.getTime();
        
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setTimeRemaining({
          months,
          days,
          hours,
          minutes,
          seconds
        });
      } else {
        setTimeRemaining({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-8 flex gap-10 items-center justify-center w-full'>
      <Slot value={timeRemaining.months} label="meses" />
      <Slot value={timeRemaining.days} label="días" />
      <Slot value={timeRemaining.hours} label="horas" />
      <Slot value={timeRemaining.minutes} label="minutos" />
      <Slot value={timeRemaining.seconds} label="segundos" />
    </div>
  )
}
