"use client";
import React, { useState } from 'react';
import classes from "./JournalTemplate.module.css";
import { Col, Container, Row } from 'react-bootstrap';
import JournalCard from '@/component/molecule/JournalCard';
import JournalForm from '@/component/molecule/JournalForm';

const JournalTemplate = () => {
  const [journalEntries, setJournalEntries] = useState([
    {
      id: '1',
      title: 'Morning Reflection',
      date: 'April 13, 2025',
      feeling: 'good',
      content: 'Today I realized that my productivity has improved significantly since starting the coaching program. The structured approach to goal setting has really helped me stay focused and motivated throughout the day.',
      tags: ['Productivity', 'Goals']
    },
    {
      id: '2',
      title: 'Work Stress Management',
      date: 'April 6, 2025',
      feeling: 'low',
      content: 'Had a challenging day at work with multiple deadlines. Used the breathing techniques we practiced in the last session and found them helpful in managing the stress.',
      tags: ['Stress', 'Work']
    },
    {
      id: '3',
      title: 'Gratitude Practice',
      date: 'March 30, 2025',
      feeling: 'grateful',
      content: 'I am incredibly grateful for the unwavering support from my coach, who has been instrumental in my journey of personal growth and development.',
      tags: ['Gratitude', 'Progress']
    }
  ]);

  const handleNewEntry = (newEntry) => {
    setJournalEntries(prev => [newEntry, ...prev]);
  };

  const handleEntryClick = (entry) => {
    console.log('Journal entry clicked:', entry);
    // You can add functionality here to view/edit the entry
  };

  const handleFormCancel = () => {
    console.log('Form cancelled');
    // You can add functionality here to reset form or navigate away
  };

  return (
    <div className={classes.journalMain}>
      <Container fluid>
        <Row >
          <Col md={6} >
            <div className={classes.entriesSection}>
              <div className={classes.entriesList}>
                {journalEntries.map((entry) => (
                  <JournalCard
                    key={entry.id}
                    entry={entry}
                    onClick={handleEntryClick}
                  />
                ))}
              </div>
            </div>
          </Col>
          <Col md={6} >
            <div className={classes.formSection}>
              <JournalForm
                onSubmit={handleNewEntry}
                onCancel={handleFormCancel}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JournalTemplate;