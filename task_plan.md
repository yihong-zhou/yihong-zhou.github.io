# Task Plan: Upgrade Personal Academic Homepage (Stylish + Professional)

## Goal
Provide a concrete, prioritized upgrade plan to make the existing academic homepage look more distinctive and premium while preserving credibility, clarity, and academic professionalism.

## Current Phase
Complete

## Phases
### Phase 1: Requirements & Discovery
- [x] Understand user intent
- [x] Identify constraints and requirements
- [x] Document findings in findings.md
- **Status:** complete

### Phase 2: Planning & Structure
- [x] Define technical approach
- [x] Decide recommendation framework (visual, content, trust signals, performance)
- [x] Document decisions with rationale
- **Status:** complete

### Phase 3: Website Audit
- [x] Review homepage content structure
- [x] Review style system and custom components
- [x] Review supporting pages (collaboration/publications/cv)
- **Status:** complete

### Phase 4: Recommendation Synthesis
- [x] Build prioritized improvements list
- [x] Separate quick wins vs. high-impact redesign
- [x] Add implementation sequencing suggestions
- **Status:** complete

### Phase 5: Delivery
- [x] Deliver recommendations in clear actionable format
- [x] Implement requested visual-system-only upgrade
- [x] Highlight optional next implementation step
- **Status:** complete

## Key Questions
1. Which UI changes increase perceived quality fastest without reducing scholarly tone?
2. Which content modules strengthen authority and collaboration readiness?
3. How to improve visual identity without reducing readability and performance?

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Use planning-with-files workflow | Task is multi-step and benefits from persistent working notes |
| Audit real files before giving advice | Recommendations should match current implementation, not generic templates |
| Focus on homepage-first improvements | User specifically asked for homepage upgrades |
| Keep suggestions split by impact and effort | Enables practical adoption without full redesign upfront |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| Direct web extraction of the supplied Scholar profile returned an internal error | 1 | Inspect the exact profile through the in-app browser and cross-check against local bibliography |
| Combined CV build-script search returned exit 2 after traversing the embedded CV repository metadata | 1 | Use explicit source paths and inspect the available TeX binaries directly instead of searching the nested `.git` directory |
| `rg` not available in shell | 1 | Switched to `find` + `grep` + `sed` |
| Parallel copy/check race when creating planning files | 1 | Re-ran copy and verification sequentially |
| `bundle exec jekyll build` failed: missing `bundler` 4.0.4 | 1 | Logged environment constraint; provided verification caveat to user |

## Notes
- Existing homepage already has a clean professional base.
- Main opportunity is stronger visual hierarchy and sharper research differentiation.

---

# Task Plan: Homepage CV, Publications, and Bilingual Redesign

## Goal
Upgrade the personal academic homepage so it includes the CV TeX source in-repo, exposes English/Chinese CV options, updates recent publications, and presents a more polished bilingual-first homepage with English as default.

## Current Phase
Phase 5

## Phases
### Phase 1: Requirements & Discovery
- [x] Capture user requirements
- [x] Inspect current Jekyll/al-folio structure and content sources
- [x] Research publication metadata from supplied links
- [x] Identify CV repository integration approach
- **Status:** complete

### Phase 2: Planning & Structure
- [x] Decide where cloned CV source should live
- [x] Decide bilingual UI/content strategy with minimal disruption
- [x] Decide publication update format
- **Status:** complete

### Phase 3: Implementation
- [x] Clone/import CV TeX repo into this repository
- [x] Update publication bibliography and selected homepage content
- [x] Add English/Chinese CV display options
- [x] Redesign homepage layout and styles
- **Status:** complete

### Phase 4: Testing & Verification
- [x] Build or validate site locally
- [x] Check key generated pages/routes if possible
- [x] Log any dependency or environment blockers
- **Status:** complete

### Phase 5: Delivery
- [x] Summarize files changed
- [x] Report verification results and caveats
- **Status:** complete

## Key Questions
1. How does this site currently render publications and selected papers?
2. Does the CV repo contain Chinese and English TeX/PDF outputs, or only TeX sources?
3. What is the least brittle way to provide Chinese/English switching in an al-folio site?

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Append new planning section instead of replacing old notes | Preserve previous project memory while making this session trackable |
| Vendor cloned CV source under `assets/cv/Yihong-Zhou-CV` | Keeps user-requested TeX source in the site repo and makes it easy to link from pages |
| Use CSS-only language toggles on homepage and CV page | Avoids adding JavaScript dependencies and keeps English as default via checked radio inputs |
| Update BibTeX as the publication source of truth | Publications page and selected-paper blocks both render from `_bibliography/papers.bib` |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| Initial planning append patch failed because `findings.md` tail did not match template text | 1 | Re-applied using file-specific append anchors |
| `git clone` failed because sandbox could not resolve `github.com` | 1 | Re-ran with approved escalated network access |
| Local `bundle exec jekyll build --quiet` failed because system Ruby 2.6 cannot use Bundler 4.0.4 | 1 | Used project Docker Compose image to build successfully |
| `gem install --user-install bundler:4.0.4` failed because Bundler 4 requires Ruby >= 3.2 | 1 | Switched to Docker Compose validation |
| Sandbox-local curl could not reach Docker port 8080 | 1 | Re-ran curl outside sandbox with approved escalation; pages returned HTTP 200 |

---

# Task Plan: CV Submodule and Automated PDF Build

## Goal
Convert the imported CV source into a real Git submodule pointing at `yihong-zhou/Yihong-Zhou-CV.git`, then add a GitHub Action that can update the submodule, compile English/Chinese PDFs, and commit refreshed PDF assets back to the homepage repository.

## Current Phase
Complete

## Phases
### Phase 1: Discovery
- [x] Inspect existing workflows and CV source layout
- [x] Confirm CV repo branch/remote from local clone backup
- **Status:** complete

### Phase 2: Submodule Conversion
- [x] Replace vendored CV files with a Git submodule at the same path
- [x] Add `.gitmodules` metadata with branch tracking
- **Status:** complete

### Phase 3: GitHub Action
- [x] Add workflow to update submodule, compile PDFs, and commit changes
- [x] Keep existing site deployment workflow compatible with submodules
- [x] Use `pdflatex` for English CV and `xelatex` for Chinese CV
- **Status:** complete

### Phase 4: Verification
- [x] Validate submodule status
- [x] Validate workflow YAML shape
- [x] Build site locally if practical
- **Status:** complete

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Use `assets/cv/Yihong-Zhou-CV` as the submodule path | Preserves existing CV page links and keeps the directory intuitive |
| Track CV repo `main` branch in `.gitmodules` | The cloned CV repository is currently on `main` |
| Compile generated PDFs into `assets/pdf` | Existing CV page already serves PDFs from this directory |

---

# Task Plan: Academic-Star Homepage Redesign

## Goal
Rework the homepage so it feels like a focused, high-potential academic profile rather than a collection of CV facts: sharper research thesis, stronger evidence hierarchy, more visual polish, and less duplicated clutter.

## Current Phase
Complete

## Phases
### Phase 1: Discovery
- [x] Inspect current homepage structure
- [x] Inspect current custom styling and available visual assets
- **Status:** complete

### Phase 2: Redesign
- [x] Rewrite homepage content around identity, thesis, proof, agenda, and CV
- [x] Add polished homepage components and responsive styles
- [x] Reduce duplicated lower-page clutter
- **Status:** complete

### Phase 3: Verification
- [x] Build site locally
- [x] Check generated homepage references
- **Status:** complete

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Keep bilingual toggle with English default | User requested bilingual homepage earlier; it remains useful |
| Limit News and remove auto Featured publications from homepage | Reduces duplication and visual clutter because recent/selected work is now explicitly curated |
| Use publication preview images in selected evidence cards | Adds visual richness while staying academically grounded |

---

# Task Plan: Homepage Layout Audit and Tightening

## Goal
Review the current generated homepage layout as a whole and fix obvious visual balance problems, especially the oversized/empty hero panel and underpowered CTA buttons.

## Current Phase
Complete

## Phases
### Phase 1: Visual Audit
- [x] Capture user-reported hero issue
- [x] Inspect generated layout/CSS structure
- [x] Identify high-impact layout fixes beyond the reported screenshot
- **Status:** complete

---

# Task Plan: Professional Visual System Redesign (2026-07-11)

## Goal
Elevate the entire academic website so it feels more professional, refined, and visually distinctive while preserving speed, accessibility, bilingual content, and the existing academic information architecture.

## Current Phase
Complete

## Phases
### Phase 1: Visual and Structural Audit
- [x] Inspect the rendered homepage, publications, talks, CV, and collaboration pages at desktop and mobile widths
- [x] Audit typography, color, spacing, navigation, cards, imagery, and hierarchy
- [x] Identify the smallest coherent visual system that improves the whole site
- **Status:** complete

### Phase 2: Design System Implementation
- [x] Refine the global palette, typography, page background, navigation, footer, buttons, links, and containers
- [x] Redesign shared page headers and card surfaces
- [x] Improve homepage hero, proof strip, flagship work, agenda, leadership, and news presentation
- [x] Improve publications, talks, CV, and collaboration page consistency

---

# Task Plan: Publication Preview Images (2026-07-14)

