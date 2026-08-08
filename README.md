# Applied Market Research Portfolio

Public-release package candidate for Daniel A. Guerra's bilingual applied market research portfolio. The landing is the central public entry point for two distinct research lines:

1. **AgroMonetary Research** — primary research line focused on public structural analysis of LATAM agricultural commodities.
2. **Gold–DXY Research** — complementary research line focused on normalized comparative trajectories and explicit analytical boundaries between Gold and DXY.

The site demonstrates research process and analytical communication. It is not a trading platform, forecasting service or investment advisory product.

## Current status

**Local approved candidate with two integrated public product samples, a confirmed public contact email, an approved LinkedIn profile and an approved final domain.** Publication and deployment have not been completed. Dashboard URLs, Research Note PDF URLs and GitHub remain intentionally inactive.

## Local preview

No build step or package installation is required. From the repository root, start a static server:

```text
python -m http.server 8000
```

Open `http://localhost:8000/` in a browser. Opening `index.html` directly also works, although a static server better represents GitHub Pages behavior.

## Repository structure

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
├── LICENSE
├── .gitignore
├── robots.txt
├── sitemap.xml
├── 404.html
├── assets/
│   ├── images/
│   ├── documents/
│   │   ├── agro/
│   │   └── gold-dxy/
│   └── icons/
├── config/
│   └── public-links.js
└── docs/
    ├── DEPLOYMENT_CHECKLIST.md
    ├── PUBLIC_CONTENT_INVENTORY.md
    ├── PRIVACY_BOUNDARIES.md
    └── FINAL_PUBLICATION_QA.md
```

The Agro document directory contains exactly two approved Spanish-language historical product samples. The remaining document, image and icon directories stay empty until additional public files are explicitly approved.

## Bilingual behavior

English is the default language. The visible EN/ES control changes all landing content without reloading the page. Official research names and analytical labels remain unchanged in both modes.

## Accessibility

The landing uses semantic landmarks, a sequential heading structure, keyboard-accessible controls, visible focus states, sufficient contrast and reduced-motion support. The skip link is visually hidden during normal use, becomes visible when keyboard-focused and targets the main content. The mobile menu reports its expanded state and closes with Escape.

## GitHub Pages compatibility

The package uses semantic HTML, modern CSS and minimal vanilla JavaScript. All production asset references are relative, and no framework, database, API or server-side runtime is required. `404.html` provides a repository-local fallback page.

Before GitHub Pages is enabled, complete every unresolved item in `docs/DEPLOYMENT_CHECKLIST.md`, replace the reserved sitemap placeholder, and repeat the final QA.

## Public-link configuration

`config/public-links.js` contains two active relative paths for the approved Spanish product samples, the confirmed public email `daniel@agromonetaryresearch.com`, the approved LinkedIn profile `https://www.linkedin.com/in/daniel-a-guerra`, and the approved final domain `agromonetaryresearch.com`. Dashboard, bilingual Research Note PDF and GitHub placeholders remain empty. Empty placeholders must never be replaced with guessed values.

Future activation process:

1. Obtain explicit approval for each public destination.
2. Add only the approved values to `config/public-links.js`.
3. Add the configuration script to the landing and map each approved value to its intended control.
4. Preserve the current inactive wording whenever a value remains empty.
5. Test every activated destination in EN and ES before publication.

The current landing links directly to the same two approved relative PDF paths, exposes the confirmed email through `mailto:` and opens the approved LinkedIn profile in a new tab with `noopener noreferrer`. It does not load the configuration file; all other approved inactive behavior remains unchanged.

## Approved public product samples

The Product Samples section exposes exactly two historical Spanish-language portfolio demonstrations:

- `assets/documents/agro/AMR_Weekly_Briefing_Public_Sample_ES.pdf` — Weekly Agro-Monetary Briefing, historical sample dated 19 June 2026.
- `assets/documents/agro/AMR_Monthly_Strategic_Report_Public_Sample_ES.pdf` — Monthly Strategic Agro-Monetary Report, historical sample for June 2026.

English mode identifies each available document as a **Spanish PDF sample**. No English PDF is claimed or configured. Recurring and updated editions remain part of AgroMonetary Research's private B2B research offering. No editable sources or additional editions are included.

## Expected public Research Note PDFs

Six final PDFs are expected across three approved bilingual Research Notes:

```text
assets/documents/agro/agromonetary-research-note-01-en.pdf
assets/documents/agro/agromonetary-research-note-01-es.pdf
assets/documents/agro/agromonetary-research-note-02-en.pdf
assets/documents/agro/agromonetary-research-note-02-es.pdf
assets/documents/gold-dxy/gold-dxy-research-note-01-en.pdf
assets/documents/gold-dxy/gold-dxy-research-note-01-es.pdf
```

Only final approved PDFs may be added. Editable DOCX sources and internal QA material must never be placed in the public download directory.

## Protected private boundaries

This repository must never contain private datasets, workbooks, internal dashboard source, unpublished research, proprietary methodology, operational Gold strategy material, client or CRM data, credentials, local filesystem paths, personal documents or editable Research Note sources. See `docs/PRIVACY_BOUNDARIES.md` for the full boundary.

## Licensing boundary

The `LICENSE` file applies only to the original website source code identified there. It does not grant reuse rights over research content, datasets, charts, reports, methodology, trade names, logos or brand assets.
