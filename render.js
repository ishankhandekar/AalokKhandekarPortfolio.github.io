import { projects, topicsOfResearch, coursesTaught } from './data.js';



const container = document.getElementById("project-cards");
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
      <a href="${project.pdf}" target="_blank">
        PDF <span class="material-symbols-outlined">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-external-link">
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </span>
      </a>
      <a href="${project.doi}" target="_blank">
        DOI <span class="material-symbols-outlined">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-external-link">
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </span>
      </a>
    </div>
  `;

  // Append to the container
  container.appendChild(card);
});




const containerTopics = document.getElementById("researchTopicsContainer");
containerTopics.innerHTML = "";

topicsOfResearch.forEach(topic => {
  const card = document.createElement("div");
  card.style = ""; // optional inline style if needed

  card.innerHTML = `
  <hr>
    <div class="researchDropdownToggle" id="${topic.title.toLowerCase().replace(/\s+/g, '-')}">
      <span class="pill-text">${topic.title}</span>
      <svg class="plusSign" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem"
           style="color: #fec157;" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    </div>
    <p class="researchDropdownContent">${topic.description}</p>
    
  `;

  containerTopics.appendChild(card);
});



document.addEventListener("DOMContentLoaded", () => {
  const container3 = document.getElementById("courseList");
  container3.innerHTML = "";

  Object.values(coursesTaught).forEach(course => {
    const card = document.createElement("div");
    card.className = "courseCard";

    // Tags are pulled from courseLevel, field, courseFocus
    const tagsHTML = `
      <span class="tag">${course.courseLevel}</span>
      <span class="tag">${course.field}</span>
      <span class="tag">${course.courseFocus}</span>
    `;

    card.innerHTML = `
      <div class="fullCardMeta">
        <div class="icon-meta">
          <!-- Default wrench icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            class="lucide lucide-wrench">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>
          </svg>
        </div>
        <small>${course.metaDataOne}</small>
      </div>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <div class="metadata">${tagsHTML}</div>
    `;

    container3.appendChild(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container4 = document.querySelector(".mobileCourses");
  container4.innerHTML = "";

  Object.values(coursesTaught).forEach(course => {
    const card = document.createElement("div");
    card.className = "pub-card"; // matches your HTML

    card.innerHTML = `
      <div class="pub-meta">
        <small class="venue">${course.courseLevel}</small>
        <small class="location">${course.courseFocus}</small>
      </div>
      <h3 class="pub-title" style="margin-bottom: 0.5rem;">${course.title}</h3>
      <p class="courseDescription" style="font-size: 0.8rem;">${course.description}</p>
    `;

    container4.appendChild(card);
  });
});
