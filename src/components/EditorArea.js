import React from 'react';
import TabBar from './TabBar';
import FileContent from './FileContent';

const EditorArea = ({ activeFile, openTabs, onFileChange, onTabClose, onFileOpen }) => {
  return (
    <div className="editor-area">
      <TabBar 
        openTabs={openTabs}
        activeFile={activeFile}
        onFileChange={onFileChange}
        onTabClose={onTabClose}
      />

      <div className="editor-content">
        <FileContent 
          activeFile={activeFile}
          onFileOpen={onFileOpen}
        />
      </div>
    </div>
  );
};

export default EditorArea;
