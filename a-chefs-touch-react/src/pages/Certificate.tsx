import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Certificate: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="menu-page">
            <header className="page-header" style={{ padding: '8rem 0 4rem', textAlign: 'center', background: 'var(--bg-card)' }}>
                <div className="container">
                    <h1 className="page-title">Our Certificates</h1>
                    <p className="page-subtitle text-muted mt-4">
                        We maintain the highest standards of hygiene and quality.
                    </p>
                </div>
            </header>

            <section className="section" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container text-center">
                    <div style={{ padding: '4rem', background: 'var(--bg-main)', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
                        <i className="fa-solid fa-certificate text-accent" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}></i>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>FSSAI Certified</h2>
                        <p className="text-muted" style={{ maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
                            A Chef's Touch is fully certified and compliant with food safety
                            standards to ensure every meal is prepared with your health in mind.
                        </p>

                        <div className="mt-8">
                            <Link to="/" className="btn btn-outline" style={{ marginTop: '2rem' }}>
                                <i className="fa-solid fa-arrow-left"></i> Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Certificate;
