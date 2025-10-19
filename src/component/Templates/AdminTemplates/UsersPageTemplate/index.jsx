"use client"


import React, { useState } from 'react'
import classes from './UsersPageTemplate.module.css'
import StatsCard from '@/component/molecule/StatsCard'
import { FaSearch, FaChevronDown } from 'react-icons/fa'
import AppTable from '@/component/organism/AppTable/AppTable'

const UsersPageTemplate = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')

  // Sample data matching the image
  const statsData = [
    { title: 'Total Users', value: '2,847' },
    { title: 'Active Users', value: '2,200' },
    { title: 'New Signups', value: '500' },
    { title: 'Inactive Users', value: '647' }
  ]

  const usersData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      status: 'Active',
      courses: '3 enrolled • 1 completed',
      progress: 85,
      coachingHours: '6h',
      lastActive: '04-15-2025'
    },
    {
      id: 2,
      name: 'David Brown',
      status: 'Active',
      courses: '15 enrolled • 12 completed',
      progress: 100,
      coachingHours: '15h',
      lastActive: '04-18-2025'
    },
    {
      id: 3,
      name: 'Lisa Park',
      status: 'Inactive',
      courses: '1 enrolled • 0 completed',
      progress: 0,
      coachingHours: '0h',
      lastActive: '04-15-2025'
    },
    {
      id: 4,
      name: 'Michael Chen',
      status: 'Active',
      courses: '8 enrolled • 5 completed',
      progress: 62,
      coachingHours: '12h',
      lastActive: '04-17-2025'
    },
    {
      id: 5,
      name: 'Emily Davis',
      status: 'Active',
      courses: '12 enrolled • 9 completed',
      progress: 75,
      coachingHours: '18h',
      lastActive: '04-19-2025'
    }
  ]

  const tableHeaders = [
    { key: 'checkbox', title: 'User', style: { width: '50px' } },
    { key: 'name', title: 'User', style: { width: '200px' } },
    { key: 'status', title: 'Status', style: { width: '120px' } },
    { key: 'courses', title: 'Courses', style: { width: '200px' } },
    { key: 'progress', title: 'Progress', style: { width: '150px' } },
    { key: 'coachingHours', title: 'Coaching hours', style: { width: '120px' } },
    { key: 'lastActive', title: 'Last active', style: { width: '120px' } }
  ]

  const renderTableItem = ({ item, key, rowIndex }) => {
    switch (key) {
      case 'checkbox':
        return <input type="checkbox" />
      case 'name':
        return <span className={classes.userName}>{item}</span>
      case 'status':
        return (
          <span className={`${classes.statusBadge} ${classes[item.toLowerCase()]}`}>
            {item}
          </span>
        )
      case 'progress':
        return (
          <div className={classes.progressContainer}>
            <div className={classes.progressBar}>
              <div 
                className={classes.progressFill} 
                style={{ width: `${item}%` }}
              ></div>
            </div>
            <span className={classes.progressText}>{item}% completed</span>
          </div>
        )
      default:
        return item
    }
  }

  return (
    <div className={classes.usersPageTemplate}>
      {/* Stats Cards */}
      <div className={classes.statsContainer}>
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      {/* Users Table */}
      <div className={classes.tableContainer}>
        <div className={classes.tableHeader}>
          <div className={classes.searchContainer}>
            <FaSearch className={classes.searchIcon} />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={classes.searchInput}
            />
          </div>
          <div className={classes.filterContainer}>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={classes.filterSelect}
            >
              <option value="All Status">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <FaChevronDown className={classes.filterIcon} />
          </div>
        </div>

        <AppTable
          data={usersData}
          tableHeader={tableHeaders}
          renderItem={renderTableItem}
          hasPagination={true}
          loading={false}
        />
      </div>
    </div>
  )
}

export default UsersPageTemplate