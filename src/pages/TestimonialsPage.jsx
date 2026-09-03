import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
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
import './TestimonialsPage.css';

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

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  // BMI State
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [gaugePercent, setGaugePercent] = useState(0);

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

  const calculateBMI = (e) => {
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
    <div className="testimonials-page-wrapper">
      {/* TESTIMONIALS CAROUSEL */}
      <section className="section-testimonials">
        <div className="section-title-container">
          <span className="section-subtitle">REAL PEOPLE • REAL RESULTS</span>
          <h2 className="section-title">CLIENT TRANSFORMATIONS</h2>
        </div>

        <div className="carousel-wrapper glass-panel">
          <button className="carousel-btn prev-btn" onClick={prev} aria-label="Previous">
            <ChevronLeft size={20} />
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
            <ChevronRight size={20} />
          </button>
          <div className="carousel-dots">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} className={`carousel-dot${i === activeIndex ? ' active' : ''}`} onClick={() => { setActiveIndex(i); resetTimer(); }} />
            ))}
          </div>
        </div>
      </section>

      {/* BMI CALCULATOR */}
      <section className="bmi-section-ofa">
        <div className="section-title-container">
          <span className="section-subtitle">FITNESS ANALYSIS</span>
          <h2 className="section-title">BMI CALCULATOR</h2>
        </div>
        <div className="bmi-container glass-panel">
          <div className="bmi-form-col">
            <h3 className="bmi-form-title text-gradient">Calculate Your Index</h3>
            <p className="bmi-intro">Body Mass Index (BMI) is a measure of body fat based on height and weight.</p>
            <form onSubmit={calculateBMI} className="bmi-form">
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
                <p>Enter height &amp; weight to calculate your BMI.</p>
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
                  {category === 'Underweight' && 'Focus on structured muscle building & customized macro scheduling.'}
                  {category === 'Normal Weight' && 'Great job! Maintain your physique with our home & gym training programs.'}
                  {category === 'Overweight' && 'Cardio, strength training, and tailored diet charts will give rapid results.'}
                  {category === 'Obese' && 'Consult with our elite personal trainers for a safe body transformation strategy.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
