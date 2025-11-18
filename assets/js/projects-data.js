const projectsData = {
  /* ==============================
     ⚙️ AI & AUTOMATION PROJECTS
  =============================== */

  callDashboard: {
    title: "AI-Powered Call Classification & Insight Dashboard",
    category: "AI & Automations",
    image: "./assets/images/project-call-dashboard.jpg",
    description: `
      An AI-powered call analytics platform that classifies, summarizes,
      and visualizes inbound call data for dental marketing agencies.
      Built using Deepgram for transcription, GPT-4 for intent analysis,
      and Looker Studio for analytics. Integrated through AWS Lambda and BigQuery.
    `,
    technologies: [
      "Deepgram",
      "OpenAI GPT-4",
      "AWS Lambda",
      "Google BigQuery",
      "Looker Studio"
    ],
    features: [
      "Automatic transcription and tagging",
      "GPT-driven intent classification",
      "Real-time call performance dashboards"
    ],
    videoUrl: "https://www.loom.com/share/YOUR-CALLDASHBOARD-LOOM-LINK"
  },

  adClassification: {
    title: "AI Advertisement Content Classification System",
    category: "AI & Automations",
    image: "./assets/images/project-ad-classification.jpg",
    description: `
      AI-based system that classifies marketing creatives (images, videos, or copy)
      into advertising content categories. Helps automate campaign performance
      analysis and creative testing workflows.
    `,
    technologies: ["GPT-4", "TensorFlow", "FastAPI", "AWS S3"],
    features: [
      "Creative content categorization",
      "AI-based campaign analytics",
      "Integration-ready REST API"
    ]
  },

  surveyPlatform: {
    title: "AI-Powered Survey Platform for Personalized Customer Feedback",
    category: "AI & Automations",
    image: "./assets/images/project-survey-platform.jpg",
    description: `
      A dynamic AI-powered survey system that generates personalized questions
      using GPT and visualizes aggregated feedback analytics. Used for
      customer sentiment tracking and experience insights.
    `,
    technologies: ["React", "FastAPI", "GPT-4", "BigQuery", "Looker Studio"],
    features: [
      "Adaptive survey generation",
      "Real-time response visualization",
      "Automated sentiment summaries"
    ],
    slidesUrl: "https://docs.google.com/presentation/d/YOUR-SURVEY-SLIDES-ID/embed"
  },

  /* ==============================
     🤖 AI AGENTS PROJECTS
  =============================== */

  mentorshipAI: {
    title: "Medical Mentorship Matchmaking Platform",
    category: "AI Agents",
    image: "./assets/images/project-mentorship-ai.jpg",
    description: `
      A GPT-powered matchmaking system that connects medical mentors and mentees
      based on personality, specialties, and career goals. Built using LangChain
      and Supabase with Slack-based notifications.
    `,
    technologies: ["GPT-4", "LangChain", "Supabase", "FastAPI"],
    features: [
      "AI-driven match recommendations",
      "Dynamic mentor profiles",
      "Automated meeting coordination"
    ]
  },

  dentalCRM: {
    title: "Dental CRM Automation (HIPAA-Compliant)",
    category: "AI Agents",
    image: "./assets/images/project-dental-crm.jpg",
    description: `
      A HIPAA-compliant CRM automation agent that assists dental clinics by
      automating patient follow-ups, appointment scheduling, and call summaries.
      Integrated with CallRail, Zapier, and custom GPT agents.
    `,
    technologies: [
      "LangGraph",
      "GPT-4",
      "Zapier",
      "CallRail API",
      "Google BigQuery"
    ],
    features: [
      "HIPAA-compliant AI agent workflows",
      "Automated CRM record updates",
      "Email and SMS follow-up generation"
    ]
  },

  influencerAI: {
    title: "AI-Powered Influencer & Market Intelligence System",
    category: "AI Agents",
    image: "./assets/images/project-influencer-ai.jpg",
    description: `
      An AI-driven analytics platform that aggregates influencer campaigns,
      analyzes performance metrics, and generates GPT-powered insights for
      marketing attribution and competitor tracking.
    `,
    technologies: ["Python", "GPT-4", "BigQuery", "LangChain"],
    features: [
      "Influencer attribution modeling",
      "Market insights generation",
      "Automated campaign tracking"
    ]
  },

  /* ==============================
     💻 WEB DEVELOPMENT PROJECTS
  =============================== */

  basketballBot: {
    title: "Basketball Performance Analysis Chatbot",
    category: "Web Development",
    image: "./assets/images/project-basketball.jpg",
    description: `
      A LangGraph-based AI chatbot that connects with a basketball performance
      database to analyze player stats, generate reports, and respond to
      natural language queries with visualized insights.
    `,
    technologies: ["LangGraph", "FastAPI", "React", "PostgreSQL"],
    features: [
      "Database-integrated chatbot",
      "Statistical performance queries",
      "Dynamic data visualization"
    ]
  },

  /* ==============================
     📸 COMPUTER VISION / EDGE AI
  =============================== */

  mirrorVision: {
    title: "MirrorVision – iOS Pose Recognition App",
    category: "Computer Vision / Edge AI",
    image: "./assets/images/project-mirrorvision.jpg",
    description: `
      An AI-powered fitness coaching app that uses real-time pose recognition
      to analyze user form and provide feedback. Built with CoreML and TensorFlow.
    `,
    technologies: ["CoreML", "Swift", "TensorFlow", "PoseNet"],
    features: [
      "Pose tracking and feedback",
      "On-device inference for privacy",
      "iOS-optimized UI/UX"
    ],
    videoUrl: "https://www.loom.com/share/YOUR-MIRRORVISION-LOOM-LINK"
  },

  cfbSorting: {
    title: "LEGO Sorting System for CFB",
    category: "Computer Vision / Edge AI",
    image: "./assets/images/project-cfb.jpg",
    description: `
      Real-time LEGO sorting system using YOLOv8 and DeepStream,
      deployed on NVIDIA Jetson Orin NX with PLC integration for industrial use.
    `,
    technologies: ["YOLOv8", "DeepStream", "TensorRT", "Jetson Orin NX"],
    features: [
      "Real-time LEGO detection",
      "Edge-native deployment",
      "PLC-controlled sorting"
    ],
    videoUrl: "https://www.loom.com/share/YOUR-CFB-LOOM-LINK"
  },

  anglerVision: {
    title: "AnglerVision – Sports Fishing AI System",
    category: "Computer Vision / Edge AI",
    image: "./assets/images/project-anglervision.jpg",
    description: `
      Real-time fish detection and classification system for sports fishing.
      Optimized for underwater cameras and Jetson-based edge devices.
    `,
    technologies: ["YOLOv8", "DeepStream", "OpenCV", "Jetson Orin Nano"],
    features: [
      "Species-level fish detection",
      "Edge-optimized AI inference",
      "Scalable for aquaculture systems"
    ]
  }
};
