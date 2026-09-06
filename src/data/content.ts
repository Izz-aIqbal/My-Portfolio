export const site = {
  name: "Izza Iqbal",
  title: "AI Engineer",
  email: "izzaiqbal169@gmail.com",
  phone: "+92 333 8568444",
  github: "https://github.com/Izz-aIqbal",
  linkedin: "https://www.linkedin.com/in/izza-iqbal-ab443930b/",
  resumeUrl: "/Izza_Iqbal_CV.pdf",
  location: "Abbottabad, Pakistan",
};

export const stats = [
  { number: "15+", label: "Technical Projects" },
  { number: "4", label: "Professional Internships" },
  { number: "2", label: "Design Teams Led" },
  { number: "3.35", label: "CGPA · BS AI" },
];

export const education = {
  degree: "Bachelor of Science in Artificial Intelligence",
  period: "2022 – 2026",
  cgpa: "3.35",
  lastSgpa: "3.44",
  school: "Pak-Austria Fachhochschule Institute of Applied Sciences and Technology (PAF-IAST)",
  location: "Mang, Haripur",
};

export const skills = {
  technical: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "FastAPI",
    "React / Next.js",
    "Node.js",
    "MongoDB",
    "Apache Spark",
    "PySpark",
    "Databricks",
    "MySQL",
    "C++",
    "Java",
    "Git",
  ],
  ai: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Neural Networks",
    "NLP",
    "Data Preprocessing",
    "Model Deployment",
    "Image Processing",
  ],
  design: [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "UI/UX Design",
    "Design Systems",
    "Prototyping",
    "Brand Identity",
    "Canva",
  ],
  soft: [
    "Team Leadership",
    "Sprint Planning",
    "Problem Solving",
    "Digital Marketing",
    "Social Media Marketing",
    "Technical Documentation",
  ],
};

