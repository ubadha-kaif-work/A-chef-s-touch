import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="#" className="logo footer-logo">
                        <i className="fa-solid fa-hat-chef logo-icon" aria-hidden="true"></i>
                        A Chef's Touch
                    </a>
                    <p className="footer-desc">Bringing you the perfect blend of tradition and taste. Order for your next iftar
                        or party!</p>
                    <div className="social-links">
                        <a href="https://instagram.com/achefstouch10" target="_blank" rel="noreferrer" className="social-link" aria-label="Visit our Instagram">
                            <i className="fa-brands fa-instagram" aria-hidden="true"></i> @achefstouch10
                        </a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <h3>Our Menu</h3>
                    <ul>
                        <li><Link to="/menu">Mutton Haleem</Link></li>
                        <li><Link to="/menu">Ramzan Snacks</Link></li>
                        <li><Link to="/menu">Special Gravies</Link></li>
                        <li><Link to="/menu">Desserts</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><a href="tel:+918608525323"><i className="fa-solid fa-phone" aria-hidden="true"></i> <span>+91 86085 25323</span></a></li>
                        <li><a href="tel:+919345554242"><i className="fa-solid fa-phone" aria-hidden="true"></i> <span>+91 93455 54242</span></a></li>
                        <li><a href="#location"><i className="fa-solid fa-location-dot" aria-hidden="true"></i> <span>Vaniyambadi</span></a></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Refund Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 A Chef's Touch. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
