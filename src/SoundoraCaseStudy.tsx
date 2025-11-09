import React from 'react';

const SoundoraCaseStudy: React.FC = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Poppins, sans-serif' }}>
      <h1>🎵 Soundora — Case Study</h1>
      <p>
        Soundora is a modern, minimalistic music experience app designed to bring emotion, rhythm, and simplicity together.
        This page showcases the design thinking process, wireframes, and final UI screens.
      </p>
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '6px',
          textDecoration: 'none'
        }}
      >
        📄 View My Resume
      </a>
    </div>
  );
};

export default SoundoraCaseStudy;
