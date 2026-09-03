import React from 'react';
import TestimonialsPage from './TestimonialsPage';
import BMICalculator from '../components/BMICalculator';

export default function TestimonialsSectionPage() {
  return (
    <main style={{ paddingTop: '110px', minHeight: '80vh', backgroundColor: '#000' }}>
      <TestimonialsPage />
      <BMICalculator />
    </main>
  );
}
