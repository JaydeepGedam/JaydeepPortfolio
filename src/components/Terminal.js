import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const Terminal = ({ visible, onToggle, onFileOpen, inputRef, currentTheme, onThemeChange }) => {
  const [output, setOutput] = useState([
    "Welcome to Jaydeep's Portfolio Terminal!",
    "Type 'help' to see available commands."
  ]);
  const [inputValue, setInputValue] = useState('');
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const commands = {
    help: () => {
      return `Available commands:
• help - Show this help message
• about - Show about information
• skills - List all skills
• projects - Show projects
• education - Show education details
• experience - Show work experience
• contact - Show contact information
• clear - Clear terminal
• theme [dark|light|blue|green] - Change theme
• open [filename] - Open file (e.g., open about.md)
• ls - List all files
• pwd - Show current location
• whoami - Show developer info`;
    },

    about: () => {
      onFileOpen('about.md');
      return `Opening about.md...
${portfolioData.developer.name} - ${portfolioData.developer.role}
${portfolioData.developer.bio}`;
    },

    skills: () => {
      onFileOpen('skills.css');
      let output = 'Skills loaded!\n\n';
      Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        output += `${category.toUpperCase()}:\n`;
        skills.forEach(skill => output += `  • ${skill}\n`);
        output += '\n';
      });
      return output;
    },

    projects: () => {
      onFileOpen('projects.tsx');
      let output = 'Projects loaded!\n\n';
      portfolioData.projects.forEach(project => {
        output += `${project.icon} ${project.title} (${project.year})\n`;
        output += `  Status: ${project.status}\n`;
        output += `  Tech: ${project.technologies.join(', ')}\n\n`;
      });
      return output;
    },

    education: () => {
      onFileOpen('education.py');
      let output = 'Education loaded!\n\n';
      portfolioData.education.forEach(edu => {
        output += `${edu.degree}\n`;
        output += `${edu.institution} (${edu.duration})\n`;
        output += `Grade: ${edu.grade}\n\n`;
      });
      return output;
    },

    experience: () => {
      onFileOpen('experience.js');
      let output = 'Experience loaded!\n\n';
      portfolioData.experience.forEach(exp => {
        output += `${exp.position} at ${exp.company}\n`;
        output += `${exp.year} • ${exp.duration}\n`;
        output += `${exp.description}\n\n`;
      });
      return output;
    },

    contact: () => {
      onFileOpen('contact.html');
      return `Contact information loaded!

📧 Email: ${portfolioData.developer.email}
📱 Phone: ${portfolioData.developer.phone}
📍 Location: ${portfolioData.developer.location}
🔗 LinkedIn: ${portfolioData.developer.linkedin}
💻 GitHub: ${portfolioData.developer.github}`;
    },

    clear: () => {
      setOutput([]);
      return '';
    },

    theme: (args) => {
      const themes = ['dark', 'light', 'blue', 'green'];
      const theme = args[0];

      if (!theme) {
        return `Current theme: ${currentTheme}
Available themes: ${themes.join(', ')}
Usage: theme [theme-name]`;
      }

      if (themes.includes(theme)) {
        onThemeChange(theme);
        return `Theme changed to ${theme}`;
      }

      return `Invalid theme. Available themes: ${themes.join(', ')}`;
    },

    open: (args) => {
      const fileName = args[0];
      const validFiles = ['about.md', 'experience.js', 'projects.tsx', 'education.py', 'skills.css', 'contact.html'];

      if (!fileName) {
        return 'Usage: open [filename]\nValid files: ' + validFiles.join(', ');
      }

      if (validFiles.includes(fileName)) {
        onFileOpen(fileName);
        return `Opening ${fileName}...`;
      }

      return `File not found. Valid files: ${validFiles.join(', ')}`;
    },

    ls: () => {
      const files = [
        '📄 about.md',
        '📜 experience.js', 
        '⚛️ projects.tsx',
        '🐍 education.py',
        '🎨 skills.css',
        '📧 contact.html'
      ];
      return 'Files in portfolio:\n' + files.join('\n');
    },

    pwd: () => {
      return '/home/jaydeep/portfolio';
    },

    whoami: () => {
      return portfolioData.developer.name + ' - ' + portfolioData.developer.role;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const input = inputValue.trim();
      const parts = input.split(' ');
      const command = parts[0].toLowerCase();
      const args = parts.slice(1);

      // Add command to output
      const newOutput = [...output, `jaydeep@portfolio:~$ ${input}`];

      // Execute command
      if (commands[command]) {
        const result = commands[command](args);
        if (result) {
          newOutput.push(result);
        }
      } else if (input) {
        newOutput.push(`Command not found: ${command}. Type 'help' for available commands.`);
      }

      setOutput(newOutput);
      setInputValue('');
    }
  };

  return (
    <div className={`terminal ${!visible ? 'hidden' : ''}`}>
      <div className="terminal-header">
        <span>TERMINAL</span>
        <button className="terminal-close" onClick={onToggle}>
          ×
        </button>
      </div>
      <div className="terminal-body">
        <div className="terminal-output" ref={outputRef}>
          {output.map((line, index) => (
            <div key={index} className="terminal-line">
              {line.split('\n').map((subLine, subIndex) => (
                <div key={subIndex}>{subLine}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="terminal-input-line">
          <span className="terminal-prompt">jaydeep@portfolio:~$ </span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
