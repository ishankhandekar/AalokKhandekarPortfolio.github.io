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
  credential: "Ph.D.",              // shown after the name (accented on mobile)
  name: "Aalok Khandekar",          // your name (without the credential)

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
  tagline: "Exploring urban climate change governance and transnational research cultures through interdisciplinary social science lenses.",

  // Short line shown in the Contact section.
  contactLead: "Open to research collaborations, academic inquiries, or just a thoughtful conversation.",
  // Small neutral note under the lead (with a pulsing mail icon).
  contactNote: "Email is the best way to reach me.",

  // Sentence shown under the "Student Supervision" heading.
  // PLACEHOLDER — replace with your own wording.
  supervisionLead: "I supervise students working across a range of issues in society, technology, and society, broadly interrogating the intersections between digital, environmental, and urban domains. I welcome inquiries from students at all levels drawn to interdisciplinary, socially engaged work broadly focusing on these topics.",
  // Highlighted scroll cue appended after the sentence (desktop only).
  supervisionHint: "Scroll the list to see who I've mentored",

  // The pills shown under "Focus" in the hero.
  focusTags: ["Urban Studies", "Climate Adaptation", "STS", "Infrastructure Studies", "Digital Studies", "Environmental Studies", "Experimental Ethnography"],

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
    { label: "M.S., Penn State", url: "https://www.eecs.psu.edu/" },
    { label: "B.E., Univ. of Mumbai", url: "https://mu.ac.in/" },
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
    title: "Urban Heat: Adaptation and Governance",
    // Description: written for a general visitor to understand.
    description: "This research examines how some population groups are disproportionately vulnerable to the impacts of rising temperatures, owing to both increased exposure and diminished adaptive capacities. Our research has focused on the particular socio-material contexts of informal settlements in Hyderabad, highlighting highly gendered patterns of exposure and adaptation. The research combines studies of local weather conditions, built environments, and patterns of inhabitation. The research also examines disconnects between existing governance approaches and lived experiences, and seeks to develop pathways for enabling community-based/led heat action. See <a href=\"https://heatingcities.in\" target=\"_blank\" rel=\"noopener noreferrer\">heatingcities.in</a> for further details."
  },
  {
    title: "Southern Urbanism",
    description: "An ongoing focus on the constitution and rearticulation of the southern city from the vantage point of Hyderabad. Student projects have examined a wide range of domains, including digital platforms, health, environment, and vernacular built forms."
  },
  {
    title: "Cultures of Scientific Knowledge-Production",
    description: "A focus on understanding the forces that shape scientific knowledge-production in contemporary academia. We also work to develop community norms, practices, and digital infrastructures to cultivate and sustain spaces for transnational collaboration."
  }
];


