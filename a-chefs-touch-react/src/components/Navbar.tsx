import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when location changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // Handle smooth scrolling for hash links
    const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        if (location.pathname !== '/') {
            // Let the link behave normally if on a different page (it will navigate to /#hash)
            return;
        }

        e.preventDefault();
        setMenuOpen(false);
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else if (hash === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar" aria-label="Main Navigation">
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <i className="fa-solid fa-hat-chef logo-icon" aria-hidden="true"></i>
                    <span className="logo-text">A Chef's Touch</span>
                </Link>
                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {location.pathname === '/' ? (
                        <>
                            <a href="#home" className="nav-link" onClick={(e) => handleHashClick(e, '#home')}>Home</a>
                            <a href="#why-us" className="nav-link" onClick={(e) => handleHashClick(e, '#why-us')}>Why Us</a>
                            <a href="#menu" className="nav-link" onClick={(e) => handleHashClick(e, '#menu')}>Menu</a>
                        </>
                    ) : (
                        <>
                            <Link to="/#home" className="nav-link">Home</Link>
                            <Link to="/#why-us" className="nav-link">Why Us</Link>
                            <Link to="/menu" className="nav-link">Menu</Link>
                        </>
                    )}
                </div>
                <a href="#footer" className="cta-contact" onClick={(e) => handleHashClick(e, '#footer')}>Contact Us</a>
                <div
                    className="mobile-menu-btn"
                    id="mobile-menu-btn"
                    aria-label="Toggle mobile menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
