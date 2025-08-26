import React from 'react';
import { fileIcons } from '../data/portfolioData';

const TabBar = ({ openTabs, activeFile, onFileChange, onTabClose }) => {
  return (
    <div className="tab-bar">
      <div className="tabs-container">
        {openTabs.map(fileName => (
          <div 
            key={fileName}
            className={`tab ${activeFile === fileName ? 'active' : ''}`}
            onClick={() => onFileChange(fileName)}
          >
            <span className="tab-icon">{fileIcons[fileName]}</span>
            <span className="tab-name">{fileName}</span>
            {openTabs.length > 1 && (
              <button 
                className="tab-close"
                onClick={(e) => {
                  e.stopPropagation();
                  onTabClose(fileName);
                }}
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
