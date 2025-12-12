const projectsData = {
  /* ==============================
     ⚙️ AI & AUTOMATIONS
  =============================== */

  callDashboard: {
    title: "AI-Powered Call Classification & Insight Dashboard",
    category: "AI & Automations",
    image: "./assets/images/project-call-dashboard.jpg",
    overview:
      "End-to-end call intelligence system for dental marketing teams: transcribe calls, classify intent, auto-tag outcomes, and visualize KPIs in dashboards.",
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
      "Looker Studio",
    ],
    features: [
      "Automatic transcription + diarization-ready pipeline",
      "Intent classification and lead-quality tagging",
      "Call summaries + key moments extraction",
      "Dashboards for campaign/call-source performance",
    ],
    functionalities: [
      "Ingest calls + metadata (source, campaign, caller)",
      "Transcribe → normalize → store in BigQuery",
      "LLM classification + structured tags (JSON)",
      "Looker Studio dashboards for trends + KPIs",
    ],
    videoUrl: "https://www.loom.com/share/YOUR-CALLDASHBOARD-LOOM-LINK",
  },

  adClassification: {
    title: "AI Advertisement Content Classification System",
    category: "AI & Automations",
    image: "./assets/images/project-ad-classification.jpg",
    overview:
      "System that classifies ad creatives into standardized content categories to enable creative testing, reporting automation, and performance insights.",
    description: `
      AI-based system that classifies marketing creatives (images, videos, or copy)
      into advertising content categories. Helps automate campaign performance
      analysis and creative testing workflows.
    `,
    technologies: ["GPT-4", "TensorFlow", "FastAPI", "AWS S3"],
    features: [
      "Creative content categorization (multi-format)",
      "Performance analytics-ready labels",
      "Integration-ready REST API endpoints",
    ],
    functionalities: [
      "Upload creative (image/video/copy) + metadata",
      "Generate categories/tags (hooks, offer type, CTA, audience, etc.)",
      "Store outputs for reporting + A/B test comparisons",
      "Expose API for downstream BI / workflow automation",
    ],
  },

  surveyPlatform: {
    title: "AI-Powered Survey Platform for Personalized Customer Feedback",
    category: "AI & Automations",
    image: "./assets/images/project-survey-platform.jpg",
    overview:
      "Adaptive survey platform that generates personalized questions with AI and turns responses into actionable sentiment + insight dashboards.",
    description: `
      A dynamic AI-powered survey system that generates personalized questions
      using GPT and visualizes aggregated feedback analytics. Used for
      customer sentiment tracking and experience insights.
    `,
    technologies: ["React", "FastAPI", "GPT-4", "BigQuery", "Looker Studio"],
    features: [
      "Adaptive question generation (branching logic)",
      "Real-time response visualization",
      "Automated sentiment summaries and themes",
    ],
    functionalities: [
      "Generate next question based on prior answers",
      "Score sentiment and extract themes/topics",
      "Store responses in analytics warehouse",
      "Dashboard views for cohorts/time windows",
    ],
    slidesUrl:
      "https://docs.google.com/presentation/d/YOUR-SURVEY-SLIDES-ID/embed",
  },

  /* ==============================
     🤖 AI AGENTS
  =============================== */

  mentorshipMatch: {
    title: "Medical Mentorship Matchmaking Platform",
    category: "AI Agents",
    image: "./assets/images/project-mentorship-ai.jpg",
    overview:
      "AI-assisted mentor/mentee matchmaking platform using embeddings + ranking logic to generate high-quality matches and automate coordination.",
    description: `
      A matchmaking system that connects medical mentors and mentees
      based on specialties, goals, and fit signals. Designed for fast onboarding,
      intelligent matching, and automated coordination workflows.
    `,
    technologies: [
      "GPT-4",
      "LangChain/LangGraph",
      "FastAPI",
      "Supabase/PostgreSQL",
      "Vector Search",
    ],
    features: [
      "AI-driven match recommendations",
      "Structured mentor/mentee profiles",
      "Automated coordination workflows (notifications, follow-ups)",
    ],
    functionalities: [
      "Profile ingestion → clean + normalize",
      "Embedding generation for similarity search",
      "Ranking layer (rules + AI reasoning)",
      "Match results + admin review hooks",
    ],
  },

  influencerIntel: {
    title: "AI-Powered Influencer & Market Intelligence System",
    category: "AI Agents",
    image: "./assets/images/project-influencer-ai.jpg",
    overview:
      "Influencer + competitor intelligence engine that consolidates signals into structured datasets and generates GPT-powered insights for marketing teams.",
    description: `
      An AI-driven analytics platform that aggregates influencer campaigns,
      analyzes performance metrics, and generates GPT-powered insights for
      attribution, reporting, and competitor tracking.
    `,
    technologies: ["Python", "GPT-4", "BigQuery", "LangChain", "APIs/Webhooks"],
    features: [
      "Influencer attribution modeling",
      "Automated campaign tracking + reporting",
      "Insight generation (what worked, why, what to test next)",
    ],
    functionalities: [
      "Ingest campaign schedules + performance metrics",
      "Join/aggregate data into analytics tables",
      "Run AI summaries + hypothesis generation",
      "Produce weekly/monthly reports + insight briefs",
    ],
  },

  dentalCRM: {
    title: "Dental CRM Automation (HIPAA Compliance)",
    category: "AI Agents",
    image: "./assets/images/project-dental-crm.jpg",
    overview:
      "HIPAA-conscious CRM automation agent to summarize calls, update records, and generate patient follow-ups while keeping access controlled and auditable.",
    description: `
      A CRM automation agent that assists dental clinics by automating follow-ups,
      appointment workflows, and call summaries. Integrated with call and CRM data
      sources and built with privacy-first patterns for regulated environments.
    `,
    technologies: [
      "LangGraph",
      "GPT-4",
      "Zapier/n8n",
      "CallRail API",
      "Google BigQuery",
    ],
    features: [
      "AI agent workflows for clinic operations",
      "Automated CRM record updates",
      "Email/SMS follow-up generation + templating",
    ],
    functionalities: [
      "Pull call + lead events from CallRail/CRM",
      "Generate structured summary + disposition",
      "Write back to CRM fields + trigger follow-ups",
      "Analytics storage for audit + reporting",
    ],
  },

  /* ==============================
     💻 WEB DEVELOPMENT
  =============================== */

  basketballBot: {
    title: "Basketball Performance Analysis Chatbot",
    category: "Web Development",
    image: "./assets/images/project-basketball.jpg",
    overview:
      "LangGraph-powered chatbot that answers performance questions over a stats database and returns structured insights and visual-ready outputs.",
    description: `
      A LangGraph-based AI chatbot that connects with a basketball performance
      database to analyze player stats, generate reports, and respond to
      natural language queries with structured insights.
    `,
    technologies: ["LangGraph", "FastAPI", "React", "PostgreSQL"],
    features: [
      "Database-integrated Q&A",
      "Advanced stat filtering + comparisons",
      "Report-style responses for coaches/analysts",
    ],
    functionalities: [
      "Natural language query → SQL/Tool calls",
      "Caching + response formatting",
      "Auth-ready API endpoints",
      "Exportable summaries for reporting",
    ],
  },

  /* ==============================
     📸 COMPUTER VISION
  =============================== */

  mirrorVision: {
    title: "MirrorVision – iOS Pose Recognition App",
    category: "Computer Vision",
    image: "./assets/images/project-mirrorvision.jpg",
    overview:
      "On-device pose recognition app for form analysis and feedback with privacy-first inference and real-time performance constraints.",
    description: `
      An AI-powered fitness coaching app that uses real-time pose recognition
      to analyze user form and provide feedback. Built with on-device inference
      for low latency and privacy.
    `,
    technologies: ["CoreML", "Swift", "TensorFlow", "Pose Estimation"],
    features: [
      "Real-time pose tracking + feedback",
      "On-device inference for privacy",
      "iOS-optimized UI/UX",
    ],
    functionalities: [
      "Pose keypoints extraction per frame",
      "Rule-based scoring + feedback prompts",
      "Performance optimization for smooth FPS",
      "Session summaries + progression tracking",
    ],
    videoUrl: "https://www.loom.com/share/YOUR-MIRRORVISION-LOOM-LINK",
  },

  cfbSorting: {
    title: "LEGO Sorting System for CFB",
    category: "Computer Vision",
    image: "./assets/images/project-cfb.jpg",
    overview:
      "Real-time industrial sorting pipeline using YOLO + DeepStream on Jetson with PLC integration for automated physical actuation.",
    description: `
      Real-time LEGO sorting system using YOLOv8 and DeepStream,
      deployed on NVIDIA Jetson Orin NX with PLC integration for industrial use.
    `,
    technologies: [
      "YOLOv8",
      "DeepStream",
      "TensorRT",
      "Jetson Orin NX",
      "OpenCV",
    ],
    features: [
      "Real-time detection + classification",
      "Edge-native deployment (low latency)",
      "PLC-controlled sorting integration",
    ],
    functionalities: [
      "Camera ingest → pre-processing",
      "DeepStream pipeline with TensorRT engine",
      "Tracking + class decision logic",
      "PLC trigger for sorting lanes",
    ],
    videoUrl: "https://www.loom.com/share/YOUR-CFB-LOOM-LINK",
  },

  anglerVision: {
    title: "AnglerVision – Sports Fishing AI System",
    category: "Computer Vision",
    image: "./assets/images/project-anglervision.jpg",
    overview:
      "Fish detection + classification optimized for underwater footage and edge inference, designed for sports fishing analytics and scalable deployments.",
    description: `
      Real-time fish detection and classification system for sports fishing.
      Optimized for underwater cameras and Jetson-based edge devices.
    `,
    technologies: ["YOLOv8", "DeepStream", "OpenCV", "Jetson Orin Nano"],
    features: [
      "Species-level fish detection",
      "Edge-optimized inference pipeline",
      "Designed for real-world underwater conditions",
    ],
    functionalities: [
      "Frame ingest + stabilization/denoise options",
      "Detection + class confidence thresholds",
      "Clip/segment extraction for highlights",
      "Export logs for analytics dashboards",
    ],
  },
};
// Open Portfolio if URL has #portfolio
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash === "#portfolio") {
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    pages.forEach((p) => p.classList.remove("active"));
    navLinks.forEach((b) => b.classList.remove("active"));

    // Portfolio is the 4th tab in your navbar (About, Resume, Skills, Portfolio)
    pages.forEach((p) => {
      if (p.dataset.page === "portfolio") p.classList.add("active");
    });
    navLinks.forEach((btn) => {
      if (btn.textContent.trim().toLowerCase() === "portfolio")
        btn.classList.add("active");
    });

    // Optional: scroll to the portfolio section nicely
    document
      .querySelector('[data-page="portfolio"]')
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
