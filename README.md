# Jaydeep Gedam Portfolio

A VS Code-inspired portfolio website built with React.js, showcasing the work and skills of Jaydeep Nitin Gedam, a Full Stack Developer, AI Engineer, and Prompt Engineer.

## Features

- 🎨 **VS Code Interface**: Authentic VS Code-like design with file explorer, tabs, and terminal
- 🌗 **Multiple Themes**: Dark, Light, Blue, and Green themes
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⌨️ **Keyboard Shortcuts**: VS Code-style shortcuts for navigation
- 🔍 **Search Functionality**: Search through portfolio content
- 💻 **Interactive Terminal**: Functional terminal with custom commands
- 🎯 **Smooth Animations**: Modern transitions and hover effects

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JaydeepGedam/portfolio-react.git
   cd portfolio-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Keyboard Shortcuts

- `Ctrl + Shift + E` - Toggle file explorer
- `Ctrl + \`` - Toggle terminal
- `Ctrl + Shift + P` - Open theme selector
- `Ctrl + Shift + F` - Focus search
- `Ctrl + W` - Close current tab
- `Escape` - Close modals

## Terminal Commands

- `help` - Show available commands
- `about` - Show about information
- `skills` - List all skills
- `projects` - Show projects
- `education` - Show education details
- `experience` - Show work experience
- `contact` - Show contact information
- `theme [name]` - Change theme (dark|light|blue|green)
- `open [file]` - Open specific file
- `ls` - List all files
- `clear` - Clear terminal

## Technologies Used

- **Frontend**: React.js, HTML5, CSS3
- **Styling**: CSS Custom Properties, CSS Grid, Flexbox
- **Build Tool**: Create React App
- **Icons**: Emoji icons for authentic feel
- **Fonts**: JetBrains Mono for code editor aesthetic

## Project Structure

```
src/
├── components/          # React components
│   ├── TitleBar.js     # VS Code title bar
│   ├── MenuBar.js      # Menu with dropdown options
│   ├── Sidebar.js      # File explorer and search
│   ├── EditorArea.js   # Main content area
│   ├── Terminal.js     # Interactive terminal
│   └── ThemeModal.js   # Theme selection modal
├── data/               # Portfolio data
│   └── portfolioData.js
├── hooks/              # Custom React hooks
│   ├── useTheme.js     # Theme management
│   ├── useMobile.js    # Responsive utilities
│   └── useKeyboardShortcuts.js
├── styles/             # CSS stylesheets
│   └── index.css       # Main stylesheet
├── App.js              # Main App component
└── index.js            # React entry point
```

## Customization

To customize this portfolio for your own use:

1. Update the portfolio data in `src/data/portfolioData.js`
2. Replace the developer information with your own
3. Add your projects, experience, education, and skills
4. Modify the theme colors in `src/styles/index.css`
5. Update the favicon and manifest files in the `public` folder

## Deployment

Build the project for production:

```bash
npm run build
```

The `build` folder contains the optimized production build ready for deployment.

## Browser Support

This portfolio supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

**Jaydeep Nitin Gedam**
- Email: jaydeep.gedam444@gmail.com
- LinkedIn: [linkedin.com/in/JaydeepGedam](https://linkedin.com/in/JaydeepGedam)
- GitHub: [github.com/JaydeepGedam](https://github.com/JaydeepGedam)

## Acknowledgments

- Inspired by Visual Studio Code interface
- Built with Create React App
- Icons and emojis for authentic developer experience
