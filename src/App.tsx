import React, { useState, useEffect } from "react"
import "./CountdownTimer.css"

const CountdownTimer: React.FC = () => {
  const targetDate = new Date("2025-04-12T11:00:00")

  const calculateTimeLeft = () => {
    const now = new Date()
    const diff = Math.floor((targetDate.getTime() - now.getTime()) / 1000)
    return diff > 0 ? diff : 0
  }

  const [timeLeft, setTimeLeft] = useState<number>(calculateTimeLeft())

  const formatTime = (seconds: number): string => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0")
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
    const s = String(seconds % 60).padStart(2, "0")
    return `${h}:${m}:${s}`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="content background">
      <div id="countdown" className={timeLeft === 0 ? "bouncy" : ""}>
        {formatTime(timeLeft)}
      </div>
    </div>
  )
}

const App: React.FC = () => <CountdownTimer />
export default App
