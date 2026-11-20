# Grunge Aesthetic Portfolio Website

A bold, 90s-inspired, brutalist personal portfolio website crafted directly from the [ThemeWagon Grunge](https://preview.themewagon.com/grunge/) template design system.

---

## ⚡ Quick Start

You don't need Node.js, npm, or build tools to run this website.

1. **Open in Browser:**
   - Double-click `index.html` to open it in Chrome, Edge, Brave, or Firefox.
   - Alternatively, if using VS Code, right-click `index.html` and click **"Open with Live Server"**.

2. **Navigate Between Pages:**
   - **`index.html`** — Home page with Hero, Selected Works (animated vinyl sleeve records), Services accordion, About summary, and FAQ accordion.
   - **`works.html`** — Complete portfolio grid with 6 case studies and vinyl record slide-out animations.
   - **`work-detail.html`** — Case study detail template with full-width showcase mockups, 4-column project metadata, challenges, strategy, image gallery, and impact metrics.
   - **`about.html`** — Biography, philosophy statement, Career Experience timeline accordion, and Academic Education accordion.
   - **`contact.html`** — Brutalist contact cards (Email, Phone) and an interactive direct message inquiry form.

---

## 📁 Project Structure

```text
Portfolio_Website/
├── index.html            # Home page
├── works.html            # Works gallery catalog
├── work-detail.html      # Project case study detail template
├── about.html            # About / Experience / Education page
├── contact.html          # Contact page with cards & inquiry form
├── css/
│   └── style.css         # Complete styling, Road Rage & Space Mono fonts, vinyl animations, noise grain
├── js/
│   └── main.js           # Accordions, mobile navigation drawer, vinyl interactions
├── assets/
│   ├── barcode.svg       # Brutalist barcode graphic element
│   └── images/           # High-resolution monochrome SVG graphics & mockups
│       ├── hero-portrait.svg
│       ├── project-1.svg through project-6.svg
│       ├── detail-hero.svg
│       └── case-study-1.svg, case-study-2.svg
└── README.md             # Customization documentation
```

---

## ✏️ How to Customize with Your Own Information

Every HTML file contains clear `<!-- PLACEHOLDER: ... -->` comments marking sections you can replace.

### 1. Change Your Name & Brand Stamp
- In `index.html`, `works.html`, `about.html`, and `contact.html`:
  - Search for `PETER JONES` and replace it with your own name.
  - Search for `PJ // 2025` in the top-left `<header>` and replace with your initials or brand name.
  - Search for `Peter Jones © 2025` in the `<footer>` and update the copyright name and year.

### 2. Replace Photos & Project Images
- **Your Portrait Photo:**
  - Place your photo (JPG, PNG, or WebP) inside `assets/images/my-photo.jpg`.
  - In `index.html` and `about.html`, update the image tag:
    ```html
    <img src="assets/images/my-photo.jpg" alt="Your Name">
    ```
- **Project Covers:**
  - Save project screenshots (square 1:1 ratio works best for the vinyl jacket effect) in `assets/images/`.
  - Update `src="assets/images/project-1.svg"` in `index.html` and `works.html`.

### 3. Edit Projects & Case Studies
- In `index.html` and `works.html`:
  - Change project titles (`CLOUDSYNC SUITE`), category pills (`UI/UX DESIGN`), and client names (`CLIENT: ...`).
- In `work-detail.html`:
  - Duplicate this file for each project (e.g. `work-lumina.html`, `work-nourish.html`).
  - Fill in the 4 metadata slots (Client, Category, Services, Year).
  - Update the narrative paragraphs with your own challenges, strategy, and results.

### 4. Update Experience & Education Accordions
- In `about.html`, locate the `#experience` and `EDUCATION` sections.
- Change the job titles, company names, dates, and bullet descriptions in the accordion content blocks.

### 5. Update Contact Details & Inquiry Form
- In `contact.html`:
  - Change `peterjones@email.com` and `href="mailto:peterjones@email.com"`.
  - Change `+1 (555) 123-4567` and `href="tel:+15551234567"`.
  - To make the form send messages directly to your inbox, connect a free service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com):
    ```html
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    ```

### 6. Update Social Links
- In the `<footer>` of all pages, update the URLs for LinkedIn, Instagram, X/Twitter, and GitHub to link to your real profiles.

---

## 🎨 Design System & Styling Reference

- **Fonts:**
  - **Headings (`font-grunge`):** [Road Rage](https://fonts.google.com/specimen/Road+Rage) (distressed uppercase stencil/brush).
  - **Body / Metadata (`font-mono`):** [Space Mono](https://fonts.google.com/specimen/Space+Mono) (technical monospace).
- **Colors:**
  - Background: `#141414` (Jet Charcoal)
  - Card Surfaces: `#1a1a1a` & `#1f1f1f`
  - Text & Sharp Borders: `#ffffff` (Pure White, 2px borders)
  - Muted Text: `#a3a3a3`
- **Effects:**
  - Full-screen film grain noise overlay via SVG filter.
  - Interactive vinyl record sleeve card: on hover, the disc slides out and spins smoothly.
  - Smooth expandable accordion panels with animated chevron toggles.

---

## 🚀 Free Hosting & Deployment

When you're ready to publish your portfolio online for free:

- **GitHub Pages:**
  1. Create a GitHub repository and push these files.
  2. In your repo settings, go to **Pages** -> source: **Deploy from a branch** (`main` / root).
  3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

- **Netlify or Vercel:**
  - Drag and drop this folder directly into the Netlify dashboard for instant HTTPS deployment.
