const navbar = document.getElementById('navbar_wrapper');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
                console.log("yay");
            } else {
                navbar.classList.remove('scrolled');
            }
        });


        const aboutToggles = document.querySelectorAll(".researchDropdownToggle");

        aboutToggles.forEach(toggle => {
          toggle.addEventListener("click", () => {
            console.log("yay");
            const AboutDropdown = toggle.parentElement.querySelector(".researchDropdownContent");
            const AboutPlus = toggle.querySelector(".plusSign");
        
            if (!AboutDropdown) return;
        
            // Close all other dropdowns and remove chevron rotation
            aboutToggles.forEach(otherToggle => {
              const otherAboutDropdown = otherToggle.parentElement.querySelector(".researchDropdownContent");
              const otherAboutPlus = otherToggle.querySelector(".plusSign");
        
              if (otherAboutDropdown && otherAboutDropdown !== AboutDropdown) {
                otherAboutDropdown.classList.remove("show");
                otherAboutPlus?.classList.remove("rotate");
                console.log("removed")
              }
            });
        
            // Toggle the clicked dropdown and chevron
            AboutDropdown.classList.toggle("show");
            AboutPlus.classList.toggle("rotate");
          });
        });



        const toggles = document.querySelectorAll(".dropdowns");

        toggles.forEach(toggle => {
            toggle.addEventListener("click", () => {
              const dropdown = toggle.parentElement.querySelector(".dropdown-content");
              const chevron = toggle.querySelector("svg");
          
              if (!dropdown) return;
          
              // Close all other dropdowns and remove chevron rotation
              toggles.forEach(otherToggle => {
                const otherDropdown = otherToggle.parentElement.querySelector(".dropdown-content");
                const otherChevron = otherToggle.querySelector("svg");
          
                if (otherDropdown && otherDropdown !== dropdown) {
                  otherDropdown.classList.remove("show");
                  otherChevron?.classList.remove("rotate");
                }
              });
          
              // Toggle the clicked dropdown and chevron
              dropdown.classList.toggle("show");
              chevron.classList.toggle("rotate");
            });
          });



         const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navLinks");

function setActive(id) {
  navLinks.forEach((link) => link.classList.remove("active"));
  const linkEl = document.querySelector(`a[href="#${id}"]`);
  if (linkEl && linkEl.parentElement) {
    linkEl.parentElement.classList.add("active");
  }
}

// Scroll-spy: deterministically pick the section currently under a
// reference line ~30% down the viewport. Walks every nav target (skipping
// ones hidden at the current breakpoint) so About/Projects/etc. all light up.
const navTargetIds = ["intro", "about", "projects", "mentorship", "contact"];

function updateActiveNav() {
  const targets = navTargetIds
    .map((id) => document.getElementById(id))
    .filter((el) => el && getComputedStyle(el).display !== "none");
  if (!targets.length) return;

  const scrollPos = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // At the very bottom → last visible section (Contact).
  if (Math.abs(scrollPos - docHeight) < 2) {
    setActive(targets[targets.length - 1].id);
    return;
  }

  const line = window.scrollY + window.innerHeight * 0.3;
  let currentId = targets[0].id;
  for (const sec of targets) {
    const top = sec.getBoundingClientRect().top + window.scrollY;
    if (top <= line) currentId = sec.id;
  }
  setActive(currentId);
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("resize", updateActiveNav);
window.addEventListener("load", updateActiveNav);
updateActiveNav();

// Smooth scroll when clicking nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href");
    const target = document.querySelector(targetID);

    if (target) {
      const yOffset = -60; // sticky navbar height
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});






