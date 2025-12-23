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
    Built a production-ready call intelligence pipeline that automatically classifies and summarizes inbound calls and turns them into searchable analytics dashboards for multi-company reporting. The system runs daily using Amazon EventBridge → AWS Lambda to fetch call metadata from the CallRail API (call ID, time, source, company/customer details). Each call is queued into Amazon SQS to enable asynchronous, scalable processing and to safely handle CallRail rate limits using retry logic + visibility timeouts.
<br>
<br>  For each queued call, I generate the audio transcript using Deepgram, normalize it into a structured input, and send it to OpenAI GPT-4 for summary generation and classification into predefined service/intent tags (with rationale). The pipeline also includes de-duplication checks to avoid reprocessing calls that were already tagged. Those AI-generated tags are then written back into the corresponding CallRail call record, creating a closed-loop workflow where the CRM stays updated automatically.
<br>
  <br>Finally, I persist the complete processed output (metadata, transcript, summary, tags, rationale) into Google BigQuery for auditing and trend analysis, and connect BigQuery to Looker Studio to deliver company-specific dashboards showing call volume, lead quality, service demand, and campaign/source performance over time.
`,

    technologies: [
      "CallRail API",
      "Deepgram (Transcription)",
      "OpenAI GPT-4",
      "AWS Lambda",
      "Amazon EventBridge",
      "Amazon SQS",
      "Amazon API Gateway",
      "Google BigQuery",
      "Looker Studio",
      "Python (Boto3)",
    ],
    features: [
      "Automatic transcription + diarization-ready pipeline",
      "Intent classification and lead-quality tagging",
      "Call summaries + key moments extraction",
      "Dashboards for campaign/call-source performance",
    ],
    functionalities: [
      "Scheduled CallRail ingestion: Daily EventBridge → Lambda pulls call metadata + IDs and prepares calls for processing.",
      "Async processing + rate-limit safety: Calls are queued in SQS to decouple fetch/process, with retry + visibility timeout handling throttling cleanly.",
      "Transcription pipeline: Generates and normalizes audio transcripts via Deepgram (diarization-ready structure).",
      "LLM classification + summaries: GPT-4 produces structured intent/service tags, lead-quality labeling, and call summaries (with rationale/key points).",
      "Closed-loop analytics: Writes tags back to CallRail, stores full outputs in BigQuery, and powers Looker Studio dashboards for campaign/call-source trends.",
    ],
    videoUrl:
      "https://drive.google.com/file/d/1U7Et5udUBDqohsMUByUN1wAW_muxNTIM/preview",
  },

  adClassification: {
    title: "AI Advertisement Content Classification System",
    category: "AI & Automations",
    image: "./assets/images/project-ad-classification.jpg",
    overview:
      "System that classifies ad creatives into standardized content categories to enable creative testing, reporting automation, and performance insights.",

    description: `
  Built a multi-modal advertisement content classification system that distinguishes storytelling-based ad segments from live event coverage by combining video understanding with audio/transcript intelligence. I started by temporally annotating video segments and structuring a training/validation dataset for both frame-level and sequence-level learning.
<br>
<br>
  On the vision side, I trained a YOLOv8-based classifier to label frames as storytelling vs coverage, then extended it to detect stadium-view sequences for stronger spatio-temporal signals across a full clip. In parallel, I transcribed audio using Whisper and used an LLM with prompt-engineering to classify transcript narrative style into the same categories. I aggregated visual ratios (e.g., % storytelling frames) and audio predictions into a single feature set and trained a lightweight meta-classifier (scikit-learn) to produce a final video-level decision.
<br><br>
  I packaged the end-to-end inference pipeline behind APIs and delivered a React frontend where users can upload videos/images and see results in real time. The system was deployed serverlessly on AWS Lambda with S3 storage and API Gateway, optimized for Lambda constraints via quantization and container-based deployment (Docker images) to keep performance scalable and cost-efficient.
