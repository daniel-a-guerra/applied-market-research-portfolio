# Applied Market Research Portfolio

Public-release package candidate for Daniel A. Guerra's bilingual applied market research portfolio. The landing is the central public entry point for two distinct research lines:

1. **AgroMonetary Research** — primary research line focused on public structural analysis of LATAM agricultural commodities.
2. **Gold–DXY Research** — complementary research line focused on normalized comparative trajectories and explicit analytical boundaries between Gold and DXY.

The site demonstrates research process and analytical communication. It is not a trading platform, forecasting service or investment advisory product.

## Current status

**Published public portfolio with two approved Product Samples, three bilingual Research Notes, a confirmed public contact email, an approved LinkedIn profile and two live public dashboards.** GitHub Pages serves the canonical site at `https://agromonetaryresearch.com/`; DNS is verified, HTTPS is enforced and `https://www.agromonetaryresearch.com/` resolves to the canonical site. The GitHub profile URL remains intentionally inactive.

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

The Agro document directory contains exactly two approved Spanish-language historical product samples and four approved Research Note PDFs. The Gold–DXY document directory contains exactly two approved Research Note PDFs. Image and icon directories stay empty until public files are explicitly approved.

## Bilingual behavior

English is the default language. The visible EN/ES control changes all landing content without reloading the page. Official research names and analytical labels remain unchanged in both modes.

## Accessibility

The landing uses semantic landmarks, a sequential heading structure, keyboard-accessible controls, visible focus states, sufficient contrast and reduced-motion support. The skip link is visually hidden during normal use, becomes visible when keyboard-focused and targets the main content. The mobile menu reports its expanded state and closes with Escape.

## GitHub Pages publication

The package is published through GitHub Pages at `https://agromonetaryresearch.com/`. It uses semantic HTML, modern CSS and minimal vanilla JavaScript. Production document references remain relative, and no framework, database, API or server-side runtime is required. `404.html` provides a repository-local fallback page.

The landing declares the canonical URL, `sitemap.xml` contains only the canonical root HTML URL, and `robots.txt` references the canonical sitemap. DNS verification, the `www` resolution path and enforced HTTPS are recorded in `docs/FINAL_PUBLICATION_QA.md`.

## Public-link configuration

`config/public-links.js` contains two active relative paths for the approved Spanish product samples, six active relative paths for the approved bilingual Research Notes, the confirmed public email `daniel@agromonetaryresearch.com`, the approved LinkedIn profile `https://www.linkedin.com/in/daniel-a-guerra`, the approved AgroMonetary Research dashboard `https://agromonetary-research.streamlit.app/`, the approved Gold–DXY Research dashboard `https://gold-dxy-research.streamlit.app/`, and the canonical public domain `https://agromonetaryresearch.com`. The GitHub placeholder remains empty. Empty placeholders must never be replaced with guessed values.

Future activation process:

1. Obtain explicit approval for each public destination.
2. Add only the approved values to `config/public-links.js`.
3. Add the configuration script to the landing and map each approved value to its intended control.
4. Preserve the current inactive wording whenever a value remains empty.
5. Test every activated destination in EN and ES before publication.

The current landing links directly to the two approved Product Sample paths and all six approved Research Note paths, exposes the confirmed email through `mailto:`, and opens the approved LinkedIn profile, both approved public dashboards and all PDF destinations in new tabs with `noopener noreferrer`. It does not load the configuration file; all other approved inactive behavior remains unchanged.

## Approved public product samples

The Product Samples section exposes exactly two historical Spanish-language portfolio demonstrations:

- `assets/documents/agro/AMR_Weekly_Briefing_Public_Sample_ES.pdf` — Weekly Agro-Monetary Briefing, historical sample dated 19 June 2026.
- `assets/documents/agro/AMR_Monthly_Strategic_Report_Public_Sample_ES.pdf` — Monthly Strategic Agro-Monetary Report, historical sample for June 2026.

English mode identifies each available document as a **Spanish PDF sample**. No English PDF is claimed or configured. Recurring and updated editions remain part of AgroMonetary Research's private B2B research offering. No editable sources or additional editions are included.

## Approved public Research Note PDFs

Six final PDFs are publicly accessible across three approved bilingual Research Notes:

```text
assets/documents/agro/AMR_Research_Note_01_EN.pdf
assets/documents/agro/AMR_Research_Note_01_ES.pdf
assets/documents/agro/AMR_Research_Note_02_EN.pdf
assets/documents/agro/AMR_Research_Note_02_ES.pdf
assets/documents/gold-dxy/Gold_DXY_Research_Note_01_EN.pdf
assets/documents/gold-dxy/Gold_DXY_Research_Note_01_ES.pdf
```

The two AgroMonetary Research Notes preserve their historical public portfolio evidence classification. The Gold–DXY Research Note preserves its synthetic public research demonstration classification. No editable DOCX source, draft or internal QA material is present in the public download directories.

## Protected private boundaries

This repository must never contain private datasets, workbooks, internal dashboard source, unpublished research, proprietary methodology, operational Gold strategy material, client or CRM data, credentials, local filesystem paths, personal documents or editable Research Note sources. See `docs/PRIVACY_BOUNDARIES.md` for the full boundary.

## Licensing boundary

The `LICENSE` file applies only to the original website source code identified there. It does not grant reuse rights over research content, datasets, charts, reports, methodology, trade names, logos or brand assets.
