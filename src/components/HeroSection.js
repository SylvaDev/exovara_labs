import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LogoEL from '../assets/images/Logo_EL.png';

const LogoBackground = () => {
  return (
    <motion.div
      className="logo-background"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <img
        src={LogoEL}
        alt="Exovara Labs Logo"
        className="logo-bg-image"
      />
    </motion.div>
  );
};

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        delay: Math.random() * 2
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="particle-background">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity]
          }}
          transition={{
            duration: 3 + particle.speed,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero-section" ref={ref}>
      <LogoBackground />
      <ParticleBackground />
      
      <div className="hero-content">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={8} className="mx-auto text-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="hero-text"
              >
                <motion.h1
                  variants={titleVariants}
                  className="hero-title"
                >
                  Welcome to{' '}
                  <motion.span
                    className="gradient-text"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Exovara
                  </motion.span>
                </motion.h1>

                <motion.p
                  variants={subtitleVariants}
                  className="hero-subtitle"
                >
                  Built to Play. Designed to Evolve.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="hero-description"
                >
                  <p>
                    We are an independent game development studio dedicated to creating 
                    unique and engaging gaming experiences. From server administrators to 
                    game developers, we bring technical excellence and creative innovation 
                    to every project.
                  </p>
                </motion.div>

                <motion.div
                  variants={ctaVariants}
                  className="hero-cta"
                >
                  <motion.a
                    href="/projects"
                    className="cta-button primary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Explore Our Projects
                  </motion.a>
                  
                  <motion.a
                    href="https://discord.gg/4h3EPquTtf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button secondary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Join Our Discord
                  </motion.a>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="scroll-indicator"
                >
                  <motion.div
                    className="scroll-arrow"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 13l3 3 7-7" />
                      <path d="M7 6l3 3 7-7" />
                    </svg>
                  </motion.div>
                  <span>Scroll to explore</span>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="hero-gradient-overlay" />
    </section>
  );
};

export default HeroSection;
