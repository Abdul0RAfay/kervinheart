import React from 'react'
import styles from './SessionDetailCard.module.css'
import { FaVideo, FaTimes, FaEdit } from 'react-icons/fa'

const SessionDetailCard = ({ 
  session, 
  onCancel, 
  onEdit 
}) => {
  if (!session) {
    return (
      <div className={styles.sessionCard}>
        <div className={styles.emptyState}>
          <p>No session selected</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.sessionCard}>
      <h3 className={styles.sessionTitle}>{session.title}</h3>
      
      <div className={styles.sessionDetails}>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Client:</span>
          <span className={styles.detailValue}>{session.client}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Date & Time:</span>
          <span className={styles.detailValue}>{session.date} at {session.time}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Duration:</span>
          <span className={styles.detailValue}>{session.duration}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Session Type:</span>
          <span className={styles.detailValue}>
            <FaVideo className={styles.typeIcon} />
            {session.type}
          </span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Status:</span>
          <span className={`${styles.statusBadge} ${styles[session.status.toLowerCase()]}`}>
            {session.status}
          </span>
        </div>
      </div>

      <div className={styles.notesSection}>
        <label className={styles.notesLabel}>Notes</label>
        <div className={styles.notesBox}>
          {session.notes}
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button 
          className={styles.cancelButton}
          onClick={() => onCancel?.(session)}
        >
          <FaTimes className={styles.buttonIcon} />
          Cancel
        </button>
        <button 
          className={styles.editButton}
          onClick={() => onEdit?.(session)}
        >
          <FaEdit className={styles.buttonIcon} />
          Edit
        </button>
      </div>
    </div>
  )
}

export default SessionDetailCard
