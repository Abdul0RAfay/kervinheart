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
      ],
      curriculum: [
        {
          title: "Understanding Stress and Its Impact",
          lessonCount: 4,
          description: "Learn about different types of stress and how they affect your mind and body.",
          lessons: [
            { title: "What is Stress?", duration: "20 min" },
            { title: "Types of Stress", duration: "18 min" },
            { title: "Physical and Mental Effects", duration: "22 min" },
            { title: "Stress Assessment", duration: "15 min" }
          ]
        },
        {
          title: "Breathing and Relaxation Techniques",
          lessonCount: 5,
          description: "Master proven breathing exercises and relaxation methods for immediate stress relief.",
          lessons: [
            { title: "Deep Breathing Fundamentals", duration: "25 min" },
            { title: "Progressive Muscle Relaxation", duration: "30 min" },
            { title: "Guided Meditation Basics", duration: "20 min" },
            { title: "Quick Stress Relief Techniques", duration: "15 min" },
            { title: "Creating Your Practice Routine", duration: "18 min" }
          ]
        },
        {
          title: "Building Emotional Resilience",
          lessonCount: 4,
          description: "Develop mental toughness and emotional strength to handle life's challenges.",
          lessons: [
            { title: "Understanding Resilience", duration: "20 min" },
            { title: "Cognitive Reframing", duration: "25 min" },
            { title: "Building Support Networks", duration: "22 min" },
            { title: "Resilience Action Plan", duration: "20 min" }
          ]
        },
        {
          title: "Work-Life Balance and Self-Care",
          lessonCount: 5,
          description: "Create sustainable habits for maintaining balance and preventing burnout.",
          lessons: [
            { title: "Setting Healthy Boundaries", duration: "25 min" },
            { title: "Time Management Strategies", duration: "22 min" },
            { title: "Self-Care Planning", duration: "20 min" },
            { title: "Digital Detox Techniques", duration: "18 min" },
            { title: "Long-term Balance Maintenance", duration: "20 min" }
          ]
        }
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
      ],
      curriculum: [
        {
          title: "Self-Discovery and Values Assessment",
          lessonCount: 4,
          description: "Explore your core values, strengths, and what truly motivates you in your career.",
          lessons: [
            { title: "Identifying Your Core Values", duration: "25 min" },
            { title: "Strengths Assessment", duration: "30 min" },
            { title: "Passion and Purpose Discovery", duration: "28 min" },
            { title: "Personal Mission Statement", duration: "22 min" }
          ]
        },
        {
          title: "Career Vision and Goal Setting",
          lessonCount: 4,
          description: "Create a clear vision for your ideal career and set actionable goals to get there.",
          lessons: [
            { title: "Designing Your Career Vision", duration: "30 min" },
            { title: "SMART Goal Framework", duration: "25 min" },
            { title: "Career Milestone Planning", duration: "28 min" },
            { title: "Vision Board Creation", duration: "20 min" }
          ]
        },
        {
          title: "Skills Development and Gap Analysis",
          lessonCount: 5,
          description: "Assess your current skills and identify areas for growth and development.",
          lessons: [
            { title: "Current Skills Inventory", duration: "25 min" },
            { title: "Industry Skills Research", duration: "30 min" },
            { title: "Learning Plan Development", duration: "28 min" },
            { title: "Skill Building Strategies", duration: "22 min" },
            { title: "Progress Tracking Methods", duration: "18 min" }
          ]
        },
        {
          title: "Networking and Professional Relationships",
          lessonCount: 4,
          description: "Build meaningful professional relationships and expand your network strategically.",
          lessons: [
            { title: "Networking Fundamentals", duration: "25 min" },
            { title: "Building Authentic Relationships", duration: "28 min" },
            { title: "Online Professional Presence", duration: "30 min" },
            { title: "Mentorship and Sponsorship", duration: "22 min" }
          ]
        },
        {
          title: "Career Transition and Implementation",
          lessonCount: 3,
          description: "Navigate career changes and implement your career design plan effectively.",
          lessons: [
            { title: "Transition Planning Strategies", duration: "30 min" },
            { title: "Overcoming Career Obstacles", duration: "25 min" },
            { title: "Implementation and Review", duration: "28 min" }
          ]
        }
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