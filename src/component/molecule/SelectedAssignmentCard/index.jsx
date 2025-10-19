import React, { useState } from 'react';
import styles from './SelectedAssignmentCard.module.css';
import { FaDownload, FaChevronDown } from 'react-icons/fa';

const SelectedAssignmentCard = ({ 
  assignment, 
  onEdit, 
  onPreview 
}) => {
  const [feedback, setFeedback] = useState(assignment?.feedback || '');
  const [grade, setGrade] = useState(assignment?.grade || '');
  const [status, setStatus] = useState(assignment?.status || 'Pending');

  if (!assignment) {
    return (
      <div className={styles.selectedAssignmentCard}>
        <div className={styles.noSelection}>
          <p>Select an assignment to view details</p>
        </div>
      </div>
    );
  }

  const {
    title,
    student,
    course,
    submittedDate,
    dueDate,
    wordCount,
    attachmentCount,
    description,
    content
  } = assignment;

  const handleSubmitReview = () => {
    console.log('Submitting review:', {
      assignmentId: assignment.id,
      feedback,
      grade,
      status
    });
  };

  return (
    <div className={styles.selectedAssignmentCard}>
      {/* Header */}
      <div className={styles.cardHeader}>
        <h2 className={styles.headerTitle}>Review Panel</h2>
        <button className={styles.downloadButton}>
          <FaDownload className={styles.downloadIcon} />
        </button>
      </div>

      {/* Assignment Details */}
      <div className={styles.assignmentDetails}>
        <h3 className={styles.assignmentTitle}>{title}</h3>
        
        <div className={styles.assignmentInfo}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Student:</span>
            <span className={styles.infoValue}>{student}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Course:</span>
            <span className={styles.infoValue}>{course}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Submitted:</span>
            <span className={styles.infoValue}>{submittedDate}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Due Date:</span>
            <span className={styles.infoValue}>{dueDate}</span>
          </div>
        </div>

        {/* Assignment Content */}
        <div className={styles.assignmentContent}>
          <p className={styles.contentText}>{content}</p>
          <div className={styles.contentMeta}>
            <span className={styles.metaText}>{wordCount} words</span>
            <span className={styles.metaText}>{attachmentCount} attachment{attachmentCount !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>

      {/* Review & Feedback Section */}
      <div className={styles.reviewSection}>
        <h4 className={styles.reviewTitle}>Review & Feedback</h4>
        
        <textarea
          className={styles.feedbackTextarea}
          placeholder="Add your feedback and comments..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={6}
        />

        <div className={styles.reviewControls}>
          <div className={styles.controlGroup}>
            <label className={styles.controlLabel}>Grade</label>
            <div className={styles.selectContainer}>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className={styles.selectInput}
              >
                <option value="">Select Grade</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="C-">C-</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
              <FaChevronDown className={styles.selectIcon} />
            </div>
          </div>

          <div className={styles.controlGroup}>
            <label className={styles.controlLabel}>Status</label>
            <div className={styles.selectContainer}>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={styles.selectInput}
              >
                <option value="Pending">Pending</option>
                <option value="In Review">In Review</option>
                <option value="Completed">Completed</option>
                <option value="Needs Revision">Needs Revision</option>
              </select>
              <FaChevronDown className={styles.selectIcon} />
            </div>
          </div>
        </div>

        <button 
          className={styles.submitButton}
          onClick={handleSubmitReview}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default SelectedAssignmentCard;