`,
    technologies: [
      "Python",
      "YOLOv8",
      "Whisper",
      "OpenAI (LLM)",
      "scikit-learn",
      "OpenCV",
      "FFmpeg",
      "Pandas",
      "React",
      "AWS Lambda",
      "AWS S3",
      "Amazon API Gateway",
      "Docker",
    ],
    features: [
      "Temporal annotation + dataset structuring for video segments",
      "Frame + sequence classification (storytelling vs coverage)",
      "Whisper transcription + LLM transcript classification",
      "Multi-modal feature aggregation + meta ML video-level decision",
      "React upload UI + serverless inference (S3 + API Gateway + Lambda)",
    ],
    functionalities: [
      "Upload creative (image/video/copy) + metadata",
      "Generate categories/tags (hooks, offer type, CTA, audience, etc.)",
      "Store outputs for reporting + A/B test comparisons",
      "Expose API for downstream BI / workflow automation",
    ],
    // ✅ Add project images carousel
    images: [
      "./assets/images/AI_Survey_Platform_Case_Study/Slide1.jpg",
      "./assets/images/AI_Survey_Platform_Case_Study/Slide2.jpg",
      "./assets/images/AI_Survey_Platform_Case_Study/Slide3.jpg",
      "./assets/images/AI_Survey_Platform_Case_Study/Slide4.jpg",
      "./assets/images/AI_Survey_Platform_Case_Study/Slide5.jpg",
      "./assets/images/AI_Survey_Platform_Case_Study/Slide6.jpg",
    ],
  },

  surveyPlatform: {
    title: "AI-Powered Survey Platform for Personalized Customer Feedback",
    category: "AI & Automations",
    image: "./assets/images/project-survey-platform.jpg",
    overview:
      "Adaptive survey platform that generates personalized questions with AI and turns responses into actionable sentiment + insight dashboards.",
    description: `
  Built an AI-powered survey platform that personalizes questions per customer to make feedback collection faster, more relevant, and easier to complete. Instead of sending long static forms, the system dynamically selects and adapts questions using customer profile, journey context, and past feedback so each passenger only sees what matters.
<br>
<br>
  I delivered a manager-facing dashboard to create/publish surveys, monitor completions in real time, and review results with both the customer’s original wording and the platform’s interpreted response for clearer reporting. After the initial release, I expanded the product with save-and-resume, smarter skip logic based on earlier answers, custom greetings (name-based), support for additional languages beyond English/Spanish, and multiple input modes (type, click, or speak).
<br>
<br>
  To meet operational and privacy requirements, I migrated the solution from cloud-only to a self-hosted/on-prem deployment, added new customer data fields, introduced branded email invitations, and launched phone-based surveys where an AI voice assistant calls customers and captures responses end-to-end—ready for trade-show demos and ongoing production use.
`,
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Next.js",
      "MongoDB",
      "PostgreSQL",
      "Airtable",
      "OpenAI GPT-4",
      "Embeddings",
      "Vercel",
      "Render",
      "AWS Lambda",
    ],
    features: [
      "Adaptive questions (branching + skip logic)",
      "Save & resume surveys",
      "Web + email + voice delivery",
      "Live completion + response dashboard",
      "GPT-4 sentiment/topics + theme clustering",
    ],
    functionalities: [
      "Generate next question based on prior answers",
      "Score sentiment and extract themes/topics",
      "Store responses in analytics warehouse",
      "Dashboard views for cohorts/time windows",
    ],
    // ✅ Add project images carousel
    images: [
      "./assets/images/AI_Survey_Platform_Case_Study/Slide1.jpg",
      "./assets/images/AI_Survey_Platform_Case_Study/Slide2.jpg",
      "./assets/images/AI_Survey_Platform_Case_Study/Slide3.jpg",
      "./assets/images/AI_Survey_Platform_Case_Study/Slide4.jpg",
      "./assets/images/AI_Survey_Platform_Case_Study/Slide5.jpg",
      "./assets/images/AI_Survey_Platform_Case_Study/Slide6.jpg",
    ],
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
  Built a production-ready backend for a private medical mentorship network that matches students with the most relevant mentors in seconds instead of weeks. The system replaces manual spreadsheet-based matching with an AI-driven recommendation engine powered by semantic vector search.
<br>
<br>
  I designed a serverless AWS architecture using Lambda for compute, DynamoDB for profile storage, API Gateway for versioned REST endpoints (/addUser, /getUser, /recommend), and EventBridge to run scheduled refresh jobs. For matching, I generated OpenAI embeddings from user-stated goals, challenges, and strengths, stored vectors in Pinecone (namespaces per cohort/segment), and combined semantic similarity with rule-based weighting (specialty, study year, availability) to improve relevance. Recommendations are returned as top matches with explainable rationale by storing the top contributing attributes.
<br><br>
  The platform was shipped in 4 weeks (POC + production), achieved sub-second matching latency (~590ms avg at MVP scale), and kept infrastructure costs low using pay-per-use serverless services—while remaining extensible for future frontend, chat, and analytics modules without re-architecture.
`,
    technologies: [
      "Python",
      "GPT-4",
      "LangChain/LangGraph",
      "FastAPI",
      "Supabase/PostgreSQL",
      "Vector Search",
      "AWS Lambda",
      "Amazon DynamoDB",
      "Amazon EventBridge",
      "Amazon API Gateway",
      "Pinecone",
      "OpenAI Embeddings",
      "Terraform",
      "Node.js",
    ],
    features: [
      "Profile ingestion APIs (add/get users) with DynamoDB storage",
      "Vector-based matching using OpenAI embeddings + Pinecone search",
      "Domain-weighted ranking (specialty, year, availability) for relevance",
      "Scheduled auto-refresh of recommendations (EventBridge cron)",
      "Explainable results (stored attribute contributions + rationale)",
    ],
    functionalities: [
      "Profile ingestion → clean + normalize",
      "Embedding generation for similarity search",
      "Ranking layer (rules + AI reasoning)",
      "Match results + admin review hooks",
    ],
    // ✅ Add project images carousel
    images: [
      "./assets/images/Basketball_Performance_Chatbot/Slide1.jpg",
      "./assets/images/Basketball_Performance_Chatbot/Slide2.png",
      "./assets/images/Basketball_Performance_Chatbot/Slide3.png",
      "./assets/images/Basketball_Performance_Chatbot/Slide4.png",
      "./assets/images/Basketball_Performance_Chatbot/Slide5.png",
    ],
  },

  influencerIntel: {
    title: "AI-Powered Influencer & Market Intelligence System",
    category: "AI Agents",
    image: "./assets/images/project-influencer-ai.jpg",
    overview:
      "Influencer + competitor intelligence engine that consolidates signals into structured datasets and generates GPT-powered insights for marketing teams.",
    description: `
  Built an AI-powered influencer and market intelligence system that automates weekly and monthly content research for media strategy teams. Instead of manually tracking multiple platforms and sources, the solution runs as three coordinated engines: influencer activity analysis, market news briefing, and keyword opportunity tracking. Each engine collects relevant data on a schedule (daily updates, weekly summaries, monthly rollups), then converts it into structured insights that are immediately usable for planning.
<br><br>
  The system aggregates influencer posts and engagement patterns, summarizes market/industry articles into weekly one-page briefs, and highlights trending keywords/hashtags with growth potential. I also extended the platform to ingest expert insights via RSS feeds and Gmail newsletters, ensuring important signals aren’t missed. To improve scanability, the reports include visual summaries such as word clouds and topic highlights, plus reliability features like error handling and alerts so reports are consistently delivered.
<br><br>
  All outputs are delivered in Google Workspace Google Sheets for sortable/filterable datasets and Google Docs for decision-ready briefs so stakeholders can review insights without learning new tools, enabling faster, more consistent, evidence-based content planning.
`,
    technologies: [
      "Python",
      "GPT-4",
      "BigQuery",
      "LangChain",
      "APIs/Webhooks",
      "OpenAI (LLMs)",
      "Google Sheets API",
      "Google Docs API",
      "Gmail API",
      "RSS",
      "Cron Scheduling",
    ],
    features: [
      "Influencer post/activity tracking with monthly rollup reports",
      "Weekly market news briefs with LLM summarization",
      "Trending keyword/hashtag tracking with growth signals",
      "RSS + Gmail newsletter ingestion for expert insights",
      "Google Sheets/Docs delivery with scheduling + alerts",
    ],

    // ✅ Add project images carousel
    images: [
      "./assets/images/Basketball_Performance_Chatbot/Slide1.jpg",
      "./assets/images/Basketball_Performance_Chatbot/Slide2.jpg",
      "./assets/images/Basketball_Performance_Chatbot/Slide3.jpg",
      "./assets/images/Basketball_Performance_Chatbot/Slide4.jpg",
      "./assets/images/Basketball_Performance_Chatbot/Slide5.jpg",
      "./assets/images/Basketball_Performance_Chatbot/Slide6.jpg",
    ],
  },

  dentalCRM: {
    title: "Dental CRM Automation (HIPAA Compliance)",
    category: "AI Agents",
    image: "./assets/images/project-dental-crm.jpg",
    overview:
      "HIPAA-conscious CRM automation agent to summarize calls, update records, and generate patient follow-ups while keeping access controlled and auditable.",
    description: `
  Re-engineered an existing AI call classification platform to meet HIPAA compliance requirements for enterprise healthcare adoption. The original system relied on non-HIPAA-eligible AI services, creating compliance risk for patient-related call processing and limiting the client’s ability to sell into regulated healthcare markets.
<br><br>
  I migrated all LLM processing into a HIPAA-eligible environment using AWS Bedrock and re-deployed the platform inside a private, isolated cloud setup with strict access controls. The infrastructure was hardened using role-based permissions (IAM), encryption controls (KMS), and network isolation (VPC) to minimize exposure of sensitive data. To support compliance validation, I implemented audit-ready monitoring and traceability through centralized logging and activity tracking (CloudWatch + CloudTrail), providing full visibility into system and user actions.
<br><br>
  The result was a secure, compliant, and scalable foundation that maintained classification accuracy and performance while enabling the client to confidently pursue enterprise healthcare partnerships under an AWS BAA-backed compliance posture.
`,
    technologies: [
      "Python",
      "LangGraph",
      "GPT-4",
      "Zapier/n8n",
      "AWS Bedrock",
      "AWS Lambda",
      "Amazon S3",
      "Amazon API Gateway",
      "AWS IAM",
      "AWS KMS",
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS VPC",

      "CallRail API",
      "Google BigQuery",
    ],
    features: [
      "HIPAA-eligible LLM processing via AWS Bedrock",
      "Private deployment with RBAC + network isolation (VPC/IAM)",
      "Encryption at rest/in transit using KMS-managed controls",
      "Centralized audit logging + monitoring (CloudTrail/CloudWatch)",
      "Scalable architecture ready for enterprise healthcare growth",
    ],

    // ✅ Add project images carousel
    images: [
      "./assets/images/AnglerVision_Portfolio/Slide1.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide2.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide3.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide4.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide5.jpg",
    ],
  },

  /* ==============================
     💻 WEB DEVELOPMENT
  =============================== */

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
  Built a LangGraph-powered basketball performance analysis chatbot that answers natural-language questions with real metrics, real-time stats, and coaching-grade explanations. The system uses a guardrailed agent workflow: every query first passes through NeMo Guardrails for safety/relevance, then a LangGraph router sends it to the best processing path based on intent.
