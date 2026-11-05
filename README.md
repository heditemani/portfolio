# Hedi Temani — Portfolio Website

A responsive, multi-page portfolio built with plain HTML, CSS and JavaScript. No build step and no dependencies.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Introduction, highlights, featured projects, call to action |
| About | `about.html` | Skills, experience, education, languages |
| Projects | `projects.html` | Project showcase with role, stack and results |
| Contact | `contact.html` | Contact form and contact details |

Shared files: `css/styles.css` (design tokens, layout, responsive rules), `js/i18n.js` (language selection and translations), and `js/main.js` (mobile menu, footer year, theme, and contact form behavior).

The About page links to a complete, two-page English CV PDF at `assets/hedi-temani-cv.pdf`.

## Languages

The site is available in English, French and Arabic. Visitors choose a language on their first visit; their choice is saved in browser local storage and can be changed with the language button in the footer. Arabic pages switch to a right-to-left layout.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Before you deploy

1. **Add project screenshots.** Create an `assets/` folder, add your images, then replace each `<div class="shot">` placeholder with the `<img class="shot-img" ...>` line written in the comment above it. Do this on `index.html` and `projects.html`.
2. **Activate the contact form.** Messages are emailed to you through [FormSubmit](https://formsubmit.co). After you deploy, send one test message from the live Contact page, then open the activation email FormSubmit sends to your inbox (check spam) and confirm it. Until you confirm, messages are not delivered. After sending, visitors see FormSubmit's thank-you page. To bring them back to your site instead, add `<input type="hidden" name="_next" value="https://your-site/contact.html">` inside the form.
3. **Review the content.** All text comes from the CV. Change the contact details, project descriptions and links as needed. Your email, phone number and social links are public on the Contact page and in the footer.

## Deploy

### GitHub Pages

1. Create a repository and push this folder to it.
2. Open **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. The site goes live at `https://<username>.github.io/<repository>/`.

### Netlify

Drag and drop this folder onto [app.netlify.com/drop](https://app.netlify.com/drop). The site is live in seconds and you can rename the URL afterwards.

### Vercel

```bash
npm i -g vercel
vercel
```

Accept the defaults. No build command or output directory is needed.

## Task checklist

- [x] Design the website layout
- [x] Create Home, About, Projects and Contact pages
- [x] Responsive design (mobile menu, fluid grids; checked at 1440px and 390px widths, no horizontal scroll)
- [x] Project showcase section
- [x] Contact form with validation and spam protection
- [ ] Deploy the website (see above)

## Accessibility notes

- Semantic landmarks, a skip link and visible focus styles on every page.
- The mobile menu uses `aria-expanded` and closes with the Escape key.
- Form fields have labels, inline error messages and a live status region.
- Text and background colors meet WCAG AA contrast.
- Animations (scroll reveal, count-up stats, hover effects, progress bar) are disabled for visitors who prefer reduced motion, and every element stays visible if JavaScript fails.

## Colors and themes

The palette comes from the "Best Color Combo" reference: indigo `#36386A`, plum `#913157`, crimson `#EF2F52`, coral `#FE8968`.

- **Dark theme:** near-black surfaces with a coral accent.
- **Light theme:** warm white surfaces with a crimson accent (darker than the reference crimson so small text stays readable).
- **Switching:** the sun/moon button in the header toggles the theme and remembers the choice. Before a choice is made, the site follows the visitor's system setting.
- **Editing colors:** all colors are variables at the top of `css/styles.css`. Dark values are in `:root`, light values in `:root[data-theme="light"]`. If you change the light values, repeat them in the `@media (prefers-color-scheme: light)` block just below it.

## Animations

All motion lives in the "Motion" block at the end of `css/styles.css` and the "Motion" section of `js/main.js`.

- **Scroll reveal:** to animate another element, add its selector to the `selectors` list in `js/main.js`.
- **Speed:** change the `0.7s` durations in the `[data-reveal]` rule, or the `90` (ms) stagger step in `js/main.js`.
- **Stat count-up:** change `duration` in `countUp`.
- **Remove an effect:** delete its rule in the Motion block of the CSS.
