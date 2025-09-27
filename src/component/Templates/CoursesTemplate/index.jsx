"use client";
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import classes from './CoursesTemplate.module.css';
import CourseCard from '@/component/molecule/CourseCard';
import FilterSidebar from '@/component/molecule/FilterSidebar';
import { FaSearch } from 'react-icons/fa';

const CoursesTemplate = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Newest');
  const [filters, setFilters] = useState({
    category: 'All',
    level: 'All',
    duration: 'All'
  });

  // Function to generate URL-friendly slug from course title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  // Sample course data based on the image
  const courses = [
    {
      id: 1,
      title: "Mindful Leadership: Building Emotional Intelligence",
      price: 99,
      description: "Transform your leadership style through emotional intelligence development.",
      duration: "08",
      students: 93,
      rating: 4.5,
      tags: ["Intermediate", "Goal Setting", "Productivity", "Stress management"],
      image: "/images/cms-images/sessioncardimg.png",
      category: "Leadership",
      level: "Intermediate",
      durationType: "Medium (5-8 weeks)"
    },
    {
      id: 2,
      title: "Stress Management & Resilience Building",
      price: 99,
      description: "Learn evidence-based techniques to manage stress and build lasting resilience.",
      duration: "12",
      students: 75,
      rating: 4.8,
      tags: ["Beginner", "Stress Management", "Resilience", "Mental Health"],
      image: "/images/cms-images/sessioncardimg.png",
      category: "Strategy",
      level: "Beginner",
      durationType: "Long (9+ weeks)"
    },
    {
      id: 3,
      title: "Life Design: Creating Your Purposeful Career",
      price: 99,
      description: "Design a career that aligns with your values, strengths, and life goals using proven frameworks.",
      duration: "10",
      students: 120,
      rating: 4.2,
      tags: ["Career", "Purpose", "Planning", "Risk Assessment"],
      image: "/images/cms-images/sessioncardimg.png",
      category: "Growth",
      level: "Intermediate",
      durationType: "Long (9+ weeks)"
    },
    {
      id: 4,
      title: "Stress Management & Resilience Building",
      price: 99,
      description: "Learn evidence-based techniques to manage stress and build lasting resilience.",
      duration: "12",
      students: 75,
      rating: 4.8,
      tags: ["Beginner", "Stress Management", "Resilience", "Mental Health"],
      image: "/images/cms-images/sessioncardimg.png",
      category: "Strategy",
      level: "Beginner",
      durationType: "Long (9+ weeks)"
    },
    // Duplicate courses to match the 2x4 grid from the image
    {
      id: 5,
      title: "Mindful Leadership: Building Emotional Intelligence",
      price: 99,
      description: "Transform your leadership style through emotional intelligence development.",
      duration: "08",
      students: 93,
      rating: 4.5,
      tags: ["Intermediate", "Goal Setting", "Productivity", "Stress management"],
      image: "/images/cms-images/sessioncardimg.png",
      category: "Leadership",
      level: "Intermediate",
      durationType: "Medium (5-8 weeks)"
    },
    {
      id: 6,
      title: "Stress Management & Resilience Building",
      price: 99,
      description: "Learn evidence-based techniques to manage stress and build lasting resilience.",
      duration: "12",
      students: 75,
      rating: 4.8,
      tags: ["Beginner", "Stress Management", "Resilience", "Mental Health"],
      image: "/images/cms-images/sessioncardimg.png",
      category: "Strategy",
      level: "Beginner",
      durationType: "Long (9+ weeks)"
    },
    {
      id: 7,
      title: "Life Design: Creating Your Purposeful Career",
      price: 99,
      description: "Design a career that aligns with your values, strengths, and life goals using proven frameworks.",
      duration: "10",
      students: 120,
      rating: 4.2,
      tags: ["Career", "Purpose", "Planning", "Risk Assessment"],
      image: "/images/cms-images/sessioncardimg.png",
      category: "Growth",
      level: "Intermediate",
      durationType: "Long (9+ weeks)"
    },
    {
      id: 8,
      title: "Stress Management & Resilience Building",
      price: 99,
      description: "Learn evidence-based techniques to manage stress and build lasting resilience.",
      duration: "12",
      students: 75,
      rating: 4.8,
      tags: ["Beginner", "Stress Management", "Resilience", "Mental Health"],
      image: "/images/cms-images/sessioncardimg.png",
      category: "Strategy",
      level: "Beginner",
      durationType: "Long (9+ weeks)"
    }
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleCourseClick = (course) => {
    const slug = generateSlug(course.title);
    router.push(`/courses/${slug}`);
  };

  // Filter courses based on search term and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = filters.category === 'All' || course.category === filters.category;
    const matchesLevel = filters.level === 'All' || course.level === filters.level;
    const matchesDuration = filters.duration === 'All' || course.durationType === filters.duration;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
  });

  return (
    <div className={classes.coursesMain}>
      <Container fluid>
        {/* Search and Sort Section */}
        <div className={classes.searchSection}>
          <div className={classes.searchContainer}>
            <div className={classes.searchInputWrapper}>
              <FaSearch className={classes.searchIcon} />
              <input
                type="text"
                placeholder="Search courses or topics..."
                value={searchTerm}
                onChange={handleSearchChange}
                className={classes.searchInput}
              />
            </div>
            <div className={classes.sortContainer}>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className={classes.sortSelect}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Price Low to High">Price Low to High</option>
                <option value="Price High to Low">Price High to Low</option>
                <option value="Rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        <Row>
          {/* Filter Sidebar */}
          <Col md={3}>
            <FilterSidebar onFilterChange={handleFilterChange} />
          </Col>

          {/* Courses Grid */}
          <Col md={9}>
            <div className={classes.coursesGrid}>
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  data={course}
                  onClick={() => handleCourseClick(course)}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoursesTemplate;
