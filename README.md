# Valentine's Day 2026 💖

A beautifully designed, interactive Valentine's Day proposal page with romantic pink/purple/orange theme and sequential storytelling.

## ✨ The Experience

This page creates a magical, interactive journey:

1. **💕 The Question**: "Will you be my Valentine?" appears with a heartbeat animation
2. **😢 Tears for No**: If she tries to click "No", the button runs away and tears rain down (the webpage is crying!)
3. **🎉 Yes Celebration**: When she clicks "Yes", a beautiful transition to the love meter
4. **💖 Love Scale**: She drags a smooth slider from 1-10 to show how much she loves you
5. **😊 Happy at 7+**: When she reaches 7 or more, happy emojis start raining from the sky
   - **Bigger, slower falling emojis** (easier to click!)
   - Some emojis show **"Click me!"** hints to guide her
   - **30 second timer** starts - she has time to click and enjoy the photos
6. **📸 Photo Magic**: Click any falling emoji to burst it and reveal your photos that scatter across the screen
7. **💝 Final Message** (after 30 seconds): "Let's make a memory out of tomorrow - February 14th, 2026"

## 🎨 Design Features

- **Romantic Color Palette**: Pink, purple, red, and orange gradients
- **Glass-morphism**: Modern frosted glass effects with backdrop blur
- **Smooth Animations**: Everything flows beautifully with cubic-bezier easing
- **High Quality UI**: Professional design that a designer would appreciate
- **Fully Responsive**: Perfect on desktop, tablet, and mobile

## Quick Start - Adding Your Photos

**IMPORTANT:** You need to add your own photos for the bubbles to work!

1. **Prepare your photos:**
   - Choose 3-5 photos of you two together
   - Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
   - Make sure they're web-friendly (under 2MB each, JPG or PNG format)

2. **Upload photos to GitHub:**
   - Upload them to the **same folder** as your HTML files
   - They should be in the root directory, not in a subfolder

3. **Update the photo list in `script.js`:**
   - Open `script.js`
   - Find the `photos` array (around line 17)
   - Make sure the filenames match your uploaded photos:
   ```javascript
   const photos = [
     'photo1.jpg',
     'photo2.jpg', 
     'photo3.jpg',
     // Add more as needed
   ];
   ```

**Example folder structure:**
```
your-repository/
├── index.html
├── styles.css
├── script.js
├── photo1.jpg  ← Your photos here!
├── photo2.jpg
├── photo3.jpg
└── README.md
```

## Live Demo

Once deployed, your page will be live at: `https://[your-username].github.io/[repository-name]/`

## How to Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `valentine-2026` or `be-my-valentine`
3. Make it **public** (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. Click "uploading an existing file" on your new repository page
2. Drag and drop these three files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Navigate to your project folder
cd path/to/your/valentine-files

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Valentine's Day page"

# Add your GitHub repository as remote
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your page will be live at: `https://[your-username].github.io/[repository-name]/`

### Step 4: Share the Link

Send the GitHub Pages URL to your girlfriend! 💕

## Customization

### Change Colors

Edit the CSS variables in `styles.css` (lines 10-18):

```css
:root {
  --primary: #ff6b9d;        /* Main pink color */
  --primary-dark: #ff4d85;   /* Darker pink */
  --secondary: #c44569;      /* Secondary color */
  /* ... more colors */
}
```

### Change Text

Edit the text directly in `index.html`:
- Line 23: Main heading
- Line 24: Subtitle
- Line 38: "Maybe not..." button text
- Line 76: Final message

### Add Images (Optional)

To add background images or photos:

1. Create an `images` folder in your repository
2. Upload your images
3. Reference them in CSS or HTML:

```css
/* In styles.css */
.container {
  background-image: url('images/your-photo.jpg');
  background-size: cover;
}
```

## Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Safari
- ✅ Firefox
- ✅ Mobile browsers (iOS/Android)

## Tips

- Test on mobile before sharing! The design is responsive but always good to check
- Consider customizing the final message with specific plans
- You can preview locally by opening `index.html` in a browser
- Make sure all three files (`index.html`, `styles.css`, `script.js`) are in the same folder

## Troubleshooting

**Page not loading?**
- Make sure repository is public
- Check that all files are in the root directory (not in a subfolder)
- Wait a few minutes after enabling Pages

**Styles not showing?**
- Verify `styles.css` and `script.js` are in the same folder as `index.html`
- Check browser console for errors (F12)

**Photos not showing in bubbles?**
- Make sure photos are uploaded to the root directory (same folder as index.html)
- Check that filenames in `script.js` exactly match your uploaded files (case-sensitive!)
- Try opening your GitHub Pages URL in an incognito window (clears cache)
- Verify photo file sizes aren't too large (keep under 2MB each)
- Check browser console (F12) for any loading errors

**Bubbles not appearing?**
- They only start when the slider reaches 7 or higher
- Try moving the slider to 7, 8, 9, or 10
- Wait a few seconds - bubbles appear every 2 seconds

**Want to update?**
- Just edit files on GitHub directly or push new commits
- Changes may take 1-2 minutes to appear on live site
- Clear browser cache or use incognito mode to see updates immediately

## Credits

Made with 💖 for Valentine's Day 2026

---

Good luck! 🍀