<br> <br>
  For player-specific metric questions, the agent refines ambiguous terms (via Tavily when needed), generates a pseudo-algorithm + required fields, pulls shot-level data from MinIO, and uses a code-interpreter style Amazon Bedrock Agent to compute results (averages, ranges, comparisons, best/worst segments). For aggregate performance questions, it analyzes streaming stats from Kafka (with KSQLdb/Pandas pipelines). For broader “why/how” basketball questions, it runs a RAG flow using Milvus to retrieve contextual knowledge before GPT-4o synthesizes a concise, actionable answer.
<br><br>
  The platform also supports session-aware interactions (PostgreSQL) and offers an optional debug view so coaches/athletes can inspect intermediate steps and tool outputs.
`,
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "OpenAI GPT-4o",
      "Amazon Bedrock",
      "NeMo Guardrails",
      "PostgreSQL",
      "MinIO",
      "Kafka",
      "Milvus",
      "Pandas",
      "boto3",
      "KSQLdb",
      "Tavily",
    ],
    features: [
      "Intent routing across Metrics / Statistics / RAG paths",
      "Shot-metric analysis from MinIO using Bedrock code interpreter",
      "Real-time aggregated stats analysis from Kafka streams",
      "Semantic RAG via Milvus for basketball knowledge queries",
      "Guardrails + debug tracing for safe, inspectable outputs",
    ],

    videoUrl:
      "https://drive.google.com/file/d/1NtNi1Eeemms35bNUqCHdGyMc7LbPV5Oq/preview",
    // (you said exclude basketball from carousel earlier, so remove images if you want)
  },

  // ✅ NEW PROJECT #1 (Web Development)
  plumberseoVisibility: {
    title: "PlumberSEO Visibility Analyzer",
    category: "Web Development",
    image: "./assets/images/project-plumberseo.jpg",
    overview:
      "Self-serve AI visibility reporting platform that checks how local service businesses appear across GPT/Gemini/Claude/Perplexity/Grok, with scheduling via n8n and report delivery to Google Sheets.",
    description: `
  Built a full AI visibility reporting platform for PlumberSEO that shows local service businesses (plumbers/HVAC/electricians/restoration) how they appear across major AI assistants. The system provides both a self-serve public site (visibilityreport.ai) and an admin dashboard for managing hundreds of clients, queries, and automation settings.
