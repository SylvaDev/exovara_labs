import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaVideo, FaLaptopCode, FaMap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import HeroSection from '../components/HeroSection';

const TeamMember = ({ name, title, icon: Icon, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Col xs={6} sm={4} className="mb-3">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        <Card className="h-100 team-member-card">
          <Card.Body className="text-center p-3">
            <div className="team-member-icon mb-2">
              <Icon size={40} color="#FFD700" />
            </div>
            <Card.Title className="mb-1 team-member-name">{name}</Card.Title>
            <Card.Text className="team-member-title">{title}</Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};

const Home = () => {
  const teamMembers = [
    {
      name: "Irving Sylva",
      title: "Lead Developer",
      icon: FaMap
    },
    {
      name: "Garrett Cramp",
      title: "Senior Developer",
      icon: FaLaptopCode
    },
    {
      name: "John Foley",
      title: "Media Director",
      icon: FaVideo
    },
    {
      name: "Steven H",
      title: "Junior Dev",
      icon: FaCode
    }
  ];

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <>
      <HeroSection />
      
      {/* About Section */}
      <section className="about-section py-5">
        <Container>
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center mb-5">About Exovara</h2>
          </motion.div>
          
          <Row>
            <Col md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Our Story</Card.Title>
                    <Card.Text>
                      Exovara began as a passionate group of friends exploring the world of game modification and server hosting. What started as a hobby of modifying and hosting game servers evolved into a deep fascination with game development and design. Through our experiences in creating custom game environments and modifications, we discovered our collective passion for building immersive gaming experiences from the ground up.
                      <br /><br />
                      Today, we're an independent game development studio dedicated to creating unique and engaging gaming experiences. Our journey from server administrators to game developers has given us valuable insights into what makes games truly special – the perfect blend of technical excellence and creative innovation.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Our Team</Card.Title>
                    <Row className="g-2">
                      {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} index={index} />
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home; 