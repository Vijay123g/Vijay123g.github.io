# Complete Setup Guide

## 📋 Quick Start

Follow these steps to get your portfolio up and running:

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Next Themes

### Step 2: Add Your Resume

1. Create the directory structure:
   ```bash
   mkdir -p public/assets/pdf
   ```

2. Copy your resume PDF to:
   ```
   public/assets/pdf/Vijay_Guntuku_Resume.pdf
   ```

### Step 3: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Customization Guide

### 1. Update Personal Information

#### Hero Section (`components/sections/Hero.tsx`)
- Line 39: Update your name
- Line 46: Update your title/role
- Line 52-56: Update your introduction
- Update social media links

#### Contact Section (`components/sections/Contact.tsx`)
- Line 61-76: Update contact information
- Update email, location, and social links

### 2. Update Skills

Edit `components/sections/Skills.tsx`:
- Lines 18-53: Modify skill categories and items
- Add/remove skills as needed
- Change icons from `react-icons/si`

### 3. Update Projects

Edit `components/sections/Projects.tsx`:
- Lines 8-73: Update project data
- Add your GitHub URLs
- Update tech stacks
- Mark featured projects

### 4. Update Experience

Edit `components/sections/Experience.tsx`:
- Lines 8-46: Update work experience
- Lines 108-155: Update education
- Modify timeline items

### 5. Update LLM/AI Section

Edit `components/sections/LLMSection.tsx`:
- Lines 11-50: Update AI/LLM features
- Line 102-115: Update AI technologies

## 🌈 Theme Customization

### Change Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: "#e6f7ff",    // Lightest
    100: "#bae7ff",
    // ... modify colors
    900: "#002766",   // Darkest
  },
}
```

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, Poppins } from "next/font/google";

// Change to your preferred fonts
const yourFont = YourFont({ ... });
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

**Advantages:**
- Automatic deployments on push
- Built-in CI/CD
- Free SSL certificate
- Global CDN

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `out/` directory to Netlify

### Option 3: GitHub Pages

1. Update `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name',  // Add this
     images: { unoptimized: true },
   };
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy the `out/` directory to `gh-pages` branch

## 🔧 Troubleshooting

### Build Errors

**Issue:** Module not found
```bash
npm install
```

**Issue:** TypeScript errors
```bash
npm run build
```
Check console for specific errors

### Image Loading Issues

Make sure images are in the `public/` directory:
```
public/
  └── assets/
      ├── img/
      └── pdf/
```

### Theme Not Switching

Clear browser cache or check DevTools console for errors

## 📱 Testing Responsiveness

Test on different screen sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

Use Chrome DevTools Device Mode for testing

## ⚡ Performance Optimization

### Already Implemented:
- ✅ Next.js Image Optimization
- ✅ Code Splitting
- ✅ Lazy Loading
- ✅ Minification
- ✅ Static Export

### Additional Tips:
- Optimize images before uploading
- Keep bundle size small
- Use WebP format for images

## 📊 Analytics (Optional)

Add Google Analytics:

1. Create `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=your-ga-id
   ```

2. Add to `app/layout.tsx`:
   ```typescript
   // Add Google Analytics script
   ```

## 🔒 Environment Variables

For sensitive data, use `.env.local`:

```env
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_GITHUB_TOKEN=your-github-token
```

Never commit `.env.local` to Git!

## 📝 Content Updates

To update content:

1. Edit the respective component file
2. Save changes
3. Hot reload will update automatically in dev mode
4. Rebuild for production:
   ```bash
   npm run build
   ```

## 🎯 SEO Optimization

Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  keywords: ["your", "keywords"],
  // ... more metadata
};
```

## 🆘 Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Review component code comments
- Check browser console for errors

## ✅ Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Resume PDF added
- [ ] All links tested
- [ ] Responsive design checked
- [ ] Dark/Light mode tested
- [ ] Build runs without errors
- [ ] No console errors
- [ ] SEO metadata updated
- [ ] Social media links verified
- [ ] Contact form tested

## 🎉 You're Ready!

Your production-quality portfolio is ready to impress recruiters!

```bash
npm run build
npm start
```

Deploy and share your portfolio with the world! 🚀
