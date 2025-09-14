import React from 'react';
import styles from './TimeSlotSelector.module.css';

const TimeSlotSelector = ({ selectedTime, onTimeSelect, availableTimes = [] }) => {
  const defaultTimeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const timeSlots = availableTimes.length > 0 ? availableTimes : defaultTimeSlots;

  return (
    <div className={styles.timeSlotSelector}>
      <h3 className={styles.timeSlotTitle}>Available Times</h3>
      <div className={styles.timeGrid}>
        {timeSlots.map((time, index) => {
          const isSelected = selectedTime === time;
          
          return (
            <button
              key={index}
              className={`${styles.timeButton} ${isSelected ? styles.selected : ''}`}
              onClick={() => onTimeSelect(time)}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
