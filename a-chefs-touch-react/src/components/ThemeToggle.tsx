import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'} theme-icon`} aria-hidden="true"></i>
        </button>
    );
};

export default ThemeToggle;
