# Privacy Boundaries

The public repository is a presentation surface only. Public-release preparation does not authorize disclosure of source research systems or private working material.

## Never include

- Private source datasets, raw data extracts or non-public analytical tables.
- Internal dashboard source code or dashboard repositories.
- Spreadsheets, workbooks or private calculation files.
- Unpublished research, working notes or draft reports.
- Internal or proprietary methodology.
- Operational Gold strategy material or private Gold strategy research.
- Proprietary classifications, internal taxonomies or decision rules.
- CRM data, client information or contact databases.
- API keys, access tokens, passwords, environment values or credentials.
- Local filesystem paths, machine-specific settings or server logs.
- Personal documents or identity records.
- Editable Research Note sources, including DOCX files.
- Internal QA records not explicitly approved for publication.

## Public-file rules

- Add a file only after confirming its public status in `PUBLIC_CONTENT_INVENTORY.md`.
- Add PDFs only to the documented `assets/documents/agro/` or `assets/documents/gold-dxy/` location.
- Publish only final approved PDF exports; never publish the editable source.
- Do not publish supporting data merely because it is referenced by public prose.
- Do not infer public permission from a file's presence in a local working directory.
- Do not place credentials or contact values directly in HTML or JavaScript before approval.

## Pre-publication control

Before the first commit and before every deployment, review the complete repository tree, the staged diff and every asset directory. Stop publication if ownership, provenance or approval status is uncertain.
