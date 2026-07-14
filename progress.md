# Progress Log

## Session: 2026-02-07

### Objective
Produce a practical, high-quality upgrade plan for the personal academic homepage, balancing visual attractiveness and professional credibility.

### Actions Completed
1. Loaded `planning-with-files` skill instructions.
2. Created planning memory files in workspace:
- `task_plan.md`
- `findings.md`
- `progress.md`
3. Audited current implementation:
- Homepage content (`_pages/about.md`)
- Theme/site config (`_config.yml`)
- Custom styling (`_sass/_base.scss`, `_sass/_variables.scss`)
- Key supporting pages (`_pages/collaboration.md`, `_pages/publications.md`, `_pages/cv.md`)
4. Identified strengths, gaps, and prioritized improvements.
5. Implemented visual-system-only upgrade in SCSS (no content structure changes):
- updated theme tokens in `_sass/_themes.scss`
- updated professional polish and component styling in `_sass/_base.scss`
6. Attempted local build validation.

### Observations
- The current site is already academically credible and well structured.
- Biggest upside is in stronger visual hierarchy and faster scannability of authority signals.

### Errors / Constraints
1. `rg` command unavailable in current shell.
- Mitigation: used `find`/`grep`/`sed` instead.
2. Initial parallel command race while creating planning files.
- Mitigation: reran sequential copy and verified files exist.
3. `bundle exec jekyll build --quiet` failed due to missing `bundler` 4.0.4.
- Mitigation: recorded as environment dependency issue; no compile validation available in current shell.

### Verification
- Confirmed planning files are present and updated.
- Confirmed homepage and style files contain custom blocks suitable for incremental enhancement.

### Next Step
Deliver implementation summary and ask whether to continue with homepage structure-level redesign (hero/impact strip) next.

---

## Session: 2026-05-16

### Objective
Implement the requested homepage upgrade: import CV TeX source, add English/Chinese CV and homepage options with English default, update recent papers, and polish the layout.

### Phase 1: Requirements & Discovery
- **Status:** in_progress
- **Started:** 2026-05-16
- Actions taken:
  - Loaded `planning-with-files` skill instructions.
  - Reviewed existing planning files and appended a new task section to preserve prior notes.
  - Confirmed repository appears to be a Jekyll/al-folio site with `_pages`, `_bibliography`, `_sass`, and `assets/pdf/Yihong_Zhou_CV.pdf`.
  - Encountered one patch-anchor mismatch while appending plan notes; re-applied with narrower anchors.
  - Cloned `Yihong-Zhou-CV` into `assets/cv/Yihong-Zhou-CV` after sandbox DNS failure required an approved escalated `git clone`.
  - Moved nested `.git` metadata to `/private/tmp/Yihong-Zhou-CV.git-backup` so `main.tex` and `Chinese.tex` are visible to the homepage repository.
  - Compiled English and Chinese CV PDFs with XeLaTeX and copied them to `assets/pdf`.
  - Updated `_bibliography/papers.bib` with four requested recent papers and fixed an Applied Energy DOI field.
  - Reworked `_pages/about.md` into a default-English bilingual homepage with recent paper cards, impact snapshot, CV band, and Chinese panel.
  - Reworked `_pages/cv.md` into a default-English bilingual CV viewer with PDF download/open and TeX source links.
  - Added language-switch and homepage polish styles in `_sass/_base.scss`; added CV panel styling in `_sass/_cv.scss`; added light/dark accent variables in `_sass/_themes.scss`.
  - Ran local validation through Docker Compose after the system Ruby/Bundler path failed.
- Files created/modified:
  - `task_plan.md` (updated)
  - `findings.md` (updated)
  - `progress.md` (updated)
  - `_bibliography/papers.bib` (updated)
  - `_pages/about.md` (updated)
  - `_pages/cv.md` (updated)
  - `_sass/_base.scss` (updated)
  - `_sass/_cv.scss` (updated)
  - `_sass/_themes.scss` (updated)
  - `assets/cv/Yihong-Zhou-CV/main.tex` (added)
  - `assets/cv/Yihong-Zhou-CV/Chinese.tex` (added)
  - `assets/pdf/Yihong_Zhou_CV.pdf` (updated)
  - `assets/pdf/Yihong_Zhou_CV_en.pdf` (added)
  - `assets/pdf/Yihong_Zhou_CV_zh.pdf` (added)