<br><br>
  Architected the backend as two AWS Lambda microservices (Flask + DynamoDB): one service generates reports and scoring by calling multiple AI platforms (GPT, Gemini, Claude, Perplexity, Grok) with predefined or client-specific queries, then extracts “visible/not visible”, mention rank, and an overall visibility score. The second service powers admin controls (client CRUD, query sets, scheduler flags) and exposes endpoints to update automation settings.
<br><br>
  Automated scheduled reporting with n8n running on AWS EC2: a scheduler triggers report generation, formats results, writes them into a per-client Google Sheet (new tab per run for history), and stores the Sheet link back in DynamoDB so it’s accessible from the admin UI. Added a 15-minute OTP email verification step to prevent abuse and ensure authentic report requests.
`,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "Flask",
      "Python",
      "AWS Lambda",
      "Amazon API Gateway",
      "Amazon DynamoDB",
      "AWS Amplify",
      "n8n",
      "AWS EC2",
      "Google Sheets API",
      "OpenAI API",
      "Gemini API",
      "Claude API",
      "Perplexity API",
      "Grok API",
    ],
    features: [
      "Self-serve AI visibility reports across 5 LLM platforms",
      "Visibility + rank extraction with overall scoring per query/client",
      "Admin dashboard for client + query management (CRUD + customization)",
      "Scheduled automation via n8n with Google Sheets (new tab per run)",
      "OTP email verification + per-client scheduler toggle (scheduler_enabled)",
    ],

    images: [
      "./assets/images/AI_Visibility_Analyzer_for_PlumberSEO/Slide1.jpg",
      "./assets/images/AI_Visibility_Analyzer_for_PlumberSEO/Slide2.jpg",
      "./assets/images/AI_Visibility_Analyzer_for_PlumberSEO/Slide3.jpg",
      "./assets/images/AI_Visibility_Analyzer_for_PlumberSEO/Slide4.jpg",
      "./assets/images/AI_Visibility_Analyzer_for_PlumberSEO/Slide5.jpg",
      "./assets/images/AI_Visibility_Analyzer_for_PlumberSEO/Slide6.jpg",
    ],
    links: {
      "Live Site": "https://visibilityreport.ai",
    },
  },

  // ✅ NEW PROJECT #2 (Web Development)
  facialRecognitionApp: {
    title: "AWS-Powered Facial Recognition Web App",
    category: "Web Development",
    image: "assets/images/AWS_Facial_Recognition_Case_Study/thumbnail.jpg",
    overview:
      "Cloud-native face registration + verification web app using AWS Rekognition with a serverless Lambda backend and DynamoDB for metadata.",
    description: `
  Built a cloud-native facial recognition web application for fast user onboarding and identity verification using a fully serverless AWS architecture. The frontend was developed in React with a responsive UI and real-time camera capture via WebRTC, allowing users to register or verify their identity directly from desktop or mobile browsers. The UI communicates with backend REST endpoints to upload images and receive verification results instantly.
<br><br>
  On the backend, I implemented AWS Lambda functions (Python/Node.js) to handle request validation, image encoding, and orchestration of the recognition workflow. Amazon Rekognition powers the core face engine: IndexFaces is used for registration and feature indexing, while SearchFacesByImage performs one-to-many matching and returns similarity scores for verification. I designed a DynamoDB schema to store face metadata (FaceId, user identifiers, timestamps, Rekognition attributes) optimized for scalable lookups and clean identity management.
<br><br>
  For production readiness, I added monitoring and observability via CloudWatch (Lambda + Rekognition usage), enforced secure access through IAM policies, and deployed the web app with AWS Amplify CI/CD for repeatable releases and rollback-safe updates. The result is a low-latency, cost-efficient identity verification foundation that can extend into attendance, access control, or API-driven enterprise integrations.
