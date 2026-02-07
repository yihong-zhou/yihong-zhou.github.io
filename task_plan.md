# Task Plan: Upgrade Personal Academic Homepage (Stylish + Professional)

## Goal
Provide a concrete, prioritized upgrade plan to make the existing academic homepage look more distinctive and premium while preserving credibility, clarity, and academic professionalism.

## Current Phase
Phase 5

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
