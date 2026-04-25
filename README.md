# Ashin Iqbal – Portfolio Website

Premium freelance portfolio built with **React + Vite**. Designed to be 10× more premium than a ThemeForest theme — fully responsive, animated, SEO-optimised, and ready to host on GitHub Pages or any hosting provider.

---

## ✨ Features

- **Ultra-premium design** — Custom cursor, bokeh header, animated gradient orbs, noise overlay
- **Smooth animations** — Scroll-reveal fade-ups, typewriter hero text, floating 3D elements, marquee clients
- **Fully responsive** — Mobile-first design, works flawlessly on all screen sizes
- **Dark/Light theme** — Animated theme toggle with persistent state
- **Project showcase** — Filterable project grid with 12 real client projects
- **Testimonials** — Auto-playing Swiper carousel with 6 client reviews
- **Pricing section** — INR ↔ USD toggle with 3 clear packages
- **Blog section** — Searchable & filterable blog listing page
- **Contact form** — Lead generation form with validation and success state
- **Full SEO** — Meta tags, Open Graph, Twitter Cards, JSON-LD schema
- **GitHub Actions** — One-click CI/CD deploy to GitHub Pages

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/ashin-portfolio.git
cd ashin-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Project Structure

```
ashin-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky transparent header with bokeh scroll effect
│   │   ├── Footer.jsx          # Full footer with links & CTA
│   │   ├── CustomCursor.jsx    # Custom animated cursor (desktop only)
│   │   ├── ScrollToTop.jsx     # Floating scroll-to-top button
│   │   ├── MarqueeClients.jsx  # Scrolling client logos strip
│   │   ├── HeroSection.jsx     # Hero with typewriter & 3D floats
│   │   ├── WorkSection.jsx     # Filterable project grid
│   │   ├── AboutSection.jsx    # Bio, timeline, AI philosophy
│   │   ├── ToolsSection.jsx    # Skills marquee + icon grid
│   │   ├── ProcessSection.jsx  # 7-step process cards
│   │   ├── TestimonialsSection.jsx  # Swiper carousel
│   │   ├── PricingSection.jsx  # INR/USD pricing toggle
│   │   ├── BlogSection.jsx     # Blog preview (homepage)
│   │   └── ContactSection.jsx  # Lead gen form
│   ├── pages/
│   │   ├── HomePage.jsx        # Assembles all sections
│   │   └── BlogPage.jsx        # Full blog listing with search
│   ├── hooks/
│   │   └── useScrollReveal.js  # Intersection Observer hook
│   ├── data/
│   │   └── index.js            # All content data (projects, blogs, etc.)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Full design system & global styles
├── index.html                  # SEO-optimised HTML shell
├── vite.config.js
├── package.json
└── .github/workflows/deploy.yml
```

---

## 🌐 Deploying to GitHub Pages

### Option 1: Automatic (GitHub Actions) — Recommended

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under "Source", select **GitHub Actions**
4. Push to `main` — it deploys automatically!

Your site will be at: `https://YOUR_USERNAME.github.io/ashin-portfolio/`

> **Note:** If hosting at a subdirectory, update `vite.config.js`:
> ```js
> base: '/ashin-portfolio/'
> ```
> If using a custom domain (ashiniqbal.com), set `base: '/'` (already set).

### Option 2: Custom Domain (ashiniqbal.com)

1. In GitHub Pages settings, add your custom domain: `ashiniqbal.com`
2. Create a `CNAME` file in `/public/` with content: `ashiniqbal.com`
3. Point your domain's DNS to GitHub Pages servers:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   YOUR_USERNAME.github.io
   ```
4. Enable "Enforce HTTPS" in GitHub Pages settings

### Option 3: Hostinger / cPanel

```bash
npm run build
```
Upload the `dist/` folder contents to your `public_html` directory.

---

## 🛠️ Customisation

### Update your content
All site content is in **`src/data/index.js`**:
- `projects` — Your client projects
- `testimonials` — Client reviews
- `blogs` — Blog post metadata
- `pricingINR` / `pricingUSD` — Pricing packages
- `tools` — Your tech stack
- `processSteps` — Your process
- `experience` — Career timeline
- `stats` — Your numbers

### Update contact details
Search for `hello@ashiniqbal.com` and `+917000000000` across components and replace with your real email/WhatsApp.

### Connect a real form backend
The contact form currently simulates a submission. To make it real:

**Option A — Formspree (easiest):**
```js
// In ContactSection.jsx, replace the onSubmit handler:
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' }
})
```

**Option B — EmailJS:**
```bash
npm install emailjs-com
```

### Add a Calendly booking widget
In `ContactSection.jsx`, replace the success state or add a Calendly inline widget:
```jsx
<div 
  className="calendly-inline-widget"
  data-url="https://calendly.com/YOUR_USERNAME/30min"
  style={{ minWidth: 320, height: 630 }}
/>
<script src="https://assets.calendly.com/assets/external/widget.js" async />
```

---

## 📱 Adding Your Portfolio Images

Replace the Unsplash URLs in `src/data/index.js` with your own images:
1. Add images to `public/images/`
2. Reference them as `/images/your-image.jpg`

---

## 🎨 Design System

All design tokens are CSS variables in `src/index.css`:

```css
--accent-primary: #7c6aff;    /* Main purple */
--accent-secondary: #a855f7;   /* Violet */
--accent-tertiary: #06b6d4;    /* Cyan */
--font-display: 'Syne';        /* Headings */
--font-body: 'DM Sans';        /* Body text */
--font-mono: 'JetBrains Mono'; /* Labels, code */
```

---

## 📦 Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| React Router v6 | Client routing |
| Framer Motion | Animations |
| Swiper.js | Testimonials carousel |
| Lucide React | Icons |
| React Hot Toast | Notifications |
| React Helmet Async | SEO meta tags |

---

## 📄 License

MIT — use freely for your personal portfolio.

---

**Built with ❤️ in Kolkata, India by Ashin Iqbal**  
[ashiniqbal.com](https://ashiniqbal.com)
