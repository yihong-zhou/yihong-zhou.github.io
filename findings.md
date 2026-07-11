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

---

# Findings: Professional Visual System Redesign 2026-07-11

## Initial Context
- The site already has a custom academic-star homepage, bilingual content, responsive publication cards, and a Talks gallery.
- Global styling is concentrated in `_sass/_base.scss`; theme tokens live in `_sass/_themes.scss`.
- Current typography uses Source Sans 3, Merriweather, and IBM Plex Mono.
- The site fixes both navbar and footer, uses a 1120px content width, and has an existing light/dark theme system.
- A visual audit of rendered pages is still pending.

## Homepage Audit — Current State
- The page has a clear research narrative and substantial custom work, but the visual language still resembles a styled template rather than a distinctive editorial identity.
- The fixed left profile rail makes the main content feel narrow and visually detached from the hero; the portrait is strong but under-integrated.
- Merriweather adds academic character, but heavy use at multiple levels creates a slightly old-fashioned and visually dense feel.
- Border-heavy cards and repeated white rectangles flatten hierarchy; premium surfaces need fewer borders, more tonal contrast, and more deliberate depth.
- The Oxford navy and brass direction is appropriate, but current brass labels and grey text can feel muted rather than confident.
- Navigation is functional but generic; it lacks a stronger brand mark, active-state treatment, and refined spacing.
- The fixed footer causes duplication/occlusion artifacts in full-page captures and should become a normal page footer.
- The homepage proof strip, flagship cards, agenda cards, and leadership block are structurally good candidates for a unified editorial card system.

## Publications and Talks Audit
- Publications uses strong chronological structure but feels sparse and template-like; the bright magenta venue badges clash with the Oxford-inspired palette.
- Publication rows need stronger grouping, better metadata hierarchy, a more refined search control, and consistent surface treatment.
- Talks has good photography and content, but the large bordered feature cards feel heavy; primary and gallery imagery should create hierarchy with less enclosing chrome.
- Tiny uppercase action buttons on Talks are visually underpowered and inconsistent with homepage CTAs.
- The fixed footer visibly overlays content on both pages, confirming it should be converted to a normal document-flow footer.

## CV and Collaboration Audit
- The CV page is functionally strong, but its oversized embedded viewer dominates the visual experience; controls and language switch need to feel like part of the same system.
- CV actions use heavy uppercase labels that read more like an admin interface than a premium academic site.
- Collaboration is the weakest core page visually: it is mostly headings and bullet lists with little hierarchy, proof, or invitation to act.
- Collaboration should become a purposeful landing page with a compact proposition, structured collaboration modes, current focus cards, and a prominent contact CTA.
- Shared page headers need a consistent editorial treatment so Publications, Talks, CV, Teaching, and Collaboration feel like one authored site.

## Mobile Audit
- The homepage name wraps awkwardly at 390px, splitting the Chinese name across lines; mobile title sizing and line-breaking need explicit treatment.
- The portrait occupies most of the initial viewport and delays the research proposition; mobile should use a shorter portrait crop or integrate identity and thesis more tightly.
- The fixed footer overlays the mobile viewport and visually interrupts content on every page.
- Collaboration remains readable but becomes a long undifferentiated document; cards and responsive content grouping would materially improve scanning.
- Mobile navigation needs a stronger brand presence and more polished menu affordance while retaining the current compact footprint.
- Mobile overflow pass: language toggle labels and hero copy children now have explicit shrink/wrap rules, so real narrow viewports should not inherit desktop intrinsic widths.

## Cross-page Design Audit — Recommended System
- The strongest existing direction is an Oxford-editorial palette: warm ivory, deep navy, muted brass, serif display type, and restrained sans-serif body text. The redesign should consolidate this direction rather than replace it.
- Shared page headings need a consistent eyebrow/title/lede system; component headings should not inherit generic article underline decoration.
- Navigation branding is inconsistent between the homepage and inner pages. A single Yihong Zhou / 周羿宏 identity should be present everywhere.
- The fixed, dark, template-style footer makes the site feel less bespoke and can cover mobile content. It should become a normal-flow, quiet contact footer.
- Collaboration is the largest visual gap and needs a value proposition, audience cards, focus areas, outcomes, and a clear contact CTA.
- Publications already has a strong list structure; its magenta venue labels and cropped research figures are the main inconsistencies.
- Talks needs an editorial gallery hierarchy rather than equal-weight photo grids, and only the first hero image should load eagerly.
- CV should foreground a concise summary and actions, with the embedded PDF treated as secondary—especially on mobile.
- Repeated CSS overrides in `_sass/_base.scss` are a maintenance risk. The redesign should live in one deliberately scoped stylesheet imported last.
- Social sharing still points to the removed `prof_pic.jpg`; the Open Graph image should use the new portrait.

