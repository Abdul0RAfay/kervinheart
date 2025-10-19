"use client"

import React, { useState } from 'react'
import classes from './ActivityAndProgressTemplate.module.css'
import StatsCard from '@/component/molecule/StatsCard'
import Tabs from '@/component/atoms/Tabs'

const ActivityAndProgressTemplate = () => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('thisMonth')

  // KPI Stats Data
  const kpiStats = [
    { title: 'Course Completion Rate', value: '78%' },
    { title: 'Daily Engagement', value: '65%' },
    { title: 'Session Attendance', value: '92%' },
    { title: 'Assignment Submission', value: '84%' }
  ]

  // Recent Activity Data
  const recentActivity = [
    { action: 'Sarah Johnson completed Advanced Mindfulness course', time: '2 hours ago' },
    { action: 'Mike Chen submitted reflection assignment', time: '3 hours ago' },
    { action: 'Emily Davis joined group coaching session', time: '6 hours ago' },
    { action: 'Thomas Smith started Stress Management course', time: '8 hours ago' },
    { action: 'Jessica Lee requested one-on-one coaching', time: '10 hours ago' }
  ]

  // Cohort Performance Data
  const cohortPerformance = [
    { 
      course: 'Mindfulness Basics', 
      enrolled: '45 users', 
      active: '38 users', 
      completion: 85 
    },
    { 
      course: 'Stress Management Techniques', 
      enrolled: '40 users', 
      active: '32 users', 
      completion: 80 
    },
    { 
      course: 'Yoga for Beginners', 
      enrolled: '30 users', 
      active: '25 users', 
      completion: 70 
    },
    { 
      course: 'Introduction to Meditation', 
      enrolled: '50 users', 
      active: '45 users', 
      completion: 90 
    },
    { 
      course: 'Work-Life Balance', 
      enrolled: '41 users', 
      active: '34 users', 
      completion: 69 
    }
  ]

  const timeFilters = [
    { id: 'thisMonth', label: 'This Month' },
    { id: 'thisWeek', label: 'This Week' },
    { id: 'quarter', label: 'Quarter' }
  ]

  return (
    <div className={classes.activityAndProgressTemplate}>
      {/* Time Filter */}
      <div className={classes.timeFilterContainer}>
        <Tabs 
          tabs={timeFilters}
          activeTab={selectedTimeFilter}
          onTabChange={setSelectedTimeFilter}
        />
      </div>

      {/* KPI Stats Cards */}
      <div className={classes.kpiContainer}>
        {kpiStats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className={classes.contentGrid}>
        {/* Recent Activity Section */}
        <div className={classes.recentActivitySection}>
          <div className={classes.sectionHeader}>
            <h2 className={classes.sectionTitle}>Recent Activity</h2>
            <p className={classes.sectionSubtitle}>
              Real-time user activity and engagement tracking
            </p>
          </div>
          <div className={classes.activityList}>
            {recentActivity.map((activity, index) => (
              <div key={index} className={classes.activityItem}>
                <div className={classes.activityAction}>
                  {activity.action}
                </div>
                <div className={classes.activityTime}>
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cohort Performance Section */}
        <div className={classes.cohortPerformanceSection}>
          <div className={classes.sectionHeader}>
            <h2 className={classes.sectionTitle}>Cohort Performance</h2>
            <p className={classes.sectionSubtitle}>
              Compare engagement and completion rates across different cohorts
            </p>
          </div>
          <div className={classes.cohortList}>
            {cohortPerformance.map((cohort, index) => (
              <div key={index} className={classes.cohortItem}>
                <div className={classes.cohortHeader}>
                  <h3 className={classes.cohortName}>{cohort.course}</h3>
                  <div className={classes.cohortStats}>
                    <span>Enrolled: {cohort.enrolled}</span>
                    <span>Active: {cohort.active}</span>
                  </div>
                </div>
                <div className={classes.cohortProgress}>
                  <div className={classes.progressBar}>
                    <div 
                      className={classes.progressFill}
                      style={{ width: `${cohort.completion}%` }}
                    ></div>
                  </div>
                  <span className={classes.progressText}>
                    {cohort.completion}% completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityAndProgressTemplate