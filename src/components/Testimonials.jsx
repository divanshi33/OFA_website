import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

import trans1 from '../assets/transfomation_1.jpeg';
import trans2 from '../assets/transfomation_2.jpeg';
import trans3 from '../assets/transfomation_3.jpeg';
import trans01 from '../assets/OFA_transformation_01.jpg';
import trans02 from '../assets/OFA_transformation_02.jpg';
import trans03 from '../assets/OFA_transformation_03.jpg';
import trans04 from '../assets/OFA_transformation_04.jpg';
import trans05 from '../assets/OFA_transformation_05.jpg';
import trans06 from '../assets/OFA_transformation_6.png';
import trans07 from '../assets/OFA_transformation_07.jpg';
import trans08 from '../assets/OFA_transformation_08.jpg';
import trans09 from '../assets/OFA_transformation_09.jpg';
import trans10 from '../assets/OFA_transformation_10.jpg';
import trans11 from '../assets/OFA_transformation_11.png';
import trans12 from '../assets/OFA_transformation_12.jpg';
import trans13 from '../assets/OFA_transformation_13.jpg';
import trans14 from '../assets/OFA_transformation_14.jpg';

const TESTIMONIALS = [
  { id: 1, image: trans2, stars: 5 },
  { id: 2, image: trans01, stars: 5 },
  { id: 3, image: trans02, stars: 5 },
  { id: 4, image: trans03, stars: 5 },
  { id: 5, image: trans04, stars: 5 },
  { id: 6, image: trans05, stars: 5 },
  { id: 7, image: trans06, stars: 5 },
  { id: 8, image: trans07, stars: 5 },
  { id: 9, image: trans08, stars: 5 },
  { id: 10, image: trans09, stars: 5 },
  { id: 11, image: trans10, stars: 5 },
  { id: 12, image: trans11, stars: 5 },
  { id: 13, image: trans12, stars: 5 },
  { id: 14, image: trans13, stars: 5 },
  { id: 15, image: trans14, stars: 5 },
  { id: 16, image: trans1, stars: 5 },
  { id: 17, image: trans3, stars: 5 },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef(null);

  const resetTimer = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    resetTimer();
  };

  const handleDotClick = (idx) => {
    setActiveIndex(idx);
    resetTimer();
  };

  return (
    <section className="testimonials-section">

      <div className="carousel-wrapper glass-panel">
        <button className="carousel-btn prev-btn" onClick={handlePrev} aria-label="Previous testimonial">
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-track">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className={`carousel-slide ${idx === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-card">
                <div className="testimonial-image-container">
                  <img src={testimonial.image} alt={`Client Transformation ${idx + 1}`} className="transformation-img" />
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={22} fill="#00E5D4" color="#00E5D4" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn next-btn" onClick={handleNext} aria-label="Next testimonial">
          <ChevronRight size={24} />
        </button>

        {/* Carousel Dots */}
        <div className="carousel-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
