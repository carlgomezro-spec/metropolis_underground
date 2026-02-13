# Metropolis Underground - Landing Page

> Promotional landing page for the modernized Metropolis Underground metro app

## 📋 Overview

This project is a responsive landing page designed to showcase the new features of the Metropolis Underground (MU) metro app. The goal is to communicate the app's modernization and improvements to users through an engaging, accessible, and performant web experience.

## 🎯 Project Goals

- Present the new app features in a clear and attractive way
- Maintain brand consistency with MU's identity
- Ensure excellent user experience across all devices
- Optimize for performance and accessibility
- Demonstrate clean, maintainable code

## ✨ Key Features Highlighted

### Core Functionalities
- Real-time train frequency tracking
- Card recharge capability
- Balance checking
- Real-time incident notifications

### Additional Insights
- Entry and exit times by station
- Customer cash balance tracking
- Card status management (enabled/disabled/expired)
- Network incident alerts
- Average train pickup times
- Passengers per wagon statistics
- Customer density per station

## 🏗️ Structure

```
metropolis-underground/
├── index.html
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
├── design/
│   └── figma-file-link.md
└── README.md
```

## 🎨 Design Decisions

### Visual Approach
- **Color Palette**: Modern blues and grays reflecting metro infrastructure with accent colors for CTAs
- **Typography**: Clean san-serif fonts for readability and modern aesthetic
- **Layout**: Mobile-first responsive design with clear visual hierarchy
- **Imagery**: App screenshots and iconography to illustrate features

### User Experience
- **Progressive disclosure**: Information presented in digestible sections
- **Clear CTAs**: Prominent download buttons and navigation
- **Visual storytelling**: Features explained through icons and brief descriptions
- **Accessibility first**: WCAG 2.1 AA compliance

## 💻 Technical Stack

- **HTML5**: Semantic markup for better SEO and accessibility
- **CSS3**: Modern layout techniques (Flexbox/Grid), custom properties
- **Vanilla JavaScript**: Lightweight interactions, no heavy frameworks
- **Responsive Design**: Mobile-first approach with breakpoints at 768px, 1024px, 1440px

## ⚡ Performance Optimizations

- Optimized and compressed images (WebP with fallbacks)
- Minified CSS and JavaScript
- Lazy loading for images below the fold
- Critical CSS inlined for faster initial render
- Efficient font loading strategy

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Focus indicators for interactive elements
- Alt text for all images
- Responsive text sizing (rem units)

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local development server (optional but recommended)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/metropolis-underground.git
```

2. Navigate to the project directory
```bash
cd metropolis-underground
```

3. Open with a local server (recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

4. Open your browser and navigate to `http://localhost:8000`

Alternatively, simply open `index.html` directly in your browser.

## 📐 Design Files

The Figma design file includes:
- Complete visual design for all sections
- Component library
- Responsive layouts (mobile, tablet, desktop)
- Style guide (colors, typography, spacing)
- Interactive prototype

**[Link to Figma File]** _(insert your Figma share link here)_

## 🔍 Key Design Choices Explained

### 1. **Hero Section**
- Large, impactful headline communicating the modernization
- Clear value proposition immediately visible
- Prominent CTA to encourage downloads
- Visual of the app in context (mobile mockup)

### 2. **Features Grid**
- 2x2 grid on desktop, stacked on mobile
- Icon-driven design for quick scanning
- Brief, benefit-focused copy
- Hover states for engagement

### 3. **Insights Section**
- Data visualization to show app intelligence
- Trust-building through transparency
- Modern UI elements reflecting app quality

### 4. **App Screenshots**
- Carousel/slider to showcase multiple screens
- Real UI to set expectations
- Captions explaining each feature

### 5. **CTA Footer**
- Download buttons for both platforms
- Social proof or ratings if available
- Easy access to support information

## 📊 Trade-offs & Decisions

**Simplicity vs. Feature Showcase**
- Chose to highlight 4-5 main features prominently rather than overwhelming with all capabilities
- Additional insights presented more subtly to avoid information overload

**Visual Style**
- Modern, clean aesthetic over decorative elements
- Focus on usability and clarity
- Brand colors referenced from Cabify design system

**Technical Implementation**
- Vanilla JS over frameworks for lighter bundle size
- CSS Grid/Flexbox over older layout methods
- Progressive enhancement approach

## 🧪 Testing

- [x] Responsive design tested across devices
- [x] Cross-browser compatibility verified
- [x] Accessibility audit with axe DevTools
- [x] Performance testing with Lighthouse
- [x] Form validation (if applicable)

## 📝 Future Enhancements

- Add animations for feature reveals on scroll
- Implement A/B testing for CTA variations
- Multi-language support
- Integration with app download analytics
- Enhanced micro-interactions


---

**Time Investment**: ~8-12 hours over a weekend  
**Focus Areas**: Design coherence, code quality, accessibility, and performance