import React from 'react';
import styles from './Calendar.module.css';

const Calendar = ({ selectedDate, onDateSelect, availableDates = [] }) => {
  // Generate dates for the next few weeks
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 28; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };

  const formatDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return {
      day: days[date.getDay()],
      month: months[date.getMonth()],
      date: date.getDate()
    };
  };

  const dates = generateDates();

  return (
    <div className={styles.calendar}>
      <h3 className={styles.calendarTitle}>Available Dates</h3>
      <div className={styles.datesGrid}>
        {dates.slice(0, 8).map((date, index) => {
          const formatted = formatDate(date);
          const isSelected = selectedDate && 
            selectedDate.getDate() === date.getDate() && 
            selectedDate.getMonth() === date.getMonth() && 
            selectedDate.getFullYear() === date.getFullYear();
          
          return (
            <button
              key={index}
              className={`${styles.dateButton} ${isSelected ? styles.selected : ''}`}
              onClick={() => onDateSelect(date)}
            >
              <span className={styles.month}>{formatted.month}</span>
              <span className={styles.day}>{formatted.date}</span>
              <span className={styles.dayName}>{formatted.day}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
