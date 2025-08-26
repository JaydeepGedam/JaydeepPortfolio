import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles/index.css';
import { portfolioData, fileIcons } from './data/portfolioData';

// Components
import TitleBar from './components/TitleBar';
import MenuBar from './components/MenuBar';
import Sidebar from './components/Sidebar';
import EditorArea from './components/EditorArea';
import Terminal from './components/Terminal';
import ThemeModal from './components/ThemeModal';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useTheme } from './hooks/useTheme';
import { useMobile } from './hooks/useMobile';

function App() {
  // State management
  const [activeFile, setActiveFile] = useState('about.md');
  const [openTabs, setOpenTabs] = useState(['about.md']);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [terminalVisible, setTerminalVisible] = useState(true);
  const [activeSidebarTab, setActiveSidebarTab] = useState('explorer');
  const [searchQuery, setSearchQuery] = useState('');
  const [themeModalVisible, setThemeModalVisible] = useState(false);

  // Custom hooks
  const { theme, setTheme } = useTheme();
  const { isMobile, isTablet } = useMobile();

  // Terminal ref
  const terminalInputRef = useRef(null);

  // Initialize mobile state
  useEffect(() => {
    if (isMobile) {
      setSidebarVisible(false);
    } else {
      setSidebarVisible(true);
    }
  }, [isMobile]);

  // File operations
  const openFile = useCallback((fileName) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs(prev => [...prev, fileName]);
    }
    setActiveFile(fileName);

    // Close mobile sidebar after opening file
    if (isMobile) {
      setSidebarVisible(false);
    }
  }, [openTabs, isMobile]);

  const closeTab = useCallback((fileName) => {
    if (openTabs.length <= 1) return; // Don't close last tab

    const tabIndex = openTabs.indexOf(fileName);
    const newOpenTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(newOpenTabs);

    // If closing active tab, switch to another
    if (activeFile === fileName) {
      const newActiveFile = newOpenTabs[Math.max(0, tabIndex - 1)];
      setActiveFile(newActiveFile);
    }
  }, [openTabs, activeFile]);

  // Sidebar operations
  const toggleSidebar = useCallback(() => {
    setSidebarVisible(prev => !prev);
  }, []);

  const switchSidebarTab = useCallback((tabName) => {
    setActiveSidebarTab(tabName);

    // Focus search input if search tab is opened
    if (tabName === 'search') {
      setTimeout(() => {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  }, []);

  // Terminal operations
  const toggleTerminal = useCallback(() => {
    setTerminalVisible(prev => {
      const newVisible = !prev;
      if (newVisible) {
        setTimeout(() => {
          if (terminalInputRef.current) {
            terminalInputRef.current.focus();
          }
        }, 100);
      }
      return newVisible;
    });
  }, []);

  // Theme operations
  const showThemeModal = useCallback(() => {
    setThemeModalVisible(true);
  }, []);

  const hideThemeModal = useCallback(() => {
    setThemeModalVisible(false);
  }, []);

  // Search operations
  const performSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  // Keyboard shortcuts
  useKeyboardShortcuts({
    onToggleExplorer: () => {
      switchSidebarTab('explorer');
      if (!sidebarVisible) {
        toggleSidebar();
      }
    },
    onToggleTerminal: toggleTerminal,
    onToggleSearch: () => {
      switchSidebarTab('search');
      if (!sidebarVisible) {
        toggleSidebar();
      }
    },
    onShowThemeModal: showThemeModal,
    onCloseTab: () => closeTab(activeFile),
    onEscape: () => {
      setThemeModalVisible(false);
      if (isMobile && sidebarVisible) {
        setSidebarVisible(false);
      }
    }
  });

  return (
    <div className="vscode-container" data-theme={theme}>
      <TitleBar 
        onThemeToggle={showThemeModal}
        onTitleClick={() => openFile('about.md')}
      />

      <MenuBar 
        onToggleSidebar={toggleSidebar}
        onToggleTerminal={toggleTerminal}
        isMobile={isMobile}
        sidebarVisible={sidebarVisible}
        onToggleMobileSidebar={() => setSidebarVisible(prev => !prev)}
      />

      <div className="main-content">
        {/* Sidebar overlay for mobile */}
        <div 
          className={`sidebar-overlay ${sidebarVisible && isMobile ? 'active' : ''}`}
          onClick={() => setSidebarVisible(false)}
        />

        <Sidebar 
          visible={sidebarVisible}
          activeTab={activeSidebarTab}
          onTabChange={switchSidebarTab}
          onFileOpen={openFile}
          activeFile={activeFile}
          searchQuery={searchQuery}
          onSearchChange={performSearch}
          isMobile={isMobile}
        />

        <EditorArea 
          activeFile={activeFile}
          openTabs={openTabs}
          onFileChange={setActiveFile}
          onTabClose={closeTab}
          onFileOpen={openFile}
        />
      </div>

      <Terminal 
        visible={terminalVisible}
        onToggle={toggleTerminal}
        onFileOpen={openFile}
        inputRef={terminalInputRef}
        currentTheme={theme}
        onThemeChange={setTheme}
      />

      <ThemeModal 
        visible={themeModalVisible}
        onClose={hideThemeModal}
        currentTheme={theme}
        onThemeChange={setTheme}
      />
    </div>
  );
}

export default App;
