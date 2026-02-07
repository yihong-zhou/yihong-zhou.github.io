#!/usr/bin/env bash
set -euo pipefail

# Sync the latest compiled PDF from an Overleaf Git project into the website.
# Preferred env vars (no URL encoding needed):
#   OVERLEAF_PROJECT_ID   e.g. 69645318197eb82a04e38ef7
#   OVERLEAF_GIT_TOKEN    token/password shown in Overleaf Git panel
# Legacy env var (still supported):
#   OVERLEAF_GIT_URL      e.g. https://<token>@git.overleaf.com/<project_id>
# Optional env vars:
#   OVERLEAF_CV_PDF_PATH  path to PDF inside Overleaf project (default: output.pdf)
#   LOCAL_CV_PDF_PATH     destination in this repo (default: assets/pdf/Yihong_Zhou_CV.pdf)

SOURCE_PDF_PATH="${OVERLEAF_CV_PDF_PATH:-output.pdf}"
TARGET_PDF_PATH="${LOCAL_CV_PDF_PATH:-assets/pdf/Yihong_Zhou_CV.pdf}"

tmp_dir="$(mktemp -d)"
cleanup() {
  rm -rf "${tmp_dir}"
}
trap cleanup EXIT

echo "Cloning Overleaf project..."

if [[ -n "${OVERLEAF_PROJECT_ID:-}" && -n "${OVERLEAF_GIT_TOKEN:-}" ]]; then
  askpass_file="${tmp_dir}/askpass.sh"
  cat > "${askpass_file}" <<'EOF'
#!/usr/bin/env bash
case "$1" in
  *Username*) echo "git" ;;
  *) echo "${OVERLEAF_GIT_TOKEN}" ;;
esac
EOF
  chmod +x "${askpass_file}"
  GIT_ASKPASS="${askpass_file}" git clone --depth 1 "https://git.overleaf.com/${OVERLEAF_PROJECT_ID}" "${tmp_dir}/overleaf"
elif [[ -n "${OVERLEAF_GIT_URL:-}" ]]; then
  git clone --depth 1 "${OVERLEAF_GIT_URL}" "${tmp_dir}/overleaf"
else
  echo "Missing credentials: set OVERLEAF_PROJECT_ID + OVERLEAF_GIT_TOKEN (recommended), or OVERLEAF_GIT_URL."
  exit 1
fi

if [[ ! -f "${tmp_dir}/overleaf/${SOURCE_PDF_PATH}" ]]; then
  echo "Could not find PDF at ${SOURCE_PDF_PATH}."
  echo "Available PDF files:"
  find "${tmp_dir}/overleaf" -type f -name "*.pdf" | sed "s#${tmp_dir}/overleaf/##"
  exit 1
fi

mkdir -p "$(dirname "${TARGET_PDF_PATH}")"
cp "${tmp_dir}/overleaf/${SOURCE_PDF_PATH}" "${TARGET_PDF_PATH}"
echo "Synced CV PDF to ${TARGET_PDF_PATH}"
