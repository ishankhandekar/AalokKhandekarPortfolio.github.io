// =====================================================================
//  render.js  —  paints everything in data.js onto the page.
//  You should not need to edit this file to change content; edit data.js.
//  Every lookup is null-guarded so a missing element never breaks the page.
// =====================================================================

import {
  profile,
  education,
  topicsOfResearch,
  projects,
  coursesTaught,
  notableStudents
} from './data.js';


/* ---------- tiny helpers ---------- */
const setText = (sel, txt) => { const n = document.querySelector(sel); if (n && txt != null) n.textContent = txt; };
const setHTML = (sel, html) => { const n = document.querySelector(sel); if (n && html != null) n.innerHTML = html; };

// Initials for a student avatar: "Ananya Rajan" -> "AR"
function initials(name) {
  const parts = (name || "").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Split a description into a teaser + a "read more" remainder.
function splitDesc(desc, n = 120) {
  desc = desc || "";
  if (desc.length <= n) return { short: desc, more: "" };
  let cut = desc.lastIndexOf(" ", n);
  if (cut < 0) cut = n;
  return { short: desc.slice(0, cut), more: desc.slice(cut) };
}

// Find a mobile section's card grid by its heading text (EDUCATION / RESEARCH / STUDENTS).
function gridByMobileTitle(text) {
  const h = [...document.querySelectorAll('.mobileEducationTitle')]
    .find(el => el.textContent.trim().toUpperCase() === text.toUpperCase());
  return h ? h.parentElement.querySelector('.pub-grid') : null;
}

// Reusable external-link icon.
const EXT_ICON = `<span class="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></span>`;


/* =====================================================================
   PROFILE  ->  hero, footer links
   ===================================================================== */
(function renderProfile() {
  // Hero identity
  setText('#desktopHeading', `${profile.honorific} ${profile.name}`);
  setHTML('#mobileHeading', `<span style="color:#ffc25d;">${profile.honorific}</span> ${profile.name}`);
  setText('.heroKicker', profile.kicker);
  setText('#intro .heroText > p', profile.tagline);
  setText('#intro .heroText h2', `${profile.role}, ${profile.department}, ${profile.institution}`);

  // Hero info rail
  setHTML('#railRole', `${profile.role},<br>${profile.department}`);
  setText('#railBased', profile.location);
  setHTML('#railFocus', profile.focusTags.map(t => `<span>${t}</span>`).join(''));

  // Footer / mobile footer (both copies handled via querySelectorAll)
  document.querySelectorAll('.underlined').forEach(n => { n.textContent = profile.email; });

  document.querySelectorAll('a.changeColorOnHover').forEach(a => {
    if (a.textContent.trim() === 'Curriculum Vitae') { a.href = profile.cvUrl; a.target = '_blank'; }
  });

  // Footer LinkedIn links (the contact-rail one is handled separately below,
  // so exclude it here to preserve its trailing icon).
  document.querySelectorAll('a[href*="linkedin.com"]:not(#contactLinkedIn)').forEach(a => {
    a.href = profile.linkedin;
    // Only rewrite the visible text for links that already SHOW the URL
    // (the footer). Leave wrapper links like the hero's "View LinkedIn" button alone.
    if (a.textContent.trim().toLowerCase().includes('linkedin.com')) {
      a.textContent = profile.linkedin.replace(/^https?:\/\//, '');
    }
  });

  document.querySelectorAll('.js-office').forEach(n => {
    n.innerHTML = `${profile.office.replace(/\n/g, '<br>')}<br><br> ${profile.phone}`;
  });

  document.querySelectorAll('.js-affiliations').forEach(n => {
    n.innerHTML = profile.affiliations
      .map(a => `<a class="changeColorOnHover" href="${a.url}" target="_blank" rel="noopener noreferrer" style="margin-top:0;margin-bottom:0;">${a.label}</a>`)
      .join('');
  });

  // Contact (bookend) section
  setText('.contact-lead', profile.contactLead);
  setText('#contactAvailability', profile.availability);
  const cEmail = document.getElementById('contactEmail');
  if (cEmail) { cEmail.textContent = profile.email; cEmail.href = 'mailto:' + profile.email; }
  const cLink = document.getElementById('contactLinkedIn');
  if (cLink) {
    cLink.href = profile.linkedin;
    // preserve the trailing icon; only replace the leading text node
    const disp = profile.linkedin.replace(/^https?:\/\//, '');
    if (cLink.firstChild && cLink.firstChild.nodeType === 3) cLink.firstChild.textContent = disp + ' ';
  }
  setText('#contactBased', profile.location);

  document.querySelectorAll('.siteCredit').forEach(n => { n.textContent = profile.siteCredit; });
  document.querySelectorAll('.creditsAndCopyrightFlex p:not(.siteCredit)').forEach(n => {
    n.innerHTML = `&copy;${profile.copyrightYear} ${profile.name} <br><strong>ALL RIGHTS RESERVED</strong>`;
  });
})();


/* =====================================================================
   EDUCATION  ->  about summary + mobile EDUCATION cards
   ===================================================================== */
(function renderEducation() {
  // Desktop: a mini-timeline (mirrors the Teaching History timeline)
  const tl = document.getElementById('eduTimeline');
  if (tl) {
    tl.innerHTML = education.map(e => `
      <div class="tl-item">
        <div class="tl-content">
          <div class="tl-head">
            <span class="tl-year">${e.year}</span>
            <span class="tl-format">${e.institution}</span>
          </div>
          <h3>${e.credential} <span class="edu-field">— ${e.field}</span></h3>
        </div>
      </div>`).join('');
  }

  const grid = gridByMobileTitle('EDUCATION');
  if (grid) {
    grid.innerHTML = education.map(e => `
      <div class="pub-card">
        <div class="pub-meta">
          <small class="venue">Graduated ${e.year}</small>
          <small class="location">${e.institution}</small>
        </div>
        <h3 class="pub-title">${e.credential} in ${e.field}</h3>
        ${(e.links && e.links.length) ? `<div class="pub-links">${e.links.map(l => `<a href="${l.url}" target="_blank">${l.label} ${EXT_ICON}</a>`).join('')}</div>` : ''}
      </div>`).join('');
  }
})();


/* =====================================================================
   RESEARCH TOPICS  ->  desktop accordion + mobile RESEARCH cards
   (Runs at top level so script.js can bind the accordion afterwards.)
   ===================================================================== */
(function renderResearch() {
  const containerTopics = document.getElementById("researchTopicsContainer");
  if (containerTopics) {
    containerTopics.innerHTML = "";
    topicsOfResearch.forEach(topic => {
      const card = document.createElement("div");
      card.innerHTML = `
        <hr>
        <div class="researchDropdownToggle" id="${topic.title.toLowerCase().replace(/\s+/g, '-')}">
          <span class="pill-text">${topic.title}</span>
          <svg class="plusSign" xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem"
               style="color: #fec157;" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
        </div>
        <p class="researchDropdownContent">${topic.description}</p>
      `;
      containerTopics.appendChild(card);
    });
  }

  const grid = gridByMobileTitle('RESEARCH');
  if (grid) {
    grid.innerHTML = topicsOfResearch.map(t => {
      const { short, more } = splitDesc(t.description);
      const readMore = more
        ? `<span id="dots">...</span> <button class="read-more-btn" style="font-weight:800;text-decoration:none;" onclick="toggleReadMore(this)">Read More ▼</button><span class="more">${more}</span> <button class="read-less-btn" style="font-weight:800;text-decoration:none;" onclick="toggleReadLess(this)">Read Less ▲</button>`
        : '';
      return `
        <div class="pub-card">
          <h3 class="pub-title">${t.title}</h3>
          <p class="researchDescription short">${short}${readMore}</p>
        </div>`;
    }).join('');
  }
})();


/* =====================================================================
   PROJECTS  ->  #project-cards
   ===================================================================== */
(function renderProjects() {
  const container = document.getElementById("project-cards");
  if (!container) return;
  container.innerHTML = "";
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "pub-card";
    card.innerHTML = `
      <div class="pub-meta">
        <small class="venue">${project.venue}</small>
        <small class="location">${project.location}</small>
        <small class="date">${project.date}</small>
      </div>
      <h3 class="pub-title">${project.title}</h3>
      <div class="pub-links">
        <a href="${project.pdf}" target="_blank">PDF ${EXT_ICON}</a>
        <a href="${project.doi}" target="_blank">DOI ${EXT_ICON}</a>
      </div>
    `;
    container.appendChild(card);
  });
})();


/* =====================================================================
   COURSES  ->  Teaching History timeline (desktop) + mobile cards
   ===================================================================== */
(function renderCourses() {
  const timeline = document.getElementById("courseList");
  if (timeline) {
    timeline.innerHTML = "";
    coursesTaught.forEach(course => {
      const meta = course.metaDataOne || "";
      const year = (meta.match(/\b\d{4}\b/) || [""])[0];
      const format = meta
        .replace(/-\s*taught\s*/i, "· ")
        .replace(year, "")
        .replace(/[-–·]\s*$/, "")
        .replace(/\s{2,}/g, " ")
        .trim();

      const item = document.createElement("div");
      item.className = "tl-item";
      item.innerHTML = `
        <div class="tl-content">
          <div class="tl-head">
            ${year ? `<span class="tl-year">${year}</span>` : ""}
            <span class="tl-format">${format}</span>
          </div>
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <div class="tl-tags">
            <span>${course.courseLevel}</span>
            <span>${course.field}</span>
            <span>${course.courseFocus}</span>
          </div>
        </div>
      `;
      timeline.appendChild(item);
    });
  }

  const mobile = document.querySelector(".mobileCourses");
  if (mobile) {
    mobile.innerHTML = "";
    coursesTaught.forEach(course => {
      const card = document.createElement("div");
      card.className = "pub-card";
      card.innerHTML = `
        <div class="pub-meta">
          <small class="venue">${course.courseLevel}</small>
          <small class="location">${course.courseFocus}</small>
        </div>
        <h3 class="pub-title" style="margin-bottom: 0.5rem;">${course.title}</h3>
        <p class="courseDescription" style="font-size: 0.8rem;">${course.description}</p>
      `;
      mobile.appendChild(card);
    });
  }
})();


/* =====================================================================
   NOTABLE STUDENTS  ->  desktop list + mobile STUDENTS cards
   ===================================================================== */
(function renderStudents() {
  const list = document.getElementById("studentList");
  if (list) {
    list.innerHTML = notableStudents.map(s => `
      <div class="sl-item">
        <div class="sl-avatar">${initials(s.name)}</div>
        <div class="sl-body">
          <div class="sl-role">${s.role}</div>
          <div class="sl-name">${s.name}</div>
          <div class="sl-contribution">${s.contribution}</div>
          ${s.status ? `<span class="sl-status">&rarr; ${s.status}</span>` : ''}
        </div>
      </div>`).join('');
  }

  const grid = gridByMobileTitle('STUDENTS');
  if (grid) {
    grid.innerHTML = notableStudents.map(s => `
      <div class="pub-card">
        <div class="pub-meta">
          <small class="venue">${s.role}</small>
          ${s.status ? `<small class="location">${s.status}</small>` : ''}
        </div>
        <h3 class="pub-title" style="margin-bottom: 0.5rem; margin-top: 0.5rem;">${s.name}</h3>
        <p class="student-contribution"><strong>Student Contributions:</strong> ${s.contribution}</p>
      </div>`).join('');
  }
})();