function setupCVDownload(id) {
    const element = document.getElementById(id);
    if (!element) return;

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // e.g. 2025-07-05
    const filename = `Aalok_Khandekar_CV_${formattedDate}.pdf`;

    element.setAttribute('download', filename);

    element.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'assets/Aalok_Khandekar_CV.pdf';
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Set it up for both versions
setupCVDownload('cv-download');
setupCVDownload('mobileDownloadCV');


function toggleReadMore(btn) {
  // First close all other expanded sections
  document.querySelectorAll(".researchDescription .more").forEach(el => {
    el.style.display = "none";
  });
  document.querySelectorAll(".researchDescription .read-less-btn").forEach(el => {
    el.style.display = "none";
  });
  document.querySelectorAll(".researchDescription .read-more-btn").forEach(el => {
    el.style.display = "inline";
  });
  document.querySelectorAll(".researchDescription #dots").forEach(el => {
    el.style.display = "inline";
  });

  // Then open the clicked one
  const parent = btn.closest(".researchDescription");
  const moreText = parent.querySelector(".more");
  const readLessBtn = parent.querySelector(".read-less-btn");
  const dots = parent.querySelector("#dots");

  moreText.style.display = "inline";
  readLessBtn.style.display = "inline";
  btn.style.display = "none";
  dots.style.display = "none";
}

function toggleReadLess(btn) {
  const parent = btn.closest(".researchDescription");
  const moreText = parent.querySelector(".more");
  const readMoreBtn = parent.querySelector(".read-more-btn");
  const dots = parent.querySelector("#dots");

  moreText.style.display = "none";
  readMoreBtn.style.display = "inline";
  btn.style.display = "none";
  dots.style.display = "inline";
}



(() => {
  const tocEl = document.querySelector(".tableOfContents p");
  const headings = Array.from(document.querySelectorAll(".mobileEducationTitle"));
  const TOP_OFFSET = 10; // the line 10px from the top of the viewport

  let positions = []; // [{ el, top }]
  let currentText = "OVERVIEW";
  let ticking = false;
  let animTimeout = null; // 🔥 track the current animation timeout

  function computePositions() {
    positions = headings
      .map(el => ({
        el,
        top: Math.floor(el.getBoundingClientRect().top + window.pageYOffset - TOP_OFFSET)
      }))
      .sort((a, b) => a.top - b.top);
  }

  function findActive(scrollY) {
    let lo = 0, hi = positions.length - 1, idx = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (positions[mid].top <= scrollY) { idx = mid; lo = mid + 1; }
      else { hi = mid - 1; }
    }
    return idx >= 0 ? positions[idx].el : null;
  }

  function setTOCText(newText) {
    if (newText === currentText) return;

    // cancel any pending animation
    if (animTimeout) {
      clearTimeout(animTimeout);
      animTimeout = null;
      tocEl.classList.remove("updating");
    }

    // trigger fade out
    tocEl.classList.add("updating");

    // swap text after fade out duration
    animTimeout = setTimeout(() => {
      tocEl.textContent = newText;
      tocEl.classList.remove("updating");
      currentText = newText;
      animTimeout = null;
    }, 50); // match CSS transition duration
  }

  function update() {
    const activeEl = findActive(window.pageYOffset);
    const nextText = activeEl ? activeEl.textContent.trim() : "OVERVIEW";
    setTOCText(nextText);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    }
  }

  // Init
  tocEl.textContent = "OVERVIEW";
  computePositions();
  update();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { computePositions(); update(); });
  window.addEventListener("load", () => { computePositions(); update(); });

  const bodyRO = new ResizeObserver(() => { computePositions(); update(); });
  bodyRO.observe(document.body);
})();



(function () {
  const fade = document.querySelector('.SeamlessBottom');
  const sentinel = document.getElementById('bottom-sentinel');
  const html = document.documentElement;

  if (!fade || !sentinel) return;

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const atBottom = entry.isIntersecting;
        fade.classList.toggle('hidden', atBottom);
        html.classList.toggle('at-bottom', atBottom); // 👈 toggle bg color
      });
    }, { root: null, threshold: 0 });
    io.observe(sentinel);

  } else {
    const check = () => {
      const atBottom = (window.innerHeight + window.pageYOffset) >= (document.documentElement.scrollHeight - 2);
      fade.classList.toggle('hidden', atBottom);
      body.classList.toggle('at-bottom', atBottom); // 👈 toggle bg color
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();
  }
})();

const faders = [...document.querySelectorAll('[class*="fade"]')]
  .filter(el => [...el.classList].some(c => c.startsWith("fade")));

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    const retrigger = el.dataset.retrigger === "true"; // 👈 control retrigger

    if (entry.isIntersecting) {
      // delay support
      const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
      setTimeout(() => {
        el.classList.add('visible');
      }, delay);
      
      // if not retrigger, stop observing after first time
      if (!retrigger) observer3.unobserve(el);
    } else if (retrigger) {
      // remove if allowed to retrigger
      el.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(fader => observer3.observe(fader));


/* ---- Mobile hamburger menu + section nav + research rows ---- */
function toggleMobileMenu() {
  document.body.classList.toggle("menu-open");
}

function mNav(key) {
  document.body.classList.remove("menu-open");
  if (key === "intro") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }

  let target = null;
  if (key === "projects") {
    target = document.querySelector("#projects");
  } else if (key === "contact") {
    target = document.querySelector(".mobileFooter");
  } else {
    const map = { about: "EDUCATION", mentorship: "COURSES TAUGHT" };
    const label = [...document.querySelectorAll(".mobileEducationTitle")]
      .find(el => el.textContent.trim().toUpperCase() === map[key]);
    target = label ? label.closest("section") : null;
  }
  if (target) {
    const y = target.getBoundingClientRect().top + window.scrollY - 50;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

// close the menu if the viewport grows back to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 1200) document.body.classList.remove("menu-open");
});

// mobile research accordion rows
function mRes(btn) {
  btn.closest(".m-rrow").classList.toggle("open");
}


