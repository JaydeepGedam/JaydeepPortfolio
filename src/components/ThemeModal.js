import React from 'react';

const ThemeModal = ({ visible, onClose, currentTheme, onThemeChange }) => {
  const themes = [
    { name: 'dark', preview: 'dark-preview', label: 'Dark' },
    { name: 'light', preview: 'light-preview', label: 'Light' },
    { name: 'blue', preview: 'blue-preview', label: 'Blue' },
    { name: 'green', preview: 'green-preview', label: 'Green' }
  ];

  const handleThemeSelect = (theme) => {
    onThemeChange(theme);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Choose Theme</h3>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="theme-options">
            {themes.map(theme => (
              <button 
                key={theme.name}
                className="theme-option"
                onClick={() => handleThemeSelect(theme.name)}
              >
                <div className={`theme-preview ${theme.preview}`}></div>
                <span>{theme.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;