## Goal
Add accurate, polished preview images for the three newest publication entries that currently have no `preview` asset.

## Current Phase
Phase 4

## Phases
### Phase 1: Identify and Source
- [x] Identify the three newest bibliography entries without previews
- [x] Locate authoritative paper pages and downloadable manuscripts
- **Status:** complete

### Phase 2: Select and Produce Previews
- [x] Render the relevant PDF pages
- [x] Select a representative contribution figure for each paper
- [x] Crop and export consistent PNG previews
- **Status:** complete

### Phase 3: Integrate
- [x] Add `preview` fields to the bibliography
- [x] Confirm the generated Publications page references all three assets
- **Status:** complete

### Phase 4: Verify
- [x] Build the Jekyll site
- [x] Visually inspect desktop and mobile Publications layouts
- [x] Check for missing assets and horizontal overflow
- **Status:** complete

## Target Entries
- `deng2026supervised` — arXiv:2606.24947
- `zhou2026decisionfocused` — arXiv:2607.05830
- `paredes2027optimal` — Electric Power Systems Research 262, 113693

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Use figures from the authors' paper PDFs | Keeps previews faithful to the research rather than using generic decoration |
| Match the existing `publication_preview/*.png` convention | Avoids template changes and keeps the visual system consistent |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| Combined planning-file update used a non-unique `Current Phase` anchor | 1 | Re-applied with the publication-task heading as the patch context |
| `pdftotext` is unavailable in the host shell | 1 | Use the bundled Python PDF libraries for caption discovery; keep Poppler `pdfinfo`/`pdftoppm` for rendering |
| ImageMagick `identify` is unavailable in the host shell | 1 | Use macOS `sips` for dimensions and the bundled image libraries only where needed for deterministic crops |
| Initial `sips --cropOffset` crops clipped diagram labels | 1 | Switch to exact pixel-coordinate cropping with bundled Pillow, then re-inspect every output |
- **Status:** complete

### Phase 3: Responsive and Accessibility Pass
- [x] Verify desktop, tablet, and mobile layouts
- [x] Check contrast, focus states, motion preferences, image cropping, and text overflow
- **Status:** complete

### Phase 4: Build and Visual QA
- [x] Run the full Jekyll build
- [x] Inspect final rendered pages and iterate on defects
- [x] Confirm no unintended source or generated-file changes
- **Status:** complete

## Design Principles
- Academic authority before decoration
- Editorial restraint, generous spacing, and precise alignment
- Warm Oxford-inspired neutrals with restrained blue and brass accents
- Strong typographic hierarchy and quieter supporting metadata
- Photography and publication visuals used intentionally, not ornamentally

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| Host Bundler 4.0.4 unavailable | 1 | Used the repository's Docker build environment |
| In-app screenshot compositor briefly lagged theme transitions | 1 | Waited for settled state and verified computed colors |
| HTMLProofer executable unavailable in image | 1 | Ran a Nokogiri-based generated-site local link and asset check |

### Phase 2: Implementation
- [x] Tighten hero panel spacing and height
- [x] Restore CTA button size/weight and hierarchy
- [x] Check related homepage sections for density/spacing issues
- **Status:** complete

### Phase 3: Verification
- [x] Build site locally
- [x] Confirm generated HTML/CSS reflect layout fixes
- [x] Summarize remaining caveats
- **Status:** complete

---

# Task Plan: Talks Zoom Distortion (2026-07-14)

## Goal
Reproduce and fix the production-only image distortion that appears after opening Talks photographs in the zoom overlay.

## Current Phase
Complete

## Phases
### Phase 1: Reproduce and Diagnose
- [x] Inspect the deployed Talks page and trigger image zoom
- [x] Compare deployed CSS, image geometry, and zoom overlay state with local source
- **Status:** completed

### Phase 2: Implement
- [x] Apply the smallest scoped fix to zoomed Talks images
- [x] Preserve normal gallery card cropping and other page zoom behaviour
- **Status:** completed

### Phase 3: Verify
- [x] Build locally
- [x] Test closed/open zoom geometry at desktop and mobile widths
- [x] Confirm no horizontal overflow or regression on Publications images
- **Status:** completed

