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
