import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { icon: '🏠', title: 'Residential Roofing', desc: 'Complete installation of stone-coated steel roof systems for homes of all sizes. Includes structural assessment, weatherproofing, and lifetime warranty.' },
  { icon: '🏢', title: 'Commercial Roofing', desc: 'Industrial-grade roofing solutions for commercial buildings, warehouses, and large-scale estates with ISO-certified installations.' },
  { icon: '🔧', title: 'Roof Repair & Restoration', desc: 'Fast, professional repair services for damaged tiles, leaks, and aging rooftops. We restore without full replacement wherever possible.' },
  { icon: '🌿', title: 'Green Roof Systems', desc: 'Eco-friendly roofing solutions with thermal insulation layers, solar-ready mounting, and UV-reflective coatings for energy efficiency.' },
  { icon: '🛡️', title: 'Waterproofing', desc: '100% waterproof underlayment systems tested to international standards. Prevents moisture ingress for the lifetime of your roof.' },
  { icon: '📐', title: 'Custom Fabrication', desc: 'Bespoke tile profiles, ridge caps, and flashings custom-fabricated to match any architectural style or heritage design requirement.' },
];

const steps = [
  { num: '01', title: 'Free Consultation', desc: 'We start with an on-site visit, structural assessment, and a no-obligation quote tailored to your property.' },
  { num: '02', title: 'Design & Selection', desc: 'Choose from our Shake, Classic, Bond, Royal, and Antica collections. Our specialists help match colour and profile.' },
  { num: '03', title: 'Professional Installation', desc: 'Our ISO-certified crew installs your roof to exacting standards, typically completing in 3–5 days.' },
  { num: '04', title: 'Quality Inspection', desc: 'Post-installation inspection by our Quality Director with a full sign-off and warranty certificate issued.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>

      {/* ── Header ── */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>What We Offer</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(36px, 6vw, 72px)', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
            World-Class<br />Roofing Services
          </h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', color: 'rgba(255,255,255,0.75)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            From residential homes to commercial complexes — Skyban delivers premium roofing solutions built to last generations.
          </p>
        </motion.div>
      </section>

      {/* ── Service Cards ── */}
      <section style={{ padding: '20px 24px 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {services.map((s, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)}
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(207,162,93,0.12)',
                borderRadius: '16px',
                padding: '36px 28px',
              }}
              whileHover={{ y: -6, borderColor: 'rgba(207,162,93,0.35)', background: 'rgba(255,255,255,0.08)' }}
              transition={{ duration: 0.25 }}
            >
              <div style={{ fontSize: '36px', marginBottom: '18px' }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '22px', color: 'white', marginBottom: '12px' }}>{s.title}</h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Gold divider ── */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(207,162,93,0.4), transparent)', maxWidth: '800px', margin: '0 auto' }} />

      {/* ── Process Steps ── */}
      <section style={{ padding: '80px 24px 100px', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '12px' }}>How It Works</p>
          <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', color: 'white' }}>Our Process</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          {steps.map((step, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display', fontSize: '48px', fontWeight: 700, color: 'rgba(207,162,93,0.25)', lineHeight: 1, marginBottom: '12px' }}>{step.num}</div>
              <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '18px', color: 'white', marginBottom: '10px' }}>{step.title}</h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
