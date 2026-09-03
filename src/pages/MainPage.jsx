import React, { useState, useEffect, useRef } from 'react';
import {
  Dumbbell, Wifi, Users, Leaf, BookOpen, Apple,
  X, ChevronLeft, ChevronRight, Star, Award,
  Activity, Check, Zap, Send, CheckCircle2,
  MapPin, Phone, Mail, Clock,
  ArrowRight, ChevronDown, FileText, DollarSign
} from 'lucide-react';
import logoImg from '../assets/logo.png';
import ownerVicky from '../assets/owner_vicky.png';
import trainerSunny from '../assets/trainer_sunny.jpeg';
import trainerRazab from '../assets/trainer_razab.png';
import trainerSijo from '../assets/trainer_sijo.png';
import trainerAbhi from '../assets/trainer_abhi.png.jpeg';
import gym1 from '../assets/gym_photo_1.jpeg';
import gym2 from '../assets/gym_photo_2.jpeg';
import gym3 from '../assets/gym_photo_3.jpeg';
import gym4 from '../assets/gym_photo_4.jpeg';
import gym5 from '../assets/gym_photo_5.jpeg';
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
import './MainPage.css';

/* ─────────────── DATA ─────────────── */
const SERVICES = [
  {
    icon: Dumbbell,
    title: 'Personal Training (Gym Sessions)',
    description: '1-on-1 dedicated coaching in state-of-the-art gym facilities with personalized workout routines and form correction.'
  },
  {
    icon: Wifi,
    title: 'Home Visits Personal Training',
    description: 'Certified trainers brought directly to your doorstep with equipment for convenient, high-impact workouts in your space.'
  },
  {
    icon: Users,
    title: 'Society Gym Personal Training',
    description: 'Transform your residential society gym with structured athletic training programs tailored for all fitness levels.'
  },
  {
    icon: Leaf,
    title: 'Yoga & Mobility Training',
    description: 'Restore body balance, enhance flexibility, and relieve stress through guided yoga and joint mobility sessions.'
  },
  {
    icon: BookOpen,
    title: 'Kids Fitness & Development',
    description: 'Engaging, safe, and fun physical activity programs designed to build youth agility, posture, and healthy habits.'
  },
  {
    icon: Apple,
    title: 'Nutritionist & Dietitian Consultation',
    description: 'Customized macro scheduling, nutrition planning, and professional dietitian advice.'
  }
];

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

