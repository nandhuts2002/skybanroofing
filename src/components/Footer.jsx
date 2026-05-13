import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <footer style={{ background: '#0a0a0a', color: 'rgba(255,255,255,0.65)', padding: '80px 0 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ width: '40px', height: '28px' }}>
                <svg viewBox="0 0 100 60" fill="none" style={{ width: '100%', height: '100%' }}>
                  <path d="M50 5 L95 45 L82 45 L50 18 L18 45 L5 45 Z" fill="#cfa25d" />
                  <path d="M50 20 L72 40 L60 40 L50 30 L40 40 L28 40 Z" fill="#cfa25d" opacity="0.7" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'Italiana', fontWeight: 400, fontSize: '24px', letterSpacing: '3px', color: 'white', lineHeight: 1 }}>SKYBAN</div>
                <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '8px', letterSpacing: '3px', color: '#cfa25d', textTransform: 'uppercase', marginTop: '2px' }}>Roofing Systems</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', lineHeight: 1.75, maxWidth: '280px', marginBottom: '28px' }}>
              Setting the standard for luxury roofing systems with the unmatched durability of stone-coated steel.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    fontFamily: 'Inter',
                    fontSize: '10px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    letterSpacing: '0',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#cfa25d'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#cfa25d'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Collections</h4>
            {['Shingle', 'Shake', 'Classic', 'Bond', 'Roman'].map((item) => (
              <div key={item} style={{ marginBottom: '14px' }}>
                <Link
                  to="/products"
                  style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#cfa25d')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Company</h4>
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Our Process', to: '/services' },
              { label: 'Warranty', to: '/about' },
              { label: 'Certifications', to: '/about' },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: '14px' }}>
                <Link
                  to={item.to}
                  style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#cfa25d')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Contact</h4>
            <div style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              <p>skybanroofing@gmail.com</p>
              <p style={{ marginTop: '8px' }}>+91 9072512777</p>
              <p style={{ marginTop: '8px' }}>Alfa Horizon, Kochi, Kerala - 682504</p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              style={{
                marginTop: '24px',
                background: '#cfa25d',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                padding: '12px 24px',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#b88c4b'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#cfa25d'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Request a Sample
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '13px' }}>
            &copy; {currentYear} Skyban Roofing Systems. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#cfa25d')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
