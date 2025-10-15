import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // -------------------
  // Languages
  // -------------------

  {
    key: "html",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Language", "Frontend"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
  },
  {
    key: "css",
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Language", "Frontend"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
  },
  {
    key: "rust",
    title: "Rust",
    href: "https://www.rust-lang.org/",
    categories: ["Language"],
    icon: "https://prev.rust-lang.org/logos/rust-logo-512x512.png"
  },
  {
    key: "cpp",
    title: "C++",
    href: "https://isocpp.org/",
    categories: ["Language"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
  },
  {
    key: "golang",
    title: "Go (Golang)",
    href: "https://go.dev/",
    categories: ["Language"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
  },




  // -------------------
  // Frontend / UI
  // -------------------
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "Frontend", "UI Library"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
  },
  // {
  //   key: "react-native",
  //   title: "React Native",
  //   href: "https://reactnative.dev/",
  //   categories: ["Frontend", "Mobile"],
  //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
  // },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Frontend", "Framework"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Frontend", "UI Library", "CSS Framework"],
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
  },
  {
    key: "motion",
    title: "Framer Motion",
    href: "https://www.framer.com/motion/",
    categories: ["Frontend", "Animation"],
    icon: "https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png"
  },

  // -------------------
  // Backend / Runtime
  // -------------------
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Backend", "Runtime"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
  },
  {
    key: "express",
    title: "Express.js",
    href: "https://expressjs.com/",
    categories: ["Backend", "Framework"],
    icon: "https://tggl.io/technologies/express-js.svg",
  },
  {
    key: "django",
    title: "Django",
    href: "https://www.djangoproject.com/",
    categories: ["Backend", "Framework"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg"
  },
  {
    key: "flask",
    title: "Flask",
    href: "https://flask.palletsprojects.com/",
    categories: ["Backend", "Framework"],
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Flask-Dark.svg"
  },
  {
    key: "fastapi",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    categories: ["Backend", "Framework"],
    icon: "https://cdn.worldvectorlogo.com/logos/fastapi.svg"
  },
  {
    key: "prisma",
    title: "Prisma",
    href: "https://www.prisma.io/",
    categories: ["Database", "ORM"],
    icon: "https://img.icons8.com/?size=512&id=zJh5Gyrd6ZKu&format=png"
  },
  {
    key: "supabase",
    title: "Supabase",
    href: "https://supabase.com/",
    categories: ["Database", "ORM"],
    icon: "https://img.icons8.com/color/512/supabase.png"
  },


  // -------------------
  // Databases
  // -------------------
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
  },
  {
    key: "postgres",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database", "MERN"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database", "Cache"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"
  },
  {
    key: "kafka",
    title: "Apache Kafka",
    href: "https://kafka.apache.org/",
    categories: ["Messaging", "Streaming"],
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/apache-kafka-icon.png"
  },

  // -------------------
  // Tools / IDE
  // -------------------
  {
    key: "vscode",
    title: "VS Code",
    href: "https://code.visualstudio.com/",
    categories: ["Tools", "IDE"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
  },
  // {
  //   key: "nginx",
  //   title: "Nginx",
  //   href: "https://nginx.org/",
  //   categories: ["DevOps", "Server"],
  //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"
  // },
  {
    key: "jenkins",
    title: "Jenkins",
    href: "https://www.jenkins.io/",
    categories: ["DevOps", "CI/CD"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg"
  },

  // -------------------
  // DevOps / Containerization
  // -------------------
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["DevOps", "Containerization"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
  },
  {
    key: "kubernetes",
    title: "Kubernetes",
    href: "https://kubernetes.io/",
    categories: ["DevOps", "Container Orchestration"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg"
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["DevOps", "Version Control"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    categories: ["DevOps", "Version Control"],
    icon: "https://www.svgrepo.com/show/475654/github-color.svg"
  },
  {
    key: "ci-cd",
    title: "CI/CD",
    href: "https://circleci.com/",
    categories: ["DevOps"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/circleci/circleci-plain.svg"
  },

  // -------------------
  // AI / ML
  // -------------------
  {
    key: "tensorflow",
    title: "TensorFlow",
    href: "https://www.tensorflow.org/",
    categories: ["AI/ML"],
    theme: true,
    lightIcon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
    darkIcon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg"
  },
  {
    key: "pytorch",
    title: "PyTorch",
    href: "https://pytorch.org/",
    categories: ["AI/ML"],
    theme: true,
    lightIcon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
    darkIcon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg"
  },
  {
    key: "keras",
    title: "Keras",
    href: "https://keras.io/",
    categories: ["AI/ML"],
    theme: true,
    lightIcon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg",
    darkIcon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg"
  },
  {
    key: "scikit-learn",
    title: "Scikit-Learn",
    href: "https://scikit-learn.org/",
    categories: ["AI/ML"],
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg"
  },
  {
    key: "openai",
    title: "OpenAI",
    href: "https://openai.com/",
    categories: ["AI/ML"],
    theme: true,
    lightIcon: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png",
    darkIcon: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png"
  },

  // -------------------
  // Web3 / Blockchain
  // -------------------
  {
    key: "solidity",
    title: "Solidity",
    href: "https://docs.soliditylang.org/",
    categories: ["Language", "Web3"],
    icon: "https://img.icons8.com/?size=1200&id=HOpiPSjPWNNd&format=png"
  },
  {
    key: "ethereum",
    title: "ethereum",
    href: "https://ethereum.org/",
    categories: ["Language", "Web3"],
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-ethereum-logo-icon-svg-download-png-3029981.png"
  },

  {
    key: "solana",
    title: "Solana",
    href: "https://solana.com/",
    categories: ["Web3", "Blockchain"],
    lightIcon: "https://static.vecteezy.com/system/resources/thumbnails/024/093/312/small_2x/solana-sol-glass-crypto-coin-3d-illustration-free-png.png",
    darkIcon: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png"
  },
  {
    key: "metamask",
    title: "MetaMask",
    href: "https://metamask.io/",
    categories: ["Web3", "Wallet"],
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1024px-MetaMask_Fox.svg.png?20220831120339"
  }
];
