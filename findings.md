# Findings: Personal Academic Homepage Upgrade

## Scope
Audit focused on homepage and adjacent conversion pages:
- `_pages/about.md`
- `_sass/_base.scss`
- `_config.yml`
- `_pages/collaboration.md`
- `_pages/publications.md`
- `_pages/cv.md`

## Current Strengths
1. Clear identity and positioning
- Homepage already states role (Postdoc @ Oxford) and research direction early.
- Collaboration CTA exists above the fold.

2. Professional tone and academic fit
- Content is formal, concise, and credible.
- Separate pages for collaboration, publications, talks, and CV are in place.

3. Consistent custom component styling
- `position-card`, `collab-intro-card`, and `education-timeline` provide structured layout.

## Gaps Limiting “Premium” Feel
1. Weak visual signature
- Current layout is clean but visually close to standard al-folio style.
- Limited hero-level design moment (no strong visual anchor, metric strip, or signature motif).

2. Hierarchy could be sharper
- Dense bio paragraphs appear before high-value trust signals.
- Important distinctions (focus areas, impact, openings) are not scannable enough.

3. Conversion path can be stronger
- Collaboration page is useful but homepage lacks tiered CTA strategy.
- No explicit “work with me” outcomes block on top section.

4. Authority signals are under-exposed on homepage
- Publications and talks exist, but homepage does not foreground selected impact indicators (e.g., venue quality, invited talks, industrial pilots).

5. Micro-interaction and polish opportunities
- Cards are solid but static.
- No refined motion/stagger for section entry; perceived modernity can be improved with subtle animation.

## Recommended Direction (Style + Professional)
1. Build a structured hero with two-column emphasis
- Left: short research manifesto (1 sentence), 3 keyword chips, concise mission.
- Right: portrait + current role + lightweight trust stat cards.

2. Add an “Impact Snapshot” strip directly below hero
- 3–5 tiles: selected papers, invited talks, open collaborations, focus domains.
- Keep neutral palette and restrained typography.

3. Reorder homepage sections for decision speed
- Hero → Impact Snapshot → Research Focus Areas → Selected Publications → Collaboration CTA → Bio/Education.

4. Strengthen visual system without over-styling
- Define a tighter palette and variable set (primary ink/navy, muted slate, subtle accent).
- Increase whitespace rhythm and heading contrast.
- Keep component borders but add mild depth and hover elevation.

5. Improve CTA architecture
- Primary CTA: Collaborate.
- Secondary CTA: Publications.
- Tertiary CTA: CV PDF.
- Keep contact email present but not the only action.

6. Add professionalism-enhancing detail blocks
- “What collaborators can expect” (3 bullets)
- “Current interests for 2026” (time-bounded themes)
- “Available for” (seminars/reviews/joint projects)

## Quick Wins (1-2 hours)
1. Add homepage impact strip (simple cards, no plugin dependency).
2. Tighten first bio paragraph to 2–3 short lines and move details lower.
3. Make CTA button hierarchy explicit.
4. Tune card radius/shadow/spacing for higher visual quality.

## Medium Effort (half day)
1. Introduce homepage section animation (fade-up/stagger, reduced-motion safe).
2. Add a featured paper card with abstract teaser and direct PDF/code links.
3. Add social proof row (institutions, venues, collaborators).

## High Impact (1 day)
1. Homepage information architecture redesign with modular blocks.
2. Design token pass in `_sass` for brand-consistent visual language.
3. Full responsive tune for hero and timeline interactions.

## Guardrails (to keep professionalism)
1. Avoid heavy gradients/background art that compete with text.
2. Avoid oversized novelty fonts; prioritize readability.
3. Limit animation duration and frequency; prefer subtle transitions.
4. Keep claims evidence-based and specific.

---

# Findings: Homepage CV, Publications, and Bilingual Redesign

## Requirements
- Clone/import `yihong-zhou/Yihong-Zhou-CV.git` into this homepage repository.
- Show Chinese or English CV options on the personal homepage; default language should be English.
- Update publication information for four supplied links:
  - https://ieeexplore.ieee.org/abstract/document/11457687
  - https://arxiv.org/abs/2604.24549
  - https://arxiv.org/abs/2605.14103
  - https://pubsonline.informs.org/doi/10.1287/ijoc.2024.1073
- Make the homepage layout more polished/professional.
- Provide Chinese/English options for the personal homepage, defaulting to English.

