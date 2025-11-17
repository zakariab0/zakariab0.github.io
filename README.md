# Zakaria Bounou - Portfolio

Modern, performant portfolio website built with Next.js 15, showcasing full-stack engineering expertise and projects.

**Live Site**: [zakariabounou.vercel.app](https://zakariabounou.vercel.app)

## Overview

Personal portfolio featuring:
- **Experience Timeline**: 4 years across enterprise projects
- **Project Showcase**: 6 major projects (Python, Java, PHP)
- **Skills Matrix**: Backend, Frontend, DevOps, Testing
- **Achievements**: COP28 award, competition wins
- **Dark Mode**: Persistent theme switching
- **Responsive Design**: Mobile-first approach

---

## Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 4.0
- **Fonts**: Geist Sans & Mono
- **Icons**: React Icons 5.5.0
- **Analytics**: Vercel Analytics + Speed Insights
- **Deployment**: Vercel (zero-config)

---

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

```powershell
# Clone repository
git clone https://github.com/zakariab0/portfolio.git
cd portfolio

# Install dependencies
npm install --legacy-peer-deps
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```powershell
# Create optimized build
npm run build

# Start production server
npm run start
```

---

## Customization

### Update Personal Data

Edit `app/data/content.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your@email.com"
  }
}
```

### Add Projects

Edit `app/data/projects.json`:

```json
[
  {
    "slug": "project-slug",
    "title": "Project Title",
    "tech": ["Tech1", "Tech2"],
    "github": "https://github.com/..."
  }
]
```

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import repository
4. Framework: Auto-detected (Next.js)
5. Click **Deploy**

### Option B — From CLI

```bash
npm i -g vercel

vercel
# follow prompts (link project, select scope, prod deploy)
```

**Post-deploy checks**:

- Visit your site URL to verify pages
- Test social share preview (paste URL on LinkedIn/X)
- If you include a vCard: confirm `/anand.vcf` downloads

---

## 🧩 How to contribute & make a PR

I welcome contributions of all sizes — from typo fixes to new components. Here’s the quickest path to a great PR:

### 1) Fork & clone

```bash
# Fork on GitHub (top-right button), then:
git clone https://github.com/<your-username>/<your-fork-name>.git
cd <your-fork-name>
npm install
```

### 2) Create a feature branch

```bash
# Use a descriptive branch name
git checkout -b feat/case-study-card    # new feature
# or
git checkout -b fix/typo-blog-title     # small fix
```

### 3) Make your changes

- Keep the UI consistent (rounded-2xl, soft rings, accessible focus states)
- Prefer server components where possible; keep client components minimal
- Follow existing file structure under `app/`

### 4) Run locally & verify

```bash
npm run dev
# open http://localhost:3000 and test the changed pages/components
```

### 5) Commit with a clear message

```bash
git add .
git commit -m "feat(case-studies): add case study card with metrics and CTAs"
```

### 6) Push & open the PR

```bash
git push origin feat/case-study-card
```

- Open a PR from your branch to this repo’s **main**:  
  https://github.com/TheAnandThakkar/anandthakkar/compare
- Describe **what changed**, **why**, and add **screenshots/GIFs** for UI.
- Link any related issues (e.g., `Closes #123`).

### 7) PR checklist (speeds up review)

- [ ] Builds locally (`npm run build`) without type errors
- [ ] No obvious console errors/warnings
- [ ] Accessible (labels, alt text, focus rings)
- [ ] Mobile/desktop screenshots included for UI changes
- [ ] Small, focused scope — larger ideas are great too, but split if possible

---

## 🧱 Common customizations

- **Branding & colors** — tweak Tailwind classes or extend Tailwind config
- **Icons** — use `react-icons` (fa6/io5) or inline SVG
- **Analytics** — add Vercel Analytics or your provider
- **Blog** — add MD/MDX posts as needed
- **QR vCard** — provide an `/anand.vcf` in `/public` and a QR image if desired

---

## 📣 Community & contact

Questions, feedback, or collaboration?

- Email: **anand.thakkar@outlook.com**
- Issues: open a ticket on this repo — https://github.com/TheAnandThakkar/anandthakkar/issues

If this project helped you, **please star it** and **share it**. It makes a big difference for discoverability. 🙏

---

## 📝 License

MIT — feel free to use this as a starting point for your own site. A credit link is appreciated but not required.

---

**Thanks again to [Vercel](https://vercel.com/) for free hosting** and a smooth DX for Next.js.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)