// =============================================================================
// Single source of truth for all portfolio content.
// Edit copy here — components read from this file.
// =============================================================================

export const profile = {
  name: "Abhishek Prasad Seth",
  role: "Software Engineer",
  yearsOfExperience: 3,
  location: "India",
  tagline: "Full-stack engineer who ships fast, reliable web apps.",
  bio: "Full-stack engineer with 3 years building responsive, performant web applications end to end — from RBAC-secured Express APIs and tuned MongoDB aggregation pipelines to polished React interfaces. I care about reusable components, clean architecture, and shaving milliseconds off every response.",
  email: "abhishekpseth@gmail.com",
  phone: "+91 9458764176",
  // TODO: point this at your latest resume (PDF / Drive link).
  resumeUrl:
    "https://drive.google.com/file/d/1y7kVzO8NGRvfQ-hTbgmBHNndqIWbcUzf/view?usp=drive_link",
  socials: {
    github: "https://github.com/abhishekpseth",
    linkedin: "https://www.linkedin.com/in/abhishek-p-seth/",
    leetcode: "https://leetcode.com/abhishekpseth/",
  },
};

export const stats = [
  { value: "3+", label: "Years building for the web" },
  { value: "500+", label: "LeetCode problems solved" },
  { value: "6×", label: "Faster APIs (2100ms → 350ms)" },
  { value: "30+", label: "Reusable UI components shipped" },
];

export const experience = [
  {
    company: "30Sundays",
    // TODO: confirm your exact title at 30Sundays.
    role: "Software Engineer",
    period: "Jul 2025 — Present",
    current: true,
    // TODO: add your real work bullets here — leaving empty hides the list.
    points: [],
    stack: ["React", "Node.js", "TypeScript"],
  },
  {
    company: "FuturElectra",
    role: "SDE-1",
    period: "Nov 2023 — Feb 2025",
    points: [
      "Built dynamic, highly responsive dashboards for an internal CRM using React.js, Express.js and MongoDB.",
      "Designed a scalable Role-Based Access Control (RBAC) system with Express middleware, restricting routes and frontend data by user permissions.",
      "Cut API latency from 2100ms to 350ms using MongoDB aggregation pipelines.",
      "Added a service worker to cache key image assets, keeping the app usable through network interruptions.",
      "Shipped 30+ reusable components and 15+ complete CRUD flows to speed up delivery.",
    ],
    stack: ["React", "Express.js", "MongoDB"],
  },
  {
    company: "Aquaria Core",
    role: "Full Stack Developer Intern",
    period: "May 2023 — Oct 2023",
    points: [
      "Built a School Management Platform with React.js, Express.js and PostgreSQL, using AWS S3 for file handling.",
      "Integrated Twilio for automated SMS notifications and built analytics + CRUD features for the admin and accounts modules.",
    ],
    stack: ["React", "PostgreSQL", "AWS S3", "Twilio"],
  },
];

export const education = {
  degree: "B.Tech",
  institution: "National Institute of Technology, Allahabad (MNNIT)",
  period: "2019 — 2023",
  detail: "CGPA 7.53 / 10",
};

export const skillGroups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "C++", "C"] },
  {
    title: "Frontend",
    items: ["React.js", "Redux", "Tailwind CSS", "HTML", "CSS"],
  },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "RBAC"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  {
    title: "Cloud & Tools",
    items: ["AWS S3", "Cloudinary", "Twilio", "Git", "Service Workers"],
  },
];

