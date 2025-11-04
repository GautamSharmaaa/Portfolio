import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "CollabSketch — Real-Time Collaborative Whiteboard",
    title: "CollabSketch — Real-Time Collaborative Whiteboard",
    period: {
      start: "03.2025",
    },
    link: "https://collabsketch.app",
    skills: [
      "React",
      "TypeScript",
      "WebSockets",
      "Microservices",
      "Firebase",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "AWS",
      "Docker",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
    ],
    description: `🚀 A cloud-based platform that lets teams draw, brainstorm, and collaborate live on a shared digital canvas with seamless real-time sync.
- ⚡ Built scalable microservices using WebSockets & Firebase Auth for <200 ms latency and 99.9% uptime.
- 🎨 Developed custom Fabric.js whiteboard with GraphQL & PostgreSQL, boosting team efficiency by 40%.
- ☁️ Deployed Dockerized backend on AWS with CI/CD pipelines ensuring 3× traffic scalability.
`,
    logo: "https://cdn-icons-png.flaticon.com/512/7485/7485739.png",
    isExpanded: true,
  },

  {
    id: "ResuMind — AI-Powered Resume Analyzer",
    title: "ResuMind — AI-Powered Resume Analyzer",
    period: {
      start: "03.2024",
    },
    link: "https://resumind.app",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Zustand",
      "Vite",
      "Puter.js",
      "OpenAI API",
      "CI/CD",
      "GitHub Actions",
    ],
    description: `🧠 AI-powered web app that analyzes resumes, provides instant feedback, and scores ATS compatibility.
- 🤖 Leveraged OpenAI GPT models serving 1,800+ users with 4.7★ rating and 92% satisfaction.
- ⚙️ Built modular React codebase with Zustand & TypeScript improving dev velocity by 40%.
- 🎯 Integrated resume parsing & gamified UI achieving 95% Lighthouse accessibility score; deployed via GitHub Actions.
`,
    logo: "https://cdn-icons-png.flaticon.com/512/1250/1250303.png",
    isExpanded: false,
  },

  {
    id: "LMSify — SaaS Learning Management System",
    title: "LMSify — SaaS Learning Management System",
    period: {
      start: "07.2023",
    },
    link: "https://lmsify.app",
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Clerk",
      "Stripe API",
      "Firebase",
      "GraphQL",
      "Docker",
      "AWS",
      "Sentry",
      "CI/CD",
      "Agile",
    ],
    description: `🎓 Full-stack SaaS LMS enabling creators to build and sell online courses with real-time sync & payments.
- 💳 Integrated Clerk auth & Stripe payments serving 5,000+ monthly users with 99.95% uptime.
- ⚡ Built Next.js app with Supabase & Firebase handling 10,000+ submissions/month via GraphQL.
- 🛠️ Enhanced observability with Sentry & AWS; used Docker + CI/CD to cut MTTR by 35%.
`,
    logo: "https://cdn-icons-png.flaticon.com/512/3029/3029845.png",
    isExpanded: false,
  },

  //   {
  //     id: "chanhdaidotcom",
  //     title: "chanhdai.com",
  //     period: {
  //       start: "01.2025",
  //     },
  //     link: "https://github.com/ncdai/chanhdai.com",
  //     skills: [
  //       "Open Source",
  //       "Next.js 15",
  //       "Tailwind CSS v4",
  //       "Radix UI",
  //       "Motion",
  //       "shadcn/ui",
  //       "Component Registry",
  //       "Vercel",
  //     ],
  //     description: `A minimal portfolio, component registry, and blog.
  // - Clean & modern design
  // - Light & Dark theme support
  // - vCard integration
  // - SEO optimization: [JSON-LD schema](https://json-ld.org), sitemap, robots
  // - AI-friendly [/llms.txt](https://llmstxt.org)
  // - Spam-protected email
  // - Installable PWA

  // Blog Features:
  // - MDX & Markdown support
  // - Syntax Highlighting for better readability
  // - RSS Feed for easy content distribution
  // - Dynamic OG Images for rich previews`,
  //     logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
  //   },
  //   {
  //     id: "quaricdotcom",
  //     title: "quaric.com",
  //     period: {
  //       start: "03.2024",
  //     },
  //     link: "https://quaric.com",
  //     skills: [
  //       "Company Project",
  //       "Next.js 15",
  //       "Tailwind CSS v3",
  //       "shadcn/ui",
  //       "Strapi 5",
  //       "VNPAY-QR",
  //       "Docker",
  //       "Docker Compose",
  //       "NGINX",
  //     ],
  //     logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  //   },
  //   {
  //     id: "zadark",
  //     title: "ZaDark",
  //     period: {
  //       start: "01.2022",
  //     },
  //     link: "https://zadark.com",
  //     skills: [
  //       "Pet Project",
  //       "Open Source",
  //       "Browser Extension",
  //       "CLI",
  //       "Docusaurus 3",
  //     ],
  //     description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.
  // - Earned 10M+ VND in net sales from a paid Safari Extension
  // - 80k+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
  // - 20k+ active users via Chrome Web Store (as of Sep 2025)
  // - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022`,
  //     logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
  //   },
  //   {
  //     id: "qabox",
  //     title: "QABox",
  //     period: {
  //       start: "07.2023",
  //       end: "07.2023",
  //     },
  //     link: "https://github.com/ncdai/qabox",
  //     skills: [
  //       "University Project",
  //       "PHP",
  //       "MySQL",
  //       "MVC",
  //       "Docker",
  //       "Docker Compose",
  //     ],
  //     description:
  //       "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox",
  //   },
  //   {
  //     id: "taskbox",
  //     title: "TaskBox",
  //     period: {
  //       start: "07.2023",
  //       end: "07.2023",
  //     },
  //     link: "https://github.com/ncdai/taskbox",
  //     skills: [
  //       "University Project",
  //       "PHP",
  //       "MySQL",
  //       "MVC",
  //       "Docker",
  //       "Docker Compose",
  //     ],
  //     description:
  //       "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/taskbox",
  //   },
  //   {
  //     id: "daichat-app",
  //     title: "DaiChat App",
  //     period: {
  //       start: "07.2020",
  //       end: "07.2020",
  //     },
  //     link: "https://www.youtube.com/watch?v=H5U3J_W1low",
  //     skills: ["University Project", "Java", "Java Swing", "Java Networking"],
  //     description: `- Course: Java Application Programming — FIT@HCMUS
  // - Requirement: Developed a real-time chat application using Java technologies
  // - Project Score: 10/10
  // - Source Code:
  //   - Server: https://github.com/ncdai/ltudjava-summer2020-chatapp_server
  //   - Client: https://github.com/ncdai/ltudjava-summer2020-chatapp_client`,
  //   },
  //   {
  //     id: "qlsv-app",
  //     title: "QLSV App",
  //     period: {
  //       start: "06.2020",
  //       end: "06.2020",
  //     },
  //     link: "https://www.youtube.com/watch?v=tG9SZEBrwog",
  //     skills: ["University Project", "Java", "Java Swing", "Hibernate", "MySQL"],
  //     description: `- Course: Java Application Programming — FIT@HCMUS
  // - Requirement: Built a student management system with role-based functionalities using Java technologies
  // - Project Score: 10/10
  // - Source Code: https://github.com/ncdai/ltudjava-summer2020-hibernate`,
  //   },
  //   {
  //     id: "penphy",
  //     title: "Penphy",
  //     period: {
  //       start: "01.2019",
  //       end: "08.2019",
  //     },
  //     link: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
  //     skills: ["Startup Project", "JavaScript", "React Native"],
  //     description: "2nd Prize — Business Startup Competition 2019",
  //   },
  //   {
  //     id: "unlimitedstudy",
  //     title: "UnlimitedStudy",
  //     period: {
  //       start: "01.2017",
  //       end: "08.2018",
  //     },
  //     link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
  //     skills: [
  //       "National Competition",
  //       "Creative Software",
  //       "PHP",
  //       "Laravel 4",
  //       "MySQL",
  //       "jQuery",
  //       "Bootstrap 3",
  //     ],
  //     description: `UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.
  // - 3rd Prize — National Science and Engineering Fair 2018 (ViSEF)
  // - 1st Prize — Can Tho City Science and Engineering Fair 2018
  // - 3rd Prize — National Young Informatics Contest 2018
  // - 2nd Prize — Can Tho City Youth and Children's Creativity Contest 2018
  // - 3rd Prize — Can Tho City Young Informatics Contest 2018
  // - Reached 7k+ users, mainly high school students in Can Tho City
  // - Pilot implemented in high schools across Can Tho City with English quizzes, supervised by English subject specialists from the Can Tho City Department of Education and Training`,
  //     logo: "https://assets.chanhdai.com/images/project-logos/unlimitedstudy.webp",
  //   },
  //   {
  //     id: "dmessage",
  //     title: "DMessage",
  //     period: {
  //       start: "05.2017",
  //       end: "05.2017",
  //     },
  //     link: "https://github.com/ncdai/DMessage",
  //     skills: [
  //       "Self-learning Project",
  //       "Pet Project",
  //       "Express.js",
  //       "Socket.io",
  //       "MongoDB",
  //       "Mongoose ODM",
  //     ],
  //     description:
  //       "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
  //   },
  //   {
  //     id: "study-english",
  //     title: "Study English",
  //     period: {
  //       start: "11.2016",
  //       end: "12.2017",
  //     },
  //     link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
  //     skills: [
  //       "National Competition",
  //       "Creative Software",
  //       "PHP",
  //       "Laravel 4",
  //       "MySQL",
  //     ],
  //     description: `Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.
  // - Consolation Prize — National Youth and Children's Creativity Contest 2016
  // - 1st Prize — Can Tho City Youth and Children's Creativity Contest 2016
  // - Consolation Prize — Can Tho City Young Informatics Contest 2016`,
  //   },
];
