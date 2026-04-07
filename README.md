# Vijay Guntuku - Portfolio Website

A modern, production-quality portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 🌗 **Dark/Light Mode** toggle
- ✨ **Framer Motion** animations
- 📱 **Fully Responsive** design
- 🎯 **SEO Optimized**
- 🚄 **Fast Performance**
- 🎭 **TypeScript** for type safety

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── LLMSection.tsx  # AI/LLM expertise
│   │   └── Contact.tsx     # Contact form
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   └── ThemeProvider.tsx   # Theme context provider
├── public/
│   └── assets/
│       └── pdf/
│           └── Vijay_Guntuku_Resume.pdf
└── ...config files
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd /Users/vijayguntuku/Desktop/Vijay123g.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

### Static Export

This project is configured for static export, perfect for GitHub Pages:

```bash
npm run build
```

The static files will be in the `out/` directory.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files in the `out/` directory are ready to deploy

3. Configure GitHub Pages to use the `out/` directory (or copy contents to root)

## 🎨 Customization

### Update Your Information

Edit the content in the following files:
- `components/sections/Hero.tsx` - Personal info, title, description
- `components/sections/Skills.tsx` - Your skills
- `components/sections/Projects.tsx` - Your projects
- `components/sections/Experience.tsx` - Work experience
- `components/sections/LLMSection.tsx` - AI/LLM expertise
- `components/sections/Contact.tsx` - Contact information

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Add Resume

Place your resume PDF at:
```
public/assets/pdf/Vijay_Guntuku_Resume.pdf
```

## 📝 License

© 2026 Vijay Guntuku. All rights reserved.

## 🤝 Contact

- **Email**: vgunt003@odu.edu
- **LinkedIn**: [linkedin.com/in/vijay-guntuku-2739431a4](https://www.linkedin.com/in/vijay-guntuku-2739431a4/)
- **GitHub**: [@Vijay123g](https://github.com/Vijay123g)
