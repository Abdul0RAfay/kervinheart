"use client"

import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import SessionCard from '@/component/molecule/SessionCard';
import CourseProgress from '@/component/molecule/CourseProgress';
import QuickActions from '@/component/molecule/QuickActions';
import QuickJournalEntry from '@/component/molecule/QuickJournalEntry';
import AssignmentList from '@/component/molecule/AssignmentList';
import StressRelease from '@/component/molecule/StressRelease';
import styles from './DashboardTemplate.module.css';

const DashboardTemplate = () => {
  const handleJournalSubmit = (entry) => {
    console.log('Journal entry submitted:', entry);
    // Handle journal entry submission
  };

  const handleMeditationPlay = () => {
    console.log('Starting meditation...');
    // Handle meditation play
  };

  return (
    <div className={styles.dashboard}>
      <Container fluid>
        {/* First Row */}
        <Row>
          <Col md={4}>
          <div className={styles.leftCol}>
            <SessionCard 
              coachName="Kervin Heart"
              coachTitle="Mediation Coach"
              sessionTime="12:00 PM EST"
              isAddedToCalendar={true}
            />
             <CourseProgress 
              completionPercentage={40}
              progressItems={[
                { label: 'Progress', percentage: 20, color: '#6c5ce7' },
                { label: 'Summary', percentage: 9.5, color: '#3742fa' },
                { label: 'Status', percentage: 10.5, color: '#DFDDFF' }
              ]}
            />
            <StressRelease 
              title="10-Minute Stress Release"
              description="Unwind and release tension with this calming guided meditation."
              onPlay={handleMeditationPlay}
            />
            </div>
          </Col>
          <Col md={8}>
            <div className={styles.rightCol}>
            <div className={styles.rightColHead}>
              <QuickJournalEntry 
                question="What's on your mind today?"
                placeholder="Type anything..."
                onSubmit={handleJournalSubmit}
              />
            
              <QuickActions 
                actions={[
                  {
                    id: 1,
                    icon: '▶️',
                    title: 'Start Meditation',
                    link: '/meditation'
                  },
                  {
                    id: 2,
                    icon: '💬',
                    title: 'Message Coach',
                    link: '/messages'
                  },
                  {
                    id: 3,
                    icon: '👥',
                    title: 'Join Group Session',
                    link: '/group-session'
                  }
                ]}
              />
              </div>
            <AssignmentList />
            </div>
          </Col>

         
        
       
          
        </Row>
      </Container>
    </div>
  );
};

export default DashboardTemplate;