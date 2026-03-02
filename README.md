# Meron Muluye Amare - Portfolio Website

A sophisticated, minimalist portfolio website showcasing machine learning and data science projects with Japanese-inspired design aesthetics.

## 🎨 Design Philosophy

This portfolio embodies **Japanese minimalism meets technical precision**:
- Clean lines and purposeful whitespace
- Typography as the primary design element
- Subtle sophistication through minimal interactions
- Timeless elegance over trendy aesthetics

## 🚀 Features

- **Responsive Design**: Mobile-first approach with elegant desktop layouts
- **Typography-First**: EB Garamond headings with Inter body text for optimal readability
- **Performance Optimized**: Pure HTML/CSS/JavaScript with no build step required
- **Accessibility**: Semantic HTML5, keyboard navigation, and screen reader support
- **Print-Ready**: Optimized print styles for professional resume printing
- **Smooth Interactions**: Subtle hover states and smooth scrolling

## 📁 Project Structure

```
meron-portfolio/
├── index.html              # Main portfolio page
├── resume.html             # Professional resume page
├── css/
│   └── main.css           # All styles with CSS variables
├── js/
│   └── main.js            # Interactive functionality
├── images/
│   ├── projects/          # Project screenshots
│   │   ├── self-rag.jpg
│   │   ├── creditrust.jpg
│   │   ├── shap.jpg
│   │   └── fraud.jpg
│   └── profile/           # Profile images (if needed)
├── docs/
│   └── Meron_Resume.pdf   # Downloadable resume
└── README.md              # This file
```

## 🎯 Key Design Elements

### Color Palette
```css
--background: #ffffff        /* Pure white */
--surface: #fafafa           /* Off-white for sections */
--text-primary: #1a1a1a      /* Nearly black text */
--text-secondary: #4b5563    /* Soft gray */
--accent: #2c3e50            /* Deep slate blue */
--border: #e5e7eb            /* Very light gray */
```

### Typography
- **Headings**: EB Garamond (classic, timeless serif)
- **Body**: Inter (clean, highly readable sans-serif)
- **Code**: JetBrains Mono (technical tags)
- **Modular Scale**: 1.25 ratio for harmonious sizing

### Layout Principles
- Maximum width: 1200px, centered
- Generous margins (minimum 2rem)
- Single column mobile, two-column desktop for projects
- Minimal borders (1px) instead of shadows
- Content never full-bleed

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern features with CSS variables
- **Vanilla JavaScript**: No frameworks, pure performance
- **Google Fonts**: EB Garamond, Inter, JetBrains Mono
- **No Build Process**: Static files ready for deployment

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Single column layout
- **Desktop**: ≥ 768px - Two-column project grid
- **Large Desktop**: ≥ 1200px - Maximum content width

## 🚀 Deployment

### GitHub Pages
1. Push to `main` branch
2. Enable GitHub Pages in repository settings
3. Select source as "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder

### Netlify/Vercel
1. Connect repository
2. Set build command to empty (no build step)
3. Set publish directory to `/`
4. Deploy automatically on push

## 🎨 Customization

### Adding New Projects
1. Add screenshot to `images/projects/`
2. Copy existing project card structure in `index.html`
3. Update project details, tech stack, and achievements
4. Ensure GitHub link is correct

### Updating Skills
Edit the skills section in both `index.html` and `resume.html` to maintain consistency.

### Color Scheme
Modify CSS variables in `css/main.css`:
```css
:root {
  --accent: #your-color;
  --text-primary: #your-text-color;
  /* etc */
}
```

## 📊 Performance

- **Lighthouse Scores**: >90 for Performance, Accessibility, SEO
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Minimal due to pure HTML/CSS/JS
- **Loading**: Lazy loading for images, font preloading

## ♿ Accessibility Features

- Semantic HTML5 structure
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader friendly
- Focus management
- High contrast colors
- Print styles for low-vision users

## 🔄 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Android Chrome)

## 📝 License

This portfolio is open source and available under the MIT License.

---

**Created with attention to detail and commitment to elegant, functional design.**
