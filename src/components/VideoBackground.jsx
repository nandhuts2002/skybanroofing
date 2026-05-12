import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * VideoBackground
 * Renders the roofing MP4 as a fixed, full-screen background video
 * that parallax-scrolls with the page. Includes a mute/unmute button.
 */
const VideoBackground = () => {
  const { scrollY } = useScroll();
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // Subtle parallax — the video drifts slightly slower than the page
  const videoY = useTransform(scrollY, [0, 1200], [0, 180]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  return (
    <>
      {/* ── Fixed video wrapper ─────────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-10%',
          left: 0,
          width: '100%',
          height: '120%',
          zIndex: 0,
          pointerEvents: 'none',
          y: videoY,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        >
          <source src={`${import.meta.env.BASE_URL}skyban-bg-full.mp4`} type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Overlay stack ────────────────────────────────────────── */}

      {/* 1. Primary dark veil */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(170deg, rgba(8,16,30,0.70) 0%, rgba(8,16,30,0.45) 50%, rgba(8,16,30,0.78) 100%)',
        }}
      />

      {/* 2. Gold radial accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 75% 20%, rgba(207,162,93,0.10) 0%, transparent 70%)',
        }}
      />

      {/* 3. Bottom vignette */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(8,14,26,0.90) 0%, transparent 40%)',
        }}
      />

      {/* ── Mute / Unmute button ─────────────────────────────────── */}
      <motion.button
        onClick={toggleMute}
        title={muted ? 'Unmute video' : 'Mute video'}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '28px',
          zIndex: 10,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1.5px solid rgba(207,162,93,0.55)',
          background: 'rgba(22,34,51,0.72)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#cfa25d',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          transition: 'border-color 0.2s, background 0.2s',
        }}
      >
        {muted ? (
          /* Muted icon — speaker with X */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          /* Unmuted icon — speaker with waves */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </motion.button>
    </>
  );
};

export default VideoBackground;
