// =====================================================================
//  data.js  —  THE single source of content for the whole site.
//  Edit the values here and everything on the page updates automatically.
//  You never need to touch index.html to change wording, add a course,
//  a project, a student, etc.  Each section is documented below.
// =====================================================================


// ---------------------------------------------------------------------
//  1) PROFILE  —  who you are + how people reach you.
//     Drives the hero, the contact section, and the footer.
// ---------------------------------------------------------------------
export const profile = {
  honorific: "Dr.",                 // shown in accent color on mobile
  name: "Aalok Khandekar",          // your name (without the honorific)

  kicker: "Science, Technology & Society",   // small label above your name
  role: "Associate Professor & Head",        // primary title
  department: "Dept. of Liberal Arts",       // primary department
  // Full appointment, shown as two lines in the hero rail.
  appointments: [
    "Associate Professor & Head, Dept. of Liberal Arts",
    "Affiliate Faculty, Dept. of Climate Change"
  ],
  institution: "IIT Hyderabad",              // institution
  location: "IIT Hyderabad, India",          // "Based at" line in the hero

  // One or two sentences under your name.
  tagline: "Exploring urban climate change governance and research cultures through interdisciplinary social science lenses.",

  // Short line shown in the Contact section.
  contactLead: "Open to research collaborations, academic inquiries, or just a thoughtful conversation.",
  // Small neutral note under the lead (with a pulsing mail icon).
  contactNote: "Email is the best way to reach me.",

  // Sentence shown under the "Student Supervision" heading.
  // PLACEHOLDER — replace with your own wording.
  supervisionLead: "I supervise students working across society, technology, and the environment — from undergraduate field projects to doctoral research — and welcome inquiries from those drawn to interdisciplinary, socially engaged work.",
  // Highlighted scroll cue appended after the sentence (desktop only).
  supervisionHint: "Scroll the list to see who I've mentored",

  // The pills shown under "Focus" in the hero.
  focusTags: ["Urban Studies", "Climate Adaptation", "STS", "Infrastructure Studies", "Digital Studies", "Environmental Studies"],

  // Links & contact details (used in hero button, contact + footer).
  cvUrl: "assets/Aalok_Khandekar_CV.pdf",
  email: "Aalok@la.iith.ac.in",
  linkedin: "https://in.linkedin.com/in/akhandekar",
  office: "Room 207,\nLiberal Arts (AD3) Building",
  phone: "+91 (0)40 2301 6XXX",

  // Footer "Important Links" (label + url). Curriculum Vitae reuses cvUrl.
  importantLinks: [
    { label: "Curriculum Vitae", url: "assets/Aalok_Khandekar_CV.pdf" },
    { label: "STS at RPI",       url: "https://hass.rpi.edu/science-technology-studies" },
    { label: "Heating Cities",   url: "https://heatingcities.in" },
    { label: "STS India",        url: "https://stsin.org" },
    { label: "4S",               url: "https://4sonline.org" }
  ],

  // Institutional affiliations shown in the footer.
  affiliations: [
    { label: "Dept. of Liberal Arts",   url: "https://la.iith.ac.in/" },
    { label: "Dept. of Climate Change", url: "https://cc.iith.ac.in/" }
  ],

  copyrightYear: "2025",
  siteCredit: "Site by @StudioIK"
};


// ---------------------------------------------------------------------
//  2) EDUCATION  —  your degrees (newest first).
//     Drives the "Academic Background" text and the mobile EDUCATION cards.
// ---------------------------------------------------------------------
export const education = [
  {
    credential: "Ph.D.",
    field: "Science & Technology Studies",
    institution: "Rensselaer Polytechnic Institute",
    year: "2010",
    // Optional links shown on the mobile cards. Leave [] for none.
    links: [
      { label: "STS at RPI", url: "https://hass.rpi.edu/science-technology-studies" }
    ]
  },
  {
    credential: "M.S.",
    field: "Electrical Engineering",
    institution: "Pennsylvania State University",
    year: "2004",
    links: []
  },
  {
    credential: "B.E.",
    field: "Electrical Engineering",
    institution: "Mumbai University",
    year: "2002",
    links: []
  }
];


// ---------------------------------------------------------------------
//  3) RESEARCH TOPICS  —  your areas of research.
//     Drives the "Research Interests" accordion (desktop) and the
//     mobile RESEARCH cards.
//     NOTE: the export is named `topicsOfResearch` (kept for compatibility).
// ---------------------------------------------------------------------
export const topicsOfResearch = [
  {
    // Title: the name of a research area, e.g. "Urban Governance"
    title: "Urban Governance & Climate Change",
    // Description: written for a general visitor to understand.
    description: "Cities are on the frontlines of the climate crisis — where the impacts are felt most acutely, but also where some of the most innovative solutions are emerging. This research examines how local governments respond to climate-related risks, how planning can become more equitable and sustainable, and how power, policy, and infrastructure intersect in shaping urban futures."
  },
  {
    title: "Transnational Knowledge & Development",
    description: "How expertise, technologies, and development models travel across borders — and what happens when they land in new social and political contexts. This work follows the movement of knowledge between the global North and South and its consequences for local communities."
  },
  {
    title: "The Politics of Air Pollution",
    description: "Air pollution is as much a political problem as a technical one. This research studies how pollution is measured, contested, and governed, and how questions of data, accountability, and environmental justice shape the public response."
  },
  {
    title: "Collaborative STS Research Platforms",
    description: "Building shared digital infrastructures and methods that let scholars collaborate across institutions and disciplines — advancing open, cumulative, and collectively-built social science research."
  },
  {
    title: "Ethics, Expertise & Inclusion in Science",
    description: "Who gets to count as an expert, and whose knowledge is left out? This research examines the ethics of expertise and how scientific institutions can become more inclusive and accountable to the publics they serve."
  }
];


// ---------------------------------------------------------------------
//  4) PROJECTS & PUBLICATIONS  —  your work.
//     Drives the "Ongoing Projects & Work" grid.
//     (Sample entries below — replace with your real projects.)
// ---------------------------------------------------------------------
export const projects = [
  {
    venue: "ACM DEV",                 // conference / journal / event
    location: "New Delhi, India",     // where it was presented / published
    date: "2023",                     // year (or full date)
    title: "Community Health Interventions in Delhi",
    pdf: "#",                         // link to the PDF ("#" if none yet)
    doi: "#"                          // link to the DOI ("#" if none yet)
  },
  {
    venue: "Science, Technology & Human Values",
    location: "Journal Article",
    date: "2022",
    title: "Infrastructures of Air: Governing Pollution in Indian Cities",
    pdf: "#",
    doi: "#"
  },
  {
    venue: "4S / EASST",
    location: "Prague, Czech Republic",
    date: "2020",
    title: "Collaborative Platforms for Comparative STS Research",
    pdf: "#",
    doi: "#"
  },
  {
    venue: "Environmental Science & Policy",
    location: "Journal Article",
    date: "2023",
    title: "Governing Heat: Municipal Responses to Urban Warming in India",
    pdf: "#",
    doi: "#"
  },
  {
    venue: "Social Studies of Science",
    location: "Journal Article",
    date: "2021",
    title: "Expertise & Accountability in Air-Quality Monitoring",
    pdf: "#",
    doi: "#"
  },
  {
    venue: "EASST Conference",
    location: "Amsterdam, Netherlands",
    date: "2022",
    title: "Comparative Infrastructures of Urban Climate Data",
    pdf: "#",
    doi: "#"
  },
  {
    venue: "Urban Studies",
    location: "Journal Article",
    date: "2019",
    title: "Participatory Planning & the Politics of Sustainable Cities",
    pdf: "#",
    doi: "#"
  }
];


