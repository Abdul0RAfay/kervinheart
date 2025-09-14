import React from 'react';
import styles from './BookingSummary.module.css';

const BookingSummary = ({ selectedSession = null }) => {
  return (
    <div className={styles.bookingSummary}>
      <div className={styles.summaryCard}>
        {selectedSession ? (
          <div className={styles.selectedSession}>
            <h3 className={styles.sessionTitle}>{selectedSession.title}</h3>
            <div className={styles.sessionDetails}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Duration:</span>
                <span className={styles.value}>{selectedSession.duration} minutes</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Price:</span>
                <span className={styles.value}>{selectedSession.price} {selectedSession.timePeriod}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Rating:</span>
                <span className={styles.value}>⭐ {selectedSession.rating}</span>
              </div>
            </div>
            <div className={styles.tags}>
              {selectedSession.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <button className={styles.bookButton}>
              Book This Session
            </button>
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
