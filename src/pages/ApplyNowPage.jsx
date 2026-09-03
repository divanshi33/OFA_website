import React, { useState } from 'react';
import { Zap, CheckCircle2, Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../pages/CareerPage.css';

export default function ApplyNowPage() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', gender: '',
    category: '', country: '', state: '', city: ''
  });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.gender || !formData.category) {
      setStatus('error');
      setErrorMsg('Full Name, Email Address, Phone Number, Gender, and Category are required.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '8f77e37f-a1c8-4600-98ef-83022ae38ede',
          subject: `New Coach Application — ${formData.fullName} (${formData.category})`,
          from_name: 'OFA Career Form',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          category: formData.category,
          country: formData.country || 'Not provided',
          state: formData.state || 'Not provided',
          city: formData.city || 'Not provided',
          message: 'Application submitted via OFA website.',
        })
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({
          fullName: '', email: '', phone: '', gender: '',
          category: '', country: '', state: '', city: ''
        });
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Unable to send application. Please try again later.');
    }
  };

  return (
    <div className="career-page-wrapper" style={{ padding: '60px 4%' }}>
      <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
        <Link to="/career" className="apply-back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00e5d4', textDecoration: 'none', marginBottom: '24px', fontWeight: '700', fontSize: '0.95rem' }}>
          <ArrowLeft size={20} />
          <span>← Back to Career Page</span>
        </Link>

        <div className="career-apply-card glass-panel" style={{ margin: 0 }}>
          <div className="section-title-container" style={{ marginBottom: '20px', textAlign: 'left' }}>
            <span className="section-subtitle">CAREER OPPORTUNITY</span>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>JOIN OUR TEAM</h2>
            <p className="section-description-text" style={{ fontSize: '0.88rem' }}>
              Apply to become a certified fitness trainer or coach at OK Fitness Academy (OFA).
            </p>
          </div>

          <h3 className="career-card-title">APPLY NOW</h3>

          {status === 'success' ? (
            <div className="career-success-state">
              <CheckCircle2 size={48} className="text-aqua" />
              <h3>APPLICATION SUBMITTED!</h3>
              <p>Thank you! Your application has been sent to okfitnessacademy@gmail.com. Our team will review your application and contact you shortly.</p>
              <Link to="/career" className="btn-gold" style={{ marginTop: '16px', textDecoration: 'none', display: 'inline-block' }}>
                Back to Career Page
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="career-full-form">
              <div className="form-group">
                <label>FULL NAME <span className="req">*</span></label>
                <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" className="form-input" required />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS <span className="req">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="form-input" required />
              </div>

              <div className="form-group">
                <label>PHONE NUMBER <span className="req">*</span></label>
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="form-input" required />
              </div>

              <div className="form-group">
                <label>GENDER <span className="req">*</span></label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="form-input" required>
                  <option value="">-- Select Gender --</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>CATEGORY <span className="req">*</span></label>
                <select name="category" value={formData.category} onChange={handleChange} className="form-input" required>
                  <option value="">-- Select Category --</option>
                  <option value="Personal Trainer (Home Visits)">Personal Trainer (Home Visits)</option>
                  <option value="Strength & Conditioning Coach">Strength & Conditioning Coach</option>
                  <option value="Nutritionist / Diet Consultant">Nutritionist / Diet Consultant</option>
                  <option value="Yoga & Mobility Specialist">Yoga & Mobility Specialist</option>
                  <option value="Kids Fitness Trainer">Kids Fitness Trainer</option>
                </select>
              </div>

              <div className="form-group">
                <label>COUNTRY <span className="req">*</span></label>
                <input name="country" value={formData.country} onChange={handleChange} placeholder="e.g. India" className="form-input" required />
              </div>

              <div className="form-group">
                <label>STATE <span className="req">*</span></label>
                <input name="state" value={formData.state} onChange={handleChange} placeholder="e.g. Delhi" className="form-input" required />
              </div>

              <div className="form-group">
                <label>CITY <span className="req">*</span></label>
                <input name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Vasant Kunj" className="form-input" required />
              </div>

              {status === 'error' && <p className="form-error-msg">{errorMsg}</p>}

              <button type="submit" className="btn-gold career-submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : <><Send size={16} /> SUBMIT APPLICATION</>}
              </button>
            </form>
          )}
          <p className="fresher-note">
            <Zap size={14} className="text-aqua" /> Fresher can also apply — we provide full training and field guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
