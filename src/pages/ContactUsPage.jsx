import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import './ContactUsPage.css';

const FAQS = [
  {
    q: 'Do you provide personal training home visits in Delhi NCR?',
    a: 'Yes! Our certified coaches provide 1-on-1 personal training directly at your home, apartment fitness centers, or partner gyms across Delhi NCR.'
  },
  {
    q: 'What qualifications do OFA instructors have?',
    a: 'All OFA coaches are certified fitness professionals, strength & conditioning specialists, or qualified nutrition experts with extensive field experience.'
  },
  {
    q: 'How does the custom diet & nutrition plan work?',
    a: 'We calculate your precise Total Daily Energy Expenditure (TDEE) and target macros. Then, we craft a personalized Indian dietary plan using familiar home-cooked foods tailored to your schedule.'
  },
  {
    q: 'Can freshers apply for coaching roles at OFA?',
    a: 'Yes! We mentor freshers and provide knowledge support and field experience guidance. You can apply via our Careers / Apply Now page.'
  }
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Personal Training (Home Visit)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Header Hero */}
      <section className="contact-hero-section">
        <div className="container text-center">
          <span className="section-subtitle">CONNECT WITH US</span>
          <h1 className="contact-hero-title">GET IN TOUCH WITH <span className="text-aqua">OFA FITNESS</span></h1>
          <p className="contact-hero-subtitle">
            Ready to kickstart your transformation or have questions about our coaching programs? Reach out to us today.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Col: Contact Info Cards */}
            <div className="contact-info-col">
              <div className="contact-card glass-panel">
                <div className="contact-card-icon">
                  <Phone size={24} className="text-aqua" />
                </div>
                <div>
                  <h3>Call / WhatsApp Us</h3>
                  <p>+91 98765 43210</p>
                  <p>+91 98123 45678</p>
                </div>
              </div>

              <div className="contact-card glass-panel">
                <div className="contact-card-icon">
                  <Mail size={24} className="text-aqua" />
                </div>
                <div>
                  <h3>Email Address</h3>
                  <p>contact@ofafitness.com</p>
                  <p>support@ofafitness.com</p>
                </div>
              </div>

              <div className="contact-card glass-panel">
                <div className="contact-card-icon">
                  <MapPin size={24} className="text-aqua" />
                </div>
                <div>
                  <h3>Service Locations</h3>
                  <p>Delhi NCR, Gurugram, Noida, Faridabad, Ghaziabad &amp; Surrounding Regions</p>
                </div>
              </div>

              <div className="contact-card glass-panel">
                <div className="contact-card-icon">
                  <Clock size={24} className="text-aqua" />
                </div>
                <div>
                  <h3>Operating Hours</h3>
                  <p>Monday – Saturday: 6:00 AM – 10:00 PM</p>
                  <p>Sunday: Consultation by Appointment</p>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Contact Form */}
            <div className="contact-form-col">
              <div className="contact-form-panel glass-panel">
                <h2 className="form-panel-title">BOOK A FREE CONSULTATION</h2>
                <p className="form-panel-desc">Fill out your details below and an OFA master coach will get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="contact-success-state">
                    <CheckCircle2 size={54} className="text-aqua" />
                    <h3>Thank You, {formData.name}!</h3>
                    <p>Your consultation request has been received. Our team will reach out to you shortly on {formData.phone}.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-gold" style={{ marginTop: '16px' }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="c-name">Full Name <span className="text-aqua">*</span></label>
                      <input
                        type="text"
                        id="c-name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group-row">
                      <div className="form-group">
                        <label htmlFor="c-phone">Phone / WhatsApp <span className="text-aqua">*</span></label>
                        <input
                          type="tel"
                          id="c-phone"
                          required
                          placeholder="e.g. +91 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="c-email">Email Address</label>
                        <input
                          type="email"
                          id="c-email"
                          placeholder="e.g. rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-service">Service of Interest</label>
                      <select
                        id="c-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Personal Training (Home Visit)">Personal Training (Home Visit)</option>
                        <option value="Personal Training (Gym)">Personal Training (Gym)</option>
                        <option value="Fat Loss & Recomposition">Fat Loss &amp; Recomposition</option>
                        <option value="Custom Nutrition Plan">Custom Nutrition Plan</option>
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-message">Your Fitness Goals / Message</label>
                      <textarea
                        id="c-message"
                        rows="4"
                        placeholder="Tell us about your current fitness level, target goals, or any health conditions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-gold form-submit-btn">
                      <Send size={18} />
                      <span>Submit Request</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title-container">
            <span className="section-subtitle">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">COMMON QUESTIONS</h2>
          </div>

          <div className="faq-accordion">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`faq-item glass-panel ${isOpen ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    <ChevronDown size={20} className={`faq-icon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}