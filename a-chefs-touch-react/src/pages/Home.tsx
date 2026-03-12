import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import MenuItemCard from "../components/MenuItemCard";
import TestimonialCard from "../components/TestimonialCard";

const Home: React.FC = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll(
            ".category-block.reveal, .text-center.reveal, .location.reveal",
        );

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.05, rootMargin: "50px 0px 0px 0px" },
        );

        revealElements.forEach((el) => {
            revealObserver.observe(el);
        });

        // Failsafe: if any elements are stuck without animation after a delay, show them anyway.
        const fallbackTimer = setTimeout(() => {
            revealElements.forEach((el) => el.classList.add("active"));
        }, 800);

        return () => {
            clearTimeout(fallbackTimer);
            revealElements.forEach((el) => {
                revealObserver.unobserve(el);
            });
        };
    }, []);

    return (
        <main>
            {/* Hero Section */}
            <header className="hero" id="home">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-badge">
                        <span className="status-dot"></span>Premium Cloud Kitchen
                    </span>
                    <h1 className="hero-title">A Chef's Touch</h1>
                    <p className="hero-subtitle">
                        Fresh &amp; <span className="text-accent">Flavourful</span> Everyday
                    </p>
                    <p className="hero-description">
                        Taste the joy of Ramzan. Our signature snacks &amp; rich mutton
                        haleem are perfect for every iftar. Bulk and party orders taken.
                    </p>
                    <div className="hero-btns">
                        <a href="#menu" className="btn btn-primary">
                            Explore Menu <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                        </a>
                        <div className="delivery-badge">
                            <i className="fa-solid fa-motorcycle" aria-hidden="true"></i> Free Delivery Available
                        </div>
                    </div>
                </div>
            </header>

            {/* Why Us Section */}
            <section className="features section" id="why-us">
                <div className="container">
                    <h2 className="section-title text-center">Why Order With Us</h2>
                    <div className="features-grid">
                        <FeatureCard
                            iconClass="fa-solid fa-hands-bubbles"
                            title="Hygienically Prepared"
                            description="We maintain strictly hygienic environments for all our culinary prep."
                        />
                        <FeatureCard
                            iconClass="fa-solid fa-plate-wheat"
                            title="Fresh &amp; Tasty"
                            description="Only the freshest ingredients are used for that authentic taste."
                        />
                        <FeatureCard
                            iconClass="fa-solid fa-person-biking"
                            title="Quick Delivery"
                            description="Prompt and safe delivery straight to your doorstep."
                        />
                        <FeatureCard
                            iconClass="fa-solid fa-star"
                            title="No Compromise"
                            description="Premium quality ingredients ensure every bite is flawless."
                        />
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="menu section" id="menu">
                <div className="container">
                    <h2 className="section-title text-center">Our Culinary Delights</h2>

                    <div className="menu-categories">
                        <div className="category-block reveal">
                            <h3 className="category-title">Haleem &amp; Ramzan Snacks</h3>
                            <div className="menu-grid">
                                <MenuItemCard
                                    imageSrc="/assets/images/mutton_haleem.png"
                                    imageAlt="Mutton Haleem"
                                    price="₹160/Box"
                                    title="Mutton Haleem"
                                    description="Rich, slow-cooked delicacy (250 ML Box)"
                                />
                                <MenuItemCard
                                    imageSrc="/assets/images/chicken_tikka_cone.png"
                                    imageAlt="Chicken Tikka Cone"
                                    price="₹20/Pc"
                                    title="Chicken Tikka Cone"
                                    description="Spiced tikka in a crispy pastry cone"
                                />
                                <MenuItemCard
                                    imageSrc="/assets/images/spring_chicken.png"
                                    imageAlt="Spring Chicken"
                                    price="₹20/Pc"
                                    title="Spring Chicken"
                                    description="Crispy golden spring rolls"
                                />
                            </div>
                        </div>

                        <div className="category-block reveal mt-16">
                            <h3 className="category-title">
                                Gravies{" "}
                                <span
                                    className="text-sm font-normal text-muted"
                                    style={{ fontSize: "0.875rem", fontWeight: 400 }}
                                >
                                    (Pre Order Only)
                                </span>
                            </h3>
                            <div className="menu-grid">
                                <MenuItemCard
                                    imageSrc="/assets/images/afghani_chicken_curry.png"
                                    imageAlt="Afghani Chicken Curry"
                                    price="₹180/Box"
                                    title="Afghani Chicken Curry"
                                    description="Rich and creamy chicken curry"
                                />
                                <MenuItemCard
                                    imageSrc="/assets/images/reshmi_chicken.png"
                                    imageAlt="Reshmi Chicken"
                                    price="₹180/Box"
                                    title="Reshmi Chicken"
                                    description="Silky smooth chicken in rich gravy"
                                />
                                <MenuItemCard
                                    imageSrc="/assets/images/chicken_handi.png"
                                    imageAlt="Chicken Handi"
                                    price="₹180/Box"
                                    title="Chicken Handi"
                                    description="Traditional rich chicken curry"
                                />
                            </div>
                        </div>

                        <div className="category-block reveal mt-16">
                            <h3 className="category-title">Desserts</h3>
                            <div className="menu-grid">
                                <MenuItemCard
                                    imageSrc="/assets/images/pineapple_souffle.png"
                                    imageAlt="Pineapple Souffle"
                                    price="₹45"
                                    title="Pineapple Souffle"
                                    description="Refreshing and rich pineapple dessert"
                                />
                                <MenuItemCard
                                    imageSrc="/assets/images/lab_e_khaas.png"
                                    imageAlt="Lab E Khaas"
                                    price="₹35"
                                    title="Lab E Khaas"
                                    description="Rich traditional dessert with fruit and nuts"
                                />
                                <MenuItemCard
                                    imageSrc="/assets/images/khubani_ka_meetha.png"
                                    imageAlt="Khubani Ka Meetha"
                                    price="₹40"
                                    title="Khubani Ka Meetha"
                                    description="Classic slow-cooked apricot dessert"
                                />
                            </div>
                        </div>

                        <div className="text-center mt-16 reveal">
                            <Link to="/menu" className="btn btn-primary">
                                View Full Menu <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section reveal" id="testimonials">
                <div className="container">
                    <h2 className="section-title text-center">What Our Customers Say</h2>
                    <div className="testimonial-grid mt-16">
                        <TestimonialCard
                            name="Sarah Ahmed"
                            review="The Mutton Haleem here is absolutely divine. Perfect balance of spices and the texture is incredibly rich. Just like homemade!"
                            rating={5}
                            date="March 10, 2026"
                        />
                        <TestimonialCard
                            name="Farhaan K."
                            review="Ordered the Chicken Tikka Cones for a family gathering and they were a massive hit. The kids loved them and the delivery was exactly on time."
                            rating={5}
                            date="February 28, 2026"
                        />
                        <TestimonialCard
                            name="Ayesha S."
                            review="The best place in Vaniyambadi for authentic Ramzan snacks. The Spring Chicken is perfectly crispy every single time."
                            rating={4}
                            date="March 05, 2026"
                        />
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="location section reveal" id="location">
                <div className="container">
                    <h2 className="section-title text-center">Find Us Here</h2>
                    <div
                        className="map-container"
                        style={{
                            borderRadius: "16px",
                            overflow: "hidden",
                            border: "1px solid var(--border-light)",
                            marginTop: "2rem",
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124628.71804153915!2d78.53676180352496!3d12.68413697960786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac51bfd7bc4113%3A0xc3c942ab7b9ab1d1!2sVaniyambadi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703080000000!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0, display: "block" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="A Chef's Touch Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
