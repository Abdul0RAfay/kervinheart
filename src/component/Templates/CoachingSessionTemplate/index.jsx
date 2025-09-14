import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import classes from "./CoachingSessionTemplate.module.css"
import CoachingSessionCard from '@/component/molecule/CoachingSessionCard'
import { duration } from 'moment-timezone'

const CoachingSessionTemplate = () => {
  // Sample data based on the image description
  const coachingSessions = [
    {
      id: 1,
      title: "Life Coaching - Career Clarity",
      duration: 60,
      rating: 4.5,
      sessionsSold: 150,
      tags: ["Goal Setting", "Productivity", "Stress management"],
      price: "$99",
      timePeriod:"per session",
      image: "/images/cms-images/sessioncardimg.png"
    },
    {
      id: 2,
      title: "Life Coaching - Personal Growth",
      duration: 60,
      rating: 4.5,
      sessionsSold: 150,
      tags: ["Goal Setting", "Productivity", "Stress management"],
      price: "$99",
      timePeriod:"per session",
      image: "/images/cms-images/sessioncardimg.png"
    },
    {
      id: 3,
      title: "Life Coaching - Relationship Building",
      duration: 60,
      rating: 4.7,
      sessionsSold: 120,
      tags: ["Communication Skills", "Conflict Resolution", "Emotional Intelligence"],
      price: "$120",
      timePeriod:"per session",
      image: "/images/cms-images/sessioncardimg.png"
    },
    {
      id: 4,
      title: "Life Coaching - Health and Wellness",
      duration: 60,
      rating: 4.6,
      sessionsSold: 200,
      tags: ["Nutrition Guidance", "Fitness Planning", "Mindfulness Practices"],
      price: "$110",
      timePeriod:"per session",
      image: "/images/cms-images/sessioncardimg.png"
    },
    {
      id: 5,
      title: "Life Coaching - Financial Empowerment",
      duration: 60,
      rating: 4.8,
      sessionsSold: 80,
      tags: ["Budgeting Strategies", "Investment Planning", "Debt Management"],
      price: "$130",
      timePeriod:"per session",
      image: "/images/cms-images/sessioncardimg.png"
    }
  ];

  return (
    <div className={classes.coachingSessionMain}>
        <Container fluid>
            <Row>
                <Col md={8}>
                  <div className={classes.sessionsContainer}>
                    <h5 className={classes.sectionTitle}>Book a Session</h5>
                    {coachingSessions.map((session) => (
                      <CoachingSessionCard
                        key={session.id}
                        title={session.title}
                        duration={session.duration}
                        rating={session.rating}
                        sessionsSold={session.sessionsSold}
                        tags={session.tags}
                        price={session.price}
                        timePeriod={session.timePeriod}
                        image={session.image}
                      />
                    ))}
                  </div>
                </Col>
                <Col md={4}>
                  {/* Sidebar content can be added here */}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CoachingSessionTemplate