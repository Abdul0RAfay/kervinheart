"use client";

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShare, FaHeart, FaStar, FaUsers, FaClock, FaCheck } from 'react-icons/fa';
import classes from "./CourseDetailTemplate.module.css";
import Image from 'next/image';
import Tabs from '@/component/atoms/Tabs';
import Button from '@/component/atoms/Button';
import Accordion from '@/component/atoms/Accordion';

const CourseDetailTemplate = ({ courseData: propCourseData }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabsData = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'reviews', label: 'Reviews' }
  ];

  // Helper function to render list items
  const renderListItems = (items, iconClass, textClass) => {
    return items.map((item, index) => (
      <li key={index} className={classes.listItem}>
        <FaCheck className={iconClass} />
        <span className={textClass}>{item}</span>
      </li>
    ));
  };

  // Default course data (fallback if no prop is provided)
  const defaultCourseData = {
    title: "Mindful Leadership: Building Emotional Intelligence",
    description: "Transform your leadership style through mindfulness practices and emotional intelligence development. This comprehensive course combines ancient wisdom with modern leadership science to help you become a more effective, empathetic, and inspiring leader.",
    rating: 4.5,
    students: 83,
    duration: "08 weeks",
    price: 99,
    image: "/images/cms-images/sessioncardimg.png",
    level: "Intermediate",
    lessons: 24,
    modules: 6,
    assessments: 3,
    completionRate: "85%",
    certificate: true,
    learningObjectives: [
      "Develop self-awareness and emotional regulation skills",
      "Practice mindful communication techniques",
      "Build empathy and emotional intelligence",
      "Cultivate empathy by considering others' perspectives",
      "Create psychologically safe team environments",
      "Lead with authenticity and purpose",
      "Implement mindfulness practices in daily leadership activities"
    ],
    detailedDescription: "In today's fast-paced business environment, traditional command-and-control leadership approaches are becoming obsolete. This course introduces you to mindful leadership - a transformative approach that combines self-awareness, emotional intelligence, and authentic communication to create high-performing teams and sustainable business results.",
    requirements: [
      "Open mind and willingness to practice mindfulness",
      "Basic leadership or management experience preferred",
      "Commitment to 3-4 hours per week"
    ],
    curriculum: [
        {
          title: "Develop self-awareness and emotional regulation skills",
          lessonCount: 4,
          description: "Learn the fundamentals of self-awareness and how to regulate your emotions effectively in leadership situations.",
        lessons: [
          { title: "Introduction to Self-Awareness", duration: "15 min" },
          { title: "Emotional Intelligence Assessment", duration: "20 min" },
          { title: "Mindfulness Practices for Leaders", duration: "25 min" },
          { title: "Emotional Regulation Techniques", duration: "30 min" }
        ]
      },
      {
        title: "Developing Self-Awareness",
          lessonCount: 4,
        description: "Deep dive into understanding your own emotions, triggers, and behavioral patterns.",
        lessons: [
          { title: "Understanding Your Emotional Patterns", duration: "20 min" },
          { title: "Identifying Personal Triggers", duration: "18 min" },
          { title: "Self-Reflection Techniques", duration: "22 min" },
          { title: "Building Emotional Vocabulary", duration: "16 min" }
        ]
      },
      {
        title: "Building Emotional Intelligence",
          lessonCount: 5,
        description: "Develop your ability to understand and manage emotions in yourself and others.",
        lessons: [
          { title: "The Four Pillars of Emotional Intelligence", duration: "25 min" },
          { title: "Empathy in Leadership", duration: "20 min" },
          { title: "Social Skills Development", duration: "28 min" },
          { title: "Motivation and Self-Direction", duration: "22 min" },
          { title: "Emotional Intelligence Assessment", duration: "15 min" }
        ]
      },
      {
        title: "Understanding Emotional Triggers",
          lessonCount: 3,
        description: "Learn to identify and manage emotional triggers that can impact your leadership effectiveness.",
        lessons: [
          { title: "Common Leadership Triggers", duration: "18 min" },
          { title: "Trigger Response Strategies", duration: "25 min" },
          { title: "Creating Emotional Safety", duration: "20 min" }
        ]
      },
      {
        title: "Building Resilience Through Self-Reflection",
          lessonCount: 6,
        description: "Develop resilience and mental strength through structured self-reflection practices.",
        lessons: [
          { title: "The Power of Self-Reflection", duration: "20 min" },
          { title: "Journaling for Leaders", duration: "15 min" },
          { title: "Learning from Failures", duration: "25 min" },
          { title: "Building Mental Resilience", duration: "22 min" },
          { title: "Creating Support Systems", duration: "18 min" },
          { title: "Long-term Growth Planning", duration: "20 min" }
        ]
      }
    ]
  };

  // Use prop data if available, otherwise use default
  const courseData = propCourseData || defaultCourseData;
  
  // Debug: Log the image path
  console.log('Course image path:', courseData.image);

    return (
    <div className={classes.courseDetailPage}>
      <Container fluid>
        <Row>
          <Col lg={8}>
          {/* Course Header */}
          <div className={classes.courseHeader}>
            <h1 className={classes.courseTitle}>{courseData.title}</h1>
            <p className={classes.courseDescription}>{courseData.description}</p>
            
            <div className={classes.courseStats}>
              <div className={classes.statItem}>
                <FaStar className={classes.starIcon} />
                <span className={classes.statText}>Rating {courseData.rating}</span>
              </div>
              <div className={classes.statItem}>
                <FaUsers className={classes.studentsIcon} />
                <span className={classes.statText}>Students: {courseData.students}</span>
              </div>
              <div className={classes.statItem}>
                <FaClock className={classes.clockIcon} />
                <span className={classes.statText}>Duration: {courseData.duration} weeks</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <Tabs 
            tabs={tabsData}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Tab Content */}
          <div className={classes.tabContent}>
            {activeTab === 'overview' && (
              <div>
                {/* What You'll Learn */}
                <div className={classes.section}>
                  <h2 className={classes.sectionTitle}>What You'll Learn</h2>
                  <ul className={classes.learningList}>
                    {renderListItems(courseData.learningObjectives, classes.checkIcon, classes.learningText)}
                  </ul>
                </div>

                {/* Course Description */}
                <div className={classes.section}>
                  <h2 className={classes.sectionTitle}>Course Description</h2>
                  <p className={classes.detailedDescription}>{courseData.detailedDescription}</p>
                </div>

                {/* Requirements */}
                <div className={classes.section}>
                  <h2 className={classes.sectionTitle}>Requirements</h2>
                  <ul className={classes.requirementsList}>
                    {renderListItems(courseData.requirements, classes.bulletPoint, classes.requirementText)}
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'curriculum' && (
              <div className={classes.section}>
                <div className={classes.curriculumHeader}>
                  <h2 className={classes.sectionTitle}>Course Curriculum</h2>
                  <div className={classes.curriculumSummary}>
                    {courseData.curriculum?.length || 0} sections • {courseData.curriculum?.reduce((total, section) => total + section.lessonCount, 0) || 0} lessons
                  </div>
                </div>
                <Accordion items={courseData.curriculum || []} />
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className={classes.section}>
                <h2 className={classes.sectionTitle}>Reviews</h2>
                <p>Reviews content will be displayed here...</p>
              </div>
            )}
          </div>
          </Col>

          <Col lg={4}>
            {/* Unified Course Card */}
            <div className={classes.courseCard}>
              {/* Course Image */}
              <div className={classes.imageContainer}>
                <Image 
                  src={courseData.image} 
                  alt={courseData.title}
                  width={400}
                  height={300}
                  className={classes.courseImage}
                  priority
                  onError={(e) => {
                    console.error('Image failed to load:', courseData.image);
                    e.target.src = '/api/placeholder/400/300';
                  }}
                />
                <div className={classes.imageActions}>
                  <Button 
                    leftIcon={<FaShare />}
                    variant="secondary"
                    className={classes.actionButton}
                  />
                  <Button 
                    leftIcon={<FaHeart />}
                    variant="secondary"
                    className={classes.actionButton}
                  />
                </div>
              </div>

              {/* Course Details */}
              <div className={classes.cardContent}>
                {Object.entries({
                  'Duration': courseData.duration,
                  'Level': courseData.level,
                  'Lessons': courseData.lessons,
                  'Modules': courseData.modules,
                  'Assessments': courseData.assessments,
                  'Completion Rate': courseData.completionRate,
                  'Certificate': courseData.certificate ? 'Yes' : 'No'
                }).map(([label, value]) => (
                  <div key={label} className={classes.summaryItem}>
                    <span className={classes.summaryLabel}>{label}:</span>
                    <span className={classes.summaryValue}>{value}</span>
                  </div>
                ))}

                {/* Price and Enrollment */}
                <div className={classes.enrollmentSection}>
                  <div className={classes.totalCost}>Total Cost: ${courseData.price}</div>
                  <Button 
                    label="Enroll Now"
                    variant="primary"
                    className={classes.enrollButton}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
        </div>
      );
    };
    
export default CourseDetailTemplate;