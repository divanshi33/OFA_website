import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Zap, DollarSign } from 'lucide-react';
import './JoinTeam.css';

const PERKS = [
  {
    icon: Award,
    title: 'Certification Support',
    desc: 'We guide & provide knowledge support in professional certifications. Freshers and newcomers get full field experience guidance.'
  },
  {
    icon: Users,
    title: 'Growing Community',
    desc: 'Join a family of elite coaches making a real difference in clients\' lives across Delhi NCR.'
  },
  {
    icon: DollarSign,
    title: 'Extra Income',
    desc: 'You can join us with your current gym job. Earn in your free hours — choose your own timings and locations.'
  }
];

const ROLES = [
  'Personal Trainer (Home Visits)',
  'Strength & Conditioning Coach',
  'Nutritionist / Diet Consultant',
  'Yoga & Mobility Specialist',
  'Kids Fitness Trainer',
];

export default function JoinTeam() {
  return (
    <section id="join-team" className="join-team-section">
      {/* Background decorative blobs */}
      <div className="jt-blob jt-blob-1"></div>
      <div className="jt-blob jt-blob-2"></div>

      <div className="section-title-container">
        <span className="section-subtitle">GROW WITH US</span>
        <h2 className="section-title">JOIN OUR TEAM</h2>
      </div>

      <p className="jt-intro-text">
        We don't fund — we <strong>guide &amp; provide knowledge support</strong> in professional certifications.
        If you're a fresher or new in the industry, get the guidance of field experience from our expert trainers and coaches.
      </p>

      {/* Perks Grid */}
      <div className="jt-perks-grid">
        {PERKS.map((perk, idx) => {
          const Icon = perk.icon;
          return (
            <div key={idx} className="jt-perk-card glass-panel">
              <div className="jt-perk-icon-wrap">
                <Icon size={28} className="jt-perk-icon" />
              </div>
              <h3 className="jt-perk-title">{perk.title}</h3>
              <p className="jt-perk-desc">{perk.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Apply Now Button */}
      <div className="jt-form-center-wrapper" style={{ margin: '40px auto 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <Link to="/apply-now" className="btn-gold jt-apply-btn" style={{ padding: '16px 40px', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none', fontWeight: '800', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          Apply Now
        </Link>
        <p className="jt-fresher-note" style={{ marginTop: '0' }}>
          <Zap size={14} className="text-aqua" /> Fresher can also apply — we provide full training and field guidance.
        </p>
      </div>
    </section>
  );
}

