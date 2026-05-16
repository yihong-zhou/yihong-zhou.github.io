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
Phase 4

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
