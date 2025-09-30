import React from 'react'
import './style.css'

const Index = () => {
  return (
    <>
            {/* <!-- Header --> */}
    <header>
        <nav>
            <a href="#" className="logo">Hlo Chef</a>
            <ul className="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#contact" className="cta-button">Get Started</a>
            <div className="mobile-toggle">
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    </header>

    {/* <!-- Hero Section --> */}
    <section id="home" className="hero">
        {/* <div className="hero-content">
            <h1>Empowering Innovation with Cutting-Edge Technology</h1>
            <p>We are a leading tech solutions provider, delivering scalable software, AI, and cloud services to transform your business.</p>
            <div className="hero-buttons">
                <a href="#services" className="btn btn-primary">Explore Services</a>
                <a href="#contact" className="btn btn-secondary">Contact Us</a>
            </div>
        </div> */}
    </section>

    {/* <!-- Services Section --> */}
    {/* <section id="services" className="services">
        <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
                <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-code"></i>
                    </div>
                    <h3>Custom Software Development</h3>
                    <p>Tailored software solutions built with modern technologies to meet your unique business needs.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-robot"></i>
                    </div>
                    <h3>AI & Machine Learning</h3>
                    <p>Harness the power of AI to automate processes, gain insights, and drive intelligent decisions.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-cloud"></i>
                    </div>
                    <h3>Cloud Solutions</h3>
                    <p>Scalable cloud infrastructure and migration services for seamless digital transformation.</p>
                </div>
            </div>
        </div>
    </section> */}

    {/* <!-- About Section --> */}
    {/* <section id="about" className="about">
        <div className="container">
            <div className="about-content">
                <div className="about-text">
                    <h2>About TPoint Tech</h2>
                    <p>Founded in 2015, TPoint Tech has been at the forefront of technological innovation, serving over 500 clients worldwide. Our team of 100+ experts specializes in delivering high-performance solutions that scale with your growth.</p>
                    <p>We believe in collaboration, creativity, and commitment to excellence, ensuring every project exceeds expectations.</p>
                    <a href="#contact" className="cta-button">Learn More</a>
                </div>
                <div className="about-image">
                    <img src="https://via.placeholder.com/500x400/007bff/ffffff?text=Team+at+Work" alt="Team at Work" width="500" height="400" />
                </div>
            </div>
        </div>
    </section> */}

    {/* <!-- Testimonials Section --> */}
    {/* <section className="testimonials">
        <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <p>"TPoint Tech transformed our outdated systems into a modern, efficient platform. Their expertise is unmatched!"</p>
                    <div className="testimonial-author">- Jane Doe, CEO of TechCorp</div>
                </div>
                <div className="testimonial-card">
                    <p>"Exceptional service and innovative solutions. We saw a 40% increase in productivity after their implementation."</p>
                    <div className="testimonial-author">- John Smith, CTO of Innovate Inc.</div>
                </div>
                <div className="testimonial-card">
                    <p>"Reliable partners who deliver on time and within budget. Highly recommended for any tech needs."</p>
                    <div className="testimonial-author">- Emily Johnson, Founder of StartupX</div>
                </div>
            </div>
        </div>
    </section> */}

    {/* <!-- Footer --> */}
    <footer id="contact">
        <div className="container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Hlo Chef</h3>
                    <p>Empowering businesses with innovative tech solutions. Let's build the future together.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul>
                        <li>Email: info@hlochef.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Address: 123 Tech Street, Silicon Valley, CA</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Hlo Chef. All rights reserved.</p>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Index