import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const [time, setTime] = useState(5)
  const timeRef = useRef(time)

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(timeRef.current - 1)
      if (timeRef.current <= 1) {
        clearInterval(timer)
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    timeRef.current = time
  }, [time])
  return (
    <div>
      快乐星球被我吃了
      <Link to="/home"> {time}s后自动返回快乐星球</Link>
    </div>
  )
}