### Phase 4: Verify deployment
- [x] Identify the pushed revision and its GitHub Pages workflow state
- [x] Inspect any failed build/deploy log and isolate the root cause
- [x] Add and locally validate a PurgeCSS safelist for medium-zoom runtime selectors
- [x] Commit and push the production safelist fix (`048ccd1`)
- [x] Confirm the live Talks HTML and zoom CSS update after deployment
- [x] Receive independent user confirmation that the public zoom interaction works
- **Status:** completed

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Reproduce against the deployed URL first | The defect is production-only according to the user, so live computed geometry is the authoritative starting point |
| Scope the safeguard to `data-zoomable` images only while medium-zoom is opening/opened/closing | Preserve all thumbnail crops while preventing aspect-ratio distortion in the detached overlay image on any page |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| Live zoom-state screenshot timed out in the in-app browser | 1 | Use targeted DOM geometry and inline-style inspection instead of repeating the same capture |
| Mobile featured-image locator click timed out in the browser transport | 2 | Target load/viewport geometry is valid; switch to the real coordinate interaction capability against the measured visible image |
| Alternative mobile CSS-locator click stalled and reset the browser kernel | 1 | Stop retrying the unstable transport; retain the captured 390px geometry/style evidence and finish with generated-site regression checks |
| First inline generated-asset checker had a shell quoting parse error | 1 | Simplify the checker to the generated HTML's double-quoted attributes and rerun |
| GitHub CLI is not installed (`gh: command not found`) | 1 | Use GitHub's public Actions/Pages REST endpoints for read-only deployment inspection |
| Web opener rejected the GitHub API URL as unsafe | 1 | Fetch the same public endpoint with the already-approved `curl` command |
| Local Docker service does not have the workflow-only `purgecss` binary | 1 | Install PurgeCSS in the disposable development container, then run the exact production command |
| Jekyll container also lacks `npm` | 1 | Use the bundled Node/pnpm runtime and an isolated `/private/tmp` tool directory |
| Temporary `pnpm dlx purgecss` was rejected as third-party code execution | 1 | Do not retry or work around the rejection; use an already-installed local PurgeCSS package if present, otherwise rely on config/schema validation plus the GitHub workflow |
# Task Plan: Homepage Content Simplification (2026-07-23)

## Goal
Simplify the homepage opening, move the current position beneath the left portrait, and fold the key performance evidence into the representative-work descriptions without a separate metric strip.

## Current Phase
Phase 3

## Phases
### Phase 1: Audit current structure
- [x] Locate the homepage markup and corresponding responsive styles
- [x] Map each user-requested content move to its current component
- **Status:** completed

### Phase 2: Implement
- [x] Keep only the supplied research heading and paragraph in the opening content
- [x] Move the current Oxford position beneath the portrait
- [x] Remove the separate metric strip and move the requested performance facts into the first two representative-work descriptions
- **Status:** completed

### Phase 3: Verify
- [x] Build the site
- [x] Review desktop and mobile layouts in the browser
- [x] Confirm no duplicated position or speedup content remains
- **Status:** completed

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Preserve the user's supplied English text verbatim | This is an editorial simplification request, not a rewrite |
| Reuse existing visual components where possible | Maintain the professional design system while reducing density |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| Browser preview does not support `networkidle` wait state | 1 | Use the documented `load` state and take a fresh DOM snapshot before continuing |
| Browser DOM wrapper does not expose `compareDocumentPosition` | 1 | Verify content order using absolute element offsets instead of DOM node methods |
| Clicking the hidden Chinese radio did not trigger the styled language tab | 1 | Use the visible “中文” label in the rendered switch for interaction verification |

---

# Task Plan: Scholar, CV, Website, and Passau Panel Update (2026-08-04)

## Goal
Verify the latest Google Scholar record and the University of Passau panel event, then update the bilingual website and CV sources/PDFs consistently.

## Current Phase
Phase 3 complete

## Phases
### Phase 1: Audit and source verification
- [x] Capture current Scholar publications/citations
- [x] Verify Passau workshop title, date, venue, and role
- [x] Compare Scholar with local bibliography/CV
- [x] Map required website and bilingual CV edits
- **Status:** completed

### Phase 2: Implement website and CV updates
- [x] Update bibliography/publications/news/talks/about as supported by verified sources
- [x] Update English and Chinese CV source
- [x] Rebuild final CV PDFs
- **Status:** completed

### Phase 3: Verify
- [x] Build website and run source consistency checks
- [x] Render and visually inspect every updated CV PDF page
- [x] Confirm final PDFs and website assets are linked correctly
- **Status:** completed

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Treat Google Scholar and the University of Passau page as verification sources | They are the user-specified current records |
| Preserve bilingual parity | The site and CV are maintained in English and Chinese |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| Planning update context matched an older task section instead of the current Scholar task | 1 | Re-read the plan tail and patch the current task block with exact context |
| Combined CV build-script search traversed a nested Git directory and returned exit 2 | 1 | Scoped subsequent searches to the CV source files and used the installed TeX toolchain directly |
| Final PDF text-extraction check called unavailable `pdftotext` | 1 | Rely on the completed six-page visual inspection plus source/generated-HTML checks; rerun remaining Git checks separately |
