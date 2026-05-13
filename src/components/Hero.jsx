import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const icons = {
  quality: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  weather: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.8"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/></svg>,
  time: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  house: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  support: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.8"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full flex flex-col bg-[#0a0a0a]" style={{ minHeight: '100vh' }}>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}hero_mountain_house.png`}
          alt="Luxury Mountain Home Roofing" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient — heavier on the left like reference */}
        <div 
          className="absolute inset-0 hero-gradient-overlay"
          style={{ background: 'linear-gradient(90deg, rgba(5,5,5,0.94) 0%, rgba(5,5,5,0.75) 40%, rgba(5,5,5,0.25) 70%, rgba(5,5,5,0.15) 100%)' }} 
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)' }} />
      </div>

      {/* Main Content — pushed below top bar + navbar */}
      <div className="hero-content-area relative z-10 flex-1 flex items-center" style={{ paddingTop: '120px', paddingLeft: 'clamp(24px, 6vw, 100px)', paddingRight: 'clamp(24px, 6vw, 100px)', paddingBottom: '40px' }}>
        <div style={{ maxWidth: '680px' }}>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '12px', letterSpacing: '5px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '22px' }}
          >
            Premium Roofing Solutions
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(42px, 7vw, 80px)', lineHeight: 1.05, color: 'white', letterSpacing: '-1px', marginBottom: '0' }}
          >
            BUILT STRONG.<br/>
            <span style={{ color: '#cfa25d' }}>BUILT TO LAST.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
            style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginTop: '24px', marginBottom: '36px', maxWidth: '480px' }}
          >
            Stone Coated Roofing Tiles &amp; uPVC Rain Gutters for Beautiful, Durable &amp; Future-Ready Homes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-btns"
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <button
              onClick={() => navigate('/products')}
              style={{
                background: '#cfa25d', color: '#0a0a0a', border: 'none',
                padding: '15px 32px', fontFamily: 'Inter', fontWeight: 700,
                fontSize: '13px', letterSpacing: '2px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '10px',
                transition: 'all 0.35s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#e8c07a'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(207,162,93,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#cfa25d'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              EXPLORE PRODUCTS <span style={{ fontSize: '16px' }}>→</span>
            </button>

            <button
              onClick={() => navigate('/contact')}
              style={{
                background: 'transparent', color: 'white',
                border: '1.5px solid rgba(255,255,255,0.35)',
                padding: '15px 32px', fontFamily: 'Inter', fontWeight: 700,
                fontSize: '13px', letterSpacing: '2px', cursor: 'pointer',
                transition: 'all 0.35s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#cfa25d'; e.currentTarget.style.color = '#cfa25d'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = 'white'; }}
            >
              GET A QUOTE
            </button>
          </motion.div>
        </div>
      </div>

      {/* Feature Bar */}
      <div className="relative z-20 w-full" style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="hero-feature-bar" style={{ maxWidth: '1300px', margin: '0 auto', padding: '22px clamp(24px, 6vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
          {[
            { icon: icons.quality, title: 'Premium Quality', sub: 'Best in class materials' },
            { icon: icons.weather, title: 'Weather Resistant', sub: 'Built for all climates' },
            { icon: icons.time, title: 'Long Lasting', sub: 'Engineered for durability' },
            { icon: icons.house, title: 'Low Maintenance', sub: 'Easy to clean & maintain' },
            { icon: icons.support, title: 'Expert Support', sub: 'Dedicated technical support' },
          ].map((item, i) => (
            <div 
              key={i} 
              className="hero-feature-item"
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 16px',
                borderRight: i < 4 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div style={{ flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '11px', color: 'white', letterSpacing: '0.5px', marginBottom: '3px', textTransform: 'uppercase' }}>{item.title}</div>
                <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '10px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.3px' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;
