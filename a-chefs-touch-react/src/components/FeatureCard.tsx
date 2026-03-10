import React, { useEffect, useRef } from 'react';

interface FeatureCardProps {
    iconClass: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconClass, title, description }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (
        <div className="feature-card reveal" ref={cardRef}>
            <div className="feature-icon"><i className={iconClass}></i></div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;
