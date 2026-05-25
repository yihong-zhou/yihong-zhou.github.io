---
layout: page
permalink: /publications/
title: Publications
description: Publications by categories in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications-index-shell">
  <p class="publications-page-note">
    You can also find my publications on
    <a href="https://scholar.google.com/citations?user=cY3c6eUAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>.
  </p>

  <!-- Bibsearch Feature -->

  {% include bib_search.liquid %}

  <div class="publications publications-index">

  {% bibliography %}

  </div>
</div>
