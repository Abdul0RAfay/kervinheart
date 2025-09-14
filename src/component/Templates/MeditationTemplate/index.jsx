"use client";
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from "./MeditationTemplate.module.css";
import MeditationCard from '@/component/molecule/MeditationCard';
import NowPlaying from '@/component/molecule/NowPlaying';
import Tabs from '@/component/atoms/Tabs';

const MeditationTemplate = () => {
  const [selectedMeditation, setSelectedMeditation] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  // Sample meditation data based on the image description
  const meditations = [
    {
      id: 1,
      title: "10-Minute Meditation for Focus",
      duration: 10,
      type: "Video",
      tags: ["Video", "Breathing", "Quick-relief", "Stress management"],
      thumbnail: "/images/meditation-thumbnails/focus-meditation.jpg",
      transcript: "Welcome to this 10-minute meditation for focus. Find a comfortable position and let's begin..."
    },
    {
      id: 2,
      title: "Morning Clarity",
      duration: 6,
      type: "Audio",
      tags: ["Audio", "Breathing", "Quick-relief", "Peaceful"],
      thumbnail: "/images/meditation-thumbnails/morning-clarity.jpg",
      transcript: "Start your day with clarity and intention. This gentle morning meditation will help you..."
    },
    {
      id: 3,
      title: "20-Minute Meditation for Focus",
      duration: 20,
      type: "Video",
      tags: ["Video", "Breathing", "Quick-relief", "Stress management"],
      thumbnail: "/images/meditation-thumbnails/extended-focus.jpg",
      transcript: "Dive deeper into focused meditation with this extended 20-minute session..."
    },
    {
      id: 4,
      title: "Evening Clarity",
      duration: 60,
      type: "Audio",
      tags: ["Audio", "Breathing", "Quick-relief", "Peaceful"],
      thumbnail: "/images/meditation-thumbnails/evening-clarity.jpg",
      transcript: "Wind down your day with this peaceful evening meditation designed to bring clarity..."
    }
  ];

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'playlists', label: 'Playlists' },
    { id: 'audio', label: 'Audio' },
    { id: 'video', label: 'Video' },
    { id: 'short', label: '0-10m' },
    { id: 'medium', label: '10-20m' }
  ];

  const filteredMeditations = meditations.filter(meditation => {
    if (activeTab === 'all') return true;
    if (activeTab === 'playlists') return true; // For now, show all for playlists
    if (activeTab === 'audio') return meditation.type === 'Audio';
    if (activeTab === 'video') return meditation.type === 'Video';
    if (activeTab === 'short') return meditation.duration <= 10;
    if (activeTab === 'medium') return meditation.duration > 10 && meditation.duration <= 20;
    return true;
  });

  const handleMeditationClick = (meditation) => {
    setSelectedMeditation(meditation);
  };

  return (
    <div className={classes.meditationMain}>
      <Container fluid>
        <Row>
          <Col md={8}>
            <div className={classes.contentSection}>
              {/* Filter tabs */}
              <Tabs 
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {/* Meditation content list */}
              <div className={classes.meditationList}>
                {filteredMeditations.map((meditation) => (
                  <MeditationCard
                    key={meditation.id}
                    meditation={meditation}
                    onClick={() => handleMeditationClick(meditation)}
                    isSelected={selectedMeditation?.id === meditation.id}
                  />
                ))}
              </div>
            </div>
          </Col>
          
          <Col md={4}>
            <div className={classes.nowPlayingSection}>
              <NowPlaying 
                selectedMeditation={selectedMeditation}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MeditationTemplate;
