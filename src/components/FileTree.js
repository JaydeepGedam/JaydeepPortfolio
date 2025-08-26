import React from 'react';
import { fileIcons } from '../data/portfolioData';

const FileTree = ({ onFileOpen, activeFile }) => {
  const files = [
    'about.md',
    'experience.js',
    'projects.tsx',
    'education.py',
    'skills.css',
    'contact.html'
  ];

  return (
    <div className="file-tree">
      {files.map(fileName => (
        <div 
          key={fileName}
          className={`file-item ${activeFile === fileName ? 'active' : ''}`}
          onClick={() => onFileOpen(fileName)}
        >
          <span className="file-icon">{fileIcons[fileName]}</span>
          <span className="file-name">{fileName}</span>
        </div>
      ))}
    </div>
  );
};

export default FileTree;
