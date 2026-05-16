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
