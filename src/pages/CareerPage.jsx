import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, DollarSign, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import trainerSunny from '../assets/trainer_sunny.jpeg';
import trainerRazab from '../assets/trainer_razab.png';
import trainerSijo from '../assets/trainer_sijo.png';
import trainerAbhi from '../assets/trainer_abhi.png.jpeg';
import './CareerPage.css';

const PERKS = [
  {
    icon: Award,
    title: 'CERTIFICATION SUPPORT',
    desc: 'We guide & provide knowledge support in professional certifications. Freshers and newcomers get full field experience guidance.'
  },
  {
    icon: Users,
    title: 'GROWING COMMUNITY',
    desc: "Join a family of elite coaches making a real difference in clients' lives across Delhi NCR."
  },
  {
    icon: DollarSign,
    title: 'EXTRA INCOME',
    desc: 'You can join us with your current gym job. Earn in your free hours — choose your own timings and locations.'
  }
];

const TRAINERS = [
  {
    name: 'Sunny',
    experience: '8+ Years Experience',
    mainPhoto: trainerSunny,
  },
  {
    name: 'Razab',
    experience: '6+ Years Experience',
    mainPhoto: trainerRazab,
  },
  {
    name: 'Sijo',
    experience: '6+ Years Experience',
    mainPhoto: trainerSijo,
  },
  {
    name: 'Abhi',
    experience: '5+ Years Experience',
    mainPhoto: trainerAbhi,
  }
];

export default function CareerPage() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visible = windowWidth <= 640 ? 1 : windowWidth <= 992 ? 2 : 3;
  const cardWidth = windowWidth <= 480 ? 230 : windowWidth <= 640 ? 250 : windowWidth <= 992 ? 260 : 280;
  const gap = 24;
  const step = cardWidth + gap;
  const maxOffset = Math.max(0, (TRAINERS.length - visible) * step);

  const [offset, setOffset] = useState(0);

  const slideLeft  = () => setOffset(o => Math.max(0, o - step));
  const slideRight = () => setOffset(o => Math.min(maxOffset, o + step));

  return (
    <div className="career-page-wrapper">
      {/* JOIN OUR TEAM */}
      <section className="career-hero-section">
        <div className="section-title-container">
          <span className="section-subtitle">GROW WITH US</span>
          <h2 className="section-title">JOIN OUR TEAM</h2>
        </div>

        <p className="career-intro-text">
          We don't fund — we <strong>guide &amp; provide knowledge support</strong> in professional certifications.
          If you're a fresher or new in the industry, get the guidance of field experience from our expert trainers and coaches.
        </p>

        <div className="career-perks-grid">
          {PERKS.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div key={i} className="career-perk-card glass-panel">
                <div className="career-perk-icon-wrap"><Icon size={24} className="text-aqua" /></div>
                <h3 className="career-perk-title">{perk.title}</h3>
                <p className="career-perk-desc">{perk.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="apply-now-trigger-wrapper">
          <Link to="/apply-now" className="apply-now-main-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            APPLY NOW
          </Link>
          <p className="fresher-note">
            <Zap size={14} className="text-aqua" /> Fresher can also apply — we provide full training and field guidance.
          </p>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="career-trainers-section">
        <div className="section-title-container">
          <span className="section-subtitle">OFA ELITE INSTRUCTORS</span>
          <h2 className="section-title">OUR TEAM</h2>
        </div>

        <div className="team-scroll-wrapper">
          <button
            className="team-scroll-btn left"
            onClick={slideLeft}
            disabled={offset === 0}
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="team-scroll-container">
            <div
              className="our-team-grid"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {TRAINERS.map((trainer, idx) => (
                <div key={idx} className="trainer-card-large glass-panel">
                  <img src={trainer.mainPhoto} alt={trainer.name} className="trainer-photo-expanded" />
                  <div className="trainer-bottom-right-badge">
                    <h3 className="trainer-badge-name">{trainer.name}</h3>
                    <span className="trainer-badge-exp">{trainer.experience}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="team-scroll-btn right"
            onClick={slideRight}
            disabled={offset >= maxOffset}
            aria-label="Scroll right"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </section>
    </div>
  );
}
