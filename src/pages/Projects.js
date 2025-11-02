import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';

import VideoPlayer from '../components/VideoPlayer';
import Splash from '../assets/images/Splash.bmp';

const ModernVideoPlayer = ({ videoSrc, title, description, onVideoStateChange }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      className="modern-video-container"
    >
      <VideoPlayer
        videoSrc={videoSrc}
        title={title}
        description={description}
        onVideoStateChange={onVideoStateChange}
      />
    </motion.div>
  );
};

const ProjectCard = ({ project, index, isReversed = false }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <section className={`project-section ${index % 2 === 1 ? 'bg-light' : ''}`}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className={isReversed ? 'order-md-2' : ''}>
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    <h5>Technologies Used:</h5>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link primary"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      View Demo
                    </motion.a>
                    
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link secondary"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Col>
            
            <Col md={6} className={isReversed ? 'order-md-1' : ''}>
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="project-media">
                  {project.media.type === 'video' ? (
                    <ModernVideoPlayer
                      videoSrc={project.media.url}
                      title={project.media.title}
                      description={project.media.description}
                      onVideoStateChange={() => {}}
                    />
                  ) : (
                    <motion.div
                      className="project-image-container"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.media.url}
                        alt={project.media.title}
                        className="project-image"
                      />
                      <div className="image-overlay">
                        <FaPlay className="play-icon" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Whispers of Yomi",
      subtitle: "Story-based Multiplayer Anime Adventure",
      description: "An immersive multiplayer experience that combines rich storytelling with engaging gameplay mechanics. Players embark on epic adventures in a beautifully crafted anime-inspired world, where every choice shapes their journey.",
      technologies: ["Unreal Engine", "C#", "C++", "Multiplayer Networking"],
      demoLink: "#",
      githubLink: null,
      media: {
        type: 'image',
        url: Splash,
        title: "Whispers of Yomi Gameplay",
        description: "Screenshot from the game showing the beautiful anime-inspired world"
      }
    }
  ];

  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <>
      {/* Projects Header */}
      <section className="projects-header">
        <Container>
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="projects-title">Our Projects</h1>
            <p className="projects-subtitle">Discover what we're building</p>
            <div className="projects-divider" />
          </motion.div>
        </Container>
      </section>

      {/* Projects */}
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          index={index}
          isReversed={index % 2 === 1}
        />
      ))}

      {/* Coming Soon Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="coming-soon-section"
      >
        <Container>
          <div className="text-center">
            <h3>More Projects Coming Soon</h3>
            <p>We're constantly working on new and exciting projects. Stay tuned for updates!</p>
            <motion.a
              href="https://discord.gg/4h3EPquTtf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Discord for Updates
            </motion.a>
          </div>
        </Container>
      </motion.section>
    </>
  );
};

export default Projects; 