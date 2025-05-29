import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import VideoPlayer from '../components/VideoPlayer';

import testimage from '../assets/images/testimage.png';
import levelblockout from '../assets/images/levelblockout.png';
import gameplayVideo from '../assets/videos/gameplay.mp4';
// import screenshot3 from '../assets/images/screenshot3.jpg';

const Projects = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const projectImages = [
    {
      type: 'video',
      url: gameplayVideo,
      title: "Gameplay",
      // description: "Early gameplay footage"
    },
    {
      type: 'image',
      url: levelblockout,
      title: "Level Design",
      description: "A glimpse into our world building process"
    },
    // {
    //   url: "https://i.imgur.com/SPsGd3y.jpg",
    //   title: "Character Design",
    //   description: "Concept art and character development"
    // }
  ];

  const handleVideoStateChange = (isPlaying) => {
    setIsVideoPlaying(isPlaying);
  };

  return (
    <Container fluid className="px-0">
      {/* Projects Header */}
      <section className="projects-header py-5 bg-dark text-white">
        <Container>
          <h1 className="display-4">Our Projects</h1>
          <p className="lead">Discover what we're building</p>
        </Container>
      </section>

      {/* Project 1 */}
      <section className="project-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>HauntScape</h2>
              <p className="lead">Project Description</p>
              <p>
                HauntScape is a horror-themed game that combines elements of survival horror and exploration. The game features a first-person perspective, 
                a spooky atmosphere and tension, and a focus on exploration and puzzle-solving. With multiple levels we are creating a unique and engaging
                horror escape room experience.
              </p>
            </Col>
            <Col md={6}>
              <Carousel interval={isVideoPlaying ? null : 5000}>
                {projectImages.map((item, index) => (
                  <Carousel.Item key={index}>
                    {item.type === 'video' ? (
                      <VideoPlayer
                        videoSrc={item.url}
                        title={item.title}
                        description={item.description}
                        onVideoStateChange={handleVideoStateChange}
                      />
                    ) : (
                      <>
                        <img
                          className="d-block w-100"
                          src={item.url}
                          alt={item.title}
                          style={{
                            height: '300px',
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                        />
                        <Carousel.Caption>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </Carousel.Caption>
                      </>
                    )}
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project 2 */}
      {/* <section className="project-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <h2>Project Name</h2>
              <p className="lead">Project Description</p>
              <p>
                [Detailed project information will go here]
              </p>
            </Col>
            <Col md={6} className="order-md-1">
              <Carousel>
                <Carousel.Item>
                  <div className="d-block w-100 bg-dark" style={{ height: '300px' }}>
                    <Carousel.Caption>
                      <h3>Project Screenshots</h3>
                      <p>Coming soon</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section> */}
    </Container>
  );
};

export default Projects; 