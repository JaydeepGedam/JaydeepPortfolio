import { useEffect } from 'react';

export const useKeyboardShortcuts = ({
  onToggleExplorer,
  onToggleTerminal,
  onToggleSearch,
  onShowThemeModal,
  onCloseTab,
  onEscape
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + Shift + E - Toggle Explorer
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyE') {
        e.preventDefault();
        onToggleExplorer();
      }

      // Ctrl/Cmd + ` - Toggle Terminal
      if ((e.ctrlKey || e.metaKey) && e.code === 'Backquote') {
        e.preventDefault();
        onToggleTerminal();
      }

      // Ctrl/Cmd + Shift + P - Theme Palette
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyP') {
        e.preventDefault();
        onShowThemeModal();
      }

      // Ctrl/Cmd + Shift + F - Search
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyF') {
        e.preventDefault();
        onToggleSearch();
      }

      // Ctrl/Cmd + W - Close tab
      if ((e.ctrlKey || e.metaKey) && e.code === 'KeyW') {
        e.preventDefault();
        onCloseTab();
      }

      // Escape - Close modals
      if (e.code === 'Escape') {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    onToggleExplorer,
    onToggleTerminal,
    onToggleSearch,
    onShowThemeModal,
    onCloseTab,
    onEscape
  ]);
};