## Test Results: 2026-05-16
| Test | Input | Expected | Actual | Status |
|------|-------|----------|--------|--------|
| Front matter parse | Ruby YAML parse for `_pages/about.md`, `_pages/cv.md`, `_config.yml` | No YAML errors | `front matter ok` | Pass |
| CV PDF compilation | XeLaTeX on `main.tex` and `Chinese.tex` | English and Chinese PDFs generated | Both generated after two runs; font/overfull warnings only | Pass |
| Bib key uniqueness | Ruby duplicate-key check on `_bibliography/papers.bib` | No duplicate keys | `bib keys ok: 22` | Pass |
| Jekyll build | `docker compose run --rm jekyll bundle exec jekyll build --quiet` | Successful build | Build completed; only existing Sass/nbconvert warnings | Pass |
| Homepage route | `curl -I http://localhost:8080/` outside sandbox | HTTP 200 | HTTP 200 | Pass |
| CV route | `curl -I http://127.0.0.1:8080/cv/` outside sandbox | HTTP 200 | HTTP 200 | Pass |
| Publications route | `curl -I http://127.0.0.1:8080/publications/` outside sandbox | HTTP 200 | HTTP 200 | Pass |
| Chinese CV PDF asset | `curl -I http://127.0.0.1:8080/assets/pdf/Yihong_Zhou_CV_zh.pdf` outside sandbox | HTTP 200 | HTTP 200 | Pass |
| Chinese CV TeX asset | `curl -I http://127.0.0.1:8080/assets/cv/Yihong-Zhou-CV/Chinese.tex` outside sandbox | HTTP 200 | HTTP 200 | Pass |

## Error Log: 2026-05-16
| Timestamp | Error | Attempt | Resolution |
|-----------|-------|---------|------------|
| 2026-05-16 | `apply_patch` failed while appending planning notes due to a stale tail anchor in `findings.md` | 1 | Used current file tails and file-specific anchors |
| 2026-05-16 | `git clone` failed: `Could not resolve host: github.com` | 1 | Re-ran with approved escalated network access |
| 2026-05-16 | `bundle exec jekyll build --quiet` failed because Bundler 4.0.4 is required but system Ruby is 2.6 | 1 | Tried user-level bundler install, then switched to Docker Compose |
| 2026-05-16 | `gem install --user-install bundler:4.0.4` failed because Bundler 4 requires Ruby >= 3.2 | 1 | Used Docker Compose image with compatible Ruby/Bundler |
| 2026-05-16 | Sandbox-local `curl` could not connect to Docker-published 8080 | 1 | Re-ran `curl` outside sandbox with escalation; HTTP checks passed |

---

## Session Update: CV Submodule and Automated PDF Build

### Objective
Switch the imported CV source from vendored files to a real Git submodule and add automation so refreshed CV TeX can produce updated website PDFs.

### Actions Completed
- Inspected existing GitHub Actions deployment workflow.
- Confirmed current CV source files are plain untracked files in the homepage repo.
- Confirmed the previous CV clone backup points to `https://github.com/yihong-zhou/Yihong-Zhou-CV.git` on branch `main`, commit `b2c7012`.
- Converted `assets/cv/Yihong-Zhou-CV` into a Git submodule tracking the CV repo `main` branch.
- Added `.github/workflows/build-cv.yml` to update the submodule, compile English/Chinese PDFs, and commit refreshed PDF assets.
- Updated `.github/workflows/deploy.yml` so site deployment checks out submodules and keeps TeX source links available.
- Adjusted the CV build workflow after user clarification: English CV compiles with `pdflatex`; Chinese CV compiles with `xelatex`.
- Rebuilt local English CV PDF with `pdflatex` and copied it to `assets/pdf/Yihong_Zhou_CV_en.pdf` and `assets/pdf/Yihong_Zhou_CV.pdf`.
- Verified English PDF metadata contains `Producer (pdfTeX-1.40.27)`.
- Ran workflow YAML parse check successfully.
- Ran Docker Jekyll build successfully after the submodule/action changes.

### Notes
- The action runs manually, on repository dispatch type `cv-updated`, on relevant homepage pushes, and weekly on Monday 03:20 UTC.
- Scheduled runs skip TeX installation/compilation when the CV submodule has not advanced, preventing weekly PDF churn.

---

## Session Update: CV Publication Refresh

### Objective
Update English and Chinese CV source/PDFs with newly added publications and preprints.

### Actions Completed
- Updated `assets/cv/Yihong-Zhou-CV/main.tex`:
  - changed the INFORMS Journal on Computing paper from accepted to published 2026 with DOI `10.1287/ijoc.2024.1073`;
  - added GradMAP (`arXiv:2604.24549`) to Preprints & In Review;
  - added JAX-Based Batched AC Power Flow (`arXiv:2605.14103`) to Preprints & In Review.
- Updated `assets/cv/Yihong-Zhou-CV/Chinese.tex` with the same publication changes.
- Recompiled English CV with `pdflatex` and copied it to `assets/pdf/Yihong_Zhou_CV.pdf` and `assets/pdf/Yihong_Zhou_CV_en.pdf`.
- Recompiled Chinese CV with `xelatex` and copied it to `assets/pdf/Yihong_Zhou_CV_zh.pdf`.
- Cleaned LaTeX build artifacts inside the CV submodule.

### Verification
- English CV compile passed with `pdflatex`.
- Chinese CV compile passed with `xelatex`.
- Confirmed English PDF metadata contains `pdfTeX-1.40.27`.
- Docker Jekyll build passed after the CV update; only existing Sass/nbconvert warnings appeared.

### Note
- The CV TeX changes live inside the `assets/cv/Yihong-Zhou-CV` submodule. To sync those source changes to GitHub, they need to be committed and pushed from that submodule repo, then the parent homepage repo needs to commit the updated submodule pointer/PDFs.

---

## Session Update: Session Chair Roles

### Objective
Add newly provided 2026 session chair roles to the CV and news section.

### Actions Completed
- Added two 2026 Special Session Chair entries to English CV:
  - IEEE I&CPS Asia 2026 Special Session 18, Kunming, China.
  - IEEE EI2 2026 Special Session 02, Shanghai, China.
- Added matching entries to Chinese CV.
- Added two homepage news items:
  - `_news/announcement_12.md`
  - `_news/announcement_13.md`
- Recompiled English CV with `pdflatex` and Chinese CV with `xelatex`.
- Updated all served CV PDFs in `assets/pdf`.
- Removed generated `.output/` LaTeX artifacts from the CV submodule.

### Verification
- English and Chinese CV compiles passed; both outputs remained 3 pages.
- Confirmed English PDF metadata contains `pdfTeX-1.40.27`.
- Docker Jekyll build passed after adding the news items and updated PDFs.

---

## Session Update: Deploy Submodule Checkout Fix

### Objective
Fix GitHub Actions deploy failure caused by checkout attempting to clone the CV submodule.

### Actions Completed
- Removed `submodules: recursive` from `.github/workflows/deploy.yml`.
- Changed the CV page TeX source links to point directly at the GitHub CV repository instead of local submodule paths.
- Kept the CV PDFs served locally from `assets/pdf`, so the visible CV page still works without cloning the CV source during deploy.

### Verification
- Docker Jekyll build passed after the workflow and CV link changes.
- Expected effect: deploy no longer needs access to `yihong-zhou/Yihong-Zhou-CV.git`, avoiding private-submodule checkout failure.

---

## Session Update: Academic-Star Homepage Redesign

### Objective
Make the homepage feel more focused, ambitious, and visually polished, with a clearer academic identity and less CV-like clutter.

### Actions Completed
- Rewrote `_pages/about.md` around a sharper narrative:
  - hero thesis: building the control layer for flexible, AI-native power systems;
  - compact proof strip;
  - flagship work with publication preview images;
  - current research agenda;
  - leadership/service signal;
  - compressed CV/background section.
