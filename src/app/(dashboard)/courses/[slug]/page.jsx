import CourseDetailTemplate from '@/component/Templates/CourseDetailTemplate'
import React from 'react'

const CoursesDetailPage = ({ params }) => {
  // Sample course data - in a real app, this would be fetched based on the slug
  const courses = [
    {
      id: 1,
      title: "Mindful Leadership: Building Emotional Intelligence",
      price: 99,
      description: "Transform your leadership style through mindfulness practices and emotional intelligence development. This comprehensive course combines ancient wisdom with modern leadership science to help you become a more effective, empathetic, and inspiring leader.",
      duration: "08 weeks",
      students: 83,
      rating: 4.5,
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
      ]
    },
    {
      id: 2,
      title: "Stress Management & Resilience Building",
      price: 99,
      description: "Learn evidence-based techniques to manage stress and build lasting resilience.",
      duration: "12 weeks",
      students: 75,
      rating: 4.8,
      image: "/images/cms-images/sessioncardimg.png",
      level: "Beginner",
      lessons: 18,
      modules: 4,
      assessments: 2,
      completionRate: "90%",
      certificate: true,
      learningObjectives: [
        "Identify personal stress triggers and patterns",
        "Master breathing and relaxation techniques",
        "Build emotional resilience and coping strategies",
        "Develop healthy work-life balance habits",
        "Create sustainable stress management routines"
      ],
      detailedDescription: "This comprehensive course provides practical tools and strategies to help you manage stress effectively and build lasting resilience in both personal and professional settings.",
      requirements: [
        "Open mind and willingness to learn new techniques",
        "Commitment to daily practice",
        "Basic understanding of stress concepts"
      ]
    },
    {
      id: 3,
      title: "Life Design: Creating Your Purposeful Career",
      price: 99,
      description: "Design a career that aligns with your values, strengths, and life goals using proven frameworks.",
      duration: "10 weeks",
      students: 120,
      rating: 4.2,
      image: "/images/cms-images/sessioncardimg.png",
      level: "Intermediate",
      lessons: 20,
      modules: 5,
      assessments: 3,
      completionRate: "78%",
      certificate: true,
      learningObjectives: [
        "Define your core values and career vision",
        "Assess your strengths and skills gap",
        "Create actionable career development plans",
        "Build professional networks and relationships",
        "Navigate career transitions successfully"
      ],
      detailedDescription: "Transform your career trajectory with evidence-based frameworks for career design, goal setting, and professional development.",
      requirements: [
        "Career or work experience preferred",
        "Willingness to reflect on personal values",
        "Commitment to completing assignments"
      ]
    }
  ];

  // Function to generate slug from title (same as in CoursesTemplate)
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Find course by slug
  const courseData = courses.find(course => 
    generateSlug(course.title) === params.slug
  );

  return (
    <CourseDetailTemplate courseData={courseData} />
  )
}

export default CoursesDetailPage