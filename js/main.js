(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        setOpen(false);
      }
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  var printCvButton = document.querySelector("[data-print-cv]");
  if (printCvButton) {
    printCvButton.addEventListener("click", function () {
      window.print();
    });
  }

  /* ---------- Theme ---------- */
  var htmlEl = document.documentElement;
  var themeBtn = document.querySelector(".theme-toggle");
  var systemLight = window.matchMedia("(prefers-color-scheme: light)");

  function currentTheme() {
    return htmlEl.getAttribute("data-theme") || (systemLight.matches ? "light" : "dark");
  }

  function syncThemeButton() {
    if (themeBtn) {
      themeBtn.setAttribute(
        "aria-label",
        currentTheme() === "light" ? "Switch to dark theme" : "Switch to light theme"
      );
    }
  }

  function applyTheme(theme, save) {
    htmlEl.setAttribute("data-theme", theme);
    if (save) {
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {}
    }
    syncThemeButton();
  }

  syncThemeButton();

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "light" ? "dark" : "light";
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        htmlEl.classList.add("theme-anim");
        window.setTimeout(function () {
          htmlEl.classList.remove("theme-anim");
        }, 450);
      }
      applyTheme(next, true);
    });
  }

  // Follow the system setting until the visitor makes a choice.
  systemLight.addEventListener("change", function (e) {
    var saved = null;
    try {
      saved = localStorage.getItem("theme");
    } catch (err) {}
    if (saved !== "light" && saved !== "dark") {
      applyTheme(e.matches ? "light" : "dark", false);
    }
  });

  /* ---------- Motion ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var header = document.querySelector(".site-header");
  if (header) {
    var onHeaderScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onHeaderScroll();
    window.addEventListener("scroll", onHeaderScroll, { passive: true });
  }

  if (!reduceMotion) {
    // Scroll progress bar
    var bar = document.createElement("div");
    bar.className = "progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);

    var ticking = false;
    var updateBar = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = "scaleX(" + Math.min(1, Math.max(0, p)) + ")";
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateBar);
        }
      },
      { passive: true }
    );
    window.addEventListener("resize", updateBar);
    updateBar();

    // Reveal on scroll
    if ("IntersectionObserver" in window) {
      var selectors = [
        ".hero .eyebrow", ".hero h1", ".hero .lead", ".hero .btn-row", ".hero .where",
        ".page-hero .eyebrow", ".page-hero h1", ".page-hero .lead",
        ".section-head", ".stat", ".card", ".panel", ".skill-group", ".entry",
        ".project", ".about-intro", ".cta .eyebrow", ".cta h2", ".cta .btn-row",
        ".contact-grid form", ".contact-aside-heading", ".contact-method",
        ".social-block", ".social-link", ".contact-extras p", ".section-foot"
      ];

      var countUp = function (node) {
        var end = parseFloat(node.getAttribute("data-count"));
        var suffix = node.getAttribute("data-suffix") || "";
        var startTime = null;
        var duration = 1200;
        var step = function (t) {
          if (startTime === null) {
            startTime = t;
          }
          var p = Math.min(1, (t - startTime) / duration);
          var eased = 1 - Math.pow(1 - p, 3);
          node.textContent = Math.round(end * eased) + suffix;
          if (p < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      };

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              return;
            }
            var el = entry.target;
            observer.unobserve(el);
            el.classList.add("is-visible");

            var counter = el.querySelector("[data-count]");
            if (counter) {
              countUp(counter);
            }

            // Once revealed, drop the reveal state so hover transitions are normal again.
            var done = false;
            var cleanup = function (e) {
              if (done || (e && e.propertyName !== "opacity")) {
                return;
              }
              done = true;
              el.removeEventListener("transitionend", cleanup);
              el.removeAttribute("data-reveal");
              el.classList.remove("is-visible");
              el.style.removeProperty("--d");
            };
            el.addEventListener("transitionend", cleanup);
            setTimeout(cleanup, 2000);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );

      var counts = new Map();
      document.querySelectorAll(selectors.join(",")).forEach(function (el) {
        var n = counts.get(el.parentNode) || 0;
        counts.set(el.parentNode, n + 1);
        el.style.setProperty("--d", Math.min(n, 5) * 90 + "ms");

        var strong = el.classList.contains("stat") ? el.querySelector("strong") : null;
        if (strong) {
          var m = strong.textContent.trim().match(/^(\d+(?:\.\d+)?)(.*)$/);
          if (m) {
            strong.setAttribute("data-count", m[1]);
            strong.setAttribute("data-suffix", m[2]);
            strong.textContent = "0" + m[2];
          }
        }

        el.setAttribute("data-reveal", "");
        observer.observe(el);
      });
    }
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  if (!form) {
    return;
  }

  var status = document.getElementById("form-status");
  var messages = {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    subject: "Please enter a subject.",
    message: "Please write a message of at least 10 characters."
  };

  var fields = Array.prototype.slice.call(
    form.querySelectorAll("input[required], textarea[required]")
  );

  function validateField(field) {
    var error = document.getElementById(field.id + "-error");
    var valid = field.checkValidity();
    field.setAttribute("aria-invalid", String(!valid));
    if (error) {
      error.textContent = valid ? "" : messages[field.name];
    }
    return valid;
  }

  function setStatus(text, kind) {
    status.textContent = text;
    status.className = "form-status" + (kind ? " " + kind : "");
  }

  fields.forEach(function (field) {
    field.addEventListener("blur", function () {
      validateField(field);
    });
    field.addEventListener("input", function () {
      if (field.getAttribute("aria-invalid") === "true") {
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Honeypot: real visitors never fill this field.
    if (form.elements["_honey"] && form.elements["_honey"].value) {
      return;
    }

    var firstInvalid = null;
    fields.forEach(function (field) {
      if (!validateField(field) && !firstInvalid) {
        firstInvalid = field;
      }
    });

    if (firstInvalid) {
      firstInvalid.focus();
      setStatus("Please fix the highlighted fields.", "err");
      return;
    }

    var button = form.querySelector("button[type=submit]");
    button.disabled = true;
    setStatus("Sending...", "");
    // Native submit: FormSubmit emails the message, then shows its thank-you page.
    form.submit();
  });

  // Coming back with the browser's back button: let the visitor send again.
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      form.querySelector("button[type=submit]").disabled = false;
      setStatus("", "");
    }
  });
})();
