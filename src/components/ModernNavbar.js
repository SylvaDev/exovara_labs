import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord, FaBars, FaTimes } from 'react-icons/fa';

const ModernNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Discord', href: 'https://discord.gg/4h3EPquTtf', external: true, icon: FaDiscord }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}
      >
        <Container>
          <motion.div variants={itemVariants}>
            <Navbar.Brand href="/" className="modern-brand">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Exovara Labs
              </motion.span>
            </Navbar.Brand>
          </motion.div>

          <Navbar.Toggle 
            aria-controls="modern-navbar-nav"
            className="modern-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </Navbar.Toggle>

          <Navbar.Collapse id="modern-navbar-nav" className="justify-content-end">
            <Nav className="modern-nav">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Nav.Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="modern-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="nav-icon" />}
                    <span>{item.name}</span>
                    {item.external && (
                      <motion.span
                        className="external-indicator"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ↗
                      </motion.span>
                    )}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.div
                className="mobile-menu-content"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Container>
                  <div className="mobile-nav-items">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <Nav.Link
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="mobile-nav-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.icon && <item.icon className="mobile-nav-icon" />}
                          <span>{item.name}</span>
                          {item.external && <span className="external-indicator">↗</span>}
                        </Nav.Link>
                      </motion.div>
                    ))}
                  </div>
                </Container>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Navbar>
    </motion.div>
  );
};

export default ModernNavbar;
