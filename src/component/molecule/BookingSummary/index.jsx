import React from 'react';
import styles from './BookingSummary.module.css';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import Button from '@/component/atoms/Button';

const BookingSummary = ({ 
  selectedSession = null, 
  selectedDate = null, 
  selectedTime = null, 
  selectedSessionType = null 
}) => {
  return (
    <div className={styles.bookingSummary}>
      <div className={styles.summaryCard}>
        {selectedSession ? (
          <div className={styles.selectedSessionMain}>
            <div className={styles.selectedSession}>
              <h3 className={styles.sessionTitle}>{selectedSession.title}</h3>
              
              {selectedDate && (
                <div className={styles.dateTimeInfo}>
                  <div className={styles.dateTimeItem}>
                    <FaCalendarAlt className={styles.icon} />
                    <span>{selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  {selectedTime && (
                    <div className={styles.dateTimeItem}>
                      <FaClock className={styles.icon} />
                      <span>{selectedTime}</span>
                    </div>
                  )}
                </div>
              )}

              {selectedSessionType && (
                <div className={styles.sessionTypeSection}>
                  <h4 className={styles.sectionTitle}>Session Type</h4>
                  <div className={styles.sessionTypeButtons}>
                    <button 
                      className={`${styles.sessionTypeButton} ${selectedSessionType === 'online' ? styles.selected : ''}`}
                    >
                      📹 Online
                    </button>
                    <button 
                      className={`${styles.sessionTypeButton} ${selectedSessionType === 'in-person' ? styles.selected : ''}`}
                    >
                      📍 In-Person
                    </button>
                  </div>
                </div>
              )}

              <div className={styles.totalCost}>
                <span className={styles.totalLabel}>Total Cost:</span>
                <span className={styles.totalValue}>{selectedSession.price}/session</span>
              </div>
              
            </div>
           <Button
           label={"Confirm booking"}
           variant={"primary"}
           className={styles.confirmButton}/>
          </div>
        ) : (
          <div className={styles.noSelection}>
            <h3 className={styles.sessionTitle}>Life Coaching - Career Clarity</h3>
            <p className={styles.prompt}>Select a session to start booking</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSummary;
