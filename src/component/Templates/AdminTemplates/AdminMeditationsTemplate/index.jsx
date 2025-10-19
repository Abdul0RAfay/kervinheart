"use client"

import React, { useState } from 'react'
import classes from './AdminMeditationsTemplate.module.css'
import StatsCard from '@/component/molecule/StatsCard'
import Tabs from '@/component/atoms/Tabs'
import MeditationCard from '@/component/molecule/MeditationCard'

const AdminMeditationsTemplate = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')

  // Statistics data matching the image
  const stats = [
    { title: 'Total Meditations', value: '63' },
    { title: 'Published', value: '45' },
    { title: 'In Draft', value: '12' },
    { title: 'Total Plays', value: '28.5k' }
  ]

  // Filter options matching the image - using Tabs component format
  const filters = [
    { id: 'All', label: 'All' },
    { id: 'Playlists', label: 'Playlists' },
    { id: 'Audio', label: 'Audio' },
    { id: 'Video', label: 'Video' },
    { id: '0-10m', label: '0-10m' },
    { id: '10-20m', label: '10-20m' },
    { id: 'Draft', label: 'Draft' }
  ]

  // Meditation sessions data matching the image
  const meditationSessions = [
    {
      id: 1,
      title: '10-Minute Meditation for Focus',
      duration: 10,
      tags: ['Video', 'Breathing', 'Quick-relief', 'Stress management'],
      type: 'Video'
    },
    {
      id: 2,
      title: '20-Minute Yoga Flow for Energy',
      duration: 20,
      tags: ['Video', 'Movement', 'Invigoration', 'Physical wellness'],
      type: 'Video'
    },
    {
      id: 3,
      title: '15-Minute Guided Visualization',
      duration: 15,
      tags: ['Audio', 'Imagery', 'Relaxation', 'Mindfulness'],
      type: 'Audio'
    },
    {
      id: 4,
      title: '25-Minute Journaling Session',
      duration: 25,
      tags: ['Text', 'Reflection', 'Clarity', 'Emotional wellness'],
      type: 'Text'
    }
  ]

  const handleMeditationClick = (meditation) => {
    console.log('Meditation clicked:', meditation)
  }

  const handleEditClick = (meditation) => {
    console.log('Edit meditation:', meditation)
  }

  return (
    <div className={classes.adminMeditationsTemplate}>
      {/* Statistics Cards */}
      <div className={classes.statsContainer}>
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      {/* Filter Tabs */}
      <div className={classes.filterContainer}>
        <Tabs 
          tabs={filters}
          activeTab={selectedFilter}
          onTabChange={setSelectedFilter}
        />
      </div>

      {/* Meditation Library Section */}
      <div className={classes.librarySection}>
        <div className={classes.sectionHeader}>
          <h2 className={classes.sectionTitle}>Meditation Library</h2>
          <p className={classes.sectionSubtitle}>
            Real-time user activity and engagement tracking
          </p>
        </div>
        
        <div className={classes.meditationList}>
          {meditationSessions.map((session) => (
            <MeditationCard
              key={session.id}
              meditation={session}
              onClick={handleMeditationClick}
              isEdit={true}
              onEdit={handleEditClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminMeditationsTemplate