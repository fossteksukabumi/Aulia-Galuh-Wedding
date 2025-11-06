"use client"

import { useState, useEffect } from "react"
import { CountdownWrapper, CountdownTitle, TimeContainer, TimeBox, TimeNumber, TimeLabel } from "./Countdown.style"

export default function Countdown() {
  const targetDate = new Date("2025-11-16T00:00:00").getTime()
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <CountdownWrapper>
      <CountdownTitle>Coming Soon</CountdownTitle>
      <TimeContainer>
        <TimeBox>
          <TimeNumber>{timeLeft.days}</TimeNumber>
          <TimeLabel>Days</TimeLabel>
        </TimeBox>
        <TimeBox>
          <TimeNumber>{timeLeft.hours}</TimeNumber>
          <TimeLabel>Hours</TimeLabel>
        </TimeBox>
        <TimeBox>
          <TimeNumber>{timeLeft.minutes}</TimeNumber>
          <TimeLabel>Minutes</TimeLabel>
        </TimeBox>
        <TimeBox>
          <TimeNumber>{timeLeft.seconds}</TimeNumber>
          <TimeLabel>Seconds</TimeLabel>
        </TimeBox>
      </TimeContainer>
    </CountdownWrapper>
  )
}
