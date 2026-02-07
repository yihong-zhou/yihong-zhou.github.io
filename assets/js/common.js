$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract")
    .not(".featured-publications-grid a.abstract")
    .click(function () {
      $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
      $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
      $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
    });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });

  // Featured publications: open abstract in a large modal window.
  if ($(".featured-publications-grid").length) {
    $(".featured-publications-grid a.abstract").text("Read more");

    if (!$("#featured-abstract-modal").length) {
      $("body").append(`
        <div class="featured-abstract-modal" id="featured-abstract-modal" aria-hidden="true">
          <div class="featured-abstract-panel" role="dialog" aria-modal="true" aria-label="Publication abstract">
            <div class="modal-header">
              <h5 class="modal-title featured-abstract-title"></h5>
              <button type="button" class="close btn-close featured-abstract-close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="featured-abstract-meta"></div>
              <div class="featured-abstract-media"></div>
              <div class="featured-abstract-body"></div>
              <div class="featured-abstract-actions"></div>
            </div>
          </div>
        </div>
      `);
    }

    $(document).on("click", ".featured-publications-grid a.abstract", function (e) {
      e.preventDefault();

      const card = $(this).closest("li");
      const title = card.find(".title").first().text().trim();
      const authors = card.find(".author").first().text().trim();
      const periodical = card.find(".periodical").first().text().trim();
      const abstractHtml = card.find(".abstract.hidden p").first().html() || "No abstract available.";
      const previewSrc = card.find(".abbr .preview").first().attr("src") || "";

      const metaParts = [];
      if (authors) metaParts.push(authors);
      if (periodical) metaParts.push(periodical);

      let actionsHtml = "";
      card.find(".links a[href]").each(function () {
        const label = $(this).text().trim();
        const href = $(this).attr("href");
        if (!label || !href) return;
        actionsHtml += `<a class="btn btn-sm z-depth-0" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
      });

      $("#featured-abstract-modal .featured-abstract-title").text(title);
      $("#featured-abstract-modal .featured-abstract-meta").text(metaParts.join(" | "));
      if (previewSrc) {
        $("#featured-abstract-modal .featured-abstract-media").html(
          `<img src="${previewSrc}" alt="${title} preview" class="featured-abstract-image">`
        );
      } else {
        $("#featured-abstract-modal .featured-abstract-media").empty();
      }
      $("#featured-abstract-modal .featured-abstract-body").html(`<p>${abstractHtml}</p>`);
      $("#featured-abstract-modal .featured-abstract-actions").html(actionsHtml);
      $("#featured-abstract-modal").addClass("open").attr("aria-hidden", "false");
      $("body").addClass("featured-modal-open");
    });

    $(document).on("click", "#featured-abstract-modal .featured-abstract-close", function () {
      $("#featured-abstract-modal").removeClass("open").attr("aria-hidden", "true");
      $("body").removeClass("featured-modal-open");
    });

    $(document).on("click", "#featured-abstract-modal", function (e) {
      if (e.target.id === "featured-abstract-modal") {
        $("#featured-abstract-modal").removeClass("open").attr("aria-hidden", "true");
        $("body").removeClass("featured-modal-open");
      }
    });

    $(document).on("keydown", function (e) {
      if (e.key === "Escape" && $("#featured-abstract-modal").hasClass("open")) {
        $("#featured-abstract-modal").removeClass("open").attr("aria-hidden", "true");
        $("body").removeClass("featured-modal-open");
      }
    });
  }
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
