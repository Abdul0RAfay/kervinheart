import React from 'react';
import styles from './SessionCard.module.css';
import Button from '@/component/atoms/Button';
import Image from 'next/image';

const SessionCard = ({ coachName, coachTitle, sessionTime, isAddedToCalendar = true }) => {
  return (
    <div className={styles.sessionCard}>
      <div className={styles.sessionCardBody}>
       
      
        <div className={styles.sessionInfo}>
          <div className={styles.coachProfile}>
            <div className={styles.profileImage}>
              <Image src="/api/placeholder/80/80" fill alt={coachName} />
            </div>
            <div className={styles.coachDetails}>
            <h3 className="fs-16 fw-500 op-05 primary-color" >Upcoming Session</h3>
              <h4 className="fs-24 fw-500 primary-color">{coachName} <span className="fs-16 fw-400">({coachTitle})</span> </h4>
          
              <div className={styles.sessionTime}>
                <span className="fs-16 fw-500 op-05 primary-color">Session Time</span>
                <h4 className="fs-24 fw-500 primary-color">{sessionTime}</h4>
                <span className="fs-16 fw-500 primary-color c-p">View all sessions</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          {isAddedToCalendar && (
            <div className={styles.calendarBadge}>
              <span className={styles.calendarIcon}>📅</span>
              <span>Added to google calendar</span>
            </div>
          )}
        </div>

      </div>
      <div className={styles.sessionActions}>
         
          <Button 
          label={"Join Now!"}
          variant={"primary"}
          className={styles.joinButton}/>
        </div>
    </div>
  );
};

export default SessionCard;
