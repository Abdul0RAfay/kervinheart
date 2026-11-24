import React from "react";
import Link from "next/link";
import { LuCalendarCheck, LuClock, LuVideo } from "react-icons/lu";
import Button from "@/component/atoms/Button";
import styles from "./SessionCard.module.css";

const initials = (name = "") =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

const SessionCard = ({ coachName, coachTitle, sessionTime, isAddedToCalendar = true }) => {
  return (
    <div className={styles.sessionCard}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Upcoming session</span>
        {isAddedToCalendar && (
          <span className={styles.calendarBadge}>
            <LuCalendarCheck className={styles.calendarIcon} />
            In your calendar
          </span>
        )}
      </div>

      <div className={styles.coachProfile}>
        <span className={styles.avatar}>{initials(coachName)}</span>
        <div className={styles.coachDetails}>
          <h4 className={styles.coachName}>{coachName}</h4>
          <p className={styles.coachTitle}>{coachTitle}</p>
        </div>
      </div>

      <div className={styles.sessionTime}>
        <span className={styles.timeIcon}>
          <LuClock />
        </span>
        <div>
          <p className={styles.timeLabel}>Session time</p>
          <p className={styles.timeValue}>{sessionTime}</p>
        </div>
      </div>

      <div className={styles.sessionActions}>
        <Button label="Join now" variant="primary" leftIcon={<LuVideo />} />
        <Link href="/user/coaching-sessions" className={styles.viewAll}>
          View all sessions
        </Link>
      </div>
    </div>
  );
};

export default SessionCard;
