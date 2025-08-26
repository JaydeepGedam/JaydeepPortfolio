import React from 'react';

const MenuBar = ({ 
  onToggleSidebar, 
  onToggleTerminal, 
  isMobile, 
  sidebarVisible, 
  onToggleMobileSidebar 
}) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="menu-bar">
      <div className="menu-left">
        <button 
          className={`mobile-menu-toggle ${sidebarVisible ? 'active' : ''}`}
          onClick={onToggleMobileSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div 
          className="menu-item dropdown" 
          ref={dropdownRef}
        >
          <span 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onMouseEnter={() => setDropdownOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            View
          </span>
          <div 
            className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button onClick={() => { onToggleSidebar(); setDropdownOpen(false); }}>Toggle Sidebar</button>
            <button onClick={() => { onToggleTerminal(); setDropdownOpen(false); }}>Toggle Terminal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
