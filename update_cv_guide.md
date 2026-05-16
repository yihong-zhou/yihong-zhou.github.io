# Updating the CV

This website keeps the CV source and the website PDFs in two related places:

- `assets/cv/Yihong-Zhou-CV/` is the CV Git submodule.
- `assets/pdf/` contains the PDFs served by the website.

GitHub Actions do not automatically pull or compile the CV. The intended workflow is local: edit the TeX files, build the PDFs locally, then push both repositories.

## Normal Workflow

1. Edit the CV TeX source:

```bash
cd assets/cv/Yihong-Zhou-CV
# edit main.tex and/or Chinese.tex
```

2. Commit and push the CV repo:

```bash
git add main.tex Chinese.tex .gitignore
git commit -m "Update CV"
git push
```

3. Return to the website repo and rebuild the PDFs:

```bash
cd ../../..
bin/build_cv
```

The build script uses:

- `pdflatex` for `main.tex`
- `xelatex` for `Chinese.tex`

It updates:

- `assets/pdf/Yihong_Zhou_CV.pdf`
- `assets/pdf/Yihong_Zhou_CV_en.pdf`
- `assets/pdf/Yihong_Zhou_CV_zh.pdf`

4. Commit and push the website repo:

```bash
git add assets/cv/Yihong-Zhou-CV \
  assets/pdf/Yihong_Zhou_CV.pdf \
  assets/pdf/Yihong_Zhou_CV_en.pdf \
  assets/pdf/Yihong_Zhou_CV_zh.pdf

git commit -m "Update CV PDFs"
git push
```

## Why Two Commits?

The CV source is a separate Git repository embedded as a submodule. This means:

- Changes to `main.tex` and `Chinese.tex` belong to the CV repo.
- The website repo only records which CV repo commit it points to.
- The website displays static PDFs from `assets/pdf/`, so those PDFs must also be committed to the website repo.

## Quick Checks

Check the website repo:

```bash
git status
```

Check the CV repo:

```bash
git -C assets/cv/Yihong-Zhou-CV status
```

Build the site locally:

```bash
docker compose run --rm jekyll bundle exec jekyll build --quiet
```

## Common Notes

- Do not expect GitHub Pages to compile TeX files.
- Do not rerun old failed GitHub Actions jobs after workflow changes; push a new commit instead.
- LaTeX temporary files under `.output/` and common build artifacts are ignored inside the CV repo.
- If `git pull` complains about unstaged changes, check both the website repo and the CV submodule.
