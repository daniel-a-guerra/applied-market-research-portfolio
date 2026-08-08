# Final Publication QA

## Approved landing invariance

- [x] Release `index.html` is byte-identical to the updated local landing and adds only the approved Product Samples section.
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

## Public email and domain integration

- [x] Contact section displays `Contact` in EN and `Contacto` in ES.
- [x] Both language modes display only `daniel@agromonetaryresearch.com`.
- [x] Contact email uses `mailto:daniel@agromonetaryresearch.com`.
- [x] `PUBLIC_CONTACT_EMAIL` contains only the approved public email.
- [x] `FINAL_DOMAIN` contains only `agromonetaryresearch.com`.
- [x] GitHub, dashboard and inactive Research Note placeholders remain empty.
- [x] No subdomain or additional contact value was introduced.

## Public LinkedIn integration

- [x] Both language modes display `LinkedIn — Daniel A. Guerra`.
- [x] The LinkedIn control uses exactly `https://www.linkedin.com/in/daniel-a-guerra`.
- [x] The LinkedIn control uses `target="_blank"` and `rel="noopener noreferrer"`.
- [x] The LinkedIn control is keyboard-focusable with a visible focus state.
- [x] `LINKEDIN_URL` contains only the approved LinkedIn profile URL.
- [x] GitHub, dashboard and inactive Research Note placeholders remain empty.

## Responsive review

- [x] No horizontal overflow or clipped headings at 390 px.
- [x] No horizontal overflow or clipped headings at 768 px.
- [x] No horizontal overflow or clipped headings at 1440 px.

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

## Public-release safety

- [x] No unapproved external URLs are present; only approved local PDF paths, the confirmed `mailto:` contact and the approved LinkedIn profile are active.
- [x] No contact details were invented.
- [x] No local filesystem paths are present.
- [x] No credentials or environment values are present.
- [x] No private-file references or prohibited files are present.
- [x] All production references use GitHub Pages-compatible relative paths.
- [x] `config/public-links.js` contains the approved email, LinkedIn profile and final domain while nine unapproved destination placeholders remain empty.
- [x] Research Note PDF paths remain inactive and no editable Research Note source or QA file is present.
- [x] `.gitignore` covers temporary files, editable documents, datasets, workbooks, caches, environment files and credentials without excluding approved PDFs.
- [x] `robots.txt` contains no private paths.
- [x] `sitemap.xml` contains only the documented reserved `.invalid` placeholder and is marked for replacement.

## Additional public pages and inventory

- [x] `404.html` is bilingual, responsive, internally linked and script-free.
- [x] Public content inventory confirms three bilingual Research Notes and six expected PDF exports.
- [x] Privacy boundaries cover all prohibited categories.
- [x] Repository structure matches the approved public package layout.

## Publication state

- [x] Public contact email approved and tested.
- [x] Public LinkedIn approved and tested.
- [x] Final domain approved.
- [ ] Final public links approved and tested.
- [ ] Final PDFs approved and added.
- [ ] GitHub Pages configured.
- [ ] HTTPS confirmed.

The publication-state items must remain unchecked until those external approvals and deployment steps are completed.
