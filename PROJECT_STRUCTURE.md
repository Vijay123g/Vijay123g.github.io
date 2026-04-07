# 📁 Complete Project Structure

```
Vijay123g.github.io/
│
├── 📂 app/                          # Next.js App Router
│   ├── layout.tsx                   # Root layout with metadata & theme
│   ├── page.tsx                     # Home page (combines all sections)
│   └── globals.css                  # Global styles & Tailwind directives
│
├── 📂 components/                   # React Components
│   ├── 📂 sections/                 # Page Sections
│   │   ├── Hero.tsx                 # Hero section with CTA buttons
│   │   ├── Skills.tsx               # Skills showcase with icons
│   │   ├── Projects.tsx             # Featured projects grid
│   │   ├── Experience.tsx           # Work experience timeline
│   │   ├── LLMSection.tsx           # AI/LLM expertise section
│   │   └── Contact.tsx              # Contact form & information
│   │
│   ├── Navbar.tsx                   # Sticky navigation bar
│   ├── Footer.tsx                   # Footer with social links
│   └── ThemeProvider.tsx            # Dark/Light theme context
│
├── 📂 public/                       # Static Assets
│   └── 📂 assets/
│       ├── 📂 pdf/
│       │   └── Vijay_Guntuku_Resume.pdf  # Your resume (ADD THIS!)
│       └── 📂 img/                  # Optional: Add profile images
│
├── 📄 package.json                  # Dependencies & scripts
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 tailwind.config.ts            # Tailwind CSS config
├── 📄 postcss.config.js             # PostCSS configuration
├── 📄 next.config.js                # Next.js configuration
├── 📄 next-env.d.ts                 # Next.js TypeScript declarations
├── 📄 .gitignore                    # Git ignore rules
├── 📄 README.md                     # Project overview
├── 📄 SETUP.md                      # Detailed setup guide
└── 📄 PROJECT_STRUCTURE.md          # This file

# After npm install:
├── 📂 node_modules/                 # Dependencies (auto-generated)
├── 📂 .next/                        # Next.js build cache (auto-generated)
└── 📂 out/                          # Production build output (after build)
```

## 🎯 Key Files Explained

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies and npm scripts |
| `tsconfig.json` | TypeScript compiler options |
| `tailwind.config.ts` | Tailwind CSS customization (colors, animations) |
| `next.config.js` | Next.js settings (static export enabled) |
| `.gitignore` | Files to exclude from Git |

### Application Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, metadata, font loading, theme provider |
| `app/page.tsx` | Main page combining all sections |
| `app/globals.css` | Global styles, Tailwind directives, custom utilities |

### Components

#### Navigation & Layout
- `Navbar.tsx` - Responsive navigation with theme toggle
- `Footer.tsx` - Footer with copyright and social links
- `ThemeProvider.tsx` - Dark/Light mode context

#### Sections (in order)
1. `Hero.tsx` - Introduction, name, title, CTA buttons
2. `Skills.tsx` - Technical skills grouped by category
3. `Projects.tsx` - Featured projects with descriptions
4. `Experience.tsx` - Work timeline & education
5. `LLMSection.tsx` - AI/LLM expertise and technologies
6. `Contact.tsx` - Contact form and information

## 📦 Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - React library
- `typescript` - Type safety

### Styling
- `tailwindcss` - Utility-first CSS
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS processing

### UI/UX
- `framer-motion` - Animations
- `next-themes` - Theme switching
- `react-icons` - Icon library

## 🔄 Build Process

```bash
# Development
npm run dev
→ Starts dev server at localhost:3000
→ Hot reload enabled
→ Fast refresh for instant updates

# Production Build
npm run build
→ Compiles TypeScript
→ Optimizes CSS
→ Generates static files in /out
→ Ready for deployment

# Production Server
npm start
→ Serves production build locally
```

## 📝 Important Notes

### ⚠️ Required Actions

1. **Add Your Resume**
   ```bash
   mkdir -p public/assets/pdf
   # Copy your resume as: Vijay_Guntuku_Resume.pdf
   ```

2. **Update Personal Information**
   - Edit components/sections/Hero.tsx
   - Edit components/sections/Contact.tsx
   - Update all social media links

3. **Customize Content**
   - Skills in Skills.tsx
   - Projects in Projects.tsx
   - Experience in Experience.tsx

### ✅ Already Configured

- ✅ Static export for GitHub Pages
- ✅ Dark/Light theme
- ✅ Responsive design
- ✅ SEO metadata
- ✅ Smooth animations
- ✅ Type safety
- ✅ Modern UI components

## 🎨 Customization Points

### Colors
`tailwind.config.ts` → theme.extend.colors

### Fonts
`app/layout.tsx` → Font imports

### Content
`components/sections/*.tsx` → Component data

### Animations
`tailwind.config.ts` → theme.extend.animation

## 🚀 Deployment

### Static Files Location
After `npm run build`, deploy the `out/` directory to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

### Auto-Deploy (Vercel)
Push to GitHub → Auto-deploys on Vercel

## 📊 File Sizes

Approximate sizes:
- Total Components: ~15 files
- TypeScript: ~2,000 lines
- Bundle Size: ~200KB (optimized)
- Build Time: ~30 seconds

## 🔍 File Locations Quick Reference

**Update Your Info:**
- Name/Title: `components/sections/Hero.tsx:39-46`
- Skills: `components/sections/Skills.tsx:18-53`
- Projects: `components/sections/Projects.tsx:8-73`
- Experience: `components/sections/Experience.tsx:8-46`
- Contact: `components/sections/Contact.tsx:61-76`

**Styling:**
- Theme Colors: `tailwind.config.ts:10-21`
- Global Styles: `app/globals.css`
- Animations: `tailwind.config.ts:23-52`

**Configuration:**
- SEO Metadata: `app/layout.tsx:13-29`
- Build Settings: `next.config.js`
- TypeScript: `tsconfig.json`

---

**Ready to build? Run `npm install` and start coding! 🚀**