## Research Findings
- Repository is a Jekyll/al-folio site.
- Homepage content is `_pages/about.md` with `layout: about`; the about layout renders a sticky profile sidebar and then injects page content before News and Featured Publications.
- Publications are generated from `_bibliography/papers.bib`; selected homepage papers use `_includes/selected_papers.liquid` with the query `@*[selected=true]*`.
- Current CV page `_pages/cv.md` embeds only `/assets/pdf/Yihong_Zhou_CV.pdf`.
- Existing styling already includes custom about layout rules and prior polish in `_sass/_base.scss` and `_sass/_themes.scss`.
- CV repo cloned to `assets/cv/Yihong-Zhou-CV`; it contains `main.tex` and `Chinese.tex`.
- The nested clone `.git` metadata was moved to `/private/tmp/Yihong-Zhou-CV.git-backup` so the homepage repo can track the TeX files as normal source files.
- Compiled CV PDFs were generated with XeLaTeX:
  - `assets/pdf/Yihong_Zhou_CV.pdf` (updated English default)
  - `assets/pdf/Yihong_Zhou_CV_en.pdf`
  - `assets/pdf/Yihong_Zhou_CV_zh.pdf`
- arXiv `2604.24549`: "GradMAP: Gradient-Based Multi-Agent Proximal Learning for Grid-Edge Flexibility"; authors Yihong Zhou, Hongtai Zeng, Thomas Morstyn; submitted 2026-04-27.
- arXiv `2604.24549` abstract notes a case study with 1,000 agents and 15 minutes of training on a single NVIDIA RTX PRO 5000 Blackwell 48GB GPU.
- arXiv `2605.14103`: "JAX-Based Batched AC Power Flow for GPU Acceleration and AI Ecosystem Integration"; authors Yihong Zhou, Dylan Cope, Jakob Foerster, Thomas Morstyn; submitted 2026-05-13; comments say in review for IEEE Power Engineering Letters.
- arXiv `2605.14103` abstract states the JAX solver implements Newton-Raphson for transmission networks and Z-Bus power flow for three-phase unbalanced distribution networks, with more than 10x speed-ups relative to pandapower and OpenDSS.
- INFORMS DOI `10.1287/ijoc.2024.1073`: "Strengthened and Faster Linear Approximation to Joint Chance Constraints with Wasserstein Ambiguity"; authors Yihong Zhou, Yuxin Xia, Hanbin Yang, Thomas Morstyn; INFORMS Journal on Computing; published online 2026-05-12; cite as 2026, 0(0).
- IEEE document `11457687` appears to correspond to "Grid-Intelligent AI Data Centres for Primary Response"; CV source, ORCID/Crossref, and PSAL publication page give IEEE Transactions on Industry Applications, 2026, DOI `10.1109/TIA.2026.3678552`; PSAL lists pages 1-14.
- IEEE Xplore page itself returned an internal error in the browsing tool, so metadata was cross-checked against the cloned CV source plus ORCID/Crossref and the Oxford PSAL publications page.

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| Use the existing Jekyll/al-folio structure unless inspection proves otherwise | The repository layout includes `_pages`, `_bibliography`, `_sass`, and al-folio assets |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| Initial planning append patch failed due to a stale tail anchor | Re-applied with current file tails and narrower anchors |
| `git clone` failed in sandbox due DNS/network restriction | Re-ran with user-approved escalated `git clone` permission |

## Resources
- CV repo requested by user: https://github.com/yihong-zhou/Yihong-Zhou-CV.git
- Homepage: `_pages/about.md`
- CV page: `_pages/cv.md`
- Bibliography: `_bibliography/papers.bib`
- About layout: `_layouts/about.liquid`
- Selected papers include: `_includes/selected_papers.liquid`
- arXiv 2604.24549: https://arxiv.org/abs/2604.24549
- arXiv 2605.14103: https://arxiv.org/abs/2605.14103
- INFORMS DOI 10.1287/ijoc.2024.1073: https://pubsonline.informs.org/doi/10.1287/ijoc.2024.1073
- PSAL publications page for IEEE TIA paper: https://eng.ox.ac.uk/psal/publications

## Visual/Browser Findings
- Pending browser/source review.

---

# Findings: CV Submodule and PDF Automation

## Implementation Findings
- `assets/cv/Yihong-Zhou-CV` is now a Git submodule pointing to `https://github.com/yihong-zhou/Yihong-Zhou-CV.git`.
- `.gitmodules` tracks the submodule branch as `main`.
- The submodule is currently pinned at commit `b2c7012f14bd38dbbb2e2ffb21b90339d5f048da`.
- The site deployment workflow now checks out submodules so `/assets/cv/Yihong-Zhou-CV/main.tex` and `/assets/cv/Yihong-Zhou-CV/Chinese.tex` remain available on the built site.
- The CV build workflow compiles:
  - English `main.tex` with `pdflatex`
  - Chinese `Chinese.tex` with `xelatex`
