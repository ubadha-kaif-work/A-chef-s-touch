import React from 'react';

interface TestimonialCardProps {
    name: string;
    review: string;
    rating?: number;
    date?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, review, rating = 5, date }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-header">
                <div className="avatar">
                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                </div>
                <div className="user-info">
                    <h4 className="user-name">{name}</h4>
                    {date && <span className="review-date">{date}</span>}
                </div>
                <div className="stars" aria-label={`Rated ${rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                        <i
                            key={i}
                            className={`fa-star ${i < rating ? 'fa-solid' : 'fa-regular'}`}
                            aria-hidden="true"
                        ></i>
                    ))}
                </div>
            </div>

            <div className="testimonial-body">
                <i className="fa-solid fa-quote-left quote-icon" aria-hidden="true"></i>
                <p className="review-text">{review}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
