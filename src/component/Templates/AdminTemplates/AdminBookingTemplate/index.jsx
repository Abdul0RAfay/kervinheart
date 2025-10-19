"use client"

import React, { useState } from 'react'
import classes from './AdminBookingTemplate.module.css'
import StatsCard from '@/component/molecule/StatsCard'
import Tabs from '@/component/atoms/Tabs'
import SessionDetailCard from '@/component/molecule/SessionDetailCard'
import BookingCard from '@/component/molecule/BookingCard'
import { FaChevronDown, FaCalendarAlt, FaSearch } from 'react-icons/fa'

const AdminBookingTemplate = () => {
  const [activeTab, setActiveTab] = useState('calendar')
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [selectedSession, setSelectedSession] = useState({
    id: 1,
    title: '1:1 Mindfulness Session',
    client: 'Sarah Johnson',
    date: '2024-01-16',
    time: '10:00 AM',
    duration: '60 min',
    type: 'Video Call',
    status: 'Confirmed',
    notes: 'Focus on stress management techniques'
  })

  // Statistics data matching the dashboard image
  const stats = [
    { title: "Today's Sessions", value: '23' },
    { title: 'Pending Requests', value: '5' },
    { title: 'Utilization Rate', value: '89%' },
    { title: 'Avg Session Rating', value: '4.9' }
  ]

  // Time slots for calendar
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ]

  // Booking data matching the image
  const bookings = [
    {
      id: 1,
      title: '1:1 Mindfulness Session',
      client: 'Sarah Johnson',
      date: '2024-01-16',
      time: '10:00 AM',
      duration: '60 min',
      status: 'Confirmed'
    },
    {
      id: 2,
      title: 'Group Meditation Session',
      client: 'Multiple',
      date: '2024-01-16',
      time: '2:00 PM',
      duration: '45 min',
      status: 'Pending'
    },
    {
      id: 3,
      title: 'Leadership Coaching',
      client: 'David Kire',
      date: '2024-01-16',
      time: '4:30 PM',
      duration: '90 min',
      status: 'Confirmed'
    },
    {
      id: 4,
      title: 'Stress Workshop',
      client: 'Multiple',
      date: '2024-01-17',
      time: '11:00 AM',
      duration: '120 min',
      status: 'Confirmed'
    }
  ]

  // Tabs configuration
  const tabs = [
    { id: 'calendar', label: 'Calendar' },
    { id: 'booking-list', label: 'Booking list' }
  ]

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  const handleCancelSession = () => {
    console.log('Cancel session:', selectedSession)
  }

  const handleEditSession = () => {
    console.log('Edit session:', selectedSession)
  }

  const handleBookingClick = (booking) => {
    setSelectedSession(booking)
  }

  const handleBookingOptions = (booking) => {
    console.log('Booking options:', booking)
  }

  // Filter bookings based on search and status
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All Status' || booking.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className={classes.adminBookingTemplate}>
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


      {/* Tabs */}
      <Tabs 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Main Content Layout */}
      <div className={classes.mainContent}>
        {activeTab === 'calendar' ? (
          <>
            {/* Left Section - Calendar */}
            <div className={classes.calendarSection}>
              <div className={classes.sectionHeader}>
                <h2 className={classes.sectionTitle}>Calendar</h2>
                <div className={classes.viewSelector}>
                  <select className={classes.viewSelect}>
                    <option>Day</option>
                    <option>Week</option>
                    <option>Month</option>
                  </select>
                  <FaChevronDown className={classes.chevronIcon} />
                </div>
              </div>

              {/* Calendar Grid */}
              <div className={classes.calendarGrid}>
                <div className={classes.timeColumn}>
                  {timeSlots.map((time, index) => (
                    <div key={index} className={classes.timeSlot}>
                      {time}
                    </div>
                  ))}
                </div>
                <div className={classes.calendarArea}>
                  {/* Calendar content would go here */}
                  <div className={classes.emptyCalendar}>
                    <FaCalendarAlt className={classes.calendarIcon} />
                    <p>No sessions scheduled for this time period</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Session Details */}
            <div className={classes.sessionSection}>
              <div className={classes.sectionHeader}>
                <h2 className={classes.sectionTitle}>Session Details</h2>
              </div>

              <SessionDetailCard 
                session={selectedSession}
                onCancel={handleCancelSession}
                onEdit={handleEditSession}
              />
            </div>
          </>
        ) : (
          <>
            {/* Left Section - Booking List */}
            <div className={classes.bookingListSection}>
              <div className={classes.sectionHeader}>
                <h2 className={classes.sectionTitle}>All Bookings</h2>
                <div className={classes.searchFilterContainer}>
                  <div className={classes.searchContainer}>
                    <input
                      type="text"
                      placeholder="Search bookings..."
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
                      <option>Confirmed</option>
                      <option>Pending</option>
                      <option>Cancelled</option>
                      <option>Completed</option>
                    </select>
                    <FaChevronDown className={classes.filterIcon} />
                  </div>
                </div>
              </div>

              {/* Booking List */}
              <div className={classes.bookingList}>
                {filteredBookings.map((booking) => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    onClick={handleBookingClick}
                    onOptions={handleBookingOptions}
                  />
                ))}
              </div>
            </div>

           
          </>
        )}
      </div>
    </div>
  )
}

export default AdminBookingTemplate