const GALLERY_PHOTOS = [
  { src: gym1, title: 'Free Weights Zone' },
  { src: gym2, title: 'Power & Resistance Zone' },
  { src: gym3, title: 'Functional Training Studio' },
  { src: gym4, title: 'Strength Equipment' },
  { src: gym5, title: 'Coaching Studio' }
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

/* ─────────────── HERO SECTION ─────────────── */
function HeroSection() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    size: `${4 + Math.random() * 6}px`
  }));

  const scrollToTrialForm = (e) => {
    e.preventDefault();
    document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToCareer = (e) => {
    e.preventDefault();
    document.getElementById('career')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section">
      <div className="hero-bg-overlay" />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-light-streak-1" />
      <div className="hero-light-streak-2" />
      <div className="hero-particles-container">
        {particles.map(p => (
          <div
            key={p.id}
            className="hero-particle"
            style={{ left: p.left, bottom: '0', width: p.size, height: p.size, animationDelay: p.delay }}
          />
        ))}
      </div>

      <div className="hero-inner">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          OK FITNESS ACADEMY • DELHI NCR
        </div>

        <h1 className="hero-headline">
          TRANSFORM YOUR BODY.<br />
          <span className="hero-highlight">ELEVATE YOUR LIFE.</span>
        </h1>

        <p className="hero-sub">
          Personalized home &amp; gym coaching, custom nutrition strategy, and elite body recomposition with{' '}
          <strong>certified trainers across Delhi NCR.</strong>
        </p>

        <div className="hero-cta-row">
          <a href="#trial-form" className="btn-gold hero-cta-primary" onClick={scrollToTrialForm}>
            Book Free Trial <ArrowRight size={18} />
          </a>
          <a href="#career" className="hero-cta-secondary" onClick={scrollToCareer}>
            Meet Our Trainers
          </a>
        </div>

        <div className="hero-scroll-indicator">
          <span>SCROLL</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────── SERVICES SECTION ─────────────── */
function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services-section-ofa">
      <div className="section-title-container">
        <span className="section-subtitle">WHAT WE OFFER</span>
        <h2 className="section-title">OUR SERVICES</h2>
      </div>

      <div className="services-icon-grid">
        {SERVICES.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <button key={idx} className="service-icon-card" onClick={() => setSelectedService(svc)}>
              <div className="svc-icon-circle">
                <Icon size={32} className="text-aqua-glow" />
              </div>
              <span className="svc-name">{svc.title}</span>
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="service-modal" onClick={e => e.stopPropagation()}>
            <button className="service-modal-close" onClick={() => setSelectedService(null)}>
              <X size={22} />
            </button>
            <div className="service-modal-icon">
              <selectedService.icon size={36} className="text-aqua-glow" />
            </div>
            <h3 className="service-modal-title">{selectedService.title}</h3>
            <p className="service-modal-desc">{selectedService.description}</p>
            <a
              href="#trial-form"
              className="btn-gold service-modal-cta"
              onClick={() => {
                setSelectedService(null);
                setTimeout(() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
            >
              Book a Free Trial
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────── CTA BANNER ─────────────── */
function CTABanner() {
  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-inner glass-panel">
        <div className="cta-banner-text">
          <h2>START YOUR ELITE FITNESS JOURNEY TODAY</h2>
          <p>
            Experience world-class personal training at your home, society gym, or outdoor location.
            Book your <strong>FREE trial session</strong> now — no commitment required.
          </p>
        </div>
        <a href="#trial-form" className="btn-gold cta-banner-btn" onClick={scrollToForm}>
          Book Free Trial <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

/* ─────────────── FREE TRIAL FORM ─────────────── */
function FreeTrialForm() {
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', location: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMsg('Full Name and Phone Number are required.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:3001/api/send-trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ fullName: '', phone: '', email: '', location: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Unable to connect. Please try again later.');
    }
  };

  return (
    <section id="trial-form" className="trial-form-section">
      <div className="section-title-container">
        <span className="section-subtitle">FIRST STEP</span>
        <h2 className="section-title">BOOK YOUR FREE TRIAL</h2>
      </div>
      <div className="trial-form-card glass-panel">
        {status === 'success' ? (
          <div className="form-success-state">
            <CheckCircle2 size={56} className="text-aqua" />
            <h3>REQUEST SUBMITTED!</h3>
            <p>Our team will reach out to you shortly. Get ready to begin your transformation!</p>
            <button className="btn-gold" onClick={() => setStatus(null)}>Submit Another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="trial-form">
            <div className="form-row-2">
              <div className="form-group">
                <label>Full Name <span className="req">*</span></label>
                <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Rahul Sharma" className="form-input" required />
              </div>
              <div className="form-group">
                <label>Phone Number <span className="req">*</span></label>
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. +91 9876543210" className="form-input" required />
              </div>
            </div>
            <div className="form-row-2">
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. rahul@email.com" className="form-input" />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input name="location" value={formData.location} onChange={handleChange} placeholder="e.g. South Delhi, Gurugram" className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us your fitness goals..." className="form-input" rows="4" />
            </div>
            {status === 'error' && <p className="form-error-msg">{errorMsg}</p>}
            <button type="submit" className="btn-gold trial-submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : <><Send size={16} /> Send Request</>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ─────────────── TESTIMONIALS SECTION ─────────────── */
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const prev = () => { setActiveIndex(i => (i === 0 ? TESTIMONIALS.length - 1 : i - 1)); resetTimer(); };
  const next = () => { setActiveIndex(i => (i + 1) % TESTIMONIALS.length); resetTimer(); };

  return (
    <section className="section-testimonials">
      <div className="section-title-container">
        <span className="section-subtitle">OFA SUCCESS STORIES</span>
        <h2 className="section-title">CLIENT TRANSFORMATIONS</h2>
      </div>

      <div className="carousel-wrapper glass-panel">
        <button className="carousel-btn prev-btn" onClick={prev} aria-label="Previous">
          <ChevronLeft size={24} />
        </button>
        <div className="carousel-track">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className={`carousel-slide${idx === activeIndex ? ' active' : ''}`}>
              <div className="testimonial-card">
                <div className="testimonial-image-container">
                  <img src={t.image} alt={`Client Transformation ${idx + 1}`} className="transformation-img" />
                </div>
                <div className="testimonial-rating">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={22} fill="#00e5d4" color="#00e5d4" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn next-btn" onClick={next} aria-label="Next">
          <ChevronRight size={24} />
        </button>
        <div className="carousel-dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`carousel-dot${i === activeIndex ? ' active' : ''}`} onClick={() => { setActiveIndex(i); resetTimer(); }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── BMI CALCULATOR ─────────────── */
function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [gaugePercent, setGaugePercent] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const h = parseFloat(height), w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return;
    const val = parseFloat((w / ((h / 100) ** 2)).toFixed(1));
    setBmi(val);
    let cat = '', pct = 0;
    if (val < 18.5) { cat = 'Underweight'; pct = Math.max(0, Math.min(25, ((val - 10) / 8.5) * 25)); }
    else if (val < 25) { cat = 'Normal Weight'; pct = 25 + ((val - 18.5) / 6.5) * 25; }
    else if (val < 30) { cat = 'Overweight'; pct = 50 + ((val - 25) / 5) * 25; }
    else { cat = 'Obese'; pct = 75 + Math.min(25, ((val - 30) / 10) * 25); }
    setCategory(cat);
    setGaugePercent(pct);
  };

  return (
    <section className="bmi-section-ofa">
      <div className="section-title-container">
        <span className="section-subtitle">FITNESS ANALYSIS</span>
        <h2 className="section-title">BMI CALCULATOR</h2>
      </div>
      <div className="bmi-container glass-panel">
        <div className="bmi-form-col">
          <h3 className="bmi-form-title text-gradient">Calculate Your Index</h3>
          <p className="bmi-intro">Body Mass Index (BMI) is a measure of body fat based on height and weight.</p>
          <form onSubmit={calculate} className="bmi-form">
            <div className="form-group">
              <label>Height (cm)</label>
              <input type="number" className="form-input" value={height} onChange={e => setHeight(e.target.value)} placeholder="e.g. 175" min="50" max="250" required />
            </div>
            <div className="form-group">
              <label>Weight (kg)</label>
              <input type="number" className="form-input" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 70" min="10" max="300" required />
            </div>
            <div className="bmi-btn-row">
              <button type="submit" className="btn-gold">Calculate BMI</button>
              {bmi && <button type="button" className="btn-outline" onClick={() => { setHeight(''); setWeight(''); setBmi(null); setCategory(''); }}>Reset</button>}
            </div>
          </form>
        </div>
        <div className="bmi-result-col">
          {bmi === null ? (
            <div className="bmi-placeholder">
              <div className="bmi-placeholder-ring"><span>?</span></div>
              <p>Enter your measurements to reveal your profile.</p>
            </div>
          ) : (
            <div className="bmi-result">
              <div className="bmi-val-display">
                <span className="bmi-num">{bmi}</span>
                <span className="bmi-label">YOUR BMI</span>
              </div>
              <div className="bmi-cat text-gold">{category}</div>
              <div className="bmi-gauge">
                <div className="bmi-gauge-bar">
                  <div className="gauge-seg uw" />
                  <div className="gauge-seg nw" />
                  <div className="gauge-seg ow" />
                  <div className="gauge-seg ob" />
                  <div className="bmi-needle" style={{ left: `${gaugePercent}%` }}>
                    <div className="needle-tip" />
                  </div>
                </div>
                <div className="bmi-gauge-labels">
                  <span>10</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
                </div>
              </div>
              <p className="bmi-advice">
                {category === 'Underweight' && 'We recommend focusing on nutrition counseling and structured muscle building.'}
                {category === 'Normal Weight' && 'Superb! You fall in the healthy weight range. Maintain with our fitness programs.'}
                {category === 'Overweight' && 'Cardio training, weight management, and diet guides will yield great progress.'}
                {category === 'Obese' && 'We suggest a consultation with our personal training coaches to build a safe pathway.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ABOUT SECTION ─────────────── */
function AboutSection() {
  return (
    <section className="about-section-ofa">
      <div className="section-title-container">
        <span className="section-subtitle">ESTABLISHED EXCELLENCE</span>
        <h2 className="section-title">About OFA</h2>
      </div>
      <div className="about-narrative glass-panel">
        <h3 className="narrative-title text-aqua-glow">WHO WE ARE</h3>
        <p>
          At <strong className="text-aqua">OK Fitness Academy (OFA)</strong>, we break the barriers of traditional gym models. We believe that professional, elite-level fitness coaching should adapt to your schedule and environment.
        </p>
        <p>
          Whether you choose to train at home, in your society facility, or outdoors, our certified personal trainers come fully equipped to design and execute high-performance training regimens tailored to you.
        </p>
        <div className="mission-vision-row">
          <div className="mv-card">
            <div className="mv-icon-wrapper"><Award size={22} className="text-aqua" /></div>
            <h3>OUR MISSION</h3>
            <p>To eliminate barriers to health and peak performance by delivering elite personal coaching directly to our clients, ensuring consistency and accelerated results.</p>
          </div>
          <div className="mv-card">
            <div className="mv-icon-wrapper"><Zap size={22} className="text-aqua" /></div>
            <h3>OUR VISION</h3>
            <p>To be the premier mobile fitness academy in India, recognized for transforming lifestyles through science-based athletic training, complete accountability, and nutrition.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── OWNER SECTION ─────────────── */
function OwnerSection() {
  return (
    <section className="owner-section">
      <div className="owner-blob owner-blob-left" />
      <div className="owner-blob owner-blob-right" />
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
          <h2 className="owner-name">COACH VISHAL</h2>
          <p className="owner-title-role owner-subtitle-large">Founder, OK Fitness Academy</p>
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
  );
}

/* ─────────────── GALLERY SECTION ─────────────── */
function GallerySection() {
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
    <section className="gallery-section">
      <div className="section-title-container">
        <span className="section-subtitle">OUR FACILITY</span>
        <h2 className="section-title">GALLERY</h2>
      </div>
      <div className="gallery-masonry-grid">
        {GALLERY_PHOTOS.map((photo, idx) => (
          <div key={idx} className="gallery-item" onClick={() => setLightboxIdx(idx)}>
            <img src={photo.src} alt={photo.title} className="gallery-img" />
            <div className="gallery-item-hover">
              <div className="hover-icon"><Award size={28} className="text-gold" /></div>
              <span className="hover-title">{photo.title}</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIdx(null)}>
          <button className="lightbox-close-btn" onClick={() => setLightboxIdx(null)}><X size={28} /></button>
          <button className="lightbox-nav-btn prev-image-btn" onClick={e => { e.stopPropagation(); prev(); }}>
            <ChevronLeft size={24} />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={GALLERY_PHOTOS[lightboxIdx].src} alt={GALLERY_PHOTOS[lightboxIdx].title} className="lightbox-img" />
            <span className="lightbox-caption">{GALLERY_PHOTOS[lightboxIdx].title}</span>
          </div>
          <button className="lightbox-nav-btn next-image-btn" onClick={e => { e.stopPropagation(); next(); }}>
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}

/* ─────────────── JOIN TEAM SECTION ─────────────── */
function JoinTeamSection() {
  return (
    <section className="join-team-section">
      <div className="jt-blob jt-blob-1" />
      <div className="jt-blob jt-blob-2" />
      <div className="section-title-container">
        <span className="section-subtitle">CAREER OPPORTUNITY</span>
        <h2 className="section-title">JOIN OUR TEAM</h2>
        <p className="section-description-text">
          Apply to become a certified fitness trainer or coach at OK Fitness Academy (OFA).
        </p>
      </div>

      <div className="jt-perks-grid">
        {PERKS.map((perk, i) => {
          const Icon = perk.icon;
          return (
            <div key={i} className="jt-perk-card glass-panel">
              <div className="jt-perk-icon-wrap"><Icon size={28} className="jt-perk-icon" /></div>
              <h3 className="jt-perk-title">{perk.title}</h3>
              <p className="jt-perk-desc">{perk.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="jt-apply-center" id="apply-form">
        <div className="apply-now-trigger-wrapper">
          <Link to="/apply-now" className="apply-now-main-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            APPLY NOW
          </Link>
          <p className="fresher-note">
            <Zap size={14} className="text-aqua" /> Fresher can also apply — we provide full training and field guidance.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TRAINERS SECTION (OUR TEAM) ─────────────── */
function TrainersSection() {
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
    <section className="trainers-section-ofa">
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
  );
}

/* ─────────────── QUERY SECTION ─────────────── */
function QuerySection() {
  const [formData, setFormData] = useState({ fullName: '', contactNo: '', email: '', query: '' });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.contactNo.trim() || !formData.query.trim()) {
      setStatus('error');
      setErrorMsg('Full Name, Contact Number, and Your Query are required.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:3001/api/send-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ fullName: '', contactNo: '', email: '', query: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Unable to connect to server. Please try again later.');
    }
  };

  return (
    <section className="query-section">
      <div className="section-title-container">
        <span className="section-subtitle">WE'RE HERE FOR YOU</span>
        <h2 className="section-title">CUSTOMER SUPPORT</h2>
        <p className="query-lead">Have a question or need assistance with your fitness program? Submit your query below and our team will get back to you shortly.</p>
      </div>
      <div className="query-form-card glass-panel">
        {status === 'success' ? (
          <div className="form-success-state">
            <CheckCircle2 size={48} className="text-aqua" />
            <h3>QUERY SUBMITTED!</h3>
            <p>Thank you! Your query has been sent to okfitnessacademy@gmail.com. Our support team will review your message and respond shortly.</p>
            <button className="btn-gold" onClick={() => setStatus(null)} style={{ marginTop: '16px' }}>Submit Another Query</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="query-form">
            <h3 className="query-card-title">SUBMIT YOUR QUERY</h3>
            <div className="form-row-2">
              <div className="form-group">
                <label>FULL NAME <span className="req">*</span></label>
                <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Priya Gupta" className="form-input" required />
              </div>
              <div className="form-group">
                <label>CONTACT NO. <span className="req">*</span></label>
                <input name="contactNo" value={formData.contactNo} onChange={handleChange} placeholder="e.g. +91 9876543210" className="form-input" required />
              </div>
            </div>
            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. priya@email.com" className="form-input" />
            </div>
            <div className="form-group">
              <label>YOUR QUERY <span className="req">*</span></label>
              <textarea name="query" value={formData.query} onChange={handleChange} placeholder="Type your question or request here..." className="form-input" rows="4" required />
            </div>
            {status === 'error' && <p className="form-error-msg">{errorMsg}</p>}
            <button type="submit" className="btn-gold query-submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting...' : <><Send size={16} /> SUBMIT QUERY</>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top-grid">
        <div className="footer-brand-box">
          <a href="#home" className="footer-logo">
            <img src={logoImg} alt="OFA Fitness" style={{ height: '60px', width: 'auto' }} />
          </a>
          <p className="footer-tagline">
            Om Fitness Academy — Elevating health, strength, and transformation through certified coaching across Delhi NCR.
          </p>
          <div className="footer-social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <span className="footer-title">QUICK LINKS</span>
          <div className="footer-links">
            {['#home', '#testimonials', '#about', '#career', '#query'].map((href, i) => {
              const labels = ['Home', 'Testimonials', 'About Us', 'Career', 'Query'];
              return (
                <a key={i} href={href} onClick={e => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); }}>
                  {labels[i]}
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-contact-col">
          <span className="footer-title">CONTACT</span>
          <div className="footer-contact-list">
            <div className="contact-item">
              <MapPin size={16} className="text-aqua" />
              <p>Delhi NCR & Surrounding Regions</p>
            </div>
            <div className="contact-item">
              <Phone size={16} className="text-aqua" />
              <p>+91 98765 43210</p>
            </div>
            <div className="contact-item">
              <Mail size={16} className="text-aqua" />
              <p>okfitnessacademy@gmail.com</p>
            </div>
            <div className="contact-item">
              <Clock size={16} className="text-aqua" />
              <p>Mon–Sat: 6:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle-divider" />
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} OFA Fitness (Om Fitness Academy). All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#query" onClick={e => { e.preventDefault(); document.getElementById('query')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── CURSOR GLOW ─────────────── */
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <div ref={ref} className="cursor-glow" />;
}

/* ─────────────── MAIN PAGE ─────────────── */
export default function MainPage() {
  return (
    <>
      <CursorGlow />

      {/* HOME */}
      <div id="home">
        <HeroSection />
        <ServicesSection />
        <CTABanner />
        <FreeTrialForm />
      </div>

      {/* TESTIMONIALS */}
      <div id="testimonials">
        <TestimonialsSection />
        <BMICalculator />
      </div>

      {/* ABOUT */}
      <div id="about">
        <AboutSection />
        <GallerySection />
        <OwnerSection />
      </div>

      {/* CAREER */}
      <div id="career">
        <JoinTeamSection />
        <TrainersSection />
      </div>

      {/* QUERY */}
      <div id="query">
        <QuerySection />
      </div>

      <Footer />
    </>
  );
}
