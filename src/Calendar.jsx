import { useState, useMemo } from 'react'
import './Calendar.css'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)

  const calendarData = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    
    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)
    
    const startPadding = firstDayOfMonth.getDay()
    const daysInMonth = lastDayOfMonth.getDate()
    
    const prevMonthLastDay = new Date(year, month, 0).getDate()
    
    const days = []
    
    for (let i = startPadding - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      })
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      })
    }
    
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      })
    }
    
    return { year, month, days }
  }, [currentDate])

  const isToday = (date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date) => {
    if (!selectedDate) return false
    return date.toDateString() === selectedDate.toDateString()
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(calendarData.year, calendarData.month - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(calendarData.year, calendarData.month + 1, 1))
  }

  const handleDateClick = (date) => {
    setSelectedDate(date)
  }

  const goToToday = () => {
    const today = new Date()
    setCurrentDate(today)
    setSelectedDate(today)
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button 
          onClick={handlePrevMonth}
          className="nav-button"
          aria-label="Previous month"
        >
          ←
        </button>
        <h2 className="calendar-title">
          {MONTHS[calendarData.month]} {calendarData.year}
        </h2>
        <button 
          onClick={handleNextMonth}
          className="nav-button"
          aria-label="Next month"
        >
          →
        </button>
      </div>

      <button onClick={goToToday} className="today-button">
        Today
      </button>

      <div className="calendar-grid">
        {DAYS.map(day => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
        
        {calendarData.days.map((item, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(item.date)}
            className={`
              calendar-day
              ${!item.isCurrentMonth ? 'other-month' : ''}
              ${isToday(item.date) ? 'today' : ''}
              ${isSelected(item.date) ? 'selected' : ''}
            `}
          >
            {item.day}
          </button>
        ))}
      </div>

      {selectedDate && (
        <div className="selected-date">
          Selected: {selectedDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      )}
    </div>
  )
}
