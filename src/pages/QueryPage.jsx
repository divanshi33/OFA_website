import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import './QueryPage.css';

export default function QueryPage() {
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
    setErrorMsg('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '8f77e37f-a1c8-4600-98ef-83022ae38ede',
          subject: 'Customer Query — OFA Fitness',
          from_name: 'OFA Website',
          name: formData.fullName,
          phone: formData.contactNo,
          email: formData.email || 'Not provided',
          message: formData.query,
        })
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ fullName: '', contactNo: '', email: '', query: '' });
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Unable to send. Please try again later.');
    }
  };

  return (
    <div className="query-page-wrapper">
      <section className="query-main-section">
        <div className="section-title-container">
          <span className="section-subtitle">WE'RE HERE FOR YOU</span>
          <h2 className="section-title">CUSTOMER SUPPORT</h2>
          <p className="query-lead-text">
            Have a question or need assistance with your fitness program? Submit your query below and our team will get back to you shortly.
          </p>
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
    </div>
  );
}
