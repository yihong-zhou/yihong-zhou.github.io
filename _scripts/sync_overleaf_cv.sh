#!/usr/bin/env bash
set -euo pipefail

# Sync the latest compiled PDF from an Overleaf Git project into the website.
# Required env vars:
#   OVERLEAF_GIT_URL      e.g. https://<token>@git.overleaf.com/<project_id>
# Optional env vars:
#   OVERLEAF_CV_PDF_PATH  path to PDF inside Overleaf project (default: output.pdf)
#   LOCAL_CV_PDF_PATH     destination in this repo (default: assets/pdf/Yihong_Zhou_CV.pdf)

if [[ -z "${OVERLEAF_GIT_URL:-}" ]]; then
  echo "OVERLEAF_GIT_URL is not set."
  exit 1
fi

SOURCE_PDF_PATH="${OVERLEAF_CV_PDF_PATH:-output.pdf}"
TARGET_PDF_PATH="${LOCAL_CV_PDF_PATH:-assets/pdf/Yihong_Zhou_CV.pdf}"

tmp_dir="$(mktemp -d)"
cleanup() {
  rm -rf "${tmp_dir}"
}
trap cleanup EXIT

echo "Cloning Overleaf project..."
git clone --depth 1 "${OVERLEAF_GIT_URL}" "${tmp_dir}/overleaf"

if [[ ! -f "${tmp_dir}/overleaf/${SOURCE_PDF_PATH}" ]]; then
  echo "Could not find PDF at ${SOURCE_PDF_PATH}."
  echo "Available PDF files:"
  find "${tmp_dir}/overleaf" -type f -name "*.pdf" | sed "s#${tmp_dir}/overleaf/##"
  exit 1
fi

mkdir -p "$(dirname "${TARGET_PDF_PATH}")"
cp "${tmp_dir}/overleaf/${SOURCE_PDF_PATH}" "${TARGET_PDF_PATH}"
echo "Synced CV PDF to ${TARGET_PDF_PATH}"
