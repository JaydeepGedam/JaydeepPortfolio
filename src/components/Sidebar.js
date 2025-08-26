import React from 'react';
import FileTree from './FileTree';
import SearchPanel from './SearchPanel';

const Sidebar = ({ visible, activeTab, onTabChange, onFileOpen, activeFile, searchQuery, onSearchChange, isMobile }) => {
  const sidebarClass = `sidebar ${!visible ? 'hidden' : ''} ${visible && isMobile ? 'active' : ''}`;

  return (
    <div className={sidebarClass}>
      <div className="sidebar-tabs">
        <button 
          className={`sidebar-tab ${activeTab === 'explorer' ? 'active' : ''}`}
          onClick={() => onTabChange('explorer')}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM1.5 4h13v8h-13V4z"/>
          </svg>
          <span className="tab-text">Explorer</span>
        </button>
        <button 
          className={`sidebar-tab ${activeTab === 'search' ? 'active' : ''}`}
          onClick={() => onTabChange('search')}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <span className="tab-text">Search</span>
        </button>
      </div>

      <div className="sidebar-content">
        <div className={`sidebar-panel ${activeTab === 'explorer' ? 'active' : ''}`}>
          <div className="panel-header">
            <span>EXPLORER</span>
          </div>
          <FileTree onFileOpen={onFileOpen} activeFile={activeFile} />
        </div>

        <div className={`sidebar-panel ${activeTab === 'search' ? 'active' : ''}`}>
          <div className="panel-header">
            <span>SEARCH</span>
          </div>
          <SearchPanel 
            query={searchQuery}
            onQueryChange={onSearchChange}
            onFileOpen={onFileOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
