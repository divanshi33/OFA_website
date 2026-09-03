import React, { useState } from 'react';
import trainer1Img from '../assets/trainer_sunny.jpeg';
import trainer2Img from '../assets/trainer_razab.png';
import trainer3Img from '../assets/trainer_sijo.png';
import trainer4Img from '../assets/trainer_abhi.png.jpeg';
import { Activity, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import './TrainersPage.css';

const TRAINERS_DATA = [
  {
    name: 'Sunny',
    category: 'Head Strength Coach & Personal Trainer',
    mainPhoto: trainer1Img,
    experience: '8+ Years',
    services: [
      'Strength Training',
      'Functional Fitness',
      'Powerlifting Coaching',
      'Home Training Sessions'
    ],
    details: 'Specializes in high-intensity functional training, posture correction, and body recomposition.'
  },
  {
    name: 'Razab',
    category: 'Elite Conditioning Expert & Nutritionist',
    mainPhoto: trainer2Img,
    experience: '6+ Years',
    services: [
      'Weight Loss / Fat Loss',
      'Weight Gain / Muscle Building',
      'Cardio & Athletic Performance',
      'Custom Diet & Nutrition Plans'
    ],
    details: 'Specializes in personalized weight management programs, athletic development, and lifestyle modification.'
  },
  {
    name: 'Sijo',
    category: 'Personal Trainer & Fitness Coach',
    mainPhoto: trainer3Img,
    experience: '6+ Years',
    services: [
      'Personal Training',
      'Strength & Conditioning',
      'Home & Gym Sessions',
      'Body Transformation'
    ],
    details: 'Specializes in personalized fitness programs, strength development, and complete body transformation.'
  },
  {
    name: 'Abhi',
    category: 'Personal Trainer & Wellness Coach',
    mainPhoto: trainer4Img,
    experience: '5+ Years',
    services: [
      'Personal Training',
      'Functional Fitness',
      'Weight Management',
      'Lifestyle & Wellness'
    ],
    details: 'Specializes in functional fitness, weight management strategies, and holistic wellness coaching.'
  }
];

export default function TrainersPage() {
  const [current, setCurrent] = useState(0);
  const total = TRAINERS_DATA.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  const trainer = TRAINERS_DATA[current];

  return (
    <section id="trainers" className="trainers-page-wrapper">
      <div className="section-title-container">
        <span className="section-subtitle">OFA ELITE INSTRUCTORS</span>
        <h2 className="section-title">MEET OUR TRAINERS</h2>
      </div>

      <div className="trainer-carousel-wrapper">
        {/* Prev button */}
        <button className="trainer-nav-btn trainer-nav-prev" onClick={prev} aria-label="Previous trainer">
          <ChevronLeft size={28} />
        </button>

        {/* Slide */}
        <div className="trainer-slide glass-panel" key={current}>
          {/* Photo */}
          <div className="trainer-slide-photo-col">
            <div className="trainer-slide-photo-frame">
              <img src={trainer.mainPhoto} alt={trainer.name} className="trainer-slide-photo" />
              <span className="badge-featured">CERTIFIED COACH</span>
            </div>
          </div>

          {/* Info */}
          <div className="trainer-slide-info-col">
            <span className="trainer-category-tag">{trainer.category}</span>
            <h2 className="trainer-slide-name">{trainer.name}</h2>
            <p className="trainer-exp-pill">
              <span className="exp-highlight">{trainer.experience}</span> Experience
            </p>
            <p className="trainer-slide-bio">{trainer.details}</p>

            {/* Services */}
            <div className="trainer-slide-services">
              <h3 className="slide-services-title">
                <Activity size={16} className="text-aqua" /> Services Provided
              </h3>
              <div className="services-tag-container">
                {trainer.services.map((service, sIdx) => (
                  <span key={sIdx} className="service-tag">
                    <Check size={12} className="text-aqua" /> {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Next button */}
        <button className="trainer-nav-btn trainer-nav-next" onClick={next} aria-label="Next trainer">
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="trainer-carousel-dots">
        {TRAINERS_DATA.map((_, i) => (
          <button
            key={i}
            className={`trainer-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to trainer ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