// ---------------------------------------------------------------------
//  4) PUBLICATIONS  —  published work (newest first).
//     Drives the "Recent Publications" grid. Each entry:
//       authors  — full author list ("Aalok Khandekar" is auto-bolded)
//       venue    — journal / book / series name
//       location — type ("Journal Article", "Book Chapter · Springer", …)
//       date     — year ("" if not yet assigned)
//       title    — the work's title
//       doi      — full DOI URL ("" hides the DOI link)
//     The FIRST entry renders in the gold "featured" style — reorder to
//     feature a different paper.
// ---------------------------------------------------------------------
export const projects = [
  {
    authors: "Krithika Sridharan, Aalok Khandekar, and Anant Maringanti",
    venue: "Open House International",
    location: "Journal Article",
    date: "2026",
    title: "Transitions in vernacular built-environments: socio-technical perspectives on climate-responsive sustainability in Hyderabad, India",
    doi: "https://doi.org/10.1108/OHI-04-2026-0148"
  },
  {
    authors: "Anushree Gupta and Aalok Khandekar",
    venue: "Environment and Planning D: Society and Space",
    location: "Journal Article",
    date: "2025",
    title: "Platformization in the southern city: Entrepreneurial volunteering and the suturing of collective life in Hyderabad",
    doi: "https://doi.org/10.1177/02637758251389048"
  },
  {
    authors: "Krithika Sridharan and Aalok Khandekar",
    venue: "Responsible & Resilient Design for Society (ICoRD 2025)",
    location: "Book Chapter · Springer",
    date: "2025",
    title: "Climate Responsiveness and Built Heritage of Hyderabad City",
    doi: "https://doi.org/10.1007/978-981-96-7316-2_5"
  },
  {
    authors: "Sudhir Raj Thout and Aalok Khandekar",
    venue: "Leadership in Health Services",
    location: "Journal Article",
    date: "2025",
    title: "ASHAs (Accredited Social Health Activist) leadership role in delivering diabetic care services to urban poor during COVID-19 in Hyderabad, India",
    doi: "https://doi.org/10.1108/LHS-01-2025-0005"
  },
  {
    authors: "Angela Okune, Duygu Kaşdoğan, Aalok Khandekar, Maka Suarez, and Kim Fortun",
    venue: "Decentralizing Knowledges",
    location: "Book Chapter · Duke Univ. Press",
    date: "",
    title: "Re-Mooring Academia: Postcolonial and Infrastructural Challenges",
    doi: ""
  },
  {
    authors: "Aalok Khandekar, Jamie Cross, and Anant Maringanti",
    venue: "Urban Studies",
    location: "Journal Article",
    date: "2024",
    title: "Scale and modularity in thermal governance: The replication of India's heat action plans",
    doi: "https://doi.org/10.1177/00420980231195193"
  },
  {
    authors: "Mohammed Raqib and Aalok Khandekar",
    venue: "Science, Technology & Society",
    location: "Journal Article",
    date: "2024",
    title: "Innovative Pathways to Social Transformation: Disruptive Maintenance Through Social Impact Start-ups in Kerala",
    doi: "https://doi.org/10.1177/09717218241246358"
  },
  {
    authors: "N. Sai Venkata Sarath Chandra, Aalok Khandekar, and Anant Maringanti",
    venue: "The Journal of Climate Change and Health",
    location: "Journal Article",
    date: "2023",
    title: "Towards a Climate-Health Approach in Indian Healthcare: Perspectives of Specialist Doctors on Health Impacts of Extreme Heat in Hyderabad",
    doi: "https://doi.org/10.1016/j.joclim.2023.100269"
  },
  {
    authors: "Phanisri Soumya Chavali, Aalok Khandekar, and Anant Maringanti",
    venue: "Regional Studies Policy Impact Books",
    location: "Book Chapter",
    date: "2023",
    title: "Social Security for Urban Informal Workers: The Case of Hyderabad, India",
    doi: "https://doi.org/10.1080/2578711X.2023.2196213"
  },
  {
    authors: "Aalok Khandekar, Brandon Costelloe-Kuehn, Lindsay Poirier, Alli Morgan, Alison Kenner, Kim Fortun, Mike Fortun, and the PECE Design Team",
    venue: "Science & Technology Studies",
    location: "Journal Article",
    date: "",
    title: "Moving Ethnography: Infrastructuring Switchbacks and Doubletakes in Experimental Collaborative Methods",
    doi: "https://doi.org/10.23987/sts.89782"
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
    title: "Climate Governance",
    description: "Issues in the governance of climate change in India and globally.",
    courseLevel: "Graduate",     // Graduate / Undergraduate ...
    field: "Climate Change",     // discipline
    courseFocus: "Lecture and Discussion"   // format / emphasis
  },
  {
    title: "Infrastructure Studies",
    description: "Mutual shaping of infrastructures and societies.",
    courseLevel: "Graduate",
    field: "STS",
    courseFocus: "Seminar"
  },
  {
    title: "Science, Technology, and Society",
    description: "Mutual shaping of science, technology, and society.",
    courseLevel: "Undergraduate",
    field: "STS",
    courseFocus: "Lecture"
  },
  {
    title: "Reading and Writing in Digital Worlds",
    description: "Transformations in research and writing in the context of digital mediation.",
    courseLevel: "Graduate",
    field: "Humanities & Social Sciences",
    courseFocus: "Seminar"
  },
  {
    title: "Contemporary India",
    description: "Survey of issues in Indian development.",
    courseLevel: "Graduate",
    field: "Development Studies",
    courseFocus: "Lecture and Discussion"
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
    name: "Mohammed Raqib",
    role: "PhD · Sociology/Anthropology",
    contribution: "Social innovation in Kerala.",
    status: "Graduated 2024"
  },
  {
    name: "Sudhir Raj Thout",
    role: "PhD Candidate · Sociology/Anthropology",
    contribution: "Lived experiences of Type-2 diabetes among Hyderabad's urban poor.",
    status: ""
  },
  {
    name: "Krithika Sridharan",
    role: "PhD Candidate · Climate Change",
    contribution: "Climate responsiveness of vernacular built environments in Hyderabad.",
    status: ""
  },
  {
    name: "Anushree Gupta",
    role: "PhD Candidate · Sociology/Anthropology",
    contribution: "Digital platforms in/and the southern city.",
    status: ""
  },
  {
    name: "Subhadip Datta",
    role: "PhD Candidate · Climate Change",
    contribution: "The potential of urban lentic systems for climate resilience.",
    status: ""
  },
  {
    name: "Subhranil Chakraborty",
    role: "PhD Scholar · Sociology/Anthropology",
    contribution: "Shrimp cultivation in the Bengal delta region.",
    status: ""
  },
  {
    name: "Arisha Farooquee",
    role: "PhD Scholar · Sociology/Anthropology",
    contribution: "Repair, livelihoods, and embodied knowledge among urban automobile mechanics.",
    status: ""
  }
];
