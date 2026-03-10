import React, { useEffect } from 'react';
import MenuItemCard from '../components/MenuItemCard';

const Menu: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        const revealElements = document.querySelectorAll('.category-block.reveal, .text-center.reveal');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting || entry.intersectionRatio > 0) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: "50px 0px 0px 0px" });

        revealElements.forEach(el => revealObserver.observe(el));

        // Failsafe: if any elements are stuck without animation after a delay, show them anyway.
        const fallbackTimer = setTimeout(() => {
            revealElements.forEach(el => el.classList.add('active'));
        }, 800);

        return () => {
            clearTimeout(fallbackTimer);
            revealElements.forEach(el => revealObserver.unobserve(el));
        };
    }, []);

    return (
        <main>
            {/* Page Header (Small banner for the menu) */}
            <header className="hero menu-hero" id="home">
                <div className="hero-overlay"></div>
                <div className="hero-content text-center menu-hero-content">
                    <h1 className="hero-title menu-page-title">Our <span className="text-accent">Full</span> Menu</h1>
                </div>
            </header>

            {/* Menu Section */}
            <section className="menu section" id="menu">
                <div className="container">
                    <h2 className="section-title text-center">Our Culinary Delights</h2>

                    <div className="menu-categories">
                        {/* Category 1 */}
                        <div className="category-block reveal">
                            <h3 className="category-title">Haleem &amp; Ramzan Snacks</h3>
                            <div className="menu-grid">
                                <MenuItemCard imageSrc="/assets/images/mutton_haleem.png" imageAlt="Mutton Haleem" price="₹160/Box" title="Mutton Haleem" description="Rich, slow-cooked delicacy (250 ML Box)" />
                                <MenuItemCard imageSrc="/assets/images/chicken_tikka_cone.png" imageAlt="Chicken Tikka Cone" price="₹20/Pc" title="Chicken Tikka Cone" description="Spiced tikka in a crispy pastry cone" />
                                <MenuItemCard imageSrc="/assets/images/spring_chicken.png" imageAlt="Spring Chicken" price="₹20/Pc" title="Spring Chicken" description="Crispy golden spring rolls" />
                                <MenuItemCard imageSrc="/assets/images/chicken_doughnut.png" imageAlt="Chicken Doughnut" price="₹25/Pc" title="Chicken Doughnut" description="Savory doughnut-shaped chicken" />
                                <MenuItemCard imageSrc="/assets/images/thread_chicken.png" imageAlt="Thread Chicken" price="₹25/Pc" title="Thread Chicken" description="Crispy chicken in pastry threads" />
                                <MenuItemCard imageSrc="/assets/images/chaska_chicken_stick.png" imageAlt="Chaska Chicken Stick" price="₹25/Pc" title="Chaska Chicken Stick" description="Spiced and grilled chicken skewers" />
                                <MenuItemCard imageSrc="/assets/images/candy_chicken.png" imageAlt="Candy Chicken" price="₹25/Pc" title="Candy Chicken" description="Sweet and spicy glazed chicken bites" />
                                <MenuItemCard imageSrc="/assets/images/russian_finger.png" imageAlt="Russian Finger" price="₹25/Pc" title="Russian Finger" description="Creamy chicken and vegetable croquettes" />
                                <MenuItemCard imageSrc="/assets/images/chicken_roll.png" imageAlt="Chicken Roll" price="₹25/Pc" title="Chicken Roll" description="Crispy roll with spiced shredded chicken" />
                                <MenuItemCard imageSrc="/assets/images/kabab_pav.png" imageAlt="Kabab Pav" price="₹30/Pc" title="Kabab Pav" description="Soft pav stuffed with juicy shami kabab" />
                            </div>
                        </div>

                        {/* Category 2 */}
                        <div className="category-block reveal mt-16">
                            <h3 className="category-title">Gravies <span className="text-sm font-normal text-muted" style={{ fontSize: '0.875rem', fontWeight: 400 }}>(Pre Order Only)</span></h3>
                            <div className="menu-grid">
                                <MenuItemCard imageSrc="/assets/images/afghani_chicken_curry.png" imageAlt="Afghani Chicken Curry" price="₹180/Box" title="Afghani Chicken Curry" description="Rich and creamy chicken curry" />
                                <MenuItemCard imageSrc="/assets/images/reshmi_chicken.png" imageAlt="Reshmi Chicken" price="₹180/Box" title="Reshmi Chicken" description="Silky smooth chicken in rich gravy" />
                                <MenuItemCard imageSrc="/assets/images/chicken_handi.png" imageAlt="Chicken Handi" price="₹180/Box" title="Chicken Handi" description="Traditional rich chicken curry" />
                                <MenuItemCard imageSrc="/assets/images/palak_chicken.png" imageAlt="Palak Chicken" price="₹180/Box" title="Palak Chicken" description="Tender chicken in rich spinach gravy" />
                                <MenuItemCard imageSrc="/assets/images/butter_chicken.png" imageAlt="Butter Chicken" price="₹180/Box" title="Butter Chicken" description="Classic creamy tomato chicken curry" />
                            </div>
                        </div>

                        {/* Category 3 */}
                        <div className="category-block reveal mt-16">
                            <h3 className="category-title">Desserts</h3>
                            <div className="menu-grid">
                                <MenuItemCard imageSrc="/assets/images/pineapple_souffle.png" imageAlt="Pineapple Souffle" price="₹45" title="Pineapple Souffle" description="Refreshing and rich pineapple dessert" />
                                <MenuItemCard imageSrc="/assets/images/lab_e_khaas.png" imageAlt="Lab E Khaas" price="₹35" title="Lab E Khaas" description="Rich traditional dessert with fruit and nuts" />
                                <MenuItemCard imageSrc="/assets/images/khubani_ka_meetha.png" imageAlt="Khubani Ka Meetha" price="₹40" title="Khubani Ka Meetha" description="Classic slow-cooked apricot dessert" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Menu;