export interface Project {
  title: string;
  tags: string[];
  category: "ai-ml" | "fullstack" | "software";
  description: string;
  highlights: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    title: "NextGen Hub — AI Career Co-Pilot",
    tags: ["Next.js", "React", "Tailwind", "FastAPI", "AI Product"],
    category: "fullstack",
    description:
      "Autonomous, AI-driven career platform for undergraduate students featuring subconscious skill mining, company-specific learning paths, and predictive career navigation.",
    highlights: [
      "Subconscious skill mining",
      "Company-specific learning paths",
      "Predictive career navigation",
      "Full platform UI/UX design system",
    ],
    github: "https://github.com/Izz-aIqbal/NextGen-Hub-Frontend",
  },
  {
    title: "TB-Detect — Pulmonary TB Severity Detection",
    tags: ["Python", "OpenCV", "Machine Learning", "Medical Imaging"],
    category: "ai-ml",
    description:
      "AI-based, CPU-optimized image-processing pipeline for automated TB severity grading from chest X-rays, achieving 89.4% accuracy without GPU dependency.",
    highlights: [
      "89.4% classification accuracy",
      "CPU-optimized — no GPU required",
      "Morphological feature extraction pipeline",
      "Automated severity grading",
    ],
    github: "https://github.com/Izz-aIqbal/TB-Detect-Morphological-Framework",
  },
  {
    title: "PaisaPredict — Bijli Audit System",
    tags: ["Next.js", "FastAPI", "Python", "EasyOCR", "Financial Forecasting"],
    category: "fullstack",
    description:
      "AI-powered electricity bill auditor and tariff guard built with Next.js, FastAPI, EasyOCR, and Gemini — automated bill optimization and real-time tariff tracking.",
    highlights: [
      "AI-powered bill auditing",
      "OCR-based bill parsing (EasyOCR)",
      "Tariff guard & optimization",
      "Next.js + FastAPI integration",
    ],
    github: "https://github.com/Izz-aIqbal/Bijli-Audit-Web-App",
  },
  {
    title: "Clothing Reviews Topic Analysis",
    tags: ["Python", "OpenAI Embeddings", "t-SNE", "Data Science"],
    category: "ai-ml",
    description:
      "Topic analysis and 2D visualization of e-commerce clothing reviews using OpenAI text embeddings and t-SNE dimensionality reduction.",
    highlights: [
      "OpenAI text embeddings",
      "t-SNE dimensionality reduction",
      "2D topic visualization",
      "E-commerce review intelligence",
    ],
    github: "https://github.com/Izz-aIqbal/Clothing-Reviews-Topic-Analysis-Embeddings",
  },
  {
    title: "Paris Travel Guide — OpenAI Chatbot",
    tags: ["Python", "OpenAI API", "GPT-3.5", "NLP"],
    category: "ai-ml",
    description:
      "AI-powered Parisian travel guide chatbot built with the OpenAI Chat Completions API, maintaining conversational history to answer landmark and tour queries.",
    highlights: [
      "Conversational travel assistant",
      "GPT-3.5-turbo chat completions",
      "Persistent conversation history",
      "Landmark & tour intelligence",
    ],
    github: "https://github.com/Izz-aIqbal/Paris-Travel-Guide-OpenAI",
  },
  {
    title: "Real-Time Stock Price Prediction (ANN)",
    tags: ["TensorFlow", "Python", "FastAPI", "Neural Networks"],
    category: "ai-ml",
    description:
      "6-layer artificial neural network trained on 26 engineered stock features with ~95% accuracy, deployed via a live FastAPI web interface.",
    highlights: [
      "~95% prediction accuracy",
      "6-layer ANN architecture",
      "26 engineered features",
      "Live FastAPI deployment",
    ],
  },
  {
    title: "AI-Based Memory Aid & Smart Reminder System",
    tags: ["Computer Vision", "Python", "Assistive Tech"],
    category: "ai-ml",
    description:
      "Assistive system that detects objects, predicts user actions, and issues timely reminders for patients needing cognitive support.",
    highlights: [
      "Real-time object detection",
      "Action prediction for cognitive patients",
      "Timely reminder system",
      "Assistive technology focus",
    ],
  },
  {
    title: "Pathfinding Visualizer",
    tags: ["Python", "Pygame", "PyQt", "Algorithms"],
    category: "ai-ml",
    description:
      "Interactive visualizer implementing A*, DFS, and BFS algorithms to demonstrate heuristic pathfinding dynamics.",
    highlights: [
      "A*, DFS, BFS implementations",
      "Interactive GUI with Pygame",
      "Real-time algorithm visualization",
      "Educational tool",
    ],
  },
  {
    title: "Stock Price Analysis on Apache Spark",
    tags: ["Apache Spark", "PySpark", "Databricks", "Big Data"],
    category: "ai-ml",
    description:
      "Scalable big data pipeline analyzing TSLA and AAPL stock trends on Databricks using Spark SQL.",
    highlights: [
      "Scalable Spark pipeline",
      "TSLA & AAPL analysis",
      "Databricks notebook environment",
      "Big data processing",
    ],
  },
  {
    title: "Gaari Shaari — Car Showroom Website",
    tags: ["PHP", "MySQL", "SQL", "HTML/CSS", "Web"],
    category: "fullstack",
    description:
      "Complete digital solution for managing car inventory, user orders, and admin tasks — built with a PHP backend, dynamic SQL database, and clean CSS frontend.",
    highlights: [
      "Car inventory management",
      "User order & admin workflows",
      "PHP authentication backend",
      "Dynamic SQL database integration",
    ],
    github: "https://github.com/Izz-aIqbal/Gaari-Shaari-Showroom-Website",
  },
  {
    title: "Car Rental Management System (C++)",
    tags: ["C++", "OOP", "Console App", "Invoicing"],
    category: "software",
    description:
      "Console-based car rental management system with car availability checks, old/new model pricing, customer details management, automatic invoice generation, and a data reset option.",
    highlights: [
      "Automatic invoice generation",
      "Availability & pricing logic",
      "Customer data management",
      "Data reset & persistence",
    ],
    github: "https://github.com/Izz-aIqbal/Car-Rental-Management-System",
  },
  {
    title: "Car Rental System (Python)",
    tags: ["Python", "CLI", "Invoicing", "OOP"],
    category: "software",
    description:
      "CLI-based car rental management and invoicing system built in Python — rentals, fee calculation, and customer invoicing from the terminal.",
    highlights: [
      "Terminal-based workflow",
      "Rental fee calculation",
      "Customer invoices",
      "Clean OOP structure",
    ],
    github: "https://github.com/Izz-aIqbal/Car-Rental-Python",
  },
  {
    title: "Sudoku Game (Java)",
    tags: ["Java", "OOP", "Game Logic", "Validation"],
    category: "software",
    description:
      "Simple console-based Sudoku game in Java using OOP. Players input moves, the game validates them, and it ends once the puzzle is solved.",
    highlights: [
      "OOP-based game engine",
      "Move validation logic",
      "Puzzle completion detection",
      "Console gaming experience",
    ],
    github: "https://github.com/Izz-aIqbal/Sudoku-Game-Java",
  },
  {
    title: "Address Book Management System (C++)",
    tags: ["C++", "Linked Lists", "CSV I/O", "DSA"],
    category: "software",
    description:
      "High-performance C++ console application using doubly linked lists and persistent CSV file I/O for efficient contact management.",
    highlights: [
      "Doubly linked list operations",
      "Persistent CSV file storage",
      "Efficient contact management",
      "Memory-safe C++ design",
    ],
    github: "https://github.com/Izz-aIqbal/Address-Book-Management-System",
  },
  {
    title: "Network Protocol Analysis",
    tags: ["Wireshark", "HTTP", "HTTPS", "QUIC", "Networking"],
    category: "software",
    description:
      "Wireshark-based analysis of HTTP, HTTPS, and QUIC protocols — capturing, inspecting, and detailing real-world network traffic for computer networks coursework.",
    highlights: [
      "HTTP plaintext traffic analysis",
      "HTTPS/TLS inspection",
      "QUIC protocol deep dive",
      "Real-world packet capture",
    ],
    github: "https://github.com/Izz-aIqbal/Investigating-and-Analyzing-real-world-protocols",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  type: "internship" | "fellowship" | "simulation";
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "UI/UX Designer & Frontend Developer Intern",
    company: ".dot NSTP",
    period: "Jul 2026 – Sep 2026",
    location: "Islamabad",
    type: "internship",
    description:
      "Led UI/UX design and frontend implementation for client projects. Managed design sign-off gates and documentation for the development team.",
    highlights: [
      "Design system creation and maintenance",
      "Client-facing UI/UX design",
      "Frontend implementation",
      "Team coordination",
    ],
  },
  {
    role: "Data & AI Fellow",
    company: "AuratTech Data & AI Fellowship",
    period: "Jul 2025 – Sep 2025",
    type: "fellowship",
    description:
      "Selected fellow in a competitive data and AI program focusing on practical machine learning applications and data analysis.",
    highlights: [
      "Hands-on ML model development",
      "Data analysis and visualization",
      "AI solution prototyping",
      "Cross-functional collaboration",
    ],
  },
  {
    role: "Graphic Design & Digital Marketing Intern",
    company: "PulxeNet Pvt Ltd",
    period: "Jun 2025 – Aug 2025",
    type: "internship",
    description:
      "Created brand assets, marketing collateral, and social media content for a cybersecurity and networking company.",
    highlights: [
      "Brand identity development",
      "Social media campaign design",
      "Print and digital collateral",
      "Marketing strategy support",
    ],
  },
  {
    role: "Data Analytics & Technology Simulations",
    company: "Deloitte Australia & Tata (via Forage)",
    period: "2025",
    type: "simulation",
    description:
      "Completed job simulations in data analytics and technology consulting, working with real-world datasets and business scenarios.",
    highlights: [
      "Deloitte data analytics simulation",
      "Tata technology consulting simulation",
      "Real-world dataset analysis",
      "Business insight generation",
    ],
  },
  {
    role: "Frontend Development Intern",
    company: "Ayub Teaching Hospital",
    period: "Aug 2024",
    location: "Abbottabad",
    type: "internship",
    description:
      "Frontend development internship supporting internal web applications for the hospital — building responsive interfaces and improving the digital patient-facing experience.",
    highlights: [
      "Frontend interface development",
      "Responsive web design",
      "Hospital web application support",
      "Real-world deployment experience",
    ],
  },
];

