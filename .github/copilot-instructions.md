## Purpose
Short, actionable guidance for AI coding agents working on this static multi-page website (Aroma Cafe). Focus on concrete patterns, entry points, and how to run or validate changes locally.

## Big picture
- Static multi-page site: root HTML files (`index.html`, `about.html`, `services.html`, `contact.html`). No server-side code in this repo.
- Styles split into `css/` (runtime CSS) and `scss/` (examples): `main.css` (base), `layout.css` (Grid/Flex layouts), `responsive.css` (media queries at 768px and 1024px).
- JS lives in `js/` and is loaded at the end of the body. There are two focused interaction areas: `main.js` (navigation + UI helpers) and `form-validation.js` (contact form behavior).

## How to view & quick local workflow
- There is no build pipeline (see `package.json` — `build` prints "no build script"). The easiest ways to preview:

PowerShell examples
```powershell
# open directly (simple)
start .\index.html

# or run a local static server (recommended for consistent behavior)
python -m http.server 8000
# or
npx http-server -p 8000
```

## Key files & patterns (copyable references)
- `js/main.js`
  - Mobile menu: toggles class `active` on `.nav-links` and flips `aria-expanded` on `.menu-toggle`.
    Example selectors: `.menu-toggle`, `.nav-links`, `.nav-container`, `.nav-link`.
  - Smooth scroll: anchor links that point to in-page IDs (href beginning with '#') use smooth scrolling via `scrollIntoView({ behavior: 'smooth' })` in `main.js`.
  - Active nav: compares `window.location.pathname.split('/').pop()` to link `href` and sets `.nav-link.active` and `aria-current="page"`.
- `js/form-validation.js`
  - Contact form ID: `contactForm`. Required fields use `input[required], textarea[required]`.
  - Validation UI: add/remove `error` class on fields, write messages into `.error-message`, and show `.form-success` on success.
  - Submission is simulated (uses `console.log`) — there is no backend integration in this repo.

## Conventions & expectations
- Accessibility: follow existing ARIA usage — toggle `aria-expanded` on menu buttons and set `aria-current="page"` for active nav links.
- CSS: prefer editing `scss/` examples for patterns (variables/mixins) but update compiled `css/` files if you change runtime styles.
- JS: keep logic unobtrusive — code attaches to DOM elements by selectors (avoid inlining behavior into HTML). Use the existing `validateField(field)` pattern for form checks.
- Keep HTML semantic: the project emphasizes semantic tags (`header`, `nav`, `main`, `section`, `article`, `footer`) and accessible attributes. Maintain heading order and alt text for images.

## Tests / CI / builds
- There are no tests or CI scripts present. The project is intended as a static site; small changes should be validated by opening pages in a browser and checking the console for runtime errors.

## Useful examples for code edits
- To add a new nav item: add an `<a class="nav-link" href="page.html">` and no extra JS is required — `main.js` will pick it up for active state.
- To extend form validation: reuse `validateField(field)` in `js/form-validation.js` and update `.error-message` text in the field's parent node.

## Integration points / external deps
- None required. No package installs are necessary for the site to run. `package.json` exists but contains only a placeholder `build` script.

## What an AI agent should do first when editing
1. Read referenced files: `index.html`, `contact.html`, `js/main.js`, `js/form-validation.js`, and `css/*.css`.
2. Make small, incremental edits and run the site locally. Check browser console and accessibility attributes.
3. If adding runtime behavior that requires a server (AJAX/fetch), update README and add a minimal dev server + tests.

If anything here is unclear or you'd like more examples (HTML snippets, test harness, or a tiny dev-server script), say which part to expand.
