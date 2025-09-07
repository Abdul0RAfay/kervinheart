"use client"

import React, { useState } from 'react';
import Tabs from '@/component/atoms/Tabs';
import styles from './AssignmentList.module.css';

const AssignmentList = ({ 
  assignments = [
    {
      id: 1,
      title: 'Goal Clarification Worksheet',
      description: 'Define 3-month, 6-month, and 12-month goals using SMART format.',
      dueDate: '10/01/2025',
      status: 'pending',
      type: 'all'
    },
    {
      id: 2,
      title: 'Time Audit (Spreadsheet Upload)',
      description: 'Track and upload last 3 days of activities in a simple spreadsheet.',
      dueDate: '10/01/2025',
      status: 'submitted',
      type: 'submitted'
    },
    {
      id: 3,
      title: 'Pre-Session Reflection',
      description: 'Quick answers to 5 prep questions for the next coaching session.',
      dueDate: '10/01/2025',
      status: 'pending',
      type: 'pending'
    },
    {
      id: 4,
      title: 'Daily Habit Tracker - Week 1',
      description: 'Log adherence to 3 chosen habits each day for 7 days.',
      dueDate: '10/01/2025',
      status: 'submitted',
      type: 'submitted'
    },
    {
      id: 5,
      title: 'Feedback on Progress',
      description: 'Reflect on the progress made towards the goals set in the initial worksheet.',
      dueDate: '10/01/2025',
      status: 'pending',
      type: 'pending'
    },
    {
      id: 6,
      title: 'Stress Trigger Log',
      description: 'Capture 5 stress events, triggers, and coping responses.',
      dueDate: '10/01/2025',
      status: 'submitted',
      type: 'submitted'
    }
  ]
}) => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'submitted', label: 'Submitted' },
    { id: 'pending', label: 'Pending' }
  ];

  const filteredAssignments = assignments.filter(assignment => {
    if (activeTab === 'all') return true;
    return assignment.type === activeTab;
  });

  const getStatusIcon = (status) => {
    return status === 'submitted' ? '✅' : '⭕';
  };

  const getStatusClass = (status) => {
    return status === 'submitted' ? styles.submitted : styles.pending;
  };

  return (
    <div className={styles.assignmentList}>
      <h3>Assignments List</h3>
      
      <Tabs 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className={styles.assignmentsContainer}>
        {filteredAssignments.map((assignment) => (
          <div key={assignment.id} className={styles.assignmentItem}>
            <div className={styles.assignmentHeader}>
              <div className={styles.statusIcon}>
                {getStatusIcon(assignment.status)}
              </div>
              <div className={styles.assignmentInfo}>
                <h4 className={styles.assignmentTitle}>{assignment.title}</h4>
                <p className={styles.assignmentDescription}>{assignment.description}</p>
              </div>
            </div>
            
            <div className={styles.assignmentFooter}>
              <span className={styles.dueDate}>Due: {assignment.dueDate}</span>
              <span className={`${styles.status} ${getStatusClass(assignment.status)}`}>
                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentList;
