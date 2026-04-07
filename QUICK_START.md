# ⚡ Quick Start Guide

## 🎯 Get Your Portfolio Running in 5 Minutes

### Step 1: Install Dependencies (2 minutes)

```bash
cd /Users/vijayguntuku/Desktop/Vijay123g.github.io
npm install
```

Wait for all packages to install...

### Step 2: Add Your Resume (1 minute)

```bash
# Create the directory
mkdir -p public/assets/pdf

# Copy your resume to this location:
# public/assets/pdf/Vijay_Guntuku_Resume.pdf
```

**Important:** The resume file MUST be named exactly `Vijay_Guntuku_Resume.pdf`

### Step 3: Start Development Server (30 seconds)

```bash
npm run dev
```

Open browser: **http://localhost:3000**

### Step 4: See Your Portfolio! 🎉

You should now see your beautiful portfolio with:
- ✨ Smooth animations
- 🌗 Dark/Light theme toggle
- 📱 Fully responsive design
- 🚀 All sections loaded

---

## 🎨 Quick Customization Checklist

After it's running, customize these (in order of importance):

### High Priority ⭐⭐⭐

1. **Resume** - Add to `public/assets/pdf/`
2. **GitHub URLs** - Update in `components/sections/Projects.tsx` (line 30-72)
3. **Email** - Verify in all components (should be `vgunt003@odu.edu`)

### Medium Priority ⭐⭐

4. **Projects** - Add real GitHub links in `Projects.tsx`
5. **Skills** - Adjust if needed in `Skills.tsx`
6. **AI/LLM Content** - Customize in `LLMSection.tsx`

### Low Priority ⭐

7. **Colors** - Change theme in `tailwind.config.ts`
8. **Profile Image** - Add to `public/assets/img/` (optional)

---

## 🚀 Deploy When Ready

### Option 1: Vercel (Easiest - 2 minutes)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Done!** You'll get a live URL like: `your-portfolio.vercel.app`

### Option 2: Build Locally

```bash
npm run build
```

Deploy the `out/` folder to any static host (Netlify, GitHub Pages, etc.)

---

## ✅ Verification Checklist

Before deploying, verify:

- [ ] Portfolio loads at localhost:3000
- [ ] All sections visible (Hero, Skills, Projects, Experience, LLM, Contact)
- [ ] Dark/Light theme toggle works
- [ ] Navigation menu works
- [ ] "Download Resume" button works
- [ ] All social media links point to correct profiles
- [ ] No console errors in browser DevTools
- [ ] Mobile responsive (test with DevTools Device Mode)

---

## 🆘 Common Issues

### "Module not found" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Kill the process or use different port
npm run dev -- -p 3001
```

### Dark mode not working
- Clear browser cache
- Check if JavaScript is enabled
- Open DevTools console for errors

### Resume download not working
- Verify file exists: `public/assets/pdf/Vijay_Guntuku_Resume.pdf`
- Check file name spelling (case-sensitive)
- Try hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

## 📚 Need More Help?

- **Detailed Setup:** See `SETUP.md`
- **Project Structure:** See `PROJECT_STRUCTURE.md`
- **General Info:** See `README.md`

---

## 🎉 You're All Set!

Your production-quality portfolio is ready to impress recruiters!

**Next Steps:**
1. Run `npm run dev`
2. Customize content
3. Test thoroughly
4. Deploy to Vercel
5. Share with recruiters! 🚀

---

**Happy Coding!** 💻✨
