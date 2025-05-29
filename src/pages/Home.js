import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import DiscordImageCarousel from '../components/DiscordImageCarousel';
import { FaUserCircle, FaGamepad, FaCode, FaPalette, FaVideo, FaLaptopCode, FaMap } from 'react-icons/fa';

const TeamMember = ({ name, title, icon: Icon }) => (
  <Col xs={6} sm={4} className="mb-3">
    <Card className="h-100 team-member-card">
      <Card.Body className="text-center p-2">
        <div className="team-member-icon mb-2">
          <Icon size={40} color="#FFD700" />
        </div>
        <Card.Title className="mb-1 team-member-name">{name}</Card.Title>
        <Card.Text className="team-member-title">{title}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const Home = () => {
  const teamMembers = [
    {
      name: "Irving Sylva",
      title: "Lead Developer",
      icon: FaCode
    },
    {
      name: "Garrett Cramp",
      title: "Junior Developer",
      icon: FaLaptopCode
    },
    {
      name: "John Foley",
      title: "Media Director",
      icon: FaVideo
    },
    {
      name: "Windom",
      title: "Character Designer",
      icon: FaGamepad
    },
    // {
    //   name: "Mike Johnson",
    //   title: "Art Director",
    //   icon: FaPalette
    // },

    {
      name: "Scuba Steve",
      title: "Level Designer",
      icon: FaMap
    }
  ];

  return (
    <Container fluid className="px-0">
      {/* Hero Section */}
      <section className="hero-section py-5 bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1 className="display-4">Welcome to Exovara</h1>
              <p className="lead">Crafting the future of gaming</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <Container>
          <h2 className="text-center mb-4">About Exovara</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Our Story</Card.Title>
                  <Card.Text>
                    Exovara began as a passionate group of friends exploring the world of game modification and server hosting. What started as a hobby of modifying and hosting game servers evolved into a deep fascination with game development and design. Through our experiences in creating custom game environments and modifications, we discovered our collective passion for building immersive gaming experiences from the ground up.
                    <br /><br />
                    Today, we're an independent game development studio dedicated to creating unique and engaging gaming experiences. Our journey from server administrators to game developers has given us valuable insights into what makes games truly special – the perfect blend of technical excellence and creative innovation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Our Team</Card.Title>
                  <Row className="g-2">
                    {teamMembers.map((member, index) => (
                      <TeamMember key={index} {...member} />
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Carousel Section */}
      {/* <section className="project-carousel-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Latest Updates</h2>
          <DiscordImageCarousel limit={5} />
        </Container>
      </section> */}
    </Container>
  );
};

export default Home; 