# Overleaf CV Auto Sync

This repository includes:

- workflow: `.github/workflows/sync-overleaf-cv.yml`
- script: `_scripts/sync_overleaf_cv.sh`

The workflow runs weekly (Monday 06:00 UTC) and can also be run manually.

## Recommended GitHub Secrets (No URL encoding needed)

- `OVERLEAF_PROJECT_ID`
  - Example: `69645318197eb82a04e38ef7`
- `OVERLEAF_GIT_TOKEN`
  - Token/password shown in Overleaf Git panel

## Optional GitHub Secret

- `OVERLEAF_CV_PDF_PATH`
  - PDF path inside your Overleaf project repo.
  - Default: `output.pdf`

## Legacy Secret (still supported)

- `OVERLEAF_GIT_URL`
  - Example format: `https://<token>@git.overleaf.com/<project_id>`

## Output

The synced file is saved to:

- `assets/pdf/Yihong_Zhou_CV.pdf`

The CV page (`/cv/`) points to this file directly.