- Kept English/Chinese language toggle with English default.
- Limited homepage news to six items.
- Disabled the default Featured publications block because custom flagship work now carries that role.
- Added new `star-*` homepage styles in `_sass/_base.scss`, including responsive layouts, publication-image cards, proof strip, leadership band, and CV band.

### Verification
- `_pages/about.md` front matter parsed successfully.
- Required publication preview images exist.
- Docker Jekyll build passed; only existing Sass/nbconvert warnings appeared.
- Generated `_site/index.html` contains the new hero, research thesis, flagship work, session chair entries, and publication preview image references.

---

## Session Update: Publication Preview Images (2026-07-14)

### Objective
Source and add representative images for the three newest papers on the Publications page.

### Actions Started
- Audited `_bibliography/papers.bib` and `assets/img/publication_preview/`.
- Identified the three missing preview assets and their available source metadata.
- Located authoritative arXiv manuscripts for the first two papers and an open-access institutional copy plus DOI for the EPSR paper.
- Downloaded and validated all three manuscripts under `tmp/pdfs/`.
- Extracted figure captions and selected the overview-method pages for visual review: page 4, page 4, and page 3 respectively.
- Rendered those pages at 180 DPI and visually confirmed one overview-method figure per paper for the final previews.
- Generated first crops; visual QA rejected two for clipped labels and flagged the third for a tight caption edge. Moving to deterministic pixel-coordinate crops.
- The exact-coordinate pass clarified the true figure extents. Decided to exclude printed figure captions from all three previews for a cleaner and more consistent card treatment.
- Produced three clean diagram-only PNG previews and added their `preview` fields to `_bibliography/papers.bib`.
- Built the site and confirmed all three assets appear in generated Publications HTML and load in-browser. Found one final CSS issue: the live thumbnail rule still computes to `object-fit: cover`.
- Strengthened the editorial publication-image rule so diagram previews use `contain` and cannot be cropped by the inherited thumbnail style.

### Verification Completed
- Jekyll production build passes; remaining output is limited to the existing Sass/nbconvert warnings.
- Generated Publications HTML references all three new PNG assets.
- Desktop and mobile browser checks confirm successful loading, full-diagram `contain` rendering, and zero horizontal overflow.
- Removed downloaded manuscripts and rendered-page intermediates from `tmp/pdfs/`; only the three optimized final PNG assets remain.

---

## Session Update: Talks Zoom Distortion (2026-07-14)

### Objective
Fix the production-only distortion that appears when a Talks image is opened in the zoom overlay.

### Actions Started
- Created a live-vs-local diagnosis plan.
- Identified the likely interaction between fixed gallery crops and medium-zoom's opened-image state.
- Audited the Talks image and medium-zoom CSS cascade; found an equal-specificity gallery rule imported after the global opened-image reset.
- Reproduced the live defect and measured the opened image: fixed thumbnail height survives, `object-fit` falls to `fill`, and the intrinsic/rendered aspect ratios differ.
- Inspected the deployed cascade: medium-zoom calculates a correct scale, but production applies a conflicting opened-image positioning rule and the overlay open selector is not matching.
- Confirmed the settled overlay state is healthy; the distortion is isolated to the opened image retaining thumbnail dimensions with `object-fit: fill` after it is reparented to `<body>`.
- Confirmed local `main` matches `origin/main` and the live page is already using a timestamped main stylesheet, so the fix must make the deployed cascade robust rather than relying on another cache refresh.
- Captured the exact deployed `main.css` for selector-level comparison with the local Sass source.
- Verified the deployed stylesheet omits the opened-image safeguard entirely; selected a final-layer `data-zoomable` overlay-state rule that preserves intrinsic proportions without interfering with medium-zoom's inline geometry.
- Implemented the final-layer opening/opened/closing safeguard in `_editorial.scss`; `git diff --check` passes and unrelated thumbnail dimensions remain unchanged.
- Reused the repository's established Docker/Jekyll production-build command for verification.
- Docker/Jekyll build completed successfully; output contains only the repository's existing Sass and notebook deprecation warnings.
- Confirmed the final compiled CSS order and opened the rebuilt Talks page at the local Docker preview for interaction QA.
- Passed desktop open-state geometry and cascade checks: the new rule removes pixel stretching without changing card cropping or medium-zoom positioning.
- Began real mobile interaction QA at 390×844; page containment and the crop-to-contain state switch both pass.
- Identified and isolated a lazy-load race in the automated gallery click; switching the final mobile check to the loaded featured image avoids conflating image availability with the CSS fix.
- The first featured-image locator click hit a browser-transport timeout even though the image is fully loaded and visibly within the 390×844 viewport; the target geometry was confirmed and a settled retry will use the same real control.
- A second semantic-locator click hit the same transport timeout; mobile verification will switch to the browser's coordinate interaction against the already-measured visible image.
- The alternative CSS-locator interaction also stalled and reset the browser QA kernel. Stopped repeating the unstable interaction path; mobile containment and the corrected computed style were already captured, and remaining regression checks will use the successful build plus generated assets.
- Confirmed in the generated CSS that the new zoom safeguard occurs exactly once and after the fixed-height gallery rule.
- Generated Talks/Publications asset checks pass, `git diff --check` remains clean, and the final worktree review shows only the user's existing publication/CV-site updates plus this scoped Sass change and planning notes.

---

## Session Update: Homepage Layout Audit 2026-05-25

### Objective
Fix visual balance issues on the redesigned homepage after user feedback: oversized hero panel, weak CTA buttons, and excessive whitespace.

### Actions Started
- Logged the user-reported screenshot issue.
- Began inspecting homepage styles and generated structure.

### Actions Completed
- Captured local desktop screenshots with headless Chrome.
- Removed forced hero card height and stopped grid stretch from creating blank card space.
- Increased `star-actions` button padding, font size, and icon size.
- Fixed primary CTA styling specificity so Publications appears as a real primary button.
- Compacted right-side proof cards to reduce vertical gap before Research Thesis.
- Added mobile-width guards for containers, language switch, language panels, and hero card.
- Added a final mobile overflow pass so the language toggle and hero copy wrap within the viewport.
- Rebuilt the site successfully with Docker Compose.

### Verification
- Desktop screenshot review shows the hero panel is no longer mostly empty.
- Full-height desktop screenshot shows Research Thesis, proof strip, flagship work, agenda, leadership, and CV sections maintain coherent spacing.
- Narrow headless Chrome screenshot still appears cropped at 390px, likely due Chrome headless layout viewport behavior; CSS now includes explicit overflow and max-width guards for real narrow browsers.
- Follow-up desktop screenshot confirms the hero card bottom aligns with the right proof-card stack.

---

## Session Update: Professional Visual System Redesign 2026-07-11

### Objective
Raise the website's overall professionalism, material quality, and aesthetic coherence across all core pages.

### Actions Started
- Created a four-phase redesign plan.
- Identified the global theme, typography, layout, and shared-component files.
- Prepared a rendered-page audit covering desktop and mobile.

### Actions Completed
- Completed the desktop and mobile audit for the homepage, Publications, Talks, Teaching, CV, and Collaboration.
- Added one final-layer editorial stylesheet rather than extending the fragmented base stylesheet.
- Added consistent YZ branding, a restrained contact footer, shared page eyebrows, and an updated favicon/social preview image.
- Rebuilt Collaboration as a focused landing page and upgraded Teaching and CV information hierarchy.
- Refined publication controls, venue styling, research-figure treatment, Talks image loading, and descriptive alt text.

### Verification Completed
- Docker production build passes; remaining output is limited to pre-existing Sass and notebook deprecation warnings.
- Core pages were visually reviewed at 1280px and a real 390×844 viewport in light and dark themes.
- Mobile document widths are contained; the Talks negative-margin overflow was found and fixed.
- Navigation, Collaboration CTAs, footer flow, publication search, CV mobile treatment, and theme contrast were verified in the rendered site.
- A generated-site local link and asset check passes across all HTML files.
- `git diff --check` reports no whitespace errors.
- Final review fixes add visible keyboard focus to both language switches and improve the dark-theme Collaboration navigation contrast.
- Replaced the broken constant main-CSS cache key with a per-build timestamp, ensuring the redesign is fetched immediately after deployment.
