import React from 'react';
import styles from './SessionCard.module.css';

const SessionCard = ({ coachName, coachTitle, sessionTime, isAddedToCalendar = true }) => {
  return (
    <div className={styles.sessionCard}>
      <div className={styles.header}>
        <h3>Upcoming Session</h3>
        {isAddedToCalendar && (
          <div className={styles.calendarBadge}>
            <span className={styles.calendarIcon}>📅</span>
            <span>Added to google calendar</span>
          </div>
        )}
      </div>
      
      <div className={styles.sessionInfo}>
        <div className={styles.coachProfile}>
          <div className={styles.profileImage}>
            <img src="/api/placeholder/80/80" alt={coachName} />
          </div>
          <div className={styles.coachDetails}>
            <h4>{coachName}</h4>
            <p>({coachTitle})</p>
          </div>
        </div>
        
        <div className={styles.sessionTime}>
          <span className={styles.timeLabel}>Session Time</span>
          <span className={styles.timeValue}>{sessionTime}</span>
        </div>
        
        <div className={styles.sessionActions}>
          <a href="#" className={styles.viewAllLink}>View all sessions</a>
          <button className={styles.joinButton}>Join Now!</button>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