// ---------------------------------------------------------------------
//  5) COURSES  —  what you teach.
//     Drives the desktop Courses cards and the mobile COURSES cards.
//     Dates are intentionally omitted (courses recur) — each card leads
//     with the title, then the description, then the three tags.
// ---------------------------------------------------------------------
export const coursesTaught = [
  {
    title: "Qualitative Research Methods",
    description: "Designing, conducting, and analyzing qualitative studies in social research.",
    courseLevel: "Graduate",     // Graduate / Undergraduate ...
    field: "STS",                // discipline
    courseFocus: "Seminar Focused"   // format / emphasis
  },
  {
    title: "Infrastructure & Society",
    description: "How infrastructures shape, and are shaped by, urban social and political life.",
    courseLevel: "Undergraduate",
    field: "STS",
    courseFocus: "Field-based"
  },
  {
    title: "Science, Technology & the City",
    description: "Interdisciplinary approaches to knowledge, expertise, and urban governance.",
    courseLevel: "Graduate",
    field: "STS",
    courseFocus: "Seminar Focused"
  },
  {
    title: "Environmental Justice & Policy",
    description: "Equity in environmental decision-making, and the politics of climate adaptation.",
    courseLevel: "Graduate",
    field: "STS",
    courseFocus: "Discussion Based"
  }
];


// ---------------------------------------------------------------------
//  6) NOTABLE STUDENTS  —  students you've mentored.
//     Drives the "Notable Students" list and the mobile STUDENTS cards.
//     Initials for the avatar are generated automatically from the name.
//     (Sample entries below — replace with your real students.)
// ---------------------------------------------------------------------
export const notableStudents = [
  {
    name: "Ananya Rajan",
    role: "B.Tech Student, Liberal Arts",
    contribution: "Field research on water-access inequality in semi-urban Telangana, focusing on STS approaches to infrastructure.",
    status: "Interning at the Centre for Science & Environment, New Delhi"
  },
  {
    name: "Ravi Menon",
    role: "M.A. Student, Development Studies",
    contribution: "Co-authored a working paper on participatory climate governance in mid-sized Indian cities.",
    status: "Pursuing a PhD at the University of Edinburgh"
  },
  {
    name: "Sneha Kulkarni",
    role: "PhD Candidate, STS",
    contribution: "Dissertation on data infrastructures in municipal climate planning.",
    status: "Ongoing"
  },

  // ===== PROTOTYPE DUMMIES — delete this block when adding real students =====
  { name: "Meera Iyer",     role: "M.A. Student, Sociology",        contribution: "Ethnography of e-waste labor in peri-urban recycling markets.",              status: "Ongoing" },
  { name: "Arjun Nair",     role: "B.Tech Student, Liberal Arts",   contribution: "Mapping citizen air-quality sensing networks across Hyderabad.",              status: "Interning at CSTEP, Bengaluru" },
  { name: "Priya Deshmukh", role: "PhD Candidate, STS",             contribution: "Infrastructures of urban flood forecasting and warning systems.",             status: "Ongoing" },
  { name: "Karan Reddy",    role: "M.A. Student, Development",       contribution: "Political economy of rooftop solar adoption in Telangana.",                   status: "Ongoing" },
  { name: "Fatima Sheikh",  role: "B.Tech Student, Liberal Arts",   contribution: "Discourse analysis of climate migration in regional media.",                  status: "Graduated 2024" },
  { name: "Rohan Pillai",   role: "PhD Candidate, STS",             contribution: "Standards and metrics in national air-quality governance.",                   status: "Ongoing" },
  { name: "Ananya Bose",    role: "M.A. Student, Anthropology",     contribution: "Everyday water infrastructures in informal settlements.",                     status: "Ongoing" },
  { name: "Vikram Joshi",   role: "B.Tech Student, Liberal Arts",   contribution: "Open-data platforms for participatory urban planning.",                       status: "Interning at Janaagraha" },
  { name: "Leela Krishnan", role: "PhD Candidate, STS",             contribution: "Comparative study of heat-action plans across Indian cities.",                status: "Ongoing" }
  // ===== END DUMMIES =====
];