// Flagship, resume-grade work — rendered large and first.
export const featuredProjects = [
  {
    name: "E-Commerce Platform",
    blurb:
      "Fully responsive storefront with product listing, cart, wishlist, orders, plus admin & rider dashboards — pagination, filters and notifications throughout. Google OAuth for auth, Cloudinary for image storage.",
    stack: [
      "React",
      "TypeScript",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    // TODO: replace with the actual E-Commerce repo URL.
    github: "https://github.com/abhishekpseth",
    weblink: "",
    imgSrc: "",
    accent: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    name: "Code Editor",
    blurb:
      "Responsive in-browser editor with adjustable layouts and live preview. CodeMirror for syntax highlighting, debounced execution for performance, state via React Context.",
    stack: ["React", "Tailwind", "CodeMirror"],
    github:
      "https://github.com/abhishekpseth/Deployed-React.js-Projects/tree/main/Code%20Editor",
    weblink: "https://codeeditor-project.netlify.app/",
    imgSrc: "././images/code-editor.jpg",
    accent: "from-sky-500/20 to-indigo-500/10",
  },
  {
    name: "Google Sheets Clone",
    blurb:
      "Spreadsheet UI with formula evaluation, cell selection and editing — a from-scratch take on core Sheets interactions.",
    stack: ["React", "Tailwind"],
    github:
      "https://github.com/abhishekpseth/Deployed-React.js-Projects/tree/main/google-sheet",
    weblink: "https://google-sheets-clone-project.netlify.app/",
    imgSrc: "././images/google-sheets-clone.jpg",
    accent: "from-green-500/20 to-emerald-500/10",
  },
  {
    name: "Algorithm Visualizer",
    blurb:
      "Interactive visualizer that animates sorting and pathfinding algorithms step by step to make the logic intuitive.",
    stack: ["React", "Tailwind"],
    github:
      "https://github.com/abhishekpseth/Deployed-React.js-Projects/tree/main/Algorithms%20Visualizer",
    weblink: "https://algorithm-visualizer-tool-project.netlify.app/",
    imgSrc: "././images/algorithm-visualizer.jpg",
    accent: "from-fuchsia-500/20 to-purple-500/10",
  },
];

// Smaller practice builds — rendered in a compact grid under "Playground".
export const playgroundProjects = [
  {
    name: "Firebase Contact App",
    imgSrc: "././images/firebase-contact-app.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-React.js-Projects/tree/main/Firebase-Contact-App-CRUD",
    weblink: "https://firebase-contact-app-crud.netlify.app/",
  },
  {
    name: "Search Bar with Chips",
    imgSrc: "././images/search-bar.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-React.js-Projects/tree/main/Search%20Bar%20with%20Chips",
    weblink: "https://search-bar-with-chips.netlify.app/",
  },
  {
    name: "Life Timer",
    imgSrc: "././images/life-timer.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-JS-projects/tree/main/Life%20timer",
    weblink: "https://lifetimer-project.netlify.app/",
  },
  {
    name: "Github Profile Viewer",
    imgSrc: "././images/github-profile-viewer.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-JS-projects/tree/main/Github%20Profile%20Viewer",
    weblink: "https://search-github-profile-project.netlify.app/",
  },
  {
    name: "Product Search & Filter",
    imgSrc: "././images/fetch-product.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-JS-projects/tree/main/Fetch%20Products%20Search%20%26%20Filter",
    weblink: "https://fetchproduct-searchandfilter-project.netlify.app/",
  },
  {
    name: "QR Code Generator",
    imgSrc: "././images/qr-code.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-JS-projects/tree/main/QR%20Code%20Generator",
    weblink: "https://qrcode-generatorproject.netlify.app/",
  },
  {
    name: "Expense Tracker",
    imgSrc: "././images/expense-tracker.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-JS-projects/tree/main/Expense%20Tracker",
    weblink: "https://trackyourexpenses-project.netlify.app/",
  },
  {
    name: "Password Generator",
    imgSrc: "././images/passwordGenerator.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-JS-projects/tree/main/Password%20Generator",
    weblink: "https://generatepasswords-project.netlify.app/",
  },
  {
    name: "Analog Clock",
    imgSrc: "././images/analog-clock.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-JS-projects/tree/main/Analog%20Clock",
    weblink: "https://classic-analogclock-project.netlify.app/",
  },
  {
    name: "Tic Tac Toe",
    imgSrc: "././images/tic-tac-toe.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-JS-projects/tree/main/Tic%20Tac%20Toe",
    weblink: "https://tic-tac-toe-prject.netlify.app/",
  },
  {
    name: "Circular Carousel",
    imgSrc: "././images/carousel.jpg",
    github:
      "https://github.com/abhishekpseth/Deployed-JS-projects/tree/main/Carousel",
    weblink: "https://circular-carousel-project.netlify.app/",
  },
];