`,
    technologies: [
      "React",
      "Python",
      "Node.js",
      "WebRTC",
      "Tailwind CSS",
      "AWS Lambda",
      "Amazon Rekognition",
      "DynamoDB",
      "AWS Amplify",
      "CloudWatch",
      "IAM",
    ],
    features: [
      "WebRTC-based camera capture + image upload flow",
      "Face registration (IndexFaces) with metadata storage in DynamoDB",
      "Face verification (SearchFacesByImage) with similarity scoring",
      "Serverless processing via Lambda with JSON response normalization",
      "Monitoring + secure deployment (CloudWatch, IAM, Amplify CI/CD)",
    ],

    images: [
      "./assets/images/AWS_Facial_Recognition_Case_Study/Slide1.jpg",
      "./assets/images/AWS_Facial_Recognition_Case_Study/Slide2.jpg",
      "./assets/images/AWS_Facial_Recognition_Case_Study/Slide3.jpg",

      "./assets/images/AWS_Facial_Recognition_Case_Study/Slide4.jpg",
    ],
  },

  /* ==============================
     📸 COMPUTER VISION  =============================== */

  mirrorVision: {
    title: "MirrorVision – iOS Pose Recognition App",
    category: "Computer Vision",
    image: "./assets/images/project-mirrorvision.jpg",
    overview:
      "On-device pose recognition app for form analysis and feedback with privacy-first inference and real-time performance constraints.",
    description: `
  Led a full rebuild of the Mirror Vision iOS golf coaching application to improve UX, eliminate streaming lag, and introduce advanced AI and Pro features. The app connects an iPhone (camera) with an iPad (display) to deliver real-time swing playback and analysis, so the redevelopment focused heavily on stability, low latency, and an intuitive coaching workflow.
<br><br>
  I redesigned the UI/UX in Figma and implemented a cleaner iOS experience with landscape support, guiding grid overlays, replay tools, drawing controls, and gesture-based actions (save/discard swings). For device connectivity and real-time streaming, I improved pairing and reconnection reliability using Bluetooth/Wi-Fi flows and Apple’s Multipeer Connectivity framework to keep sessions stable even under high frame-rate recording.
<br><br>
  On the AI side, I validated model approaches with YOLOv8 keypoints + LSTM during early experimentation, then trained a swing detection model using CreateML, converted it to CoreML, and integrated it with Apple Vision for on-device, real-time swing event detection. I also delivered multi-camera recording for Pro users, including synchronized playback and side-by-side comparisons. Finally, I built backend support for authentication, subscriptions, payments, and video syncing with secure data handling, and shipped the rebuilt app through TestFlight to a successful App Store launch.
`,
    technologies: [
      "Swift",
      "SwiftUI",
      "iOS",
      "Figma",
      "CoreML",
      "CreateML",
      "Apple Vision",
      "Multipeer Connectivity",
      "Bluetooth",
      "Wi-Fi",
      "YOLOv8",
      "LSTM",
      "Backend APIs",
      "Cloud Storage",
      "TestFlight",
      "Pose Estimation",
      "App Store Deployment",
    ],
    features: [
      "iPhone ↔ iPad pairing with low-latency streaming + auto-reconnect",
      "Clean coaching UI (grid overlays, landscape mode, replay + drawing tools)",
      "On-device swing detection using CoreML/CreateML + Vision",
      "Pro multi-camera capture with synced playback + side-by-side comparison",
      "Subscriptions + cloud video syncing backed by a secure backend",
    ],
    links: {
      "Live Site":
        "https://apps.apple.com/nl/app/mirror-vision-golf-coaching/id1381051713?l=en-GB",
    },
    videoUrl:
      "https://drive.google.com/file/d/1ZIGxR56gtEnKb2381-JeIYsjNC5g0aO5/preview",
  },

  cfbSorting: {
    title: "LEGO Sorting System for CFB",
    category: "Computer Vision",
    image: "./assets/images/project-cfb.jpg",
    overview:
      "Real-time industrial sorting pipeline using YOLO + DeepStream on Jetson with PLC integration for automated physical actuation.",
    description: `
  Built Robert V1 a production-grade, real-time LEGO sorting prototype for Canada First Bricks that detects, classifies, and routes parts entirely on the edge using NVIDIA Jetson Orin NX. The goal was to replace expensive, error-prone manual sorting with an embedded system capable of identifying hundreds of visually similar LEGO parts at industrial throughput.
