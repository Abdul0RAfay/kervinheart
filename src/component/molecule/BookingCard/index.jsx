import React from 'react'
import styles from './BookingCard.module.css'
import { FaEllipsisH } from 'react-icons/fa'

const BookingCard = ({ 
  booking, 
  onClick, 
  onOptions 
}) => {
  const handleCardClick = () => {
    onClick?.(booking)
  }

  const handleOptionsClick = (e) => {
    e.stopPropagation()
    onOptions?.(booking)
  }

  return (
    <div className={styles.bookingCard} onClick={handleCardClick}>
      <div className={styles.cardContent}>
        <div className={styles.leftSection}>
          <h3 className={styles.sessionTitle}>{booking.title}</h3>
          <p className={styles.clientName}>{booking.client}</p>
          <p className={styles.dateTime}>{booking.date} at {booking.time}</p>
        </div>
        
        <div className={styles.rightSection}>
          <div className={styles.durationBadge}>
            {booking.duration}
          </div>
          <div className={`${styles.statusBadge} ${styles[booking.status.toLowerCase()]}`}>
            {booking.status}
          </div>
          <button 
            className={styles.optionsButton}
            onClick={handleOptionsClick}
          >
            <FaEllipsisH className={styles.optionsIcon} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingCard
