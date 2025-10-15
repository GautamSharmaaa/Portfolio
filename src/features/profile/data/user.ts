import type { User } from "@/features/profile/types/user";
// @ts-expect-error - user literal doesn't strictly match the generated User type
export const USER: User = {
  firstName: "Gautam",
  lastName: "Sharma",
  displayName: "Gautam Sharma",
  username: "GautamS",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Engineering smarter, simpler, faster.",
    "Creating with code. Small details matter.",
    "Full Stack Engineer",
    "AI Engineer",
    "Web3 Engineer",
    "Open Source Contributor",
  ],
  address: "Delhi, India",
  phoneNumber: "KzkxIDkyMTIyNTcwMDQ=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "Z2F1dGFtc2hhcm1hNzAwNEBnbWFpbC5jb20=", // base64 encoded
  website: "gautamsharma.me",
  jobTitle: "Full Stack Engineer",
  jobs: [
    // {
    //   title: "Full Stack Developer & UI Design Lead",
    //   company: "CSI International",
    //   website: "https://www.careerscoutsinternational.com/",
    // },
    // {
    //   title: "Founder",
    //   company: "Quaric",
    //   website: "https://quaric.com",
    // },
  ],
  about: `
Hello, I’m Gautam Sharma — a Full Stack Developer, AI/ML Researcher, and Web3 Enthusiast passionate about building intelligent, user-focused software and decentralized applications.

I have 2+ years of experience developing web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. I’ve also published and presented 2+ research papers in AI/ML, exploring predictive modeling, deep learning, and computer vision.

I’ve worked on 10+ real-world full stack projects solving practical problems, and contributed to Google Summer of Code 2024 with 7+ successful PRs for an open-source education analytics project. I also interned as a Web Development and Design Intern at CSI, improving digital solutions and user experience.

Currently, I’m diving deeper into Web3, learning blockchain, smart contracts, and decentralized application development to merge full-stack expertise with next-generation technologies.

I love exploring new technologies, contributing to open-source, and turning ideas into impactful projects. Let’s connect and build something remarkable!

Let's connect and collaborate!
  `,
  avatar: "https://avatars.githubusercontent.com/u/115400375?v=4",
  keywords: [
    "Gautam",
    "Gautam Sharma",
  ],
  dateCreated: "2025-10-14", // YYYY-MM-DD
};
