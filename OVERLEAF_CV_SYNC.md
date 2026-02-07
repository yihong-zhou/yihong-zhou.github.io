# Overleaf CV Auto Sync

This repository includes:

- workflow: `.github/workflows/sync-overleaf-cv.yml`
- script: `_scripts/sync_overleaf_cv.sh`

The workflow runs weekly (Monday 06:00 UTC) and can also be run manually.

## Required GitHub Secret

- `OVERLEAF_GIT_URL`
  - Example format: `https://<token>@git.overleaf.com/<project_id>`

## Optional GitHub Secret

- `OVERLEAF_CV_PDF_PATH`
  - PDF path inside your Overleaf project repo.
  - Default: `output.pdf`

## Output

The synced file is saved to:

- `assets/pdf/Yihong_Zhou_CV.pdf`

The CV page (`/cv/`) points to this file directly.
