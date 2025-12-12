
import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockServices } from '../data/mockServices';
import { mockBlogPosts } from '../data/mockBlogPosts';
import { mockAbout } from '../data/mockAbout';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import Counter from '../components/Counter';
import './HomePage.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function HomePage() {
  // Get first 6 services for carousel (more than 4 to show sliding)
  const featuredServices = mockServices.slice(0, 6);

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Get latest 3 blog posts
  const featuredBlogs = mockBlogPosts.slice(0, 3);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero section">
        <div className="container">

          <div className="hero-content">
            <h1 className="hero-title">{mockAbout.companyName}</h1>
           
           
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/Blog" className="btn ">Our Insights</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-content">
            {/* Left Column - Text & Stats */}
            <div className="about-text-column">
              <h4 className="section-title"  >About Us</h4>
              <div className="about-text-body">
                <p>With over 15 years of experience in interior decoration, we've helped hundreds of families across the USA are create their dream homes. Our passion is transforming houses into personalized sanctuaries that reflect your unique style and personality.</p>
                <p>We believe that great design should be accessible to everyone. Whether you're looking for a complete home makeover or just need help styling a single room, we're here to bring your vision to life.</p>
              </div>

              <div className="about-stats-row">
                <div className="about-stat-item">
                  <Counter targetValue={500} label="Projects Completed" duration={2500} />
                </div>
                <div className="about-stat-item">
                  <Counter targetValue={450} label="Happy Clients" duration={2500} />
                </div>
                <div className="about-stat-item">
                  <Counter targetValue={15} label="Years Experience" duration={2500} />
                </div>
              </div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="about-image-column">
              <div className="about-image-grid">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop" alt="Living Room" className="grid-img img-1" />
                <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop" alt="Dining Corner" className="grid-img img-2" />
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop" alt="Bedroom" className="grid-img img-3" />
                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop" alt="Dining Room" className="grid-img img-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section (Carousel) */}
      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          {/* <p className="section-subtitle">Comprehensive event management solutions tailored to your needs</p> */}

          <div className="services-carousel embla" ref={emblaRef}>
            <div className="embla__container">
              {featuredServices.map((service) => (
                <div className="embla__slide" key={service.id}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''} `}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1} `}
              />
            ))}
          </div>

          <div className="section-cta">
             <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="blog-preview section">
        <div className="container">
          <h2 className="section-title">Latest from Our Blog</h2>
          <p className="footer-tagline">Insights, tips, and inspiration for your next event</p>
          <div className="blog-grid grid grid-3">
            {featuredBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/blog" className="btn btn-primary">Read More Articles</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="services-preview">
        <div className="container">
          <div className="cta-content">
            <h2 className="section-title">Ready to Create Your Perfect Event?</h2>
            <p className="section-subtitle" style={{color: '#ffffff'}}>Let's work together to bring your vision to life</p>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;