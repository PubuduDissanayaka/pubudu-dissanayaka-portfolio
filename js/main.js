/* ============================================================
   Main — renders data, theme toggle, nav, reveal-on-scroll,
   terminal type, animated counters, skill filter.
   Vanilla JS only. Respects prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var accent = function () {
    return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  };

  /* ---------------- Render: Skills ---------------- */
  function renderSkills() {
    var host = document.getElementById("skill-groups");
    if (!host) return;
    var html = PD_SKILLS.map(function (g, i) {
      var dir = (i % 2 === 0) ? "reveal-left" : "reveal-right";
      return (
        '<div class="skill-group reveal ' + dir + '" data-cat="' + g.cat + '">' +
          '<h4>' + g.name + '</h4>' +
          '<div class="skill-tags">' +
            g.skills.map(function (s) { return '<span class="skill-tag">' + s + '</span>'; }).join("") +
          '</div>' +
        '</div>'
      );
    }).join("");
    host.innerHTML = html;
  }

  /* ---------------- Render: Certifications ---------------- */
  function renderCerts() {
    var host = document.getElementById("cert-grid");
    if (!host) return;
    var html = PD_CERTS.map(function (c) {
      var logo = (typeof PD_LOGOS !== "undefined" && PD_LOGOS[c.vendor]) || null;
      var badge = logo
        ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + logo + '"/></svg>'
        : c.short;
      return (
        '<article class="cert reveal st-1">' +
          '<span class="badge" data-vendor="' + c.vendor + '">' + badge + '</span>' +
          '<span><span class="name">' + c.name + '</span><br /><span class="org">' + c.org + '</span></span>' +
        '</article>'
      );
    }).join("");
    host.innerHTML = html;
  }

  /* ---------------- Render: Projects ---------------- */
  function renderProjects() {
    var host = document.getElementById("projects-grid");
    if (!host) return;
    var html = PD_PROJECTS.map(function (p, i) {
      var svg =
        '<svg class="proj-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>';
      var dir = (i % 2 === 0) ? "reveal-left" : "reveal-right";
      return (
        '<article class="card project reveal ' + dir + '">' +
          '<div class="proj-head"><span>' + p.tag + '</span>' + svg + '</div>' +
          '<h3>' + p.title + '</h3>' +
          '<p class="proj-desc">' + p.desc + '</p>' +
          '<div class="proj-meta">' +
            '<div class="skill-tags">' +
              p.meta.map(function (m) { return '<span class="skill-tag">' + m + '</span>'; }).join("") +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join("");
    host.innerHTML = html;
  }

  /* ---------------- Skill filter ---------------- */
  function initFilter() {
    var btns = document.querySelectorAll("#category-filter .filter-btn");
    var groups = document.querySelectorAll("#skill-groups .skill-group");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        btns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var cat = btn.getAttribute("data-cat");
        groups.forEach(function (g) {
          if (cat === "all" || g.getAttribute("data-cat") === cat) {
            g.style.display = "";
          } else {
            g.style.display = "none";
          }
        });
      });
    });
  }

  /* ---------------- Terminal type ---------------- */
  var terminalSymbols = { cmd: "$", out: ">" };
  function typeTerminal() {
    var body = document.getElementById("terminal-body");
    if (!body) return;

    var lines = PD_TERMINAL;
    if (reduceMotion) {
      body.innerHTML = lines.map(function (l) {
        var sym = terminalSymbols[l.type] || ">";
        var colorClass = l.type === "cmd" ? "p" : "";
        return '<div class="ln"><span class="' + colorClass + '">' + sym + '</span> ' + l.text + "</div>";
      }).join("") + '<span class="cursor"></span>';
      return;
    }

    var i = 0;
    function addLine(type, text) {
      var sym = terminalSymbols[type] || ">";
      var colorClass = type === "cmd" ? "p" : "";
      var div = document.createElement("div");
      div.className = "ln";
      div.innerHTML = '<span class="' + colorClass + '">' + sym + "</span> ";
      var textSpan = document.createElement("span");
      if (text) textSpan.textContent = text;   // static output text
      div.appendChild(textSpan);
      body.appendChild(div);
      return textSpan;
    }

    function typeChars(el, text, done) {
      var n = 0;
      (function step() {
        if (n <= text.length) {
          el.textContent = text.slice(0, n);
          n++;
          setTimeout(step, 22 + Math.random() * 26);
        } else {
          done();
        }
      })();
    }

    function next() {
      if (i >= lines.length) {
        var cursor = document.createElement("span");
        cursor.className = "cursor";
        body.appendChild(cursor);
        return;
      }
      var l = lines[i];
      if (l.type === "cmd") {
        var el = addLine("cmd", "");
        typeChars(el, l.text, function () {
          i++;
          setTimeout(next, 260);
        });
      } else {
        addLine("out", l.text);
        // colour emphasised output lines
        var last = body.lastChild.querySelector("span:last-child");
        if (last && /STATUS|✓/.test(l.text)) {
          last.style.color = accent();
          last.style.fontWeight = "700";
        }
        i++;
        setTimeout(next, 120);
      }
    }
    next();
  }

  /* ---------------- Theme toggle ---------------- */
  function initTheme() {
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("pd-theme", next); } catch (e) {}
    });
  }

  /* ---------------- Nav ---------------- */
  function initNav() {
    var nav = document.getElementById("nav");
    var toggle = document.getElementById("nav-toggle");
    var links = document.querySelectorAll("#nav-links a");

    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    links.forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle && toggle.setAttribute("aria-expanded", "false");
      });
    });

    // scrolled border
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // active link
    var sections = [];
    var ids = ["about", "skills", "experience", "certs", "projects", "services", "contact"];
    ids.forEach(function (id) {
      var s = document.getElementById(id);
      if (s) sections.push({ el: s, link: document.querySelector('#nav-links a[href="#' + id + '"]') });
    });
    var setActive = function () {
      var pos = window.scrollY + nav.offsetHeight + 8;
      var current = sections[0];
      sections.forEach(function (s) {
        if (s.el.offsetTop <= pos) current = s;
      });
      sections.forEach(function (s) {
        s.link && s.link.classList.toggle("active", s === current);
      });
    };
    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- Scroll-to-top ---------------- */
  function initToTop() {
    var btn = document.getElementById("to-top");
    if (!btn) return;
    var onScroll = function () {
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      btn.classList.toggle("show", y > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------- Scroll progress bar ---------------- */
  function initProgress() {
    var bar = document.getElementById("progress-bar");
    if (!bar) return;
    function update() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      var p = h > 0 ? Math.min(y / h, 1) : 0;
      bar.style.transform = "scaleX(" + p + ")";
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  /* ---------------- Live clock (Sri Lanka, UTC+5:30, no DST) ---------------- */
  function initLiveClock() {
    var els = ["live-hero-time", "live-contact-time"].map(function (id) {
      return document.getElementById(id);
    });
    if (!els.some(function (el) { return !!el; })) return;
    function pad(n) { return n < 10 ? "0" + n : "" + n; }
    function update() {
      var sl = new Date(Date.now() + (5 * 60 + 30) * 60000);
      var h = sl.getUTCHours(), m = sl.getUTCMinutes(), s = sl.getUTCSeconds();
      var ampm = h >= 12 ? "PM" : "AM";
      var hh = h % 12; if (hh === 0) hh = 12;
      var str = pad(hh) + ":" + pad(m) + ":" + pad(s) + " " + ampm;
      els.forEach(function (el) { if (el) el.textContent = str; });
    }
    update();
    setInterval(update, 1000);
  }

  /* ---------------- Preloader (one-time brand flash) ---------------- */
  function initPreloader() {
    var el = document.getElementById("preloader");
    function beforeReveal() {
      initReveal();
      initCounters();
    }
    function removeNow() { if (el) el.remove(); beforeReveal(); }
    if (!el || reduceMotion) { removeNow(); return; }
    setTimeout(function () {
      el.classList.add("done");
      setTimeout(function () { el.remove(); }, 520);
      setTimeout(beforeReveal, 180);   // start reveals as the overlay fades out
    }, 820);
  }

  /* ---------------- Background motif fade in ---------------- */
  function initBg() {
    var bg = document.querySelector(".grid-bg");
    if (bg) setTimeout(function () { bg.classList.add("ready"); }, 420);
  }

  /* ---------------- Animated counters ---------------- */
  function initCounters() {
    var items = document.querySelectorAll(".status-item .num");
    if (!items.length) return;
    items.forEach(function (el) {
      var full = (el.textContent || "").trim();
      var m = full.match(/^(\d+)(.*)$/);
      if (!m) return;
      var target = parseInt(m[1], 10);
      var prefix = m[2]; // e.g. "+" or "/7"
      if (reduceMotion) { el.innerHTML = target + '<span class="accent">' + prefix + "</span>"; return; }

      var start = 0, dur = 1100, t0 = null;
      function tick(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = Math.round(target * eased);
        el.innerHTML = val + '<span class="accent">' + prefix + "</span>";
        if (p < 1) requestAnimationFrame(tick);
      }
      // trigger when visible
      if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { requestAnimationFrame(tick); io.disconnect(); }
          });
        }, { threshold: 0.5 });
        io.observe(el);
      } else {
        requestAnimationFrame(tick);
      }
    });
  }

  /* ---------------- Boot ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderSkills();
    renderCerts();
    renderProjects();
    initFilter();
    initTheme();
    initNav();
    initToTop();
    initProgress();
    initLiveClock();
    initBg();
    initPreloader();   // starts reveals + counters once the preloader lifts
    typeTerminal();
  });
})();