- The generated PDFs remain in:
  - `assets/pdf/Yihong_Zhou_CV.pdf`
  - `assets/pdf/Yihong_Zhou_CV_en.pdf`
  - `assets/pdf/Yihong_Zhou_CV_zh.pdf`

## Verification Findings
- `git submodule status` reports the CV submodule at `b2c7012` on `heads/main`.
- Workflow YAML parse check passed for `build-cv.yml` and `deploy.yml`.
- Local English CV PDF was rebuilt with `pdflatex`; PDF strings include `Producer (pdfTeX-1.40.27)`.
- Local Jekyll build passed through Docker Compose after adding the submodule and workflow changes.

---

# Findings: CV Publication Refresh

## Updated CV Source
- English and Chinese CVs now list the INFORMS Journal on Computing paper as a 2026 publication with DOI `10.1287/ijoc.2024.1073`.
- English and Chinese CVs now include:
  - `GradMAP: Gradient-Based Multi-Agent Proximal Learning for Grid-Edge Flexibility`, `arXiv:2604.24549`
  - `JAX-Based Batched AC Power Flow for GPU Acceleration and AI Ecosystem Integration`, `arXiv:2605.14103`

## Submodule Note
- These TeX edits are inside the CV submodule, so they are separate from the parent homepage repo's Git history until committed inside `assets/cv/Yihong-Zhou-CV`.

---

# Findings: Session Chair Roles

## Added Roles
- IEEE I&CPS Asia 2026, Special Session 18: "AI-Enabled Optimization for Integrated Energy and Transportation Systems in Smart Cities", Kunming, China.
- IEEE EI2 2026, Special Session 02: "Key Technologies for Collaborative Planning and Operation of Source-network-load-storage in New-Type Power Systems", Shanghai, China.

## Updated Surfaces
- English CV and Chinese CV now include both roles under 2026 academic leadership/session chair activities.
- News section has two new inline announcements for the session chair roles.

---

# Findings: Academic-Star Homepage Redesign

## Current Homepage Issues
- The current homepage contains good information, but the order reads like a CV summary rather than a coherent academic identity.
- Research focus, recent papers, CV, bio, and education all compete for attention at the same visual level.
- The built-in "Featured publications" section duplicates the custom recent-paper cards, increasing clutter.
- The hero states the research area but does not yet make a memorable claim about what the researcher is becoming known for.

## Design Direction
- Lead with one memorable research thesis: grid-intelligent AI infrastructure and grid-edge flexibility.
- Use a compact proof strip for credibility signals, not a long list of facts.
- Present three flagship works with images and precise impact.
- Move biography/education lower and compress it into a quieter credibility section.
- Keep bilingual support but make English the default.

---

# Findings: Homepage Layout Audit 2026-05-25

## User-Reported Issue
- Hero panel currently has too much empty vertical space after the lead paragraph.
- CTA labels such as "CV" and "Collaborate" appear too small and weak.
- The hero card reads visually unfinished because the large white panel is much taller than its content.

## Initial Diagnosis
- `.star-hero` uses a two-column grid, but on the user's viewport only the text column is visible in the screenshot; the panel still reserves generous padding and vertical rhythm.
- `.star-actions .btn` inherits compact al-folio button sizing, so labels are visually underpowered relative to the hero copy.
- Recent font-size reductions improved the headline scale, but the surrounding panel spacing now needs a density pass.

## Local Screenshot Review
- At 1200x1100, the hero copy card still has a large blank lower half because `.star-hero-copy` sets `min-height: 23rem`.
- CTA buttons render as small centered fragments inside a large card; they need stronger padding, type size, and better row placement.
- The right proof cards are visually acceptable, but the hero left panel feels oversized relative to them.
- The Research Thesis and proof strip are readable; main immediate issue is above-the-fold balance.

## Post-Fix Review
- Desktop hero is now content-height rather than forced-height; the blank lower half is gone.
- Publications now renders as a visible primary CTA after adding stronger specificity against global `a.btn` styles.
- CV and Collaborate are larger and more legible.
- Right-side proof cards were compacted to reduce excess vertical space before Research Thesis.
- A narrow headless Chrome screenshot still shows cropping at 390px, likely because Chrome command-line layout viewport is wider than the screenshot crop; CSS now includes explicit mobile max-width and overflow guards.
- Follow-up alignment pass: hero card now stretches to the proof-card stack height, while its content is vertically centered; the left and right card bottoms align cleanly in the wide screenshot.
- Mobile overflow pass: language toggle labels and hero copy children now have explicit shrink/wrap rules, so real narrow viewports should not inherit desktop intrinsic widths.
