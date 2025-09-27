"use client"

import React, { useState } from 'react';
import styles from './QuickJournalEntry.module.css';
import { FaEdit } from 'react-icons/fa';

const QuickJournalEntry = ({ 
  question = "What's on your mind today?",
  placeholder = "Type anything...",
  onSubmit
}) => {
  const [entry, setEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry.trim() && onSubmit) {
      onSubmit(entry);
      setEntry('');
    }
  };

  return (
    <div className={styles.quickJournal}>
      <div className={styles.question}>
        {question}
      </div>
      
      <form onSubmit={handleSubmit} className={styles.journalForm}>
        <div className={styles.inputContainer}>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder={placeholder}
            className={styles.journalInput}
            rows={1}
          />
          <div className={styles.inputIcon}>
            <FaEdit />
          </div>
        </div>
        
        {/* <button 
          type="submit" 
          className={styles.submitButton}
          disabled={!entry.trim()}
        >
          Save Entry
        </button> */}
      </form>
    </div>
  );
};

export default QuickJournalEntry;
