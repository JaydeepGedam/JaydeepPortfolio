import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const SearchPanel = ({ query, onQueryChange, onFileOpen }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchableContent = {
      'about.md': `${portfolioData.developer.name} ${portfolioData.developer.role} ${portfolioData.developer.bio} ${portfolioData.developer.location}`,
      'experience.js': portfolioData.experience.map(exp => `${exp.position} ${exp.company} ${exp.description}`).join(' '),
      'projects.tsx': portfolioData.projects.map(proj => `${proj.title} ${proj.description} ${proj.technologies.join(' ')}`).join(' '),
      'education.py': portfolioData.education.map(edu => `${edu.degree} ${edu.institution}`).join(' '),
      'skills.css': Object.values(portfolioData.skills).flat().join(' '),
      'contact.html': `${portfolioData.developer.email} ${portfolioData.developer.phone} ${portfolioData.developer.location}`
    };

    const searchResults = [];
    Object.entries(searchableContent).forEach(([fileName, content]) => {
      if (content.toLowerCase().includes(query.toLowerCase())) {
        searchResults.push({
          file: fileName,
          snippet: content.substring(0, 100) + '...'
        });
      }
    });

    setResults(searchResults);
  }, [query]);

  return (
    <div className="search-content">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search..." 
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        id="searchInput"
      />
      <div className="search-results">
        {results.map(result => (
          <div 
            key={result.file}
            className="search-result"
            onClick={() => onFileOpen(result.file)}
          >
            <strong>{result.file}</strong>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
              {result.snippet}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPanel;
