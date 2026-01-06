# Aroma Cafe - Business Website Project

A professional multi-page website built for Month 1 of the Web Development internship program. This project demonstrates mastery of HTML5, CSS Grid, Flexbox, SASS, JavaScript, accessibility, and responsive design principles.

## About This Project

Aroma Cafe is a modern coffee shop website featuring four pages with clean layouts, interactive elements, and full mobile responsiveness. The site showcases premium coffee offerings, company values, menu items, and contact information.

## Features

- **4 Complete Pages**: Home, About, Menu, and Contact
- **Semantic HTML5**: Proper use of header, nav, main, section, article, and footer tags
- **CSS Grid Layouts**: Used for features grid, showcase grid, menu grid, and team layouts
- **CSS Flexbox**: Navigation menu, footer layouts, and component alignment
- **SASS Organization**: Variables and mixins for maintainable CSS (examples included in scss/ folder)
- **JavaScript Interactions**:
  - Mobile menu toggle with smooth animations
  - Form validation with real-time error checking
  - Smooth scrolling for anchor links
  - Active navigation state management
- **Accessibility Features**:
  - Semantic HTML structure
  - ARIA labels and roles
  - Keyboard navigation support
  - Screen reader-friendly content
  - Proper heading hierarchy
  - Alt text for all images
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Performance Optimized**: Placeholder images, efficient CSS, minified code ready

## What I Learned

### HTML5 Structure
I learned how to use semantic HTML tags properly to create a well-structured, accessible website. The use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` makes the site more meaningful for both users and search engines.

### CSS Layouts
I mastered CSS Grid for complex two-dimensional layouts like the features section, menu grid, and showcase gallery. I used Flexbox for one-dimensional layouts like navigation menus and footer sections, understanding when each layout method is most appropriate.

### SASS Organization
I learned to organize CSS using SASS variables for colors, fonts, and spacing, and mixins for reusable styles. This makes the codebase more maintainable and scalable. Examples are included in the scss/ folder showing how to structure SASS files.

### JavaScript Interactivity
I added interactive features including a mobile menu toggle with proper ARIA attributes, real-time form validation with error messages, and smooth scrolling navigation. I learned how to manipulate the DOM and handle user events.

### Accessibility
I made sure the website works for everyone by adding proper ARIA labels, semantic markup, keyboard navigation support, and screen reader compatibility. I learned the importance of proper heading hierarchy and descriptive alt text.

### Responsive Design
I implemented mobile-first responsive design using media queries at 768px and 1024px breakpoints. The site adapts seamlessly from mobile phones to large desktop screens.

## Challenges & Solutions

### Challenge 1: Creating a fully responsive navigation menu
**Solution**: Implemented a hamburger menu for mobile devices using CSS transitions and JavaScript to toggle the menu. Used `aria-expanded` attribute for accessibility and proper keyboard navigation support.

### Challenge 2: Form validation with user-friendly error messages
**Solution**: Created a real-time validation system that checks fields on blur and provides immediate feedback. Used CSS classes to style error states and JavaScript to validate email format and required fields.

### Challenge 3: Organizing CSS for large multi-page website
**Solution**: Split CSS into three files (main.css for base styles, layout.css for grid/flexbox layouts, responsive.css for media queries) and created SASS examples showing how to use variables and mixins for better organization.

## Project Structure

\`\`\`
business-website/
├── index.html              (Homepage)
├── about.html              (About page)
├── services.html           (Menu page)
├── contact.html            (Contact page)
├── css/
│   ├── main.css           (Base styles, typography, buttons)
│   ├── layout.css         (Grid and Flexbox layouts)
│   └── responsive.css     (Mobile and tablet styles)
├── scss/
│   ├── variables.scss     (SASS variables example)
│   └── mixins.scss        (SASS mixins example)
├── js/
│   ├── main.js            (Menu toggle, navigation)
│   └── form-validation.js (Form validation logic)
└── README.md              (This file)
\`\`\`

## How to View This Website

1. Download or clone this repository
2. Open `index.html` in your web browser
3. Navigate between pages using the top navigation menu
4. Try resizing your browser to see the responsive design in action
5. Test the contact form validation on the Contact page

## Technical Details

### HTML5 Semantic Structure
- Proper document outline with semantic elements
- ARIA labels for improved accessibility
- Structured content hierarchy
- Valid HTML5 markup

### CSS Architecture
- **Grid Layouts**: Used for multi-column layouts (features, showcase, menu, team)
- **Flexbox Layouts**: Used for navigation, footer, and linear layouts
- **Custom Properties**: CSS variables for theme colors and spacing
- **Media Queries**: Breakpoints at 768px (mobile) and 1024px (tablet)

### JavaScript Features
- Event-driven menu toggle with smooth transitions
- Form validation with regex patterns for email and phone
- DOM manipulation for dynamic UI updates
- Smooth scrolling implementation

### Accessibility Implementation
- Semantic HTML for screen reader compatibility
- ARIA attributes for interactive elements
- Keyboard navigation support
- Proper color contrast ratios
- Focus states for all interactive elements

## Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Optimized images using placeholder system
- Efficient CSS with minimal redundancy
- JavaScript loaded at end of body for faster initial render
- Semantic HTML reduces complexity
- Ready for CSS/JS minification in production

## Future Enhancements

- Add image gallery with lightbox functionality
- Implement online ordering system
- Add customer reviews section
- Integrate Google Maps for location
- Add newsletter signup with email integration

## Credits

Built by Mable Sinkhonde for the Month 1 Web Development Internship Project (December 2025 Batch)

## License

This project is created for educational purposes as part of the Web Development internship program.