## First Render of the New System
- The first production build succeeds in the project Docker environment; only pre-existing Sass and notebook deprecation warnings remain.
- The new portrait is visibly active and the editorial typography, brass/navy identity, and reduced template chrome are rendering.
- The initial full-page browser capture appears to be using a constrained layout viewport and reveals horizontal clipping around the homepage hero/title. Viewport geometry and the element causing overflow need to be measured before finalizing.
- Geometry at 1280px confirms there is no document-level horizontal overflow (`scrollWidth` equals `innerWidth`). The apparent clipping comes from the full-page image renderer, but the homepage name is genuinely wrapping because the shared masthead caps it at 48rem. The About masthead should use the full content width while inner pages retain the narrower editorial measure.
- After widening only the About masthead, the full bilingual name fits cleanly at 1280px. The settled first viewport now reads as a coherent hierarchy: global identity, editorial nameplate, new portrait, language control, research proposition, and proof rail.
- The site retains a short inherited page-load fade, so screenshots taken immediately after reload appear washed out; after 1.8 seconds the final contrast and colors are correct.
- The in-app browser accepted the 390×844 mobile viewport but timed out while capturing the first screenshot. Mobile geometry and content checks should continue independently of that capture failure.
- A follow-up geometry read showed the viewport was still 1280px, so the first viewport override used the wrong payload shape rather than exposing a responsive-layout defect.
- The viewport control accepts the documented width/height payload but the current in-app browser session remains at 1280×720—even in a newly opened tab. Mobile validation therefore needs a headless browser fallback or static breakpoint inspection.
- The viewport override takes effect after a subsequent navigation: responsive QA is now running at a real 390×844 viewport with `scrollWidth` exactly 390px.
- Mobile homepage composition is strong: the bilingual name wraps as a deliberate two-line lockup, the portrait becomes a compact identity card, and the research hero begins within the first screen. The mobile brand copy is slightly clipped and needs a small size/width correction.
- Collaboration stacks cleanly on mobile, but its dark “Current frontier” panel needs an explicit light color on the `strong` heading because a global strong-text rule is winning the cascade.
- Mobile brand geometry confirms the full “Yihong Zhou” text fits; the screenshot’s apparent truncation is antialiasing at preview scale rather than overflow.
- Publications is clean and fully contained at 390px. The Scholar/search toolbar stacks naturally, the navy venue badge now belongs to the palette, and year/paper hierarchy remains readable without turning each item into a floating card.
- Talks has a strong mobile opening with a full-width event photograph and editorial event title. Non-featured Bootstrap rows retain a 3px negative margin, creating a small 393px document width; mobile overrides should zero all Talk row margins and column side padding.
- The Talks mobile screenshot rendered the fixed-nav strip as black even though computed light-theme styles, position, and geometry are correct; this appears to be a capture artifact rather than page state.
- Teaching is fully contained at 390px and the redesigned timeline now communicates institution, period, supervision scale, lab contribution, and recognition in a scan-friendly order.
- CV is fully contained at 390px; the summary, bilingual control, and primary PDF actions remain visible while the browser-style iframe is correctly suppressed in favor of a mobile reading note.
- Rebuilt Collaboration now has 390px containment and explicit ivory text in its dark frontier panel; the light-theme first viewport passes visual contrast review.
- The theme toggle is inside the collapsed mobile navigation, so direct clicking correctly times out while the menu is closed. Dark-mode QA must open the hamburger first.
- The responsive navigation button is present in the accessibility tree with an appropriate “Toggle navigation” label, but two locator clicks timed out in the current browser transport. The page’s landmark and heading structure itself is clean in the DOM snapshot.
- Browser-side evaluation is intentionally read-only in this environment, so dark-theme attributes cannot be forced for QA. Coordinate interaction is the remaining safe fallback for opening the mobile menu and using the real theme control.
- Coordinate interaction successfully opened the real mobile menu. Accessibility geometry is correct, but the active Collaboration link has white text on a transparent background because the theme’s more-specific `background-color: inherit` rule beats the new CTA background; the active CTA background needs `!important` or matching specificity.
- The real theme control cycles System → Light → Dark as intended. In dark mode, computed contrast values are correct: body text becomes light, cards become `rgb(26,36,48)`, the primary CTA becomes brass with dark text, and the frontier title remains ivory.
- As with earlier reload captures, the screenshot compositor can lag behind the computed theme state; dark-mode acceptance should rely on both a settled capture and computed colors.
- A settled dark-theme capture confirms the final visual state: navy-black surfaces, readable light text, brass primary CTA, and ivory frontier heading all have clear contrast.
- After the final rebuild, the active Collaboration navigation pill now has the intended navy background and white text; the mobile menu remains exactly 390px wide with no overflow.
- Final Talks geometry shows every tested row aligned to the 366px content column and the document width fixed at 390px; the previous 3px negative-margin overflow is resolved.
- The browser’s element-screenshot helper requires coordinates rather than a selector, so footer review should use a bottom-of-page scroll plus a normal viewport capture.
- The semantic locator API has no scroll-into-view method in this browser binding; footer visual review will use the coordinate scroll capability.
- Coordinate scrolling works with `scrollX`/`scrollY` payload keys. The first large scroll confirmed the footer remains static and below the Talks content; one final downward scroll is needed to bring it into the viewport.
- Final footer review passes in dark mode: the normal-flow footer has clear identity, contact links, location, and copyright, with no overlap against the last Talk entry.
- The browser was returned to System theme (currently light), the viewport override was reset, and the main preview was returned to the homepage.
- The generated main stylesheet URL still used the constant `d41d8cd…` empty-file hash, which could leave returning visitors on stale CSS after deployment. The main stylesheet now uses the Jekyll build timestamp as its version query so every deployment invalidates the browser cache.