<br><br>
  The vision stack uses a custom YOLOv8 detector to localize parts in top-down camera frames, followed by a dedicated YOLOv8-based classifier that identifies exact LEGO part numbers across 300+ types. A separate deep learning color classifier improves robustness beyond classical OpenCV methods. The pipeline runs in a multi-model DeepStream + GStreamer architecture with TensorRT acceleration to maintain super real-time performance (<100ms end-to-end latency) while sustaining ~3600 parts/hour.
<br><br>
  To drive physical sorting, I implemented lightweight tracking and “trigger-point” decision freezing so each part is classified once and routed deterministically. Commands are sent to an industrial PLC via Modbus RTU over serial, enabling reliable diverter control with >99.9% command success. I also built an automated dataset expansion workflow that reduces manual labeling by leveraging upstream detection outputs to accelerate onboarding new LEGO part types.
`,
    technologies: [
      "Python",
      "C++",
      "YOLOv8",
      "PyTorch",
      "TensorRT",
      "NVIDIA DeepStream",
      "GStreamer",
      "OpenCV",
      "NVIDIA Jetson Orin NX",
      "Raspberry Pi HQ Camera",
      "Modbus RTU",
      "PLC / GPIO",
      "Bash",
    ],
    features: [
      "Real-time detection + classification of 300+ LEGO part types on Jetson",
      "TensorRT-accelerated DeepStream pipeline (multi-model, low latency)",
      "Deep learning color classification for consistent variant handling",
      "Object tracking + trigger-point decision freezing for deterministic routing",
    ],

    // ✅ Add project images carousel
    images: [
      "./assets/images/AnglerVision_Portfolio/thumbnail.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide2.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide3.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide4.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide5.jpg",
    ],
  },

  anglerVision: {
    title: "AnglerVision – Sports Fishing AI System",
    category: "Computer Vision",
    image: "./assets/images/project-anglervision.jpg",
    overview:
      "Fish detection + classification optimized for underwater footage and edge inference, designed for sports fishing analytics and scalable deployments.",
    description: `
  Improved and stabilized AnglerVision’s Aqua edge application for sports fishing by reducing false positives, rebuilding the video pipeline for multi-camera scalability, and eliminating crash-causing memory leaks. The existing model frequently misclassified non-fish motion/disturbances, the GStreamer pipeline was rigid and hard to extend, camera switching/recording triggered memory leaks, and the default Qt playback layer was unreliable. The system also lacked structured storage for detection events, limiting analysis and iteration.
<br><br>
  I upgraded the vision model to YOLOv8 and introduced dredge-specific classes plus tracking to cut false positives by ~70%. On the media side, I redesigned the GStreamer architecture to dynamically handle multiple RTSP streams, enabling seamless multi-camera support and robust recording without brittle, one-off pipelines. I overhauled memory management to prevent leaks during camera switching and long-running sessions, and implemented a custom GStreamer-based media player to replace unstable playback behavior.
<br><br>
  Finally, I integrated a lightweight SQLite layer to log every detection event for downstream analytics and model iteration. The result is a low-latency, real-time, edge-deployed system on NVIDIA AGX Orin with significantly improved accuracy, stability, and scalability.
`,
    technologies: [
      "Python",
      "C++",
      "YOLOv8",
      "TensorRT",
      "NVIDIA DeepStream",
      "GStreamer",
      "Qt",
      "SQLite",
      "RTSP",
      "NVIDIA AGX Orin",
    ],
    features: [
      "YOLOv8 detection with tracking + dredge-specific classes",
      "TensorRT/DeepStream optimized inference on NVIDIA AGX Orin",
      "Dynamic GStreamer pipeline for multi-RTSP, multi-camera scaling",
      "Crash-free camera switching + recording via improved memory handling",
      "SQLite logging for detection events and future analytics",
    ],

    // ✅ Add project images carousel
    images: [
      "./assets/images/AnglerVision_Portfolio/Slide8.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide2.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide3.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide4.jpg",
      "./assets/images/AnglerVision_Portfolio/Slide5.jpg",
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
