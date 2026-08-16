# Final Publication QA

## Approved landing invariance

- [x] This sprint changes only canonical metadata and obsolete dashboard publication-status copy in `index.html`; analytical wording, structure and design remain unchanged.
- [x] Release `styles.css` is byte-identical to the updated local landing and adds only Product Samples presentation rules.
- [x] `script.js` remains byte-identical to the pre-integration approved candidate.
- [x] Existing section content, navigation architecture, visual design and responsive behavior remain unchanged.

## Functional review

- [x] English remains the default language.
- [x] EN/ES switching works without a reload.
- [x] Mobile menu opens, closes on selection and closes with Escape.
- [x] Skip link is absent visually during normal use.
- [x] Skip link becomes visible on keyboard focus and targets `#main-content`.
- [x] All internal navigation targets resolve.
- [x] Browser console has no warnings or errors.

## Canonical domain and crawl configuration

- [x] `https://agromonetaryresearch.com/` responds successfully over HTTPS.
- [x] `https://www.agromonetaryresearch.com/` resolves to `https://agromonetaryresearch.com/`.
- [x] The publication candidate contains exactly one canonical tag: `https://agromonetaryresearch.com/`.
- [x] No competing canonical, old GitHub Pages URL or obsolete deployment URL is present.
- [x] `sitemap.xml` is valid XML and contains only the canonical root HTML URL.
- [x] `sitemap.xml` excludes dashboards, PDFs, fragments, repository URLs and inactive placeholders.
- [x] `robots.txt` allows normal crawling and references `https://agromonetaryresearch.com/sitemap.xml`.
- [x] `robots.txt` contains no private paths.
- [x] No Open Graph or social URL metadata existed, so none was invented.

## Public email and domain integration

- [x] Contact section displays `Contact` in EN and `Contacto` in ES.
- [x] Both language modes display only `daniel@agromonetaryresearch.com`.
- [x] Contact email uses `mailto:daniel@agromonetaryresearch.com`.
- [x] `PUBLIC_CONTACT_EMAIL` contains only the approved public email.
- [x] `FINAL_DOMAIN` contains only `https://agromonetaryresearch.com`.
- [x] The unresolved GitHub placeholder remains empty.
- [x] No subdomain or additional contact value was introduced.

## Public LinkedIn integration

- [x] Both language modes display `LinkedIn — Daniel A. Guerra`.
- [x] The LinkedIn control uses exactly `https://www.linkedin.com/in/daniel-a-guerra`.
- [x] The LinkedIn control uses `target="_blank"` and `rel="noopener noreferrer"`.
- [x] The LinkedIn control is keyboard-focusable with a visible focus state.
- [x] `LINKEDIN_URL` contains only the approved LinkedIn profile URL.
- [x] The unresolved GitHub placeholder remains empty.

## Public Agro dashboard URL integration

- [x] The AgroMonetary Research dashboard action displays `Open public dashboard` in EN.
- [x] The AgroMonetary Research dashboard action displays `Abrir dashboard público` in ES.
- [x] The action uses exactly `https://agromonetary-research.streamlit.app/`.
- [x] The action uses `target="_blank"` and `rel="noopener noreferrer"`.
- [x] The action is keyboard-focusable with a visible focus state.
- [x] `AGRO_DASHBOARD_URL` contains only the approved public dashboard URL.
- [x] The unresolved GitHub placeholder remains empty.

## Public Gold–DXY dashboard URL integration

- [x] The Gold–DXY Research dashboard action displays `Open public dashboard` in EN.
- [x] The Gold–DXY Research dashboard action displays `Abrir dashboard público` in ES.
- [x] The action uses exactly `https://gold-dxy-research.streamlit.app/`.
- [x] The action uses `target="_blank"` and `rel="noopener noreferrer"`.
- [x] The action is keyboard-focusable with a visible focus state.
- [x] `GOLD_DXY_DASHBOARD_URL` contains only the approved public dashboard URL.
- [x] The AgroMonetary Research dashboard action and approved URL remain unchanged.
- [x] The unresolved GitHub placeholder remains empty.

## Public Research Notes PDF integration

