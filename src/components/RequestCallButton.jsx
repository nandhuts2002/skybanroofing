import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RequestCallButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', type: 'callback_request' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://formspree.io/f/xeenlvwo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Floating Animated Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '20px',
          zIndex: 8999,
          background: 'linear-gradient(135deg, #cfa25d, #b88c4b)',
          border: 'none',
          borderRadius: '9999px',
          padding: '14px 22px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 12px 32px rgba(207,162,93,0.4)',
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: '14px',
          color: 'white',
        }}
      >
        {/* Continuous Pulse Animation */}
        <motion.div
          animate={{ boxShadow: ['0 0 0 0px rgba(207,162,93,0.6)', '0 0 0 24px rgba(207,162,93,0)'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          style={{ position: 'absolute', inset: 0, borderRadius: '9999px', zIndex: -1 }}
        />
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </motion.div>
        <span className="hidden md:inline">Request a Call</span>
      </motion.button>

      {/* Glassmorphism Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 10000,
              background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 20, scale: 0.9, rotateX: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                background: 'rgba(25, 40, 64, 0.85)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px', padding: '40px', width: '100%', maxWidth: '400px',
                position: 'relative', boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
                perspective: '1000px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)} 
                style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              
              <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '28px', color: 'white', marginBottom: '12px' }}>Request a Callback</h3>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '32px', lineHeight: 1.6 }}>Leave your details below and one of our premium roofing experts will contact you shortly.</p>

              {status === 'success' ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '20px 0' }}>
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1 }}
                    style={{ fontSize: '56px', marginBottom: '20px' }}
                  >
                    📞
                  </motion.div>
                  <h4 style={{ color: 'white', fontFamily: 'Playfair Display', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>We'll be in touch!</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter', fontSize: '14px', lineHeight: 1.6 }}>Thank you, your callback request has been prioritized.</p>
                  <motion.button 
                    onClick={() => { setStatus('idle'); setIsOpen(false); }}
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    style={{ marginTop: '24px', background: 'transparent', color: '#cfa25d', border: '1px solid #cfa25d', borderRadius: '9999px', padding: '10px 24px', fontFamily: 'Inter', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {status === 'error' && (
                    <div style={{ color: '#ffb3b3', fontSize: '13px', background: 'rgba(255,80,80,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,80,80,0.3)' }}>
                      Something went wrong. Please try again.
                    </div>
                  )}
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter', fontSize: '11px', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Your Name</label>
                    <input type="text" required placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '12px', color: 'white', outline: 'none', fontFamily: 'Inter', fontSize: '14px', transition: 'border-color 0.2s' }} onFocus={e => e.target.style.borderColor = 'rgba(207,162,93,0.5)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter', fontSize: '11px', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Phone Number</label>
                    <input type="tel" required placeholder="+91 00000 00000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '12px', color: 'white', outline: 'none', fontFamily: 'Inter', fontSize: '14px', transition: 'border-color 0.2s' }} onFocus={e => e.target.style.borderColor = 'rgba(207,162,93,0.5)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                  <motion.button type="submit" disabled={status === 'loading'} whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(207,162,93,0.3)' }} whileTap={{ scale: 0.98 }} style={{ marginTop: '8px', background: 'linear-gradient(135deg, #cfa25d, #b88c4b)', color: 'white', border: 'none', padding: '16px', borderRadius: '12px', fontFamily: 'Inter', fontWeight: 700, fontSize: '15px', cursor: 'pointer', opacity: status === 'loading' ? 0.7 : 1, transition: 'opacity 0.2s' }}>
                    {status === 'loading' ? 'Requesting...' : 'Call Me Back →'}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