export const designGallery = {
  branding: [
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/business_card.jpg",
      alt: "Personal business card design",
      caption: "Personal Business Card",
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/hiddenpak_logo.jpg",
      alt: "HiddenPak logo design",
      caption: "HiddenPak — Logo Design",
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/bird_logo.jpg",
      alt: "3D phoenix logo concept",
      caption: "3D Phoenix — Logo Concept",
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/card.jpg",
      alt: "Alternate visiting card design",
      caption: "Visiting Card — Alt Layout",
    },
  ],
  socialMedia: [
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/nail_art.png",
      alt: "Digi Famtic nail art collection",
      caption: "Digi Famtic — Nail Art Collection",
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/nail_salon.png",
      alt: "Digi Famtic nail salon post",
      caption: "Digi Famtic — Nail Salon Post",
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/smartwatch.jpg",
      alt: "Smartwatch product ad",
      caption: "Smart Watch — Product Ad",
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/pulxenet_firewall.png",
      alt: "PulxeNet firewall post",
      caption: "PulxeNet — Security Services",
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/pulxenet_loadbalance.png",
      alt: "PulxeNet load balancing post",
      caption: "PulxeNet — Load Balancing",
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/pulxenet_connectivity.png",
      alt: "PulxeNet connectivity post",
      caption: "PulxeNet — Connectivity",
    },
  ],
  print: [
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/pulxenet_onepager.jpg",
      alt: "PulxeNet brand one-pager",
      caption: "PulxeNet — Brand One-Pager",
      wide: true,
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/flyer.jpg",
      alt: "PulxeNet course promotion flyer",
      caption: "PulxeNet — Course Flyer",
      wide: true,
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/menu.png",
      alt: "Restaurant menu design",
      caption: "Restaurant Menu — Grid Layout",
    },
    {
      src: "https://izz-aiqbal.github.io/My-Portfolio/images/light_poster.jpg",
      alt: "Light conceptual poster",
      caption: '"Light" — Conceptual Poster',
    },
  ],
  uiux: [
    {
      src: "https://raw.githubusercontent.com/Izz-aIqbal/UI-UX-Design/main/1%20Onboarding%20Screen%20Welcome.png",
      alt: "NextGen Hub onboarding screen",
      caption: "Onboarding",
    },
    {
      src: "https://raw.githubusercontent.com/Izz-aIqbal/UI-UX-Design/main/2%20a%20Signup%20(Loading%20State).png",
      alt: "NextGen Hub signup loading state",
      caption: "Signup · Loading",
    },
    {
      src: "https://raw.githubusercontent.com/Izz-aIqbal/UI-UX-Design/main/4%20c%20Dashboard%20Home%20Screen.png",
      alt: "NextGen Hub dashboard home",
      caption: "Dashboard · Home",
    },
    {
      src: "https://raw.githubusercontent.com/Izz-aIqbal/UI-UX-Design/main/8%20Parsing%20Progress.png",
      alt: "NextGen Hub CV parsing progress",
      caption: "CV Parsing",
    },
    {
      src: "https://raw.githubusercontent.com/Izz-aIqbal/UI-UX-Design/main/10%20a%20Populated%20State(Job%20feed).png",
      alt: "NextGen Hub job feed populated state",
      caption: "Opportunity Feed",
    },
    {
      src: "https://raw.githubusercontent.com/Izz-aIqbal/UI-UX-Design/main/11%20Job%20Detail.png",
      alt: "NextGen Hub job detail screen",
      caption: "Job Detail",
    },
    {
      src: "https://raw.githubusercontent.com/Izz-aIqbal/UI-UX-Design/main/13%20b%20AI%20Skill%20Report%20Screen.png",
      alt: "NextGen Hub AI skill report",
      caption: "AI Skill Report",
    },
    {
      src: "https://raw.githubusercontent.com/Izz-aIqbal/UI-UX-Design/main/14%20Saved%20Jobs%20Screen.png",
      alt: "NextGen Hub saved jobs screen",
      caption: "Saved Jobs",
    },
    {
      src: "https://raw.githubusercontent.com/Izz-aIqbal/UI-UX-Design/main/15%20a%20Notifications%20Screen.png",
      alt: "NextGen Hub notifications screen",
      caption: "Notifications",
    },
    {
      src: "https://raw.githubusercontent.com/Izz-aIqbal/UI-UX-Design/main/16%20Settings%20screen.png",
      alt: "NextGen Hub settings screen",
      caption: "Settings",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Izza took a vague brief and turned it into a full brand kit in days — the kind of clean, professional work that made our socials look like a real company.",
    name: "Digi Famtic",
    role: "Social Media Client",
    initials: "DF",
    tag: "Client",
  },
  {
    quote:
      "What stood out was the handoff. Every screen came with states and specs already documented — the dev team never had to guess what she meant.",
    name: "PulxeNet",
    role: "Brand & Design Client",
    initials: "PN",
    tag: "Client",
  },
  {
    quote:
      "She leads design and manages the team at the same time without either one slipping. Sign-off gates, clear specs, and she still hits deadlines.",
    name: ".dot Team",
    role: "Internship Supervisor",
    initials: ".",
    tag: "Supervisor",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Design", href: "#design" },
  { label: "Contact", href: "#contact" },
];
