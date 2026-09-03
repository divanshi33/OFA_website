import React, { useState } from 'react';
import {
  Dumbbell, Monitor, Users, Sparkles, BookOpen, Apple,
  Send, CheckCircle2, ChevronDown
} from 'lucide-react';
import './HomePage.css';

const SERVICES = [
  {
    icon: Dumbbell,
    title: 'Personal Fitness Training',
    description: 'Elite one-on-one training tailored to your body type, goals, and lifestyle (home or outdoors).'
  },
  {
    icon: Monitor,
    title: 'Online Training',
    description: 'Virtual coaching sessions, customized workout plans, and real-time progress tracking.'
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'High-energy group workouts designed for societies, corporates, and communities.'
  },
  {
    icon: Sparkles,
    title: 'Yoga Classes Online and Offline',
    description: 'Mindfulness, flexibility, posture correction, and expert guidance online or offline.'
  },
  {
    icon: BookOpen,
    title: 'Health Seminar & Consultation',
    description: 'Expert wellness advice, assessments, and corporate health seminars.'
  },
  {
    icon: Apple,
    title: 'Nutritionist and Dietitian Consultation & Diet Chart Facilities',
    description: 'Customized macro scheduling, nutrition planning, and professional dietitian advice.'
  }
];

export default function HomePage() {
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', location: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [expandedServices, setExpandedServices] = useState({});

  const toggleService = (idx) => {
    setExpandedServices(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMsg('Full Name and Phone Number are required.');
      return;
    }

    // Build a pre-filled WhatsApp message
    const lines = [
      `🏋️ *FREE TRIAL BOOKING — OFA Fitness*`,
      ``,
      `*Name:* ${formData.fullName}`,
      `*Phone:* ${formData.phone}`,
      formData.email    ? `*Email:* ${formData.email}`       : null,
      formData.location ? `*Location:* ${formData.location}` : null,
      formData.message  ? `*Message:* ${formData.message}`   : null,
    ].filter(Boolean).join('\n');

    const whatsappURL = `https://wa.me/917827127138?text=${encodeURIComponent(lines)}`;
    window.open(whatsappURL, '_blank');
    setStatus('success');
    setFormData({ fullName: '', phone: '', email: '', location: '', message: '' });
  };

  const scrollToTrial = () => {
    document.getElementById('trial-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage-wrapper">
      {/* HERO / WHAT WE OFFER SECTION */}
      <section className="home-hero-section">
        <div className="home-hero-bg-overlay" />
        <div className="home-hero-inner">
          <h1 className="home-hero-headline">
            WHAT WE <span className="text-aqua-glow">OFFER</span>
          </h1>

          <div className="home-hero-subtext">
            <p>Certified coaches come <strong>directly to your</strong> home, society gym, or outdoors.</p>
            <p>Elite fitness training tailored to your goals, schedule, and lifestyle.</p>
          </div>

          <div className="home-services-grid">
            {SERVICES.map((svc, idx) => {
              const Icon = svc.icon;
              const isExpanded = !!expandedServices[idx];
              return (
                <div
                  key={idx}
                  className={`home-service-card glass-panel ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleService(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleService(idx); }}
                >
                  <div className="svc-card-header">
                    <div className="svc-card-icon-circle">
                      <Icon size={22} className="text-aqua-glow" />
                    </div>
                    <h3 className="svc-card-title">{svc.title}</h3>
                    <ChevronDown size={18} className={`svc-card-chevron ${isExpanded ? 'rotated' : ''}`} />
                  </div>
                  <div className={`svc-card-desc-container ${isExpanded ? 'show' : ''}`}>
                    <p className="svc-card-desc">{svc.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="home-scroll-indicator" onClick={scrollToTrial}>
            <span>SCROLL DOWN</span>
            <ChevronDown size={14} className="text-aqua" />
          </div>
        </div>
      </section>

      {/* FREE TRIAL FORM SECTION */}
      <section id="trial-form-section" className="home-trial-section">
        <div className="section-title-container">
          <h2 className="section-title elite-journey-title">
            <span className="title-line">START YOUR</span>
            <span className="title-line title-cyan-highlight">ELITE FITNESS</span>
            <span className="title-line">JOURNEY TODAY</span>
          </h2>
          <p className="section-description-text">
            Experience world-class personal training at your home, society gym, or outdoor location. Book your <span className="text-aqua-glow font-bold">FREE trial session</span> now — no commitment required.
          </p>
        </div>
        <div className="home-trial-card glass-panel">
          {status === 'success' ? (
            <div className="form-success-state">
              <CheckCircle2 size={40} className="text-aqua" />
              <h3>FREE TRIAL BOOKED!</h3>
              <p>Our team will contact you shortly to schedule your personalized session.</p>
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
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. rahul@email.com" className="form-input" />
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <label>Phone Number <span className="req">*</span></label>
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. +91 9876543210" className="form-input" required />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input name="location" value={formData.location} onChange={handleChange} placeholder="e.g. South Delhi, Gurugram" className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your fitness goals..." className="form-input" rows="3" />
              </div>
              {status === 'error' && <p className="form-error-msg">{errorMsg}</p>}
              <button type="submit" className="btn-gold trial-submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : <><Send size={15} /> Book Free Trial</>}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}