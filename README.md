# Vivek Raj - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Software Engineer specializing in Disaster Recovery, Cloud Infrastructure, and Distributed Systems.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Sections Include**:
  - Hero section with social links
  - About me with key highlights
  - Education timeline
  - Work experience with achievements
  - Projects showcase (Druva DR, Easebuzz SDK, Linux Peekaboo, IITB Services)
  - Skills & expertise
  - Photo gallery
  - Contact form

## 🚀 Quick Start

1. **Add Your Images**:
   - Create `assets/images/` folder
   - Add your profile photo as `profile.jpg`
   - Add project images: `druva-dr.jpg`, `easebuzz-sdk.jpg`, `linux-peekaboo.jpg`, `iitb-services.jpg`
   - Add gallery photos: `nainital.jpg`, `ranikhet.jpg`, `goa.jpg`, `campus.jpg`

2. **Add Your Resume**:
   - Place your resume PDF as `assets/resume.pdf`

3. **Update Social Links**:
   - Open `index.html`
   - Update LinkedIn, GitHub, and other social media URLs (search for `https://www.linkedin.com/in/vivek-raj` and update)

4. **Open the Portfolio**:
   - Simply open `index.html` in your browser to view locally
   - Or deploy to GitHub Pages (see below)

## 📁 File Structure

```
.
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styles and animations
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   ├── images/         # Your photos and project images
│   └── resume.pdf      # Your resume
└── README.md           # This file
```

## 🌐 Deploy to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Your site will be live at `https://vivek-raj-iitb.github.io/`

## ✏️ Customization Tips

### Update Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

### Modify Contact Form
The contact form currently shows an alert. To connect it to a backend:
- Uncomment the fetch API code in `js/main.js` (around line 65)
- Add your backend endpoint URL

### Add More Projects
Copy a project card in `index.html` and update:
- Image source
- Project title and description
- Tech tags
- Links

## 🔗 Important Links

- **Current Work**: [Druva DR Solutions](https://www.druva.com/use-cases/cloud-disaster-recovery)
- **Published SDK**: [Easebuzz on PyPI](https://pypi.org/project/Easebuzz/)
- **GitHub**: Update with your actual GitHub profile URL
- **LinkedIn**: Update with your actual LinkedIn profile URL

## 📱 Contact Information

- **Email**: vivekraj7571@gmail.com
- **Phone**: +91 7895581444
- **Location**: Pune, India

## 🛠️ Technologies Used

- HTML5
- CSS3 (with modern features like Grid, Flexbox, CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Poppins)

## 📝 License

This portfolio is personal and proprietary. Feel free to use the structure as inspiration for your own portfolio.

---

**Built with ❤️ by Vivek Raj**
