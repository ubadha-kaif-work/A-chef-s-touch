import React from 'react';

const AnimatedLogo: React.FC = () => {
    return (
        <svg
            className="animated-logo"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Minimalist Chef Hat / Steam outline */}
            <path
                className="logo-path main-path"
                d="M 30 70 C 20 70 15 60 15 50 C 15 40 25 35 30 35 C 32 20 50 15 60 25 C 65 15 80 20 85 35 C 90 40 90 55 80 65 C 75 70 70 70 30 70 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Inner elegant swoop (like a smile or whisk wire) */}
            <path
                className="logo-path accent-path"
                d="M 35 55 Q 50 65 65 55"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
            {/* Small elegant dot */}
            <circle
                className="logo-path dot-path"
                cx="50"
                cy="45"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
            />
        </svg>
    );
};

export default AnimatedLogo;
