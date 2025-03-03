# 🚀Markdown Editor

A sleek, modern in-browser markdown editor with real-time preview. This lightweight application allows you to create, edit, and export markdown documents with an intuitive interface and comprehensive formatting tools.

![Markdown Editor Screenshot](https://via.placeholder.com/800x450)

## Features

- **Real-time Preview**: See your markdown rendered instantly as you type
- **Comprehensive Formatting**: Full suite of markdown formatting options including:
  - Text styling (bold, italic, strikethrough)
  - Headings (H1, H2, H3)
  - Lists (bulleted, numbered, task lists)
  - Code blocks with syntax highlighting
  - Tables, quotes, and horizontal rules
  - Links and images
- **File Operations**: Open and save markdown files directly from your browser
- **Status Information**: Track character and word count, cursor position
- **Responsive Design**: Clean, dark-themed interface that works on various screen sizes
- **Keyboard Friendly**: Format text quickly with intuitive shortcuts

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required

### Installation

1. Clone this repository or download the ZIP file
```
git clone https://github.com/Adiwanwade/markdown-editor.git
```

2. Open `index.html` in your web browser

That's it! No build process, no dependencies to install.

## Usage

### Basic Editing

1. Type or paste markdown in the left panel
2. See the rendered output in the right panel
3. Use the toolbar buttons to quickly format your text

### Formatting Shortcuts

| Feature | Button | Description |
|---------|--------|-------------|
| Bold | B | Wraps selected text with `**` |
| Italic | I | Wraps selected text with `*` |
| Strikethrough | S | Wraps selected text with `~~` |
| Heading 1-3 | H1, H2, H3 | Adds #, ##, or ### before line |
| Lists | •, 1., ✓ | Creates bullet, numbered, or task lists |
| Quote | " | Adds > before line |
| Code | I<>, <>B | Inline code or code blocks |
| Link | A | Creates markdown link syntax |
| Image | I | Creates markdown image syntax |
| Horizontal Rule | — | Inserts `---` |
| Table | ≡ | Inserts table template |

### File Operations

- Click **Open** to load a markdown file from your device
- Click **Save** to download your current document as a .md file

## Technical Details

This editor is built with:

- **HTML5** for structure
- **CSS3** for styling
- **JavaScript** for functionality
- **Showdown.js** for markdown conversion
- **Font Awesome** for icons

No build tools, frameworks, or server-side code required.

## Customization

### Changing the Theme

Modify the color variables in `style.css` to customize the look:

```css
:root {
  --bg-color: #1e2130;
  --accent-color: #00b8d4;
  /* Add other color variables */
}
```

### Adding Markdown Extensions

The editor uses Showdown.js for markdown processing. You can enable additional extensions by modifying the converter options in `script.js`:

```javascript
const converter = new showdown.Converter({
  tables: true,
  tasklists: true,
  strikethrough: true,
  emoji: true,
  // Add other extensions here
});
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Showdown.js](https://github.com/showdownjs/showdown) for markdown conversion
- [Font Awesome](https://fontawesome.com/) for icons

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

<div align="center">

Made with ❤️ by Aditya wanwade

</div>