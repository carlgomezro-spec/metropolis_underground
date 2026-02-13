# Metropolis Underground - Landing Page

> Promotional landing page for the modernized Metropolis Underground metro app

[**View Live Demo →**](https://metropolis-underground.onrender.com)

---

## 📋 Problem Statement & Value Proposition

The Metropolis Underground app solves a critical commuter pain point: **uncertainty during transit**. Users gain immediate access to real-time train frequencies, incident alerts, and journey planning—all within 10 seconds of opening the app. The landing page focuses on communicating this instant value through a clear, scannable structure.

---

## 🏗️ Information Architecture & User Journey

I structured the page following a **progressive disclosure pattern**:

### 1. Hero Section
Immediate value proposition with primary CTA ("Download the app"). The headline emphasizes modernization while the subheadline focuses on the core benefit—smarter, stress-free travel.

### 2. Features Carousel
Instead of overwhelming users with all capabilities, I highlighted **3 essential features** in a swipeable carousel format. This keeps mobile users engaged while desktop users get visual storytelling through full-screen imagery. Each slide pairs app screenshots with benefit-focused copy.

### 3. Highlights Section
Secondary features (entry/exit tracking, cash balance, card status, passenger density) are presented through clean iconography, avoiding information overload while building credibility.

### 4. Social Proof
A brief testimonials section reinforces trust without competing with the primary CTAs.

### 5. Footer CTA
Final conversion opportunity with app store buttons and essential links.

---

## 🎯 Conversion Strategy

I implemented a **three-tier CTA approach** to maximize conversion opportunities throughout the user journey:

- **Hero CTA**: Captures users convinced immediately by the value proposition
- **Features CTAs**: Converts users after they've explored specific functionality ("Know More" buttons in each carousel slide)
- **Footer CTA**: Final opportunity for users who scrolled through the entire page and need one last nudge

This strategic placement ensures we meet users at different stages of consideration without feeling pushy or repetitive.

---

## 💻 Technical & UX Decisions

### Mobile-First Approach
Given that metro users are primarily mobile, I designed for small screens first, then enhanced for desktop. The carousel adapts seamlessly—full-screen immersive slides on desktop, compact cards on mobile.

### Performance
WebP images, code splitting, and optimized React build ensure fast load times—crucial for users on-the-go with potentially weak connections. While React adds framework overhead, I minimized bundle size by avoiding state management libraries and keeping dependencies to essentials (Swiper for carousel, Lucide for icons).

### Accessibility
- Semantic HTML structure
- ARIA labels for carousel navigation and interactive elements
- Sufficient color contrast (WCAG AA)
- Descriptive alt text for all images
- Keyboard navigation support
- Responsive text sizing (rem units)

### Visual Consistency
Color palette draws from Cabify's design system (referenced in the brief) with modern grays reflecting metro infrastructure, accented by green CTAs for clear conversion paths.

---

## 📊 Trade-offs & Decisions

### Simplicity over Completeness
Featured only 3 main capabilities prominently in the carousel rather than listing all features, reducing cognitive load and maintaining visual impact.

### Carousel vs. Static Grid
Chose carousel for visual impact and storytelling, accepting the slight usability cost on desktop. The immersive full-screen format on desktop creates emotional engagement that a static grid wouldn't achieve.

### Interactive Route Planner
Considered adding an interactive metro line selector that would map routes between stations, but deferred this to future development. While it would showcase the app's functionality more directly, it risked overshadowing the primary goal (app downloads) and would require significant development time that exceeded the weekend scope. This feature belongs in the app itself rather than the marketing landing page.

---

## 🛠️ Tech Stack

- **React** - Component-based architecture
- **Vite** - Fast build tool and dev server
- **Swiper** - Touch-enabled carousel
- **Lucide React** - Lightweight icon system
- **CSS3** - Custom properties, Flexbox, Grid
- **WebP** - Optimized image format

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/metropolis-underground.git
cd metropolis-underground
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

---

## 🎨 Key Design Principles

1. **Clarity over Creativity**: Every design decision serves the primary goal—driving app downloads
2. **Mobile-First**: Optimized for the device users will actually use
3. **Progressive Disclosure**: Information revealed in digestible chunks
4. **Trust Building**: Social proof and transparency about features
5. **Performance**: Fast load times for users on-the-go

---

## 📝 Project Structure
```
metropolis-underground/
├── public/
│   └── (static assets served as-is)
├── src/
│   ├── assets/
│   │   └── (images, fonts, etc.)
│   ├── components/
│   │   ├── Features/
│   │   │   ├── Features.jsx
│   │   │   └── Features.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Highlights/
│   │   │   ├── Highlights.jsx
│   │   │   └── Highlights.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── RoutePlanner/
│   │   │   ├── RoutePlanner.jsx
│   │   │   └── RoutePlanner.css
│   │   └── Testimonials/
│   │       ├── Testimonials.jsx
│   │       └── Testimonials.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🧪 Testing & Optimization

- [x] Responsive design tested across devices (iPhone SE to desktop 1920px)
- [x] Cross-browser compatibility verified (Chrome, Firefox, Safari, Edge)
- [x] Accessibility audit with Chrome DevTools
- [x] Image optimization 

---

## 🔮 Future Enhancements

- A/B testing for CTA variations
- Multi-language support (Spanish/English toggle)
- Interactive route planner component
- Integration with app download analytics
- Enhanced micro-interactions and scroll animations
- Dark mode support

---

## 👤 Author

Carlos Gómez Rodríguez
- GitHub: https://github.com/carlgomezro-spec
- LinkedIn: https://www.linkedin.com/in/carlos-gomez-rodriguez

---

## 📄 License

This project was created as part of a design challenge for Metropolis Underground / Cabify.

---

**Time Investment**: ~10 hours over a weekend  
**Focus Areas**: User-centered design, conversion optimization, performance, and accessibility

---

## 🙏 Acknowledgments

- Design system inspired by Cabify's brand guidelines
- Icons by Lucide
- Carousel functionality powered by Swiper.js
