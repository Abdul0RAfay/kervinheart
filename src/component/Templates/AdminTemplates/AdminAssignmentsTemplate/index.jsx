"use client"

import React, { useState } from 'react'
import classes from './AdminAssignmentsTemplate.module.css'
import StatsCard from '@/component/molecule/StatsCard'
import AssignmentCard from '@/component/molecule/AssignmentCard'
import SelectedAssignmentCard from '@/component/molecule/SelectedAssignmentCard'
import { FaSearch, FaChevronDown } from 'react-icons/fa'

const AdminAssignmentsTemplate = () => {
  const [selectedAssignment, setSelectedAssignment] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')

  // Statistics data matching the dashboard image
  const stats = [
    { title: 'Pending Reviews', value: '12' },
    { title: 'Completed Reviews', value: '45' },
    { title: 'Overdue', value: '3' },
    { title: 'Avg Score', value: '87%' }
  ]

  // Assignment data matching the image
  const assignments = [
    {
      id: 1,
      title: 'Week 3: Daily Reflection Journal',
      student: 'Sarah Johnson',
      status: 'Pending',
      wordCount: 847,
      attachmentCount: 2,
      submittedDate: '1/15/2024',
      dueDate: '1/16/2024',
      course: 'Mindfulness Basics',
      description: 'This week\'s reflection focused on mindfulness practices and their integration into daily routines. Students were asked to document their experiences with breathing exercises, body scan meditation, and mindful walking.',
      content: 'This week\'s reflection focused mindfulness practices and their integration... see more',
      grade: null,
      feedback: ''
    },
    {
      id: 2,
      title: 'Week 4: Project Update',
      student: 'Michael Smith',
      status: 'Completed',
      wordCount: 950,
      attachmentCount: 1,
      submittedDate: '1/22/2024',
      dueDate: '1/23/2024',
      course: 'Advanced Mindfulness',
      description: 'Project update on the mindfulness research study including preliminary findings and next steps.',
      content: 'Project update on the mindfulness research study including preliminary findings...',
      grade: 'A',
      feedback: 'Excellent work on the research methodology and preliminary analysis.'
    },
    {
      id: 3,
      title: 'Week 5: Peer Review Feedback',
      student: 'Emily Davis',
      status: 'In Review',
      wordCount: 1100,
      attachmentCount: 3,
      submittedDate: '1/29/2024',
      dueDate: '1/30/2024',
      course: 'Mindfulness in Education',
      description: 'Peer review feedback assignment focusing on constructive criticism and supportive commentary.',
      content: 'Peer review feedback assignment focusing on constructive criticism...',
      grade: null,
      feedback: ''
    },
    {
      id: 4,
      title: 'Week 6: Final Reflection',
      student: 'David Wilson',
      status: 'Pending',
      wordCount: 1200,
      attachmentCount: 1,
      submittedDate: '2/5/2024',
      dueDate: '2/6/2024',
      course: 'Mindfulness Fundamentals',
      description: 'Comprehensive reflection on the entire course journey and personal growth.',
      content: 'Comprehensive reflection on the entire course journey and personal growth...',
      grade: null,
      feedback: ''
    }
  ]

  // Set default selected assignment
  React.useEffect(() => {
    if (assignments.length > 0 && !selectedAssignment) {
      setSelectedAssignment(assignments[0]) // Default to first assignment
    }
  }, [selectedAssignment])

  const handleAssignmentClick = (assignment) => {
    setSelectedAssignment(assignment)
  }

  const handleAssignmentOptions = (assignment) => {
    console.log('Assignment options:', assignment)
  }

  const handleEditAssignment = (assignment) => {
    console.log('Edit assignment:', assignment)
  }

  const handlePreviewAssignment = (assignment) => {
    console.log('Preview assignment:', assignment)
  }

  const filteredAssignments = assignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.student.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={classes.adminAssignmentsTemplate}>
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

      {/* Main Content Layout */}
      <div className={classes.mainContent}>
        {/* Left Section - Recent Submissions */}
        <div className={classes.submissionsSection}>
          <div className={classes.sectionHeader}>
            <h2 className={classes.sectionTitle}>Recent Submissions</h2>
            <p className={classes.sectionSubtitle}>Real-time user activity and engagement tracking</p>
          </div>
          
          {/* Search and Filter */}
          <div className={classes.searchFilterContainer}>
            <div className={classes.searchContainer}>
              <input
                type="text"
                placeholder="Search anything..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={classes.searchInput}
              />
              <FaSearch className={classes.searchIcon} />
            </div>
            
            <div className={classes.filterContainer}>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className={classes.filterSelect}
              >
                <option>All Status</option>
                <option>Pending</option>
                <option>In Review</option>
                <option>Completed</option>
              </select>
              <FaChevronDown className={classes.filterIcon} />
            </div>
          </div>

          {/* Assignment List */}
          <div className={classes.assignmentList}>
            {filteredAssignments.map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
                onClick={handleAssignmentClick}
                onOptions={handleAssignmentOptions}
                isSelected={selectedAssignment?.id === assignment.id}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Review Panel */}
        <div className={classes.reviewSection}>
          <SelectedAssignmentCard
            assignment={selectedAssignment}
            onEdit={handleEditAssignment}
            onPreview={handlePreviewAssignment}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminAssignmentsTemplate
