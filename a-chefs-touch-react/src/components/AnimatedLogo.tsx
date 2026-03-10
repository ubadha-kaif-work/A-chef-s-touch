import React from 'react';

const AnimatedLogo: React.FC = () => {
    return (
        <svg
            className="animated-logo"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Minimalist Whisk / Continuous Line Art */}
            <path
                className="logo-path main-path"
                d="M 50 10 
                   C 50 10, 48 30, 45 45 
                   C 35 60, 20 70, 35 85 
                   C 45 95, 55 95, 65 85 
                   C 80 70, 65 60, 55 45 
                   C 52 30, 50 10, 50 10 
                   M 45 45 
                   C 40 50, 40 70, 50 80 
                   C 60 70, 60 50, 55 45"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Small elegant dot */}
            <circle
                className="logo-path dot-path"
                cx="50"
                cy="92"
                r="2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
            />
        </svg>
    );
};

export default AnimatedLogo;
