# MIT African Graduate Association Website

A modern, responsive website for the MIT African Graduate Association (MIT AGA) featuring beautiful design, smooth animations, and professional presentation.

## Features

### 🎨 **Modern Design**

- Clean, professional layout with MIT-inspired color scheme
- Responsive design that works on all devices
- Smooth animations and hover effects
- Beautiful gradient backgrounds and typography

### 📱 **Fully Responsive**

- Mobile-first design approach
- Hamburger menu for mobile devices
- Optimized layouts for tablets and desktops
- Touch-friendly navigation

### ⚡ **Interactive Elements**

- Smooth scrolling navigation
- Active section highlighting
- Fade-in animations on scroll
- Counter animations for statistics
- Hover effects on cards and buttons
- Typing effect on hero title
- Scroll progress indicator

### 📄 **Pages & Sections**

1. **Home/Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Us** - Mission, vision, and organization details with statistics
3. **Team** - Leadership team profiles with photos and bios
4. **Why MIT AGA** - Benefits and reasons to join the organization
5. **Footer** - Contact information and social links

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required - this is a static website

### Running the Website

1. Download all files to a folder
2. Open `index.html` in your web browser
3. The website will load immediately with all functionality

### Alternative: Local Server (Optional)

For the best experience, you can run it on a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Customization Guide

### Colors

The website uses a professional color scheme that can be easily modified in `styles.css`:

```css
/* Primary Colors */
--primary-blue: #3182ce;
--primary-dark: #1a365d;
--accent-purple: #667eea;
--accent-light: #764ba2;
```

### Content Updates

#### Team Members

To update team information, edit the team section in `index.html`:

```html
<div class="team-member">
  <div class="member-photo">
    <i class="fas fa-user"></i>
  </div>
  <h3>Name Here</h3>
  <p class="member-role">Position</p>
  <p class="member-dept">Department</p>
  <p class="member-bio">Bio description...</p>
</div>
```

#### Statistics

Update the statistics in the About section:

```html
<div class="stat-item">
  <div class="stat-number">50+</div>
  <div class="stat-label">Active Members</div>
</div>
```

#### Contact Information

Update contact details in the footer:

```html
<p><i class="fas fa-envelope"></i> your-email@mit.edu</p>
<p><i class="fas fa-map-marker-alt"></i> Your Location</p>
```

### Adding Photos

To add real photos instead of placeholder icons:

1. Add your images to the project folder
2. Replace the icon elements with `<img>` tags:

```html
<!-- Instead of: -->
<div class="member-photo">
  <i class="fas fa-user"></i>
</div>

<!-- Use: -->
<div class="member-photo">
  <img src="path/to/photo.jpg" alt="Member Name" />
</div>
```

3. Update the CSS for `.member-photo` to handle images:

```css
.member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized CSS with efficient selectors
- Minimal JavaScript for fast loading
- Responsive images and icons
- Smooth animations using CSS transforms
- Intersection Observer API for performance

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Drag and drop the folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. Get a custom domain or use the provided subdomain

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

## Future Enhancements

Potential features to add:

- Contact form with email integration
- Event calendar
- Blog/news section
- Member portal
- Photo gallery
- Newsletter signup
- Donation/payment integration

## Support

For questions or issues:

- Check the browser console for JavaScript errors
- Ensure all files are in the same directory
- Verify that external resources (fonts, icons) are loading

## License

This project is created for the MIT African Graduate Association. Feel free to modify and use as needed.

---

**Built with ❤️ for the MIT African Graduate Association**
