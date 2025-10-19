"use client"

import React, { useState } from 'react'
import classes from './AdminCoursesTemplate.module.css'
import StatsCard from '@/component/molecule/StatsCard'
import AdminCourseCard from '@/component/molecule/AdminCourseCard'
import SelectedCourseCard from '@/component/molecule/SelectedCourseCard'
import { FaSearch, FaChevronDown } from 'react-icons/fa'

const AdminCoursesTemplate = () => {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')

  // Statistics data matching the dashboard image
  const stats = [
    { title: 'Total Courses', value: '24' },
    { title: 'Published', value: '18' },
    { title: 'Total Enrollments', value: '1.2k' },
    { title: 'Completion Rate', value: '78%' }
  ]

  // Course data matching the image
  const courses = [
    {
      id: 1,
      title: 'Mindful Leadership: Building Emotional Intelligence',
      description: 'Transform your leadership style through emotional intelligence development.',
      lessons: 24,
      weeks: 6,
      level: 'Beginner',
      enrolled: 342,
      completion: 84,
      rating: 4.5,
      duration: '08 Weeks',
      assessments: 3,
      modules: 6,
      certificate: 'Yes',
      price: '$99',
      created: '01-01-2025',
      modified: '01-10-2025'
    },
    {
      id: 2,
      title: 'Advanced Mindfulness Techniques',
      description: 'Explore deeper practices such as loving-kindness meditation and body...',
      lessons: 30,
      weeks: 8,
      level: 'Intermediate',
      enrolled: 215,
      completion: 76,
      rating: 4.8,
      duration: '08 Weeks',
      assessments: 3,
      modules: 6,
      certificate: 'Yes',
      price: '$99',
      created: '01-01-2025',
      modified: '01-10-2025'
    },
    {
      id: 3,
      title: 'Mindfulness in Daily Life',
      description: 'Integrate mindfulness practices into everyday activities for a balanced life...',
      lessons: 20,
      weeks: 5,
      level: 'All Levels',
      enrolled: 150,
      completion: null,
      rating: null,
      duration: '05 Weeks',
      assessments: 2,
      modules: 4,
      certificate: 'Yes',
      price: '$79',
      created: '01-01-2025',
      modified: '01-10-2025'
    },
    {
      id: 4,
      title: 'Mindfulness Fundamentals',
      description: 'Learn the core principles of mindfulness meditation and daily practice...',
      lessons: 24,
      weeks: 8,
      level: 'Intermediate',
      enrolled: 180,
      completion: 85,
      rating: 4.7,
      duration: '08 Weeks',
      assessments: 3,
      modules: 6,
      certificate: 'Yes',
      price: '$99',
      created: '01-01-2025',
      modified: '01-10-2025'
    }
  ]

  // Set default selected course
  React.useEffect(() => {
    if (courses.length > 0 && !selectedCourse) {
      setSelectedCourse(courses[3]) // Default to "Mindfulness Fundamentals"
    }
  }, [selectedCourse])

  const handleCourseClick = (course) => {
    setSelectedCourse(course)
  }

  const handleCourseOptions = (course) => {
    console.log('Course options:', course)
  }

  const handleEditCourse = (course) => {
    console.log('Edit course:', course)
  }

  const handlePreviewCourse = (course) => {
    console.log('Preview course:', course)
  }

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={classes.adminCoursesTemplate}>
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
        {/* Left Section - Course Library */}
        <div className={classes.librarySection}>
          <h2 className={classes.sectionTitle}>Course Library</h2>
          
          {/* Search and Filter */}
          <div className={classes.searchFilterContainer}>
            <div className={classes.searchContainer}>
              <input
                type="text"
                placeholder="Search courses..."
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
                <option>Published</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
              <FaChevronDown className={classes.filterIcon} />
            </div>
          </div>

          {/* Course List */}
          <div className={classes.courseList}>
            {filteredCourses.map((course) => (
              <AdminCourseCard
                key={course.id}
                course={course}
                onClick={handleCourseClick}
                onOptions={handleCourseOptions}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Course Details */}
        <div className={classes.detailsSection}>
          <SelectedCourseCard
            course={selectedCourse}
            onEdit={handleEditCourse}
            onPreview={handlePreviewCourse}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminCoursesTemplate