import React, { useState, useEffect } from 'react';
import { Award, Zap, Users, MapPin, X, ChevronLeft, ChevronRight, Target, Compass, CheckCircle2 } from 'lucide-react';
import ownerVicky from '../assets/owner_vicky.png';
import gym1 from '../assets/gym_photo_1.jpeg';
import gym2 from '../assets/gym_photo_2.jpeg';
import gym3 from '../assets/gym_photo_3.jpeg';
import gym4 from '../assets/gym_photo_4.jpeg';
import gym5 from '../assets/gym_photo_5.jpeg';
import './AboutPage.css';

const GALLERY_PHOTOS = [
  { src: gym1, title: 'Free Weights Zone' },
  { src: gym2, title: 'Power & Resistance Zone' },
  { src: gym3, title: 'Functional Training Studio' },
  { src: gym4, title: 'Strength Equipment' },
  { src: gym5, title: 'Coaching Studio' },
];

export default function AboutPage() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const prev = () => setLightboxIdx(i => (i === 0 ? GALLERY_PHOTOS.length - 1 : i - 1));
  const next = () => setLightboxIdx(i => (i + 1) % GALLERY_PHOTOS.length);

  useEffect(() => {
    const handler = (e) => {
      if (lightboxIdx === null) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') setLightboxIdx(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIdx]);

  return (
    <div className="about-page-wrapper">
      {/* STORY & MISSION */}
      <section className="about-narrative-section">
        <div className="section-title-container">
          <span className="section-subtitle">ESTABLISHED EXCELLENCE</span>
          <h2 className="section-title">About OFA</h2>
        </div>

        <div className="about-narrative-card glass-panel">
          <h3 className="narrative-title text-aqua-glow">WHO WE ARE</h3>
          <p>
            At <strong className="text-aqua">OK Fitness Academy (OFA)</strong>, we break the barriers of traditional gym models. We believe that professional, elite-level fitness coaching should adapt to your schedule and environment.
          </p>
          <p>
            Whether you choose to train at home, in your society facility, or outdoors, our certified personal trainers come fully equipped to design and execute high-performance training regimens tailored to you.
          </p>
          <div className="mission-vision-row">
            <div className="mv-card">
              <div className="mv-icon-wrapper"><Target size={20} className="text-aqua" /></div>
              <h4>OUR MISSION</h4>
              <p>To eliminate barriers to health and peak performance by delivering elite personal coaching directly to our clients, ensuring consistency and accelerated results.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon-wrapper"><Compass size={20} className="text-aqua" /></div>
              <h4>OUR VISION</h4>
              <p>To be the premier mobile fitness academy in India, recognized for transforming lifestyles through science-based athletic training, complete accountability, and nutrition.</p>
            </div>
          </div>
        </div>

        {/* OUR FITNESS PHILOSOPHY CARD */}
        <div className="about-philosophy-card glass-panel">
          <h3 className="narrative-title text-aqua-glow">OUR FITNESS PHILOSOPHY</h3>
          <p className="philosophy-intro">
            Fitness is not about short-term limits; it is about establishing permanent, positive biological and physical adaptations. At OFA, we blend compound movement progression, customized macronutrient scheduling, and recovery diagnostics to build athletic resilience and mental strength.
          </p>
          <div className="philosophy-grid">
            <div className="ph-card">
              <div className="ph-icon-wrapper"><Award size={20} className="text-aqua" /></div>
              <h4>ELITE BIOMECHANICS</h4>
              <p>Every coach focuses on kinetic alignment, safety, and proper execution of exercises to prevent injury and maximize muscular hypertrophy.</p>
            </div>
            <div className="ph-card">
              <div className="ph-icon-wrapper"><CheckCircle2 size={20} className="text-aqua" /></div>
              <h4>ADAPTABILITY</h4>
              <p>No gym? No problem. Our mobile trainers provide professional-grade functional tools (kettlebells, TRX, resistance bands) at your home.</p>
            </div>
            <div className="ph-card">
              <div className="ph-icon-wrapper"><Zap size={20} className="text-aqua" /></div>
              <h4>COMPLETE NUTRITION</h4>
              <p>We supply personalized diet plans mapping caloric and macronutrient guidelines directly to your daily physical output metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="about-gallery-section">
        <div className="section-title-container">
          <span className="section-subtitle">OUR FACILITY &amp; SESSIONS</span>
          <h2 className="section-title">GALLERY</h2>
        </div>

        <div className="gallery-masonry-grid">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div key={idx} className="gallery-item" onClick={() => setLightboxIdx(idx)}>
              <img src={photo.src} alt={photo.title} className="gallery-img" />
              <div className="gallery-item-hover">
                <Award size={24} className="text-aqua" />
                <span className="hover-title">{photo.title}</span>
              </div>
            </div>
          ))}
        </div>

        {lightboxIdx !== null && (
          <div className="lightbox-overlay" onClick={() => setLightboxIdx(null)}>
            <button className="lightbox-close-btn" onClick={() => setLightboxIdx(null)}><X size={24} /></button>
            <button className="lightbox-nav-btn prev-image-btn" onClick={e => { e.stopPropagation(); prev(); }}>
              <ChevronLeft size={22} />
            </button>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <img src={GALLERY_PHOTOS[lightboxIdx].src} alt={GALLERY_PHOTOS[lightboxIdx].title} className="lightbox-img" />
              <span className="lightbox-caption">{GALLERY_PHOTOS[lightboxIdx].title}</span>
            </div>
            <button className="lightbox-nav-btn next-image-btn" onClick={e => { e.stopPropagation(); next(); }}>
              <ChevronRight size={22} />
            </button>
          </div>
        )}
      </section>

      {/* OWNER SECTION */}
      <section className="about-owner-section">
        <div className="section-title-container">
          <span className="section-subtitle">THE VISIONARY</span>
          <h2 className="section-title">ABOUT THE OWNER</h2>
        </div>

        <div className="owner-card-wrapper glass-panel">
          <div className="owner-photo-col">
            <div className="owner-photo-frame">
              <img src={ownerVicky} alt="Coach Vishal — Founder OFA" className="owner-photo-img" />
              <div className="owner-photo-ring" />
            </div>
            <span className="owner-founder-badge">FOUNDER</span>
          </div>

          <div className="owner-info-col">
            <h2 className="owner-name">VISHAL</h2>
            <p className="owner-title-role">Founder, OK Fitness Academy</p>

            <div className="owner-bio-text">
              <p>
                The vision of OFA is to bring fitness directly to you. Our mission is simple — to make health and personal training more convenient, personalized, and effective than ever before. Whether you prefer working out at home, in your society gym, or outdoors, our certified personal trainers come to your location to help you achieve your fitness goals.
              </p>
              <p>
                We understand that every body is unique. That's why we design customized workout and nutrition plans tailored to your lifestyle, fitness level, and aspirations. From strength training and weight management to functional fitness and flexibility, our trainers focus on your goals — at your pace, in your space.
              </p>
              <p>
                With <strong>OK FITNESS ACADEMY [OFA]</strong>, you don't just get a workout; you get motivation, accountability, and lasting results. We're not just about fitness — we're about building healthier, stronger, and happier lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}