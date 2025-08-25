# CNS Events - Professional Event Management Website

A modern, professional website for CNS Events, a premier event management company based in Didwana, Rajasthan. This website showcases their comprehensive event services with stunning animations, modern design, and professional user experience.

## ✨ Features

### 🎨 Modern Design
- **Professional Color Scheme**: Gold (#d4af37) and dark theme for elegance
- **Glassmorphism Effects**: Modern backdrop blur and transparency effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Custom Typography**: Inter font family for professional readability

### 🚀 Advanced Animations
- **Scroll-triggered Animations**: Elements animate as they come into view
- **Floating Elements**: Subtle floating animations for visual interest
- **Hover Effects**: Interactive hover states with smooth transitions
- **Particle Effects**: Dynamic background particles in hero section
- **Smooth Scrolling**: Seamless navigation between sections

### 🎯 Professional Components
- **Hero Section**: Full-screen hero with call-to-action buttons
- **Services Showcase**: Interactive service cards with category filtering
- **Contact Form**: Professional form with EmailJS integration
- **Footer**: Comprehensive footer with social links and newsletter
- **Navigation**: Fixed navbar with mobile menu and scroll effects

### 📱 Mobile Experience
- **Mobile Menu**: Hamburger menu for mobile devices
- **Touch-friendly**: Optimized for touch interactions
- **Responsive Images**: Images that scale properly on all devices
- **Performance**: Optimized loading and smooth animations

## 🛠️ Technology Stack

- **Frontend**: React 18 with modern hooks
- **Styling**: CSS3 with CSS Variables and Flexbox/Grid
- **Animations**: CSS animations and Intersection Observer API
- **Icons**: React Icons library
- **Forms**: EmailJS for contact form functionality
- **Routing**: React Router for navigation
- **Fonts**: Google Fonts (Inter)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone <repository-url>
cd cnsEvent
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
cnsEvent/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── Components/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Services/
│   │   ├── Gallery/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── Assets/
│   │   ├── images/
│   │   └── icon/
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary**: #1a1a1a (Dark)
- **Secondary**: #d4af37 (Gold)
- **Accent**: #8b0000 (Dark Red)
- **Text Light**: #ffffff (White)
- **Text Dark**: #333333 (Dark Gray)
- **Background**: #f8f9fa (Light Gray)

### Typography
- **Font Family**: Inter
- **Headings**: Bold weights (700-900)
- **Body**: Regular weights (300-500)
- **Line Height**: 1.6 for readability

### Spacing
- **Section Padding**: 80px (desktop), 60px (tablet), 40px (mobile)
- **Container Max Width**: 1200px
- **Gap Between Elements**: 20px, 30px, 40px, 50px

## 🔧 Customization

### Adding New Services
1. Add service data to `Services.jsx`
2. Include service image in `Assets/images/`
3. Update service categories if needed

### Modifying Colors
1. Update CSS variables in `App.css`
2. Colors are defined in `:root` section
3. All components use these variables

### Adding Animations
1. Use existing animation classes (fade-in, slide-in-left, etc.)
2. Add new animations in `App.css`
3. Apply with `useEffect` and Intersection Observer

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🚀 Performance Features

- **Lazy Loading**: Images load as they come into view
- **Optimized Animations**: Hardware-accelerated CSS animations
- **Efficient CSS**: CSS variables and modern layout techniques
- **Minimal Dependencies**: Only essential packages included

## 🔒 Security Features

- **Form Validation**: Client-side validation for all forms
- **XSS Protection**: React's built-in XSS protection
- **Secure Links**: External links open in new tabs with security attributes

## 📧 Contact Integration

- **EmailJS**: Professional email service integration
- **Form Validation**: Comprehensive form validation
- **Success/Error Handling**: User-friendly feedback messages
- **Loading States**: Visual feedback during form submission

## 🌟 Future Enhancements

- [ ] Blog section for event tips and stories
- [ ] Online booking system
- [ ] Customer testimonials
- [ ] Event calendar
- [ ] Multi-language support
- [ ] Advanced gallery with filtering
- [ ] SEO optimization
- [ ] Analytics integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to CNS Events. All rights reserved.

## 📞 Support

For support or questions about this website:
- **Email**: support@cnsevent.in
- **Phone**: 9001593567
- **Address**: सरस डेयरी, चुंगी चौकी, डीडवाना (341303)

---

**CNS Events** - Creating Unforgettable Moments, One Event at a Time ✨