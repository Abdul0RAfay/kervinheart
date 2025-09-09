"use client"

import React, { useState } from 'react';
import styles from './QuickJournalEntry.module.css';

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
      <h3>Quick Journal Entry</h3>
      
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
            rows={2}
          />
          <div className={styles.inputIcon}>📝</div>
        </div>
        
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={!entry.trim()}
        >
          Save Entry
        </button>
      </form>
    </div>
  );
};

export default QuickJournalEntry;
