import React from 'react';

const TitleBar = ({ onThemeToggle, onTitleClick }) => {
  return (
    <div className="title-bar">
      <div className="title-left" onClick={onTitleClick} style={{ cursor: 'pointer' }}>
        <div className="logo">JD</div>
        <span className="title-text">Jaydeep Gedam - Portfolio</span>
      </div>
      <div className="title-controls">
        <button 
          className="control-btn theme-toggle" 
          onClick={onThemeToggle}
          title="Change Theme"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 4a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zM8 2a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6z"/>
            <circle cx="8" cy="8" r="3"/>
          </svg>
        </button>
        <button className="control-btn minimize">_</button>
        <button className="control-btn maximize">□</button>
        <button className="control-btn close">×</button>
      </div>
    </div>
  );
};

export default TitleBar;
