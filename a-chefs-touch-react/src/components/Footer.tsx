import React from 'react';

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

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><i className="fa-solid fa-phone" aria-hidden="true"></i> <span>+91 86085 25323</span></li>
                        <li><i className="fa-solid fa-phone" aria-hidden="true"></i> <span>+91 93455 54242</span></li>
                        <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i> <span>Vaniyambadi</span></li>
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