- [x] Exactly three approved bilingual Research Notes expose six local relative PDF links.
- [x] Every note displays `View English PDF` and `View Spanish PDF` in EN mode.
- [x] Every note displays `Ver PDF en inglés` and `Ver PDF en español` in ES mode.
- [x] All six actions use `target="_blank"` and `rel="noopener noreferrer"`.
- [x] AgroMonetary Research Notes No. 01 and No. 02 retain the historical public portfolio evidence classification.
- [x] Gold–DXY Research Note No. 01 retains the synthetic public research demonstration classification.
- [x] All six copied PDFs match their approved source SHA-256 hashes and open successfully.
- [x] All 36 Research Note PDF pages render successfully without visible clipping or corruption.
- [x] Source PDFs remain unchanged and no editable source, draft or internal QA file is exposed.

## Responsive review

- [x] No horizontal overflow or clipped headings at 390 px.
- [x] No horizontal overflow or clipped headings at 768 px.
- [x] No horizontal overflow or clipped headings at 1440 px.
- [x] Final responsive checks were repeated against the HTTPS custom domain.

## Product Samples integration

- [x] Product Samples section follows Research Notes in the page flow.
- [x] Weekly and monthly cards contain the approved EN/ES titles, descriptions, statuses and dates.
- [x] Both cards identify the available document as a Spanish PDF sample in EN and ES.
- [x] Both local relative PDF links open successfully.
- [x] Weekly PDF copy matches its approved source SHA-256 hash.
- [x] Monthly PDF copy matches its approved source SHA-256 hash.
- [x] Product Samples are visually distinct from Research Notes without redesigning existing sections.
- [x] Public/private distinction states that recurring and updated editions remain private B2B research products.
- [x] No pricing, subscription language or unsupported commercial claim was added.
- [x] No English PDF path or English PDF availability claim was added.
- [x] Exactly two product sample PDFs are present; no editable sources or additional editions are included.
- [x] Both Product Sample PDFs return successfully from the canonical public domain.

## Public-release safety

- [x] No unapproved external URLs are present; only approved local Product Sample and Research Note paths, the confirmed `mailto:` contact, the approved LinkedIn profile and the two approved public dashboards are active.
- [x] No contact details were invented.
- [x] No local filesystem paths are present.
- [x] No credentials or environment values are present.
- [x] No private-file references or prohibited files are present.
- [x] All document references remain relative; the canonical site metadata uses the approved absolute HTTPS domain.
- [x] `config/public-links.js` contains the approved email, LinkedIn profile, both approved public dashboards, two Product Sample paths, six Research Note paths and final domain while the single unresolved GitHub placeholder remains empty.
- [x] Research Note PDF paths are active and no editable Research Note source or QA file is present.
- [x] `.gitignore` covers temporary files, editable documents, datasets, workbooks, caches, environment files and credentials without excluding approved PDFs.
- [x] `robots.txt` contains no private paths.
- [x] `sitemap.xml` contains only `https://agromonetaryresearch.com/`.

## Additional public pages and inventory

- [x] `404.html` is bilingual, responsive, internally linked and script-free.
- [x] Public content inventory confirms three publicly accessible bilingual Research Notes and six integrated PDF exports.
- [x] Privacy boundaries cover all prohibited categories.
- [x] Repository structure matches the approved public package layout.
- [x] The repository contains exactly 22 approved public files and no prohibited file types or local filesystem paths.

## Live public-origin QA — 2026-08-16

- [x] EN/ES switching, navigation, mobile menu and keyboard focus work on the HTTPS custom domain.
- [x] No horizontal overflow occurs at 390, 768 or 1440 px.
- [x] Browser console reports no warnings or errors on the portfolio landing.
- [x] The public email and approved LinkedIn destination resolve as configured.
- [x] Both Product Samples and all six Research Note PDFs open from the canonical domain.
- [x] Both Streamlit dashboards respond with their normal Community Cloud loading state and no browser-console errors.
- [x] The `www` entry point redirects to the canonical non-`www` URL.

## Publication state

- [x] Public contact email approved and tested.
- [x] Public LinkedIn approved and tested.
- [x] AgroMonetary Research dashboard URL approved and tested.
- [x] Gold–DXY Research dashboard URL approved and tested.
- [x] Final domain approved.
- [x] Custom domain connected and DNS verified.
- [x] Final public links approved and tested.
- [x] Final PDFs approved and added.
- [x] GitHub Pages configured.
- [x] HTTPS enforced and confirmed.
- [x] Canonical metadata finalized.
- [x] Sitemap finalized.
- [x] Robots directives finalized.

The canonical metadata, sitemap, robots and dashboard-status corrections were validated in the local publication candidate. Per sprint instructions, they were not committed or pushed; repeat the three public-file checks after the separately approved deployment.
