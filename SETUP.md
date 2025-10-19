# Portfolio Setup Guide

## 📋 Checklist - Personalize Your Portfolio

### Step 1: Add Your Photos
Create the `assets/images/` directory and add these images:

- [ ] **Profile Photo** (`profile.jpg`) - Your professional headshot
- [ ] **Druva DR Project** (`druva-dr.jpg`) - Screenshot or banner of your DR work
- [ ] **Easebuzz SDK** (`easebuzz-sdk.jpg`) - SDK documentation or code screenshot
- [ ] **Linux Peekaboo** (`linux-peekaboo.jpg`) - Terminal or code screenshot
- [ ] **IITB Services** (`iitb-services.jpg`) - Application screenshot
- [ ] **Gallery Photos**:
  - `nainital.jpg` - Your photo from Nainital
  - `ranikhet.jpg` - Your photo from Ranikhet
  - `goa.jpg` - Your photo from Goa
  - `campus.jpg` - IIT Bombay campus photo

### Step 2: Add Your Resume
- [ ] Export your resume as PDF
- [ ] Save it as `assets/resume.pdf`

### Step 3: Update Social Media Links

Open `index.html` and update these links (search for each URL):

1. **LinkedIn**: 
   - Find: `https://www.linkedin.com/in/vivek-raj`
   - Replace with: Your actual LinkedIn URL

2. **GitHub**: 
   - Find: `https://github.com/Vivek-Raj-IITB`
   - Keep as is (or update if different)

3. **Email**: 
   - Already set to: `vivekraj7571@gmail.com` ✓

4. **Phone**: 
   - Already set to: `+91 7895581444` ✓

### Step 4: Verify Project Links

Check these URLs in `index.html` are correct:

- [ ] Druva DR: `https://www.druva.com/use-cases/cloud-disaster-recovery`
- [ ] Easebuzz SDK: `https://pypi.org/project/Easebuzz/`
- [ ] Linux Peekaboo GitHub: Update with actual repo URL
- [ ] IITB Services GitHub: Update with actual repo URL

### Step 5: Test Locally
- [ ] Open `index.html` in Chrome/Firefox/Safari
- [ ] Check all sections load correctly
- [ ] Test navigation menu
- [ ] Click all social media links
- [ ] Test contact form
- [ ] Check mobile responsiveness (use browser dev tools)

### Step 6: Deploy to GitHub Pages

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio setup"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/Vivek-Raj-IITB/Vivek-Raj-IITB.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages:
1. Go to repository Settings
2. Click "Pages" in the sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://vivek-raj-iitb.github.io/`

## 🎨 Optional Customizations

### Change Color Scheme
Edit `css/style.css` (around line 12):
```css
:root {
    --primary-color: #6366f1;    /* Change to your preferred color */
    --secondary-color: #8b5cf6;  /* Gradient color */
    --accent-color: #ec4899;     /* Accent highlights */
}
```

### Add More Skills
In `index.html`, find the Skills section and add more skill tags:
```html
<span class="skill-tag">Your New Skill</span>
```

### Update Hero Background
To change the hero section gradient, edit `css/style.css` (around line 145):
```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in `assets/images/` folder
- Verify image file formats (jpg, png)

**Resume download not working?**
- Ensure `assets/resume.pdf` exists
- Check file name is exactly `resume.pdf`

**Contact form not working?**
- Currently shows an alert - this is normal
- To connect to email service, see comments in `js/main.js`

**Social links not working?**
- Check URLs are complete with `https://`
- Verify URLs are correct in `index.html`

## 📞 Need Help?

If you face any issues:
1. Check browser console for errors (F12)
2. Verify file paths are correct
3. Ensure all files are in the correct folders
4. Test in a different browser

---

**Happy Coding! 🚀**

