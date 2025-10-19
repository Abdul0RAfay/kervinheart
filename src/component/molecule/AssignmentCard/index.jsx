import React from 'react';
import styles from './AssignmentCard.module.css';
import { FaCheck, FaFileAlt, FaUser } from 'react-icons/fa';

const AssignmentCard = ({ 
  assignment, 
  onClick, 
  onEdit,
  onOptions,
  isSelected = false
}) => {
  const {
    title,
    student,
    status,
    wordCount,
    attachmentCount,
    submittedDate,
    dueDate
  } = assignment;

  const getStatusIcon = () => {
    switch (status) {
      case 'Completed':
        return <FaCheck className={styles.statusIcon} />;
      case 'In Review':
        return <FaFileAlt className={styles.statusIcon} />;
      default:
        return null;
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'Completed':
        return styles.completed;
      case 'In Review':
        return styles.inReview;
      case 'Pending':
        return styles.pending;
      default:
        return styles.pending;
    }
  };

  return (
    <div 
      className={`${styles.assignmentCard} ${isSelected ? styles.selected : ''}`}
      onClick={() => onClick && onClick(assignment)}
    >
      {/* Left accent line */}
      <div className={styles.accentLine}></div>
      
      {/* Assignment content */}
      <div className={styles.assignmentContent}>
        <div className={styles.assignmentHeader}>
          <h3 className={styles.assignmentTitle}>{title}</h3>
        </div>

        <p className={styles.studentName}>{student}</p>

        {/* Status and details badges */}
        <div className={styles.badgesContainer}>
          <span className={`${styles.statusBadge} ${getStatusClass()}`}>
            {getStatusIcon()}
            {status}
          </span>
          <span className={styles.detailBadge}>
            {wordCount} words
          </span>
          <span className={styles.detailBadge}>
            {attachmentCount} attachment{attachmentCount !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Dates */}
        <div className={styles.datesContainer}>
          <span className={styles.dateText}>Submitted: {submittedDate}</span>
          <span className={styles.dateText}>Due: {dueDate}</span>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
